document.querySelector("#search").addEventListener("click", getPokemon);

const removeDiv = document.getElementById("start");

document.querySelector("#search").addEventListener('click', () => {
    if (removeDiv) {
       removeDiv.remove();
   }
});


function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getPokemon(e) {

    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);


    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
        <div class="section image">
            <img src="${data.sprites.other.home.front_default}" alt="${capitaliseFirstLetter(data.name)}">
        </div>
        <div class="section name">
            <h1 class="header">Name: ${capitaliseFirstLetter(data.name)}</h1>
        </div>
        <div class="section type">
            <h1 class="header">Type: ${(data.types.map((type) => capitaliseFirstLetter(type.type.name)).join(" / "))}</h1>
        </div>
        <div class="section number">
            <h1 class="header">Number: #${data.id}</h1>
        </div>

        `;
        }).catch((err) => {
            console.log("Pokemon not found", err);
        });

    e.preventDefault();
}
