<template class="mainPage">
  <div class="hello">
    <h1>{{ this.lang === 'BR' ? 'Você é demais, garota!' : 'You rock, girl!' }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      lang: this.$cookies.get('lang'),
      authorized: this.$cookies.get('authorized')
    }
  },
  methods: {
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
