# TaskFlow

Lista de tarefas em React e TypeScript, criada como projeto de prática para estudar os fundamentos do React. Não é
um produto pronto: a interface é mínima e o foco foi entender estado, efeitos e tipagem.

## Funcionalidades

- Criar, excluir e mudar o status das tarefas (iniciada, em andamento e concluída).
- Filtrar por status e buscar pelo título.
- Contadores de tarefas por status.
- Tarefas salvas no `localStorage`, mantidas ao recarregar a página.
- Mensagens para lista vazia, filtro sem resultado e busca sem resultado.

## Limitações conhecidas

- O botão "criar tarefa" cria sempre uma tarefa com o título fixo "title": o campo de texto da tela é usado só
  para a busca.
- Interface sem estilização final.

## Tecnologias

- React e TypeScript
- Vite
- Tailwind CSS

## Como executar localmente

```bash
git clone https://github.com/Richard-coding/taskflow.git
cd taskflow
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Status

Projeto de estudo, em pausa.

## Autoria

Desenvolvido por Richard Soares Mesquita — [GitHub](https://github.com/Richard-coding).
