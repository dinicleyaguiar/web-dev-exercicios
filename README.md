# 🌐 Exercícios de Programação Web — Turma Iniciante

Repositório de exercícios práticos para estudo de desenvolvimento web, organizado em uma trilha progressiva de HTML → CSS → JavaScript e finalizado com um projeto integrador.

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Git-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Git e GitHub" />
</p>

## 🎯 Objetivo

A proposta é evoluir de forma prática, construindo uma base sólida antes de avançar para interatividade no navegador.

Ao concluir a trilha, o estudante terá praticado:

- estrutura e semântica HTML;
- estilização, box model, Flexbox e responsividade;
- lógica de programação com JavaScript;
- manipulação do DOM e eventos;
- organização de código e versionamento com Git;
- integração de HTML, CSS e JavaScript em um projeto completo.

## 🧭 Navegação rápida

| Etapa | Conteúdo | Exercícios | Acesso |
| --- | --- | ---: | --- |
| 01 | HTML | 6 | [Abrir módulo](./modulo-01-html/) |
| 02 | CSS | 5 | [Abrir módulo](./modulo-02-css/) |
| 03 | JavaScript | 6 | [Abrir módulo](./modulo-03-javascript/) |
| Final | Projeto integrador | 1 | [Abrir projeto](./projeto-final/) |

Total: 18 atividades práticas.

## 📚 Estrutura do repositório

```text
web-dev-exercicios/
├── modulo-01-html/
│   ├── 01-estrutura-basica/
│   ├── 02-textos-formatacao/
│   ├── 03-listas/
│   ├── 04-links-imagens/
│   ├── 05-tabelas/
│   └── 06-formularios/
├── modulo-02-css/
│   ├── 01-seletores-propriedades/
│   ├── 02-box-model/
│   ├── 03-cores-tipografia/
│   ├── 04-flexbox-cards/
│   └── 05-layout-responsivo/
├── modulo-03-javascript/
│   ├── 01-variaveis-tipos/
│   ├── 02-condicionais/
│   ├── 03-loops/
│   ├── 04-funcoes/
│   ├── 05-manipulacao-dom/
│   └── 06-eventos-formulario/
└── projeto-final/
```

Cada exercício possui sua própria pasta com um `README.md` contendo objetivo, enunciado, requisitos técnicos e critérios de avaliação.

## 🛠️ Pré-requisitos

Para acompanhar os exercícios, basta ter:

- navegador atualizado;
- editor de código, preferencialmente VS Code;
- Git instalado para versionamento;
- conta no GitHub para fork, commits e publicação.

Não é necessário instalar Node.js, banco de dados ou servidor web para os módulos atuais.

## 🚀 Começando

### Opção 1 — Fork

A opção recomendada para estudantes é criar um fork e manter o próprio histórico de evolução.

1. Clique em `Fork` no topo do repositório.
2. Clone o seu fork:

```bash
git clone https://github.com/SEU-USUARIO/web-dev-exercicios.git
cd web-dev-exercicios
```

3. Abra no VS Code:

```bash
code .
```

### Opção 2 — Clone direto

Para apenas estudar ou consultar o material:

```bash
git clone https://github.com/dinicleyaguiar/web-dev-exercicios.git
cd web-dev-exercicios
```

## 🔄 Fluxo recomendado para cada exercício

1. Leia o `README.md` da atividade antes de programar.
2. Crie somente os arquivos solicitados dentro da pasta correspondente.
3. Teste o resultado no navegador.
4. Revise o checklist do exercício.
5. Faça um commit pequeno e descritivo.
6. Envie a evolução para o GitHub.

Exemplo:

```bash
git status
git add .
git commit -m "feat: concluir exercicio de formularios"
git push
```

## 📝 Padrão simples de commits

| Prefixo | Quando usar | Exemplo |
| --- | --- | --- |
| `feat` | nova atividade ou funcionalidade | `feat: adicionar formulario de cadastro` |
| `style` | alterações visuais em CSS | `style: aplicar layout responsivo` |
| `fix` | correção de erro | `fix: corrigir validacao do formulario` |
| `docs` | documentação | `docs: atualizar instrucoes do modulo` |
| `refactor` | reorganização sem mudar comportamento | `refactor: simplificar manipulacao do dom` |

## ✅ Checklist geral

- [ ] Código indentado e legível
- [ ] Arquivos e pastas com nomes claros
- [ ] HTML semanticamente correto
- [ ] CSS organizado e sem repetição desnecessária
- [ ] JavaScript sem erros no console do navegador
- [ ] Layout testado em mais de um tamanho de tela quando aplicável
- [ ] Commits pequenos e com mensagens claras
- [ ] `README.md` do exercício revisado antes da entrega

## 🌍 Publicando com GitHub Pages

Os projetos que utilizam apenas HTML, CSS e JavaScript podem ser publicados gratuitamente com GitHub Pages.

No GitHub, acesse:

`Settings → Pages → Deploy from a branch → main`

Depois da publicação, os exercícios podem ser acessados pelo navegador conforme o caminho de cada pasta no repositório.

## 🏁 Ordem sugerida

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
Projeto Integrador
```

Evite pular etapas. Os exercícios seguintes assumem conhecimentos praticados nos módulos anteriores.

---

Feito para praticar, errar, corrigir e evoluir. 💻🚀
