# Exercício 05 — Layout responsivo básico

**Objetivo:** introduzir media queries para adaptar o layout a diferentes tamanhos de tela.

**Enunciado:**
Reaproveite a galeria de cards do exercício anterior e adicione uma media query que mude o layout em telas com largura menor que 600px (ex.: cards empilhados, um por linha).

**Requisitos técnicos:**
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` no HTML
- Pelo menos uma `@media (max-width: 600px) { ... }`
- Ajuste de `flex-direction` ou `width` dos cards na media query

**Arquivos esperados:**
```
05-layout-responsivo/
├── index.html
└── style.css
```

**Critérios de avaliação:**
- [ ] Meta viewport presente
- [ ] Media query funcional (testar redimensionando o navegador)
- [ ] Layout utilizável tanto em tela grande quanto pequena
