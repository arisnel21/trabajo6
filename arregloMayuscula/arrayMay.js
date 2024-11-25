let contenedor = document.getElementById("contenedor");

let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

let mostrarPoke = () => {
    let pokemonMayus = [];
    let pokemonMinus = [];
    for (let i = 0; i < pokemon.length; i++) {
        pokemonMayus.push(pokemon[i].toUpperCase()); // Convertir a mayúsculas
        pokemonMinus.push(pokemon[i].toLowerCase()); // Convertir a minúsculas
    }
    return { mayus: pokemonMayus, minus: pokemonMinus };
};

let poke = mostrarPoke();

// Mostrar en mayúsculas
let verPokeMayus = document.createElement("p");
verPokeMayus.textContent = "Mayúsculas: " + poke.mayus.join(", ");
contenedor.appendChild(verPokeMayus);

// Mostrar en minúsculas
let verPokeMinus = document.createElement("p");
verPokeMinus.textContent = "Minúsculas: " + poke.minus.join(", ");
contenedor.appendChild(verPokeMinus);
