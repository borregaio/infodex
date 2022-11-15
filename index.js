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

        <div class="section name">
            <h1 class="header">${capitaliseFirstLetter(data.name)}</h1>
        </div>

        <div class="section type">
            <h1 class="header">${capitaliseFirstLetter(data.types[0].type.name)}</h1>
        </div>

        <div class="section number">
            <h1 class="header">#${data.id}</h1>
        </div>

        <div class="section image">
            <img src="${data.sprites.other['official-artwork'].front_default}" alt="${capitaliseFirstLetter(data.name)}">
        </div>

        <div class="section description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis est sit amet dui accumsan
                tempor. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec eu tortor ex. Curabitur pretium purus nisi, eu placerat urna dignissim porttitor.
                Nam euismod nisi in augue lobortis, id rhoncus mi auctor. Cras molestie elit vitae facilisis porttitor.
            </p>
        </div>
        `;
        }).catch((err) => {
            console.log("Pokemon not found", err);
        });

    e.preventDefault();
}
