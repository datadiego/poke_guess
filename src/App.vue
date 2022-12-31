<template>
  <PokemonPage/>
</template>

<script>

import PokemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    PokemonPage, 

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;
}
h1{
  font-size: 40px;
  font-weight: 100;
  margin-bottom: 20px;
}
@media only screen and (max-width: 600px) {
  #app{
    margin-top: 0px;

  }
}


</style>
