<template class="mainPage">
  <div class="hello">
    <h1>Hello, please choose your language! / Olá, por favor escolha seu idioma!</h1>
    <input type="button" value="PT-BR" v-on:click="setLang('BR')">
    <input type="button" value="EN-US" v-on:click="setLang('EN')">
  </div>
</template>

<script>
export default {
  name: 'LangSelector',
  data () {
    return {
      lang: ''
    }
  },
  methods: {
    setLang: function (lang) {
      this.$cookies.config('365d')
      this.$cookies.set('lang', lang)
      this.$router.push('/login')
    },
    checkName: function (event) {
      if (this.nome === 'amine' || this.nome === 'Amine' || this.nome === 'AMINE') {
        this.actualValidator = this.validator[0].mensagem
      } else if (this.nome === 'gian' || this.nome === 'Gian' || this.nome === 'GIAN') {
        this.actualValidator = this.validator[1].mensagem
      } else if (this.nome.length > 0 && this.nome.length <= 3) {
        this.actualValidator = this.validator[2].mensagem
      } else if (this.nome.length === 0) {
        this.actualValidator = this.validator[3].mensagem
      } else {
        this.actualValidator = this.validator[4].mensagem
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
