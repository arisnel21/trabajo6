let contenedor = document.getElementById("container");

function fibonacciLoopBigInt(n) {
    let a = 0n; // BigInt para manejar números grandes
    let b = 1n;
    let resultado = [];

    for (let i = 0; i < n; i++) {
        resultado.push(a.toString()); // Convertir a string para manejar BigInt en HTML
        let continuar = a + b;
        a = b;
        b = continuar;
    }

    return resultado;
}

// Generar la serie de Fibonacci
let fibonacci = fibonacciLoopBigInt(1000);

// Filtrar pares e impares
let pares = fibonacci.filter(num => BigInt(num) % 2n === 0n);
let impares = fibonacci.filter(num => BigInt(num) % 2n !== 0n);

// Crear listas separadas para pares e impares
let listaPares = document.createElement("ul");
let listaImpares = document.createElement("ul");

pares.forEach(num => {
    let item = document.createElement("li");
    item.textContent = num; // Agregar número par
    listaPares.appendChild(item);
});

impares.forEach(num => {
    let item = document.createElement("li");
    item.textContent = num; // Agregar número impar
    listaImpares.appendChild(item);
});

// Crear encabezados para las listas
let tituloPares = document.createElement("h2");
tituloPares.textContent = "Números Pares";

let tituloImpares = document.createElement("h2");
tituloImpares.textContent = "Números Impares";


// Agregar todo al contenedor
contenedor.appendChild(tituloPares);
contenedor.appendChild(listaPares);
contenedor.appendChild(tituloImpares);
contenedor.appendChild(listaImpares);