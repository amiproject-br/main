<template class="mainPage">
  <div class="login">
    <h1>{{ lang === 'BR' ? msgBR : msgEN }}</h1>
    <input type="text" name="nome" id="nome" minlength="4" maxlength="5" v-model="nome" required>
    <h3>{{ actualValidator }}</h3>
    <input type="button" value="Login" v-on:click="checkName">
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msgBR: 'Bem-vindo(a) nobre guerreiro(a), poderia por favor me informar seu primeiro nome para que possamos verificar se você pode acessar o site ou não?',
      msgEN: "Welcome my noble warrior, could you please inform me your first name to check if you're authorized to enter in this website?",
      actualValidator: '',
      nome: '',
      lang: this.$cookies.get('lang'),
      validatorBR: [
        { mensagem: 'Você está autorizada a entrar neste site, seja bem-vinda!' },
        { mensagem: 'Bem-vindo, boss.' },
        { mensagem: 'O nome que procuro tem entre 4 e 5 letras.' },
        { mensagem: 'Como vou saber se você pode entrar ou não, se deixar o campo vazio?' },
        { mensagem: 'Você não está autorizado(a) a entrar neste site, sinto muito.' }
      ],
      validatorEN: [
        { message: 'You are authorized to access this website, welcome Princess!' },
        { message: 'Welcome, boss.' },
        { message: 'The name that we are seaching contains 4 or 5 letters' },
        { message: "How i would know if you're authorized to access or not, if you simply leave this field empty?" },
        { message: 'Sorry, you are not authorized to access this website.' }
      ]
    }
  },
  methods: {
    checkName: function (event) {
      switch (this.lang) {
        case 'EN':
        default:
          if (this.nome === 'amine' || this.nome === 'Amine' || this.nome === 'AMINE') {
            this.actualValidator = this.validatorEN[0].message
            this.$router.push('/home')
          } else if (this.nome === 'gian' || this.nome === 'Gian' || this.nome === 'GIAN') {
            this.actualValidator = this.validatorEN[1].message
            this.$router.push('/home')
          } else if (this.nome.length > 0 && this.nome.length <= 3) {
            this.actualValidator = this.validatorEN[2].message
          } else if (this.nome.length === 0) {
            this.actualValidator = this.validatorEN[3].message
          } else {
            this.actualValidator = this.validatorEN[4].message
          }
          break
        case 'BR':
          if (this.nome === 'amine' || this.nome === 'Amine' || this.nome === 'AMINE') {
            this.actualValidator = this.validatorBR[0].mensagem
            this.$router.push('/home')
          } else if (this.nome === 'gian' || this.nome === 'Gian' || this.nome === 'GIAN') {
            this.actualValidator = this.validatorBR[1].mensagem
            this.$router.push('/home')
          } else if (this.nome.length > 0 && this.nome.length <= 3) {
            this.actualValidator = this.validatorBR[2].mensagem
          } else if (this.nome.length === 0) {
            this.actualValidator = this.validatorBR[3].mensagem
          } else {
            this.actualValidator = this.validatorBR[4].mensagem
          }
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
