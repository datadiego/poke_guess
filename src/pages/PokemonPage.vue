<template>
    <h1 v-if="!pkmn_ronda">Buscando en la pokedex...</h1>
    <div v-else>
        <h1>¿Cual es este pokemon?</h1>
        <PokemonPicture :pokemonid="pkmn_ronda.id" :showpokemon="show_pokemon" />
        <PokemonOptions :pokemons="pokemonArr" @select="checkAnswer($event)"/>
        <h1>Aciertos: {{ aciertos }}</h1>
        <h1>Fallos: {{ fallos }}</h1>
        <div v-if="show_answer">
            <h2> {{ message }} </h2>
            <button @click="nextGame">Siguiente</button>

        </div>
    </div>


</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    data(){
        return {
            pokemonArr:[],
            pkmn_ronda: null,
            show_pokemon: false,
            show_answer: false,
            message: '',
            aciertos: 0,
            fallos: 0,
        }
    },
    components:{
        PokemonPicture, 
        PokemonOptions,

    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            this.pkmn_ronda = this.pokemonArr[Math.floor(Math.random() * 4)] 
            console.log(this.pokemonArr)
            console.log('Adivina este:', this.pkmn_ronda, this.pkmn_ronda.id)
        },
        checkAnswer(pokemon){
            this.show_pokemon = true
            this.show_answer = true
            console.log('AAAA', pokemon, this.pkmn_ronda.id)
            if(pokemon == this.pkmn_ronda.id){
                console.log("Buena")
                this.message= `¡Correcto! Es ${this.pkmn_ronda.name}`
                this.aciertos += 1 
            }
            else{
                console.log("mala")
                this.message = `¡Error! Es ${this.pkmn_ronda.name}`
                this.fallos += 1
            }
        },
        nextGame(){
            this.show_pokemon = false
            this.show_answer = false
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>

<style>

</style>