var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    // Bloqueia o refresh da pagina
    e.preventDefault()

    // url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    // Valor do input Name
    let nome = document.querySelector('#name').value;

    // Concatena a url com inputName
    urlForm = urlForm + this.name.value;
    
    // Transforma os valores em minúsculas
    urlForm = urlForm.toLocaleLowerCase()

    // ID Resposta
    let resposta = document.querySelector('#resposta')

    //ID ImagemPokemon
    let imagem = document.getElementById('imgPokemon')
    
    // Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(response => response.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiscula(data.name) + '<br>' 
            html = html + 'Type: ' + maiscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"

        })
        .catch(function(err){
            console.log(err)
        })
})
function maiscula(val){
    return val[0].toUpperCase() + val.substr(1)
}