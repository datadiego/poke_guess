(function(){"use strict";var n={3609:function(n,o,e){var r=e(9242),t=e(3396);function a(n,o,e,r,a,i){const s=(0,t.up)("PokemonPage");return(0,t.wg)(),(0,t.j4)(s)}var i=e(7139);const s={key:0},m={key:1},c=(0,t._)("h1",null,"¿Cual es este pokemon?",-1),u=(0,t._)("h1",null,null,-1),p={key:0};function l(n,o,e,r,a,l){const d=(0,t.up)("PokemonPicture"),k=(0,t.up)("PokemonOptions");return a.pkmn_ronda?((0,t.wg)(),(0,t.iD)("div",m,[c,(0,t.Wm)(d,{pokemonid:a.pkmn_ronda.id,showpokemon:a.show_pokemon},null,8,["pokemonid","showpokemon"]),(0,t.Wm)(k,{pokemons:a.pokemonArr,onSelect:o[0]||(o[0]=n=>l.checkAnswer(n))},null,8,["pokemons"]),(0,t._)("h1",null,"👌 "+(0,i.zw)(a.aciertos)+" 💀 "+(0,i.zw)(a.fallos),1),u,a.show_answer?((0,t.wg)(),(0,t.iD)("div",p,[(0,t._)("h2",null,(0,i.zw)(a.message),1),(0,t._)("button",{onClick:o[1]||(o[1]=(...n)=>l.nextGame&&l.nextGame(...n))},"Siguiente")])):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("h1",s,"Buscando en la pokedex..."))}const d={class:"pokemon-container"},k=["src"],h=["src"];function f(n,o,e,r,a,i){return(0,t.wg)(),(0,t.iD)("div",d,[e.showpokemon?((0,t.wg)(),(0,t.iD)("img",{key:1,src:i.imgSrc,alt:"pokemon",class:"fade-in"},null,8,h)):((0,t.wg)(),(0,t.iD)("img",{key:0,src:i.imgSrc,alt:"pokemon",class:"hidden-pokemon"},null,8,k))])}var w={props:{pokemonid:{type:Number,required:!0},showpokemon:{type:Boolean,required:!0}},computed:{imgSrc(){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonid}.svg`}}},g=e(89);const v=(0,g.Z)(w,[["render",f]]);var y=v;const _={class:"options-container"},P=["onClick"];function b(n,o,e,r,a,s){return(0,t.wg)(),(0,t.iD)("div",_,[(0,t._)("ul",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.pokemons,(o=>((0,t.wg)(),(0,t.iD)("li",{key:o.id,onClick:e=>n.$emit("select",o.id)},(0,i.zw)(o.name),9,P)))),128))])])}var A={props:{pokemons:{type:Array,required:!0}}};const O=(0,g.Z)(A,[["render",b]]);var x=O,D=e(6943);const C=D.Z.create({baseURL:"https://pokeapi.co/api/v2/pokemon"});var $=C;const j=()=>{const n=Array.from(Array(650));return n.map(((n,o)=>o+1))},E=async()=>{const n=j().sort((()=>Math.random()-.5)),o=await S(n.splice(0,4));return o.forEach((n=>n.name=n.name[0].toUpperCase()+n.name.slice(1))),o},S=async([n,o,e,r]=[])=>{const t=[$.get(`/${n}`),$.get(`/${o}`),$.get(`/${e}`),$.get(`/${r}`)],[a,i,s,m]=await Promise.all(t);return[{name:a.data.name,id:a.data.id},{name:i.data.name,id:i.data.id},{name:s.data.name,id:s.data.id},{name:m.data.name,id:m.data.id}]};var Z=E,q={data(){return{pokemonArr:[],pkmn_ronda:null,show_pokemon:!1,show_answer:!1,message:"",aciertos:0,fallos:0}},components:{PokemonPicture:y,PokemonOptions:x},methods:{async mixPokemonArray(){this.pokemonArr=await Z(),this.pkmn_ronda=this.pokemonArr[Math.floor(4*Math.random())]},checkAnswer(n){this.show_pokemon=!0,this.show_answer=!0,n==this.pkmn_ronda.id?(this.message=`¡Correcto! Es ${this.pkmn_ronda.name}`,this.aciertos+=1):(this.message=`¡Error! Es ${this.pkmn_ronda.name}`,this.fallos+=1)},nextGame(){this.pokemonArr=[],this.pkmn_ronda=null,this.show_pokemon=!1,this.show_answer=!1,this.mixPokemonArray()}},mounted(){this.mixPokemonArray()}};const z=(0,g.Z)(q,[["render",l]]);var M=z,G={name:"App",components:{PokemonPage:M}};const B=(0,g.Z)(G,[["render",a]]);var T=B;(0,r.ri)(T).mount("#app")}},o={};function e(r){var t=o[r];if(void 0!==t)return t.exports;var a=o[r]={exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(o,r,t,a){if(!r){var i=1/0;for(u=0;u<n.length;u++){r=n[u][0],t=n[u][1],a=n[u][2];for(var s=!0,m=0;m<r.length;m++)(!1&a||i>=a)&&Object.keys(e.O).every((function(n){return e.O[n](r[m])}))?r.splice(m--,1):(s=!1,a<i&&(i=a));if(s){n.splice(u--,1);var c=t();void 0!==c&&(o=c)}}return o}a=a||0;for(var u=n.length;u>0&&n[u-1][2]>a;u--)n[u]=n[u-1];n[u]=[r,t,a]}}(),function(){e.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(o,{a:o}),o}}(),function(){e.d=function(n,o){for(var r in o)e.o(o,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){var n={143:0};e.O.j=function(o){return 0===n[o]};var o=function(o,r){var t,a,i=r[0],s=r[1],m=r[2],c=0;if(i.some((function(o){return 0!==n[o]}))){for(t in s)e.o(s,t)&&(e.m[t]=s[t]);if(m)var u=m(e)}for(o&&o(r);c<i.length;c++)a=i[c],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(u)},r=self["webpackChunkpoke_guess"]=self["webpackChunkpoke_guess"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(3609)}));r=e.O(r)})();
//# sourceMappingURL=app.d1d7ca95.js.map