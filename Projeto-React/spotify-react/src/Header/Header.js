import React from "react";
import './Header.css'
import SpotifyLogo from "../assets/icons/logo-spotify.png";
import Arrow from "../assets/icons/small-left.png";

const Header = () => {
    return (
        <header className="header">
            <div>
                <a href="#"><img className='logo-spotify' src={SpotifyLogo}></img></a>
            </div>
            <div className="search">
                <button className="arrow">
                    <img src={Arrow}></img>
                </button>
                <button className="arrow">
                    <img className="flip" src={Arrow}></img>
                </button>
                <span className="fa fa-search"></span><input id='search-input' className="search__input" name="search__input" type="search" placeholder="Pesquisar"></input>
            </div>
        </header>
    );
};

export default Header;
