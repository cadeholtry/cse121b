import { typeBuilder, genBuilder } from "./project_utilities.js";
const pokemonElement = document.querySelector("#pokemon");
let pokemonList = [];
let height = 1.0;
let weightInput = 1.0;
let filter1 = (mon => mon.id > 0);
let filter2 = (mon => mon.id > 0);
let filter3 = (mon => mon.id > 0);
let filter4 = (mon => mon.id > 0);
let filter5 = (mon => mon.id > 0);
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
            filter1 = typeBuilder("Normal");
            break;
        case "fighting":
            filter1 = typeBuilder("Fighting");
            break;
        case "water":
            filter1 = typeBuilder("Water");
            break;
        case "fire":
            filter1 = typeBuilder("Fire");
            break;
        case "grass":
            filter1 = typeBuilder("Grass");
            break;
        case "electric":
            filter1 = typeBuilder("Electric");
            break;
        case "poison":
            filter1 = typeBuilder("Poison");
            break;
        case "bug":
            filter1 = typeBuilder("Bug");
            break;
        case "psychic":
            filter1 = typeBuilder("Psychic");
            break;
        case "ghost":
            filter1 = typeBuilder("Ghost");
            break;
        case "ground":
            filter1 = typeBuilder("Ground");
            break;
        case "flying":
            filter1 = typeBuilder("Flying");
            break;
        case "ice":
            filter1 = typeBuilder("Ice");
            break;
        case "rock":
            filter1 = typeBuilder("Rock");
            break;
        case "dragon":
            filter1 = typeBuilder("Dragon");
            break;
        case "steel":
            filter1 = typeBuilder("Steel");
            break;
        case "dark":
            filter1 = typeBuilder("Dark");
            break;
        case "fairy":
            filter1 = typeBuilder("Fairy");
            break;
    };
    switch (document.querySelector("#type2").value) {
        case "normal":
            filter2 = typeBuilder("Normal");
            break;
        case "fighting":
            filter2 = typeBuilder("Fighting");
            break;
        case "water":
            filter2 = typeBuilder("Water");
            break;
        case "fire":
            filter2 = typeBuilder("Fire");
            break;
        case "grass":
            filter2 = typeBuilder("Grass");
            break;
        case "electric":
            filter2 = typeBuilder("Electric");
            break;
        case "poison":
            filter2 = typeBuilder("Poison");
            break;
        case "bug":
            filter2 = typeBuilder("Bug");
            break;
        case "psychic":
            filter2 = typeBuilder("Psychic");
            break;
        case "ghost":
            filter2 = typeBuilder("Ghost");
            break;
        case "ground":
            filter2 = typeBuilder("Ground");
            break;
        case "flying":
            filter2 = typeBuilder("Flying");
            break;
        case "ice":
            filter2 = typeBuilder("Ice");
            break;
        case "rock":
            filter2 = typeBuilder("Rock");
            break;
        case "dragon":
            filter2 = typeBuilder("Dragon");
            break;
        case "steel":
            filter2 = typeBuilder("Steel");
            break;
        case "dark":
            filter2 = typeBuilder("Dark");
            break;
        case "fairy":
            filter2 = typeBuilder("Fairy");
            break;
    };
    switch (document.querySelector("#gen").value) {
        case "gen1":
            filter3 = genBuilder(0, 152);
            break;
        case "gen2":
            filter3 = genBuilder(151, 252);
            break;
        case "gen3":
            filter3 = genBuilder(251, 387);
            break;
        case "gen4":
            filter3 = genBuilder(386, 494);
            break;
        case "gen5":
            filter3 = genBuilder(493, 650);
            break;
        case "gen6":
            filter3 = genBuilder(649, 722);
            break;
        case "gen7":
            filter3 = genBuilder(721, 810);
            break;
        case "gen8":
            filter3 = genBuilder(809, 899);
            break;
    };
    switch (document.querySelector("#height").value) {
        case "greater":
            height = Number(document.querySelector('#heightInput').value);
            filter4 = (mon => mon.profile.height > `${height} m`);
            break;
        case "less":
            height = Number(document.querySelector('#heightInput').value);
            filter4 = (mon => mon.profile.height < `${height} m`);
            break;
        case "equal":
            height = Number(document.querySelector('#heightInput').value);
            filter4 = (mon => mon.profile.height == `${height} m`);
            break;
    };
    switch (document.querySelector("#weight").value) {
        case "greaterW":
            weightInput = Number(document.querySelector('#weightInput').value);
            filter5 = (mon => mon.profile.weight > `${weightInput} kg`);
            break;
        case "lessW":
            weightInput = Number(document.querySelector('#weightInput').value);
            filter5 = (mon => mon.profile.weight < `${weightInput} kg`);
            break;
        case "equalW":
            weightInput = Number(document.querySelector('#weightInput').value);
            filter5 = (mon => mon.profile.weight == `${weightInput} kg`);
            break;
    };
    displayPokemon(mons.filter(filter1).filter(filter2).filter(filter3).filter(filter4).filter(filter5));
};
function whatToGuess() {
    let listLength = pokemonList.filter(filter1).filter(filter2).filter(filter3).filter(filter4).filter(filter5).length;
    let index = Math.floor(Math.random() * listLength);
    let singleMon = pokemonList.filter(filter1).filter(filter2).filter(filter3).filter(filter4).filter(filter5)[index];
    document.querySelector("#guess").value = `You should guess ${singleMon.name.english}!`;
};
document.querySelector('#whatToGuess').addEventListener("click", whatToGuess);
document.querySelector("#type1").addEventListener("change", () => sortBy(pokemonList));
document.querySelector("#type2").addEventListener("change", () => sortBy(pokemonList));
document.querySelector("#gen").addEventListener("change", () => sortBy(pokemonList));
document.querySelector("#height").addEventListener("change", () => sortBy(pokemonList));
document.querySelector("#weight").addEventListener("change", () => sortBy(pokemonList));
getAllMons();