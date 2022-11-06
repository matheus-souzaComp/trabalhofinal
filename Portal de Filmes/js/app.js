const APIKEY = 'd2331445bc4cd7caa6a267dacead2fec';
const ENDPOINT = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const elem = document.getElementById('emdestaque')

fetch(`${ENDPOINT}/movie/popular?api_key=${APIKEY}&language=pt-BR`)
       .then (res => res.json())
       .then (data => {
            let str = ''
            for (x=0; x< 4; x++) {
                str += `<div class="col-md-3 d-flex justify-content-center">
                            <div class="card" style="width: 15rem;">
                               <img class="card-img-top" src="${IMG_PATH}/${data.results[x].poster_path}" alt="Imagem de capa do filme ${data.results[x].title}" console.log('passou aqui tmb')>
                               <h5 class="card-title text-center">${data.results[x].title}</h5>
                            </div>
                        </div>
                        `
            }
            document.getElementById('emdestaque').innerHTML = str
       })
       .catch (err => console.log (`Deu ruim: ${err.message}`))
