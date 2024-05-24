<template>
  <q-page-container style="padding-top: 100px; padding-bottom: 100px; background-color: blueviolet;">
    <q-card class="card-conteudo">
     <h1 class="q-mt-sm">Login</h1>
     <form @submit.prevent="login">
     <div class="caixa-input">
        <q-input
        v-model="email"
        outlined
        type="email"
        dense
        class="input"
        label="Digite seu email"
        />
      </div>
     <div class="caixa-input">
          <q-input
            v-model="password"
            outlined
            :type="showPassword ? 'text' : 'password'"
            dense
            class="input"
            label="Digite sua senha"
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="togglePasswordVisibility"
              />
            </template>
          </q-input>
        </div>

     <div class="caixa-btn">
      <q-btn
      class="btn-login"
      label="Login"
      type="sumit"
      />
    </div>
    
    <div class="criar-conta"><p @click="criarConta">Crie uma conta</p></div>
  </form>
    </q-card>
  </q-page-container>
</template>

<script>
 import axios from 'axios';
export default {
  name: 'login-usuario',

  data(){
    return{
     email: '',
     password: '',
     nome: '',
    showPassword: false,
    showConfirmPassword: false,
    };
  },

methods: {

  togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },  
  criarConta(){
    this.$router.push('/cadastro-dados');
  },


  async login(){
  if (this.email == "" || this.password == "") {
      alert("Existem campos que não foram preenchidos");
      return;
    }

    

    try{
      const response = await axios.post('http://localhost:3000/api/auth/login' , {
        email: this.email,
        senha: this.password,
        
      });

      const { token, nome } = response.data;

      localStorage.setItem('nome', nome);
      this.$router.push('/home-page');
      
    }catch(error){
    if (error.response && error.response.data && error.response.data.error) {
    alert("Houve um erro ao tentar fazer login" + error.response.data.error);
  } else {
    alert("Houve um erro ao tentar fazer login " + error.message);
  }
}

  }

 
}

}




</script>
