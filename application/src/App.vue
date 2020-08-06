<template>
  <div id="app">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header"> To Do List</h1>
        <h2 class="ui inverted header"><center><i class="check icon"></i></center>
          <div class="sub header">Vue.js 2 com SWA + GitHub Actions</div>          
        </h2>
      </div>
    </div>
    <br />
    <div class="ui three column centered grid">
      <div class="column">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import sweetAlert from 'sweetalert';
import TodoList from './components/pages/TodoList/index';
import CreateTodo from './components/pages/CreateTodo/index';

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [
        {
          titulo: 'Tarefa 1',
          anotacao: 'Anotações...',
          concluido: false,
        },
        {
          titulo: 'Tarefa 2',
          anotacao: 'Anotações...',
          concluido: true,
        },
        {
          titulo: 'Tarefa 3',
          anotacao: 'Anotações...',
          concluido: false,
        },
        {
          titulo: 'Tarefa 4',
          anotacao: 'Anotações...',
          concluido: false,
        },
      ],
    };
  },
  methods: {
    createTodo(novoTitulo) {
      this.todos.push(novoTitulo);
      sweetAlert('Sucesso!', 'Nova Tarefa Adicionada.', 'success');
    },
  },
};
</script>
