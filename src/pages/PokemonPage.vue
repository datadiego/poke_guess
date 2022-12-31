<template>
    <h1 v-if="!pkmn_ronda" id="titulo">Buscando en la pokedex...</h1>
    <div v-else>
        <h1>¿Cual es este pokemon?</h1>
        <PokemonPicture :pokemonid="pkmn_ronda.id" :showpokemon="show_pokemon" />
        <PokemonOptions :pokemons="pokemonArr" @select="checkAnswer($event)"/>
        <h1>👌 {{ aciertos }} 💀 {{ fallos }}</h1>
        <h1></h1>
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
        },
        checkAnswer(pokemon){
            this.show_pokemon = true
            this.show_answer = true
            
            if(pokemon == this.pkmn_ronda.id){
                this.message= `¡Correcto! Es ${this.pkmn_ronda.name}`
                this.aciertos += 1 
            }
            else{
                this.message = `¡Error! Es ${this.pkmn_ronda.name}`
                this.fallos += 1
            }
        },
        nextGame(){
            this.pokemonArr = []
            this.pkmn_ronda = null
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

button{
    margin: 0 auto;
    display: block;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}

</style>