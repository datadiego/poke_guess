<template>
    <div class="options-container">
        <ul>
            <li 
            v-for="pokemon in pokemons" 
            :key="pokemon.id"
            @click="$emit('select', pokemon.id)" 
            >
                {{pokemon.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        pokemons:{
            type: Array,
            required: true
        }
    }
}
</script>

<style>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: 20px;
}
li {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    text-align: center;
    
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    margin: 0 auto;
    width: 250px;
    display: flex;
    justify-content: center;

}

</style>