<template>
<h1>¿Cual es este pokemon?</h1>
<PokemonPicture :pokemonid="4" :showpokemon="true" />
<PokemonOptions/>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
export default {
    components:{
        PokemonPicture, 
        PokemonOptions,

    }
}
</script>

<style>

</style>