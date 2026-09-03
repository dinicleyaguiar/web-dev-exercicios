# 🏁 Projeto Final — Landing Page Interativa e Responsiva

Chegou a hora de reunir HTML, CSS e JavaScript em um único projeto.

O objetivo desta atividade é construir uma página completa, organizada e funcional, aplicando os principais conteúdos praticados durante os três módulos da trilha.

---

## 🎯 Objetivo

Desenvolver uma landing page responsiva e interativa para um tema escolhido pelo estudante.

Algumas possibilidades:

- portfólio pessoal;
- pequena empresa;
- produto;
- evento;
- restaurante;
- academia;
- loja;
- curso;
- projeto social;
- serviço profissional.

O tema é livre, mas todos os requisitos técnicos abaixo são obrigatórios.

---

## 🧩 Desafio

Crie uma página que apresente uma identidade visual consistente, boa organização das informações e pelo menos uma interação real construída com JavaScript.

A página deve funcionar corretamente tanto em computadores quanto em dispositivos móveis.

### Estrutura mínima esperada

```text
┌──────────────────────────────────────┐
│ HEADER / NAVEGAÇÃO                   │
├──────────────────────────────────────┤
│ HERO                                 │
│ título + descrição + ação principal  │
├──────────────────────────────────────┤
│ SOBRE                                │
├──────────────────────────────────────┤
│ CARDS / SERVIÇOS / PROJETOS          │
├──────────────────────────────────────┤
│ SEÇÃO INTERATIVA                     │
├──────────────────────────────────────┤
│ FORMULÁRIO DE CONTATO                │
├──────────────────────────────────────┤
│ FOOTER                               │
└──────────────────────────────────────┘
```

Este desenho é apenas uma referência. O estudante pode criar seu próprio layout.

---

# 1. 🧱 HTML

A página deve utilizar HTML semântico e possuir, no mínimo:

- `<header>`;
- menu de navegação com links internos;
- `<main>`;
- pelo menos quatro `<section>`;
- uma área de destaque inicial (hero);
- títulos organizados corretamente (`h1`, `h2`, `h3`);
- textos e parágrafos;
- imagens com atributo `alt`;
- lista quando fizer sentido para o conteúdo;
- área com cards;
- formulário;
- `<footer>`.

### O formulário deve possuir

- campo nome;
- campo e-mail;
- campo assunto ou telefone;
- campo mensagem;
- botão de envio;
- `<label>` associado aos campos.

---

# 2. 🎨 CSS

Todo o estilo deve ficar em arquivo externo.

A página deve utilizar:

- cores definidas de forma consistente;
- tipografia legível;
- espaçamentos organizados;
- `box-model` corretamente;
- Flexbox e/ou CSS Grid;
- estados de interação com `:hover` ou `:focus`;
- botões estilizados;
- cards organizados;
- largura máxima de conteúdo quando necessário;
- pelo menos uma `media query`;
- layout adaptado para telas menores.

### Responsividade

A página deve continuar utilizável em pelo menos estas larguras aproximadas:

```text
Desktop:  1200px+
Tablet:    768px
Mobile:    375px
```

Não é necessário criar três versões diferentes. O layout deve se adaptar naturalmente.

---

# 3. ⚙️ JavaScript

O JavaScript deve ficar em arquivo externo e não pode gerar erros no console do navegador.

## Obrigatório

Implemente validação do formulário antes do envio.

A validação deve verificar pelo menos:

- nome vazio;
- e-mail vazio;
- formato básico do e-mail;
- mensagem vazia.

Quando existir erro, o usuário deve receber uma mensagem clara.

## Interação adicional

Além da validação, implemente pelo menos uma funcionalidade usando JavaScript.

Exemplos:

- menu mobile que abre e fecha;
- alternância entre tema claro e escuro;
- botão "voltar ao topo";
- contador;
- filtro de cards;
- galeria simples;
- FAQ expansível;
- modal;
- troca dinâmica de texto;
- mostrar/ocultar conteúdo.

A interação deve manipular o DOM e responder a uma ação do usuário.

---

# 4. ♿ Acessibilidade básica

O projeto deve observar boas práticas simples de acessibilidade:

- imagens relevantes com `alt`;
- campos de formulário com `label`;
- contraste suficiente entre texto e fundo;
- elementos clicáveis identificáveis;
- navegação possível por teclado nos controles principais;
- ordem coerente de títulos;
- evitar textos muito pequenos.

---

# 5. 🗂️ Organização dos arquivos

Estrutura mínima:

```text
projeto-final/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── imagens-do-projeto
└── README.md
```

Outra organização pode ser utilizada desde que seja clara e consistente.

---

# 6. 📝 README do projeto

O estudante deve substituir este enunciado por um README próprio na versão final do trabalho.

O README entregue deve informar:

- nome do projeto;
- descrição;
- objetivo;
- tecnologias utilizadas;
- principais funcionalidades;
- como executar localmente;
- imagem ou screenshot da página;
- link da aplicação publicada;
- nome do autor.

Exemplo de estrutura:

