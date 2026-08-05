# Exercício 05 — Manipulação do DOM

**Objetivo:** selecionar e alterar elementos HTML via JavaScript.

**Enunciado:**
Crie uma página com um `<h1>`, um botão e uma lista `<ul>` vazia. Ao clicar no botão, um novo `<li>` com um item de tarefa (texto fixo ou de um `prompt()`) deve ser adicionado à lista.

**Requisitos técnicos:**
- `document.querySelector` / `getElementById`
- `document.createElement` e `appendChild`
- Alterar o texto do `<h1>` dinamicamente (ex.: contador de itens adicionados)

**Arquivos esperados:**
```
05-manipulacao-dom/
├── index.html
└── script.js
```

**Critérios de avaliação:**
- [ ] Novo item realmente adicionado ao DOM (visível na página)
- [ ] Contador atualizado corretamente
- [ ] Código organizado, sem uso de `innerHTML` para inserir texto de usuário (evitar problemas de segurança)
