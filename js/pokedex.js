const pokemonName = document.querySelector('.pokemon__name')
const PokemonNumber = document.querySelector('.pokemon__number')
const PokemonImagem = document.querySelector('.pokemon__imagem')

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

const corpo = document.body;
let search_pokemon = 1;

// Fetch - Requisição HTTPS Assíncronas
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await APIResponse.json();

    return dados;
}

const renderizaPokemon = async (pokemon) => {

    pokemonName.innerHTML = "Loading . . .";
    PokemonNumber.innerHTML = "";


    const dados = await fetchPokemon(pokemon);

    input.value = "";
    if (dados) {
        PokemonImagem.style.display = 'block';

        pokemonName.innerHTML = dados.name;
        PokemonNumber.innerHTML = dados.id;
        PokemonImagem.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        let tipo = dados['types']['0']['type']['name'];
        search_pokemon = dados.id;
    } else {
        PokemonImagem.style.display = 'none';
        pokemonName.innerHTML = 'Not found :c';
        PokemonNumber.innerHTML = '';
    }

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderizaPokemon(input.value.toLowerCase());

});

buttonPrev.addEventListener("click", () => {
    if (search_pokemon > 1) {
        search_pokemon -= 1;
        renderizaPokemon(search_pokemon);
    }else{
        search_pokemon = 649;
        renderizaPokemon(search_pokemon)

    }
});

buttonNext.addEventListener("click", () => {
    if (search_pokemon < 649) {
        search_pokemon += 1;
        renderizaPokemon(search_pokemon)
    } else {
        search_pokemon = 1;
        renderizaPokemon(search_pokemon)
    }

});

renderizaPokemon(search_pokemon);