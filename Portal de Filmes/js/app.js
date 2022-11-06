const APIKEY = 'd2331445bc4cd7caa6a267dacead2fec';
const ENDPOINT = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
// const elem = document.getElementById('emdestaque')
let images 

fetch(`${ENDPOINT}/movie/popular?api_key=${APIKEY}&language=pt-BR`)
       .then (res => res.json())
       .then (data => {
            let str = ''
            images=data.results
            console.log('here', images)
            for (x=0; x< 4; x++) {
                str += `<div class="col-md-3 d-flex justify-content-center" >
                            <div class="card" style="width: 15rem;">
                               <img class="card-img-top" src="${IMG_PATH}/${data.results[x].poster_path}" alt="Imagem de capa do filme ${data.results[x].title}" onclick="expandDetails(${x})">
                               <h5 class="card-title text-center">${data.results[x].title}</h5>
                               </div>
                            </div>
                        </div>
                        `
            }
            document.getElementById('emdestaque').innerHTML = str
       })
       .catch (err => console.log (`Deu ruim: ${err.message}`))

function expandDetails(index) {
    let currentImage = images[index]
    console.log(`${IMG_PATH}`)
    editado =   `<div class="text-center border border-gray" style="display: flex;">
                    <div id="containerL">
                        <img src="${IMG_PATH}${currentImage.poster_path}" ></img>
                    </div>
                    <div style="display: grid;align-items: center">
                        <div class="card bg-light mb-3" >
                            <p class="h3 card-title">Título</p>
                            <p class="h5 card-text">${images[index].title}</p>
                        </div>
                        <div class="card bg-light mb-3" >
                            <p class="h3 card-title">Descrição</p>
                            <p class="h5 card-text">${images[index].overview}</p>
                        </div>
                        <div class="card bg-light mb-3" >
                            <p class="h3 card-title">Data de lançamento</p>
                            <p class="h5 card-text">${images[index].release_date}</p>
                        </div>
                        <div class="card bg-light mb-3" >
                            <p class="h3 card-title">Contagem de votos</p>
                            <p class="h5 card-text">${images[index].vote_count}</p>
                        </div>
                        <div class="card bg-light mb-3" >
                            <p class="h3 card-title">Popularidade</p>
                            <p class="h5 card-text">${images[index].popularity}</p>
                        </div>
                        <div class="card bg-light mb-3" >
                            <p class="h3 card-title">Nota média</p>
                            <p class="h4 card-text">${images[index].vote_average}</p>
                        </div>
                    </div>
                </div>
                `
    document.getElementById('maisDetalhes').innerHTML = editado

    setTimeout(zerarData, 6000);
}

function zerarData() {
    document.getElementById('maisDetalhes').innerHTML = ""
}