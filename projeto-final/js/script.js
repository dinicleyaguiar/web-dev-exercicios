const root = document.documentElement;
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const backToTop = document.querySelector('.back-to-top');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const faqItems = document.querySelectorAll('.faq-item');
const form = document.querySelector('#contact-form');

const savedTheme = localStorage.getItem('nexo-theme');
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

function syncThemeIcon() {
  themeIcon.textContent = root.dataset.theme === 'light' ? '☾' : '☀';
}

syncThemeIcon();

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = nextTheme;
  localStorage.setItem('nexo-theme', nextTheme);
  syncThemeIcon();
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const shouldShow = filter === 'todos' || card.dataset.category === filter;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

faqItems.forEach((item) => {
  const button = item.querySelector('button');
  const symbol = button.querySelector('span:last-child');

  button.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    symbol.textContent = isOpen ? '−' : '+';
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const fields = {
  nome: {
    input: document.querySelector('#nome'),
    error: document.querySelector('#nome-error'),
    validate: (value) => value.trim().length >= 2 || 'Informe seu nome.'
  },
  email: {
    input: document.querySelector('#email'),
    error: document.querySelector('#email-error'),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Informe um e-mail válido.'
  },
  assunto: {
    input: document.querySelector('#assunto'),
    error: document.querySelector('#assunto-error'),
    validate: (value) => value.trim().length >= 3 || 'Informe o assunto.'
  },
  mensagem: {
    input: document.querySelector('#mensagem'),
    error: document.querySelector('#mensagem-error'),
    validate: (value) => value.trim().length >= 10 || 'Escreva uma mensagem com pelo menos 10 caracteres.'
  }
};

function validateField(field) {
  const result = field.validate(field.input.value);
  const isValid = result === true;

  field.input.classList.toggle('invalid', !isValid);
  field.input.setAttribute('aria-invalid', String(!isValid));
  field.error.textContent = isValid ? '' : result;

  return isValid;
}

Object.values(fields).forEach((field) => {
  field.input.addEventListener('blur', () => validateField(field));
  field.input.addEventListener('input', () => {
    if (field.input.classList.contains('invalid')) validateField(field);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  const results = Object.values(fields).map(validateField);
  const isValid = results.every(Boolean);

  if (!isValid) {
    status.textContent = 'Revise os campos destacados antes de continuar.';
    status.style.color = 'var(--danger)';
    const firstInvalid = form.querySelector('.invalid');
    firstInvalid?.focus();
    return;
  }

  status.style.color = '#5bd49d';
  status.textContent = 'Mensagem validada com sucesso. Esta é uma demonstração e nenhum dado foi enviado.';
  form.reset();
});
