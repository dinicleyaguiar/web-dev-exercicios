# Exercício 06 — Eventos e validação de formulário

**Objetivo:** capturar eventos e validar dados de um formulário antes do envio.

**Enunciado:**
Reaproveite o formulário de cadastro do exercício 06 do módulo HTML. Adicione um evento no `submit` que:
- Impede o envio real (`event.preventDefault()`)
- Valida se o campo "nome" não está vazio
- Valida se o e-mail contém "@"
- Exibe mensagens de erro na tela (não usar `alert`) caso a validação falhe

**Requisitos técnicos:**
- `addEventListener('submit', ...)`
- `event.preventDefault()`
- Manipulação do DOM para exibir mensagens de erro/sucesso

**Arquivos esperados:**
```
06-eventos-formulario/
├── index.html
├── style.css
└── script.js
```

**Critérios de avaliação:**
- [ ] Envio padrão do formulário bloqueado corretamente
- [ ] Validações funcionando para os campos exigidos
- [ ] Mensagens de erro exibidas na interface (não em `alert`)
