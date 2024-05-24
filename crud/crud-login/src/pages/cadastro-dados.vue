<template>
    <q-page-container style="padding-top: 70px; padding-bottom: 60px; background-color: blueviolet;">
      <q-card class="card-cadastro">
       <h1 class="q-mt-sm">Cadastro de dados</h1>
       <form @submit.prevent="cadastrar">
       <div class="caixa-input">
        <q-input
        v-model="nome"
        outlined
        type="text"
        dense
        class="input"
        label="Digite seu nome"
        />
      </div>
   
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
       <div class="caixa-input">
          <q-input
            v-model="confirmPassword"
            outlined
            :type="showConfirmPassword ? 'text' : 'password'"
            dense
            class="input"
            label="Confirmar senha"
          >
            <template v-slot:append>
              <q-icon
                :name="showConfirmPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="toggleConfirmPasswordVisibility"
              />
            </template>
          </q-input>
        </div>

       <div class="caixa-btn">
        <q-btn 
        class="btn-login"
        label="Cadastrar"
        type="sumit"
        />
      </div>
      
      <div class="criar-conta"><p @click="voltarLogin">Voltar Login</p></div>
    </form>
       
      </q-card>

    </q-page-container>
</template>

<script>
import axios from 'axios';



export default {
   name: 'cadastro-dados',
   
 

  data(){
    return{
     email: '',
     nome: '',
     confirmPassword: '',
     password: '',
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
  
  async cadastrar(){
       
      if (this.email == "" || this.password == "" || this.confirmPassword  == "") {
      alert("Existem campos que não foram preenchidos");
      return;

      }
      
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(this.email)) {
    alert("Formato de email inválido");
    return;
  }

  if (this.password !== this.confirmPassword) {
    alert("As senhas devem ser iguais");
    return;
  }

  if (this.password.length < 9) {
    alert("A senha deve ter pelo menos 9 caracteres");
    return;
  }

  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~]).{9,}$/;
  if (!senhaRegex.test(this.password)) {
    alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial");
    return;
  }

      try{
      const response = await axios.post('http://localhost:3000/api/auth/cadastro' , {
        nome: this.nome,
        email: this.email,
        senha: this.password
  
      });
      alert("Cadastro realizado com sucesso!");
      this.nome = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
       
    
    }catch(error){
    if (error.response && error.response.data && error.response.data.error) {
    alert("Houve um erro ao tentar cadastrar um usuário!" + error.response.data.error);
  } else {
    alert("Houve um erro ao tentar cadastrar um usuário! " + error.message);
  }
  }
  
   
    
    
  }, 

   voltarLogin(){
     this.$router.push('/login');
  }
}


}


  
  



</script>
