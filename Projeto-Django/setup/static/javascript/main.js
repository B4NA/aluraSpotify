const span__array = ['Boas Festas', 'Feitos para você', 'Lançamentos', 'Creators', 'Para treinar', 'Podcasts', 'Sertanejo', 'Samba e pagode', 'Funk', 'MPB', 'Rock', 'Hip Hop', 'Indie', 'Relax', 'Música Latina']

document.addEventListener("DOMContentLoaded", function() {
  // Offer list
  for (let index = 1; index <= span__array.length; index++) {
    document.querySelector(".offer__list-item").innerHTML += `<a class="cards" href="/cards/${index}"><div class="cards card${index}"><img src="static/assets/playlist/${index}.jpeg"><span>${span__array[index-1]}</span></div></a>`;
  };
});

const searchInput = document.getElementById('search-input');
const resultSearch = document.getElementById('result-search');
const resultMain = document.getElementById('result-main');

function redirect(Bool) {
  if (Bool === true) {
    if (event.key === 'Enter') {
      let name = searchInput.value;
      location.url = `http://localhost:8000/search/${name}`;
    }
    else {
      return;
    };
  }
  else {
    let name = searchInput.value;
    document.URL = `http://localhost:8000/search/${name}`;
  };
};

function displayResults(result) {
  resultMain.classList.add('hidden');

  let index = 1;
  let artistGrid = document.querySelector('.grid-container');
  artistGrid.innerHTML = '';

  result.forEach(element => {
    artistGrid.innerHTML += `<div class="artist-card" id="${index}"><div class="card-img"><img id="artist-img${index}" class="artist-img" /><div class="play"><span class="fa fa-solid fa-play"></span></div></div><div class="card-text"><a title="Foo Fighters" class="vst" href=""></a><span class="artist-name" id="artist-name${index}"></span><span class="artist-categorie">Artista</span></a></div></div>`
    let artistName = document.getElementById(`artist-name${index}`);
    let artistImage = document.getElementById(`artist-img${index}`);
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
    index += 1;
});

  resultSearch.classList.remove('hidden');
};

function requestApi(searchTerm) {
  // O parâmetro name_like da URL abaixo pode não funcionar em algumas versões
  // Há um código em Python para ler JSON e procurar os artistas
  const url = `http://localhost:3000/artists`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
};

document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === '') {
    resultSearch.classList.add('hidden');
    resultMain.classList.remove('hidden');
    return
  }
  else {
    requestApi(searchTerm);
  }
});