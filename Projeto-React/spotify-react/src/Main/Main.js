import React, { useEffect } from "react";
import './Main.css';
import Img1 from '../assets/playlist/1.jpeg';
import Img2 from '../assets/playlist/2.jpeg';
import Img3 from '../assets/playlist/3.jpeg';
import Img4 from '../assets/playlist/4.jpeg'; 
import Img5 from '../assets/playlist/5.jpeg';
import Img6 from '../assets/playlist/6.jpeg';
import Img7 from '../assets/playlist/7.jpeg';
import Img8 from '../assets/playlist/8.jpeg';
import Img9 from '../assets/playlist/9.jpeg';
import Img10 from '../assets/playlist/10.jpeg';
import Img11 from '../assets/playlist/11.jpeg';
import Img12 from '../assets/playlist/12.jpeg';
import Img13 from '../assets/playlist/13.jpeg';
import Img14 from '../assets/playlist/14.jpeg';
import Img15 from '../assets/playlist/15.jpeg';

const Main = () => {
    const span__array = ['Boas Festas', 'Feitos para você', 'Lançamentos', 'Creators', 'Para treinar', 'Podcasts', 'Sertanejo', 'Samba e pagode', 'Funk', 'MPB', 'Rock', 'Hip Hop', 'Indie', 'Relax', 'Música Latina'];
    const image_array = [Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13,Img14,Img15];

    useEffect(() => {
        const searchInput = document.getElementById('search-input');
        const resultSearch = document.getElementById('result-search');
        const resultMain = document.getElementById('result-main');

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
    }, [])

    return (
        <div className="main-container">
            <div className="result-main" id="result-main">
                <h1 className="main__title">Bom dia</h1>
                <h1 className="main__subtitle">Navegar por todas as seções</h1>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {span__array.map((item, index) => (
                                <a class="cards" href="#"><div class={`cards card${index+1}`}><img src={image_array[index]} alt=''></img><span>{item}</span></div></a>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-search" className="hidden">
                <div className="grid-container">
                </div>
            </div>
        </div>
    );
};

export default Main;