```markdown
# Nome do projeto

Descrição curta.

## Tecnologias

- HTML
- CSS
- JavaScript

## Funcionalidades

- Layout responsivo
- Formulário validado
- Menu mobile

## Demo

https://usuario.github.io/repositorio/
```

---

# 7. 🌍 Publicação

O projeto final deve ser publicado utilizando GitHub Pages.

No GitHub:

```text
Settings
  ↓
Pages
  ↓
Deploy from a branch
  ↓
main
```

O endereço publicado deve ser colocado no README do projeto.

Antes da entrega, abra o endereço publicado em uma janela anônima para confirmar que imagens, CSS e JavaScript carregam corretamente.

---

# 8. 🔄 Fluxo de desenvolvimento recomendado

Evite construir todo o projeto em um único commit.

Uma sequência recomendada é:

### Etapa 1 — Estrutura

```bash
git commit -m "feat: criar estrutura html do projeto final"
```

### Etapa 2 — Estilo principal

```bash
git commit -m "style: criar identidade visual e layout"
```

### Etapa 3 — Responsividade

```bash
git commit -m "style: adaptar layout para dispositivos moveis"
```

### Etapa 4 — JavaScript

```bash
git commit -m "feat: adicionar validacao e interacoes"
```

### Etapa 5 — Revisão

```bash
git commit -m "fix: corrigir detalhes finais do projeto"
```

### Etapa 6 — Documentação

```bash
git commit -m "docs: documentar projeto final"
```

---

# 9. ✅ Checklist de entrega

## HTML

- [ ] Existe apenas um `h1` principal
- [ ] A estrutura usa elementos semânticos
- [ ] O menu possui links funcionais
- [ ] Todas as imagens importantes possuem `alt`
- [ ] O formulário possui `label`

## CSS

- [ ] O CSS está em arquivo externo
- [ ] O layout utiliza Flexbox ou Grid
- [ ] Existe responsividade
- [ ] Não há conteúdo ultrapassando a largura da tela no mobile
- [ ] Textos possuem contraste adequado

## JavaScript

- [ ] O JavaScript está em arquivo externo
- [ ] O formulário possui validação
- [ ] Existe uma segunda interação com JavaScript
- [ ] Não existem erros no console

## Git e GitHub

- [ ] O projeto possui histórico de commits
- [ ] Os commits possuem mensagens claras
- [ ] O README foi personalizado
- [ ] O projeto está publicado no GitHub Pages
- [ ] O link publicado está no README

---

# 10. 📊 Critérios de avaliação — 100 pontos

| Critério | Pontos |
| --- | ---: |
| Estrutura e semântica HTML | 15 |
| Organização e qualidade do CSS | 15 |
| Layout e identidade visual | 10 |
| Responsividade | 15 |
| JavaScript e manipulação do DOM | 15 |
| Validação do formulário | 10 |
| Organização do código | 5 |
| Acessibilidade básica | 5 |
| Uso adequado de Git e commits | 5 |
| README + publicação no GitHub Pages | 5 |
| Total | 100 |

---

# 11. 🚀 Desafios extras

Os itens abaixo são opcionais e devem ser feitos somente depois que todos os requisitos obrigatórios estiverem funcionando.

### ⭐ Nível 1

- animações suaves com CSS;
- navegação com `scroll-behavior`;
- botão voltar ao topo;
- efeitos visuais nos cards.

### ⭐⭐ Nível 2

- tema claro/escuro;
- dados persistidos com `localStorage`;
- filtro de cards;
- FAQ interativo;
- modal.

### ⭐⭐⭐ Nível 3

- consumir uma API pública usando `fetch`;
- gerar conteúdo dinamicamente com JavaScript;
- criar busca ou filtro em tempo real.

Os desafios extras não substituem os requisitos obrigatórios.

---

# 12. 🚫 Restrições da atividade

Para que o projeto avalie os conhecimentos praticados na trilha:

- não utilizar Bootstrap, Tailwind ou outro framework CSS para construir o layout principal;
- não utilizar React, Vue ou frameworks JavaScript;
- não copiar um template completo pronto;
- bibliotecas externas para ícones ou fontes são permitidas;
- todo o comportamento principal deve ser compreensível pelo estudante.

---

# 13. 🔍 Revisão final

Antes de considerar o projeto concluído:

1. abra o console do navegador e confirme que não existem erros;
2. teste todos os links do menu;
3. tente enviar o formulário vazio;
4. teste a interação JavaScript escolhida;
5. redimensione a janela do navegador;
6. teste em um celular, se possível;
7. confira o GitHub Pages;
8. revise o README;
9. verifique o histórico de commits.

---

## 🏆 Resultado esperado

Ao final, o estudante deve possuir um projeto completo que possa ser apresentado como primeiro trabalho de portfólio e que demonstre domínio dos fundamentos de:

`HTML + CSS + JavaScript + Git + GitHub`

O objetivo não é criar a página mais complexa possível. O objetivo é criar uma página bem estruturada, funcional, compreensível e construída com domínio dos fundamentos.

Boa construção. 💻🚀
