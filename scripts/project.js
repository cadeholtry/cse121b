
const pokemonElement = document.querySelector("#pokemon");
let pokemonList = [];
const displayPokemon = (mons) => {
    mons.forEach(mon => {
        let article = document.createElement("article");
        let pokemonName = document.createElement("h3");
        pokemonName.textContent = mon.name.english;
        let pokemonImg = document.createElement("img");
        pokemonImg.setAttribute("src", mon.image.hires);
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
            displayPokemon(mons.filter(mon => mon.type[0].includes("Normal")));
            break;
        case "fighting":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Fighting")));
            break;
        case "water":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Water")));
            break;
        case "fire":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Fire")));
            break;
        case "grass":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Grass")));
            break;
        case "electric":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Electric")));
            break;
        case "poison":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Poison")));
            break;
        case "bug":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Bug")));
            break;
        case "psychic":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Psychic")));
            break;
        case "ghost":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Ghost")));
            break;
        case "ground":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Ground")));
            break;
        case "flying":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Flying")));
            break;
        case "ice":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Ice")));
            break;
        case "rock":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Rock")));
            break;
        case "dragon":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Dragon")));
            break;
        case "steel":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Steel")));
            break;
        case "dark":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Dark")));
            break;
        case "fairy":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Fairy")));
            break;
    }
    switch (document.querySelector("#type2").value) {
        case "normal":
            if (mons.type.length == 2) {
                displayPokemon(mons.filter(mon => mon.type[1].includes("Normal")));
            }
            break;
        case "fighting":
            if (mons.type.length == 2) {
            displayPokemon(mons.filter(mon => mon.type[1].includes("Fighting")));
            }
            break;
        case "water":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Water")));
            break;
        case "fire":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Fire")));
            break;
        case "grass":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Grass")));
            break;
        case "electric":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Electric")));
            break;
        case "poison":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Poison")));
            break;
        case "bug":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Bug")));
            break;
        case "psychic":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Psychic")));
            break;
        case "ghost":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Ghost")));
            break;
        case "ground":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Ground")));
            break;
        case "flying":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Flying")));
            break;
        case "ice":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Ice")));
            break;
        case "rock":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Rock")));
            break;
        case "dragon":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Dragon")));
            break;
        case "steel":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Steel")));
            break;
        case "dark":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Dark")));
            break;
        case "fairy":
            displayPokemon(mons.filter(mon => mon.type[0].includes("Fairy")));
            break;
        case "none":
            displayPokemon(mons);
            break;
    
    }
};
/* Event Listener */
document.querySelector("#type1").addEventListener("change", () => sortBy(pokemonList));
document.querySelector("#type2").addEventListener("change", () => sortBy(pokemonList));
getAllMons();
// test