import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h1 className="footer__title">Teste o Spotify Premium de graça</h1>
                <h1 className="footer__subtitle">Inscreva-se para curtir músicas e podcasts de forma ilimitada e sem anúncios.</h1>
            </div>
            <button>
                <a href="#">Se Inscreva</a>
            </button>
        </footer>
    );
};

export default Footer;
