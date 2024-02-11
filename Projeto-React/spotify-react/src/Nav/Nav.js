import React from "react";
import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className="nav">
                <nav className="navigate">
                    <ul>
                        <li><a href=""><span className="fa fa-home"></span><span className="margin__span">Início</span></a></li>
                        <li><a href=""><span className="fa fa-key"></span><span className="margin__span">Entrar</span></a></li>
                        <li><a href=""><span className="fa fa-pen"></span><span className="margin__span">Cadastrar</span></a></li>
                    </ul>
                </nav>
            </div>
            <div className="library nav">
                <nav className="library__nav navigate">
                    <button className="library__button">
                        <span className="fa fa-book"></span><span className="margin__span">Biblioteca</span>      
                    </button>
                    <button className="library__button" onclick="openSection()">
                        <span id="signal" className="fa fa-plus"></span>  
                    </button>
                </nav>
                <section className="section-playlist">
                    <span className="text title">Crie sua primeira Playlist.</span>
                    <span className="text subtitle">É fácil, deixa eu te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Adicionar Playlist</span>
                    </button>
                </section>
                <div className="cookies">
                    <a href="">cookies</a>
                </div>
                <div className="languages">
                    <button>
                        <a href=""><span className="fa fa-globe"></span></a>
                    </button>
                    <select className="languages__select">
                        <option value="Portuguese">Português</option>
                        <option value="English">English</option>
                        <option value="Spanish">Español</option>
                        <option value="German">Deutsch</option>
                        <option value="Chinese">中文</option>
                        <option value="Japanese">日本語</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Nav;
