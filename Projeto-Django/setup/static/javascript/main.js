const searchInput = document.getElementById('search-input');
const resultSearch = document.getElementById('result-search');
const resultMain = document.getElementById('result-main');
const artistLang = ['Artista', 'Artist', 'Artista', 'Artista', 'Artiste', 'Künstler', 'Артист', '艺术家', 'アーティスト', '아티스트']

function redirect(Bool, Lang) {
  if (Bool===false && Lang===true) {
    let lang = document.querySelector('.languages__select').value;
    window.location.href = `http://127.0.0.1:8000/${lang}/`;
  }
  else if (Bool === true) {
    if (event.key === 'Enter') {
      let name = searchInput.value;
      let lang = document.querySelector('.languages__select').value;
      window.location.href = `http://127.0.0.1:8000/${lang}/search/${name}`;
    }
    else {
      return;
    };
  }
  else {
    let name = searchInput.value;
    let lang = document.querySelector('.languages__select').value;
    window.location.href = `http://127.0.0.1:8000/${lang}/search/${name}`;
  };
};

function displayResults(result, searchTerm) {
  resultMain.classList.add('hidden');

  let artistGrid = document.querySelector('.grid-container');
  let lang = document.querySelector('.languages__select').selectedIndex;

  artistGrid.innerHTML = '';

  result.forEach(element => {
    if (element.name.toLowerCase().includes(searchTerm) === true) {
      artistGrid.innerHTML += `<div class="artist-card"><div class="card-img"><img src="${element.urlImg}" class="artist-img" /><div class="play"><span class="fa fa-solid fa-play"></span></div></div><div class="card-text"><a title="${element.name}" class="vst" href=""></a><span class="artist-name">${element.name}</span><span class="artist-categorie">${artistLang[lang]} - ${element.genre}</span></a></div></div>`
    };
});

  resultSearch.classList.remove('hidden');
};

function requestApi(searchTerm) {
  // O parâmetro name_like da URL abaixo pode não funcionar em algumas versões
  // Há um código em Python para ler JSON e procurar os artistas
  const url = `http://localhost:3000/artists`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result, searchTerm))
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