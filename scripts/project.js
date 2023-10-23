
const pokemonElement = document.querySelector("#pokemon");
let pokemonList = [];
const displayPokemon = (mons) => {
    mons.forEach(mon => {
        let article = document.createElement("article");
        let pokemonName = document.createElement("h3");
        pokemonName.textContent = mon.name.english;
        let pokemonImg = document.createElement("img");
        pokemonImg.setAttribute("src", mon.image.sprite);
        pokemonImg.setAttribute("alt", mon.name.english);
        article.appendChild(pokemonName);
        article.appendChild(pokemonImg);
        pokemonElement.appendChild(article);
    });
};
const getAllMons = async () => {
    const response = await fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json");
    pokemonList = await response.json();
    displayPokemon(pokemonList);
};
const reset = () => {
    pokemonElement.innerHTML = '';
};
const sortBy = (mons) => {
    reset();
    switch (document.querySelector("#type1").value) {
        case "normal":
            displayPokemon(mons.filter(mon => mon.type.includes("Normal")));
            break;
        case "notutah":
            displayPokemon(mons.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayPokemon(mons.filter(temple => temple.dedicated < "1950, 0, 1"));
            break;
        case "all":
            displayPokemon(mons);
            break;
    }
};
/* Event Listener */
document.querySelector("#type1").addEventListener("change", () => sortBy(pokemonList));
getAllMons();
// test