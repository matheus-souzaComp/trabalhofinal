const APIKEY = '5a976adf57276b5aa87cc671b75a70fe'
const ENDPOINT = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DETALHES= 'https://www.themoviedb.org/movie/';
let PAGE = 1
let QUANTIDADE = 0
let images 

const elem2 = document.getElementById('btnProcura')
elem2.addEventListener ('click',  () => {
    //div.style.display = "block";
    let recebe = document.getElementById('buscar-filme').value
    fetch(`${ENDPOINT}/search/movie?api_key=${APIKEY}&query=${recebe}&language=pt-BR`)
       .then (res2 => res2.json())
       .then (data => {
            let str2 = ''
            for (x=0; x< data.results.length; x++) {
                let filme = data.results[x];
                str2 += 
                //window.open(window.location.href = "lancamentos.html",'_blank')
                `<div class="card col-md-4 col-sm-6" style="width: 18rem;">
                <img src="${IMG_URL}${filme.poster_path}" class="card-img-top" style="min-width: 300px">
                <div class="card-body">
                  <h5 class="card-title">${filme.title}</h5> 
                  <p class="card-text">${filme.overview}</p>
                  <a href="${DETALHES}${filme.id}" class="btn btn-primary">Mais detalhes</a>
                </div>
              </div>`
            }
            //window.open("lancamentos.html", "mozillaWindow", "popup");
            
            //window.open(window.location.href = "lancamentos.html",'_blank')
            document.getElementById('tela2').innerHTML = str2
            document.getElementById("LimpaPagina").style.display = "none";
            document.getElementById("LimpaPagina2").style.display = "none";
       } )
       .catch (err => console.log (`Deu ruim: ${err.message}`))
}) 


function assinar(){
  window.location.href = "lancamentos.html"
}


const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const elem = document.getElementById('emdestaque')



fetch(`${ENDPOINT}/movie/popular?api_key=${APIKEY}&language=pt-BR`)
       .then (res => res.json())
       .then (data => {
            let str = ''
            images=data.results
            for (x=0; x< 4; x++) {
                str += `<div class="col-md-3 d-flex justify-content-center">
                            <div class="card" style="width: 15rem;">
                               <img class="card-img-top" src="${IMG_URL}/${data.results[x].poster_path}" alt="Imagem de capa do filme ${data.results[x].title}" onclick="expandDetails(${x})">
                               <h5 class="card-title text-center">${data.results[x].title}</h5>
                            </div>
                        </div>
                        `
            }
            document.getElementById('emdestaque').innerHTML = str
       })
       .catch (err => console.log (`Deu ruim: ${err.message}`))

       
const buttons = document.getElementsByClassName("dropdown-item");


const buttonPressed = e => {
  var genre_id_escolhido = e.target.value
    let str3 = ''
    fetch(`${ENDPOINT}/movie/popular?api_key=${APIKEY}&language=pt-BR&page=${PAGE}`)
      .then (res2 => res2.json())
      .then (data => {
        for (x=0; x< data.results.length; x++) 
        {
          if (data.results[x].genre_ids.includes(+genre_id_escolhido))
          {
              let filme = data.results[x];
              str3 += 
              //window.open(window.location.href = "lancamentos.html",'_blank')
              `<div class="col-md-3 d-flex justify-content-center">
                <div class="card" style="width: 15rem;">
                  <img class="card-img-top" src="${IMG_URL}/${data.results[x].poster_path}" alt="Imagem de capa do filme ${data.results[x].title}" onclick="expandDetails(${x})>
                  <h5 class="card-title text-center">${data.results[x].title}</h5>
                </div>
            </div>
            `
          }
        }
        //window.open("lancamentos.html", "mozillaWindow", "popup");
        
        //window.open(window.location.href = "lancamentos.html",'_blank')
        document.getElementById('emdestaque').innerHTML = str3
      })
      .catch (err => console.log (`Deu ruim: ${err.message}`))
      PAGE += 1
      console.log(PAGE)
}

