const pokemonName = document.querySelector('.pokemon__name')
const PokemonNumber = document.querySelector('.pokemon__number')
const PokemonImagem = document.querySelector('.pokemon__imagem')

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

const corpo = document.body;
let search_pokemon = 1;
let tipo = "";

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
        tipo = dados['types'][0]['type']['name'];
        console.log(tipo);
        backgroundColor(tipo);
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

function backgroundColor(color)
{
 switch(tipo){
    case "fire":
        document.body.style.background = "linear-gradient(to bottom, red, white)";
        break;
    case "electric":
            document.body.style.background = "linear-gradient(to bottom, rgb(223, 241, 90), white)";
            break;
    case "water":
                document.body.style.background = "linear-gradient(to bottom, rgb(14, 56, 241), white)";
                break;
    case "grass":
                document.body.style.background = "linear-gradient(to bottom, rgb(90, 241, 90), white)";
                break;
    case "ghost":
                document.body.style.background = "linear-gradient(to bottom, rgb(120, 14, 241), rgb(0, 0, 0))";
                break;
    case "psychic":
                document.body.style.background = "linear-gradient(to bottom, rgb(255, 192, 203), rgb(0, 0, 0))";
                break;
    case "rock":
                document.body.style.background = "linear-gradient(to bottom, rgb(182, 130, 82), white)";
                break;
    case "bug":
                document.body.style.background = "linear-gradient(to bottom, rgb(168, 189, 66), white)";
                break;
    case "normal":
                document.body.style.background = "linear-gradient(to bottom, #888, white)";
                break;
    case "poison":
                document.body.style.background = "linear-gradient(to bottom, rgb(85, 107, 164), white)";
                break;
    case "ground":
                document.body.style.background = "linear-gradient(to bottom, rgb(222, 180, 89), white)";
                break;
    case "fairy":
                document.body.style.background = "linear-gradient(to bottom, rgb(242, 183, 143), white)";
                break;
    case "fighting":
                document.body.style.background = "linear-gradient(to bottom, rgb(194, 81, 128), white)";
                break;
    case "ice":
                document.body.style.background = "linear-gradient(to bottom, rgb(153, 217, 234), white)";
                break;
    case "dragon":
                document.body.style.background = "linear-gradient(to bottom, rgb(112, 88, 77), white)";
                break;
    case "steel":
                document.body.style.background = "linear-gradient(to bottom, rgb(184, 184, 184), white)";
                break;
    case "dark":
                document.body.style.background = "linear-gradient(to bottom, rgb(112, 88, 77), white)";
                break;
   
    default:
        document.body.style.background = "linear-gradient(to bottom, rgb(90, 138, 241), white)";
 }
}

renderizaPokemon(search_pokemon);