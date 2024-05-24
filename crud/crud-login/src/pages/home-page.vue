<template>
  <q-page-container style="padding-top: 100px; padding-bottom: 100px; background-color: blueviolet;">
    <q-card class="card-conteudo">
     <h1 class="q-mt-sm">Bem vindo: {{nome}}</h1>
     <div class="criar-conta"><p @click="voltarLogin">Voltar Login</p></div>
    
    </q-card>
  </q-page-container>
</template>

<script>
export default {
   name: 'home-page',

   data() {
    return {
      nome: '',
     
    };
  },

   created() {
    this.nome = localStorage.getItem('nome');
  },

  methods: {
    voltarLogin() {
      this.$router.push('/login');
    }
  }


}
</script>
