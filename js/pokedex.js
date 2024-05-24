const pokemonName = document.querySelector('.pokemon__name')
const PokemonNumber = document.querySelector('.pokemon__number')
const PokemonImagem = document.querySelector('.pokemon__imagem')

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

// Fetch - Requisição HTTPS Assíncronas
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await APIResponse.json();

    return dados;
}

const renderizaPokemon = async (pokemon) => {
    const dados = await fetchPokemon(pokemon);

    pokemonName.innerHTML = dados.name;
    PokemonNumber.innerHTML = dados.id;
    PokemonImagem.src = dados['sprites']['versions']['generation-v']['animated']['front_default'];
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderizaPokemon(input.value);
})