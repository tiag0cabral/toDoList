/**
 * Arquivo: src/components/pages/CreateTodo/CreateTodo.js
 * Data: 22/06/2020
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'CreateTodo'.
 * Autora: Glaucia Lemos
 */

export default {
  name: 'CreateTodo',
  data() {
    return {
      textoTitulo: '',
      textoAnotacao: '',
      foiCriado: false,
    };
  },
  methods: {
    abrirForm() {
      this.foiCriado = true;
    },
    fecharForm() {
      this.foiCriado = false;
    },
    enviarForm() {
      if (this.textoTitulo.length > 0 && this.textoAnotacao.length > 0) {
        const titulo = this.textoTitulo;
        const anotacao = this.textoAnotacao;

        this.$emit('create-todo', {
          titulo,
          anotacao,
          concluido: false,
        });
        this.textoTitulo = '';
        this.textoAnotacao = '';
        this.foiCriado = false;
      }
    },
  },
};