const maisfilmesdestaque = document.getElementById('maisfilmesdestaque')
maisfilmesdestaque.addEventListener ('click',  () => {
  let str3 = ''
  fetch(`${ENDPOINT}/movie/popular?api_key=${APIKEY}&language=pt-BR&page=${PAGE}`)
      .then (res2 => res2.json())
      .then (data => {
          for (x=0; x< data.results.length; x++) {
                  let filme = data.results[x];
                  str3 += 
                  //window.open(window.location.href = "lancamentos.html",'_blank')
                  `<div class="col-md-3 d-flex justify-content-center">
                    <div class="card" style="width: 15rem;">
                      <img class="card-img-top" src="${IMG_URL}/${data.results[x].poster_path}" alt="Imagem de capa do filme ${data.results[x].title}" onclick="expandDetails(${x})>
                      <h5 class="card-title text-center">${data.results[x].title}</h5>
                    </div>
                </div>
                `
          }
          //window.open("lancamentos.html", "mozillaWindow", "popup");
          
          //window.open(window.location.href = "lancamentos.html",'_blank')
          document.getElementById('emdestaque').innerHTML = str3
      } )
      .catch (err => console.log (`Deu ruim: ${err.message}`))
      PAGE += 1
  })

       
for (let button of buttons) {
 button.addEventListener("click", buttonPressed);
}
       

/*
const elem_emdestaque_aventura = document.getElementById('emdestaque_aventura')
elem_emdestaque_aventura.addEventListener ('click',  () => {
           //div.style.display = "block";
           const genre_id_escolhido = 28
           str2 = ''
           fetch(`${ENDPOINT}/movie/popular?api_key=${APIKEY}&language=pt-BR`)
              .then (res2 => res2.json())
              .then (data => {
                   let str3 = ''
                   for (x=0; x< data.results.length; x++) {
                       if (data.results[x].genre_ids.includes(genre_id_escolhido))
                       {
                          let filme = data.results[x];
                          str3 += 
                          //window.open(window.location.href = "lancamentos.html",'_blank')
                          `<div class="col-md-3 d-flex justify-content-center">
                            <div class="card" style="width: 15rem;">
                               <img class="card-img-top" src="${IMG_PATH}/${data.results[x].poster_path}" alt="Imagem de capa do filme ${data.results[x].title}">
                               <h5 class="card-title text-center">${data.results[x].title}</h5>
                            </div>
                        </div>
                        `
                       }
                   }
                   //window.open("lancamentos.html", "mozillaWindow", "popup");
                   
                   //window.open(window.location.href = "lancamentos.html",'_blank')
                   document.getElementById('emdestaque').innerHTML = str3
              } )
              .catch (err => console.log (`Deu ruim: ${err.message}`))
       })
*/


function expandDetails(index) {
  console.log('clicou', index)
  let currentImage = images[index]
  editado =   `<div class="text-center border border-gray" style="display: flex;">
                  <div id="containerL">
                      <img src="${IMG_PATH}${currentImage.poster_path}" ></img>
                  </div>
                  <div style="display: grid;align-items: center">
                      <div class="card bg-light mb-3" >
                          <p class="h3 card-title">T??tulo</p>
                          <p class="h5 card-text">${images[index].title}</p>
                      </div>
                      <div class="card bg-light mb-3" >
                          <p class="h3 card-title">Descri????o</p>
                          <p class="h5 card-text">${images[index].overview}</p>
                      </div>
                      <div class="card bg-light mb-3" >
                          <p class="h3 card-title">Data de lan??amento</p>
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
                          <p class="h3 card-title">Nota m??dia</p>
                          <p class="h4 card-text">${images[index].vote_average}</p>
                      </div>
                  </div>
              </div>
              `
  document.getElementById('maisDetalhes').innerHTML = editado

  // setTimeout(zerarData, 6000);
}

function zerarData() {
  document.getElementById('maisDetalhes').innerHTML = ""
}