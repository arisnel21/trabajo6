let pokemon = [

    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'Bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

let contenedor = document.getElementById("contenedor");
let tipoPokemon = document.getElementById("tipoPoke");

tipoPokemon.addEventListener("change", function(){ 
    let obtenPoke = tipoPokemon.value;

    var pokemonFiltrados = pokemon.filter((poke) => poke.tipo === obtenPoke);   
    let creaTipo = document.createElement("p");
    let nombresFiltrados = pokemonFiltrados.map(poke => poke.nombre).join(", ");

    creaTipo.innerHTML = `Tipo Seleccionado: ${obtenPoke} <br> Pokémon Encontrado: ${nombresFiltrados}`;
    
    contenedor.appendChild(creaTipo);
});






