import React from 'react';

import './styles.css';

import ImgHome from '../../assets/background-home.jpg';
import ImgCenter from '../../assets/logo-chaordic.png';
import ImgFacebook from '../../assets/icon-facebook.png';
import ImgTwitter from '../../assets/icon-twitter.png';

export default function Home() {
    return(
        <div className="home-container">
        <header>
            <img src={ImgCenter} alt="center"/>
        </header>

        <section className="pre-header">
            <ul>
                <li>
                    <article>
                    <div >
                        <img src={ImgHome} alt="home" className="pos-header"/>
                    </div>
                    </article>
                </li>
                <li  >
                    <div>
                    <article>
                    <h1 style={{textAlign: "center"}}>Top 5</h1>
                        <ul style={{textAlign: "center"}}>Teste1</ul>
                        <ul style={{textAlign: "center"}}>Teste2</ul>
                        <ul style={{textAlign: "center"}}>Teste3</ul>
                        <ul style={{textAlign: "center"}}>Teste4</ul>
                        <ul style={{textAlign: "center"}}>Teste5</ul>
                    </article>

                        {/* <img src={ImgHome} alt="home"/> */}
                    </div>
                </li>
                <li>
                    <div style={{textAlign: "center"}}>
                        <h1>Hits</h1>

                        <h5>33.33.333</h5>
                        {/* <img src={ImgHome} alt="home"/> */}
                    </div>
                </li>

            </ul>
        </section>

        <footer>
            <li className="icon-twi">
            <img src={ImgTwitter} alt="Twitter" />
            </li>
            <li className="icon-fa">
            <img src={ImgFacebook} alt="facebook" />
            </li>
        </footer>
        
        
    </div>
    );
}