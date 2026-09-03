const storageKey = 'focuslist-tasks-v1';

const defaultTasks = [
  { id: crypto.randomUUID(), title: 'Revisar funções em JavaScript', priority: 'alta', done: false, createdAt: new Date().toISOString() },
  { id: crypto.randomUUID(), title: 'Praticar manipulação do DOM', priority: 'normal', done: false, createdAt: new Date().toISOString() },
  { id: crypto.randomUUID(), title: 'Publicar exercício no GitHub', priority: 'baixa', done: true, createdAt: new Date().toISOString() }
];

let tasks = loadTasks();
let currentFilter = 'todas';

const form = document.querySelector('#task-form');
const titleInput = document.querySelector('#task-title');
const priorityInput = document.querySelector('#task-priority');
const taskError = document.querySelector('#task-error');
const taskList = document.querySelector('#task-list');
const taskTemplate = document.querySelector('#task-template');
const emptyState = document.querySelector('#empty-state');
const filters = document.querySelectorAll('.filter');
const clearDoneButton = document.querySelector('#clear-done');
const resetButton = document.querySelector('#reset-app');

function loadTasks() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return [...defaultTasks];

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [...defaultTasks];
  } catch {
    return [...defaultTasks];
  }
}

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(dateString));
}

function getVisibleTasks() {
  if (currentFilter === 'pendentes') return tasks.filter(task => !task.done);
  if (currentFilter === 'concluidas') return tasks.filter(task => task.done);
  return tasks;
}

function updateStats() {
  const done = tasks.filter(task => task.done).length;
  const pending = tasks.length - done;

  document.querySelector('#stat-total').textContent = tasks.length;
  document.querySelector('#stat-pending').textContent = pending;
  document.querySelector('#stat-done').textContent = done;
}

function renderTasks() {
  taskList.innerHTML = '';
  const visibleTasks = getVisibleTasks();

  visibleTasks.forEach(task => {
    const fragment = taskTemplate.content.cloneNode(true);
    const card = fragment.querySelector('.task-card');
    const title = fragment.querySelector('h2');
    const priority = fragment.querySelector('.priority');
    const time = fragment.querySelector('time');
    const checkButton = fragment.querySelector('.check');
    const deleteButton = fragment.querySelector('.delete');

    card.dataset.id = task.id;
    card.classList.toggle('done', task.done);
    title.textContent = task.title;
    priority.textContent = task.priority;
    priority.classList.add(task.priority);
    time.textContent = formatDate(task.createdAt);
    time.dateTime = task.createdAt;

    checkButton.addEventListener('click', () => toggleTask(task.id));
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    taskList.append(fragment);
  });

  emptyState.hidden = visibleTasks.length > 0;
  updateStats();
}

function addTask(title, priority) {
  tasks.unshift({
    id: crypto.randomUUID(),
    title,
    priority,
    done: false,
    createdAt: new Date().toISOString()
  });

  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function validateTitle(value) {
  const cleanValue = value.trim();

  if (!cleanValue) return 'Digite uma tarefa antes de adicionar.';
  if (cleanValue.length < 3) return 'Use pelo menos 3 caracteres.';

  return '';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const error = validateTitle(titleInput.value);
  taskError.textContent = error;

  if (error) {
    titleInput.focus();
    return;
  }

  addTask(titleInput.value.trim(), priorityInput.value);
  form.reset();
  priorityInput.value = 'normal';
  titleInput.focus();
});

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

clearDoneButton.addEventListener('click', () => {
  tasks = tasks.filter(task => !task.done);
  saveTasks();
  renderTasks();
});

resetButton.addEventListener('click', () => {
  tasks = defaultTasks.map(task => ({ ...task, id: crypto.randomUUID(), createdAt: new Date().toISOString() }));
  currentFilter = 'todas';
  filters.forEach(button => button.classList.toggle('active', button.dataset.filter === 'todas'));
  saveTasks();
  renderTasks();
});

renderTasks();
