import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import './styles.css';
import ImgCenter from '../../assets/logo-chaordic.png';
import Info from '../../components/shared/info';
import Footer from "../../components/shared/footer";
import api from "../../services/api";


export default function Home() {

    const [url, setUrl] = useState('');
    const [urls, setUrls] = useState('');

    async function handleLink(e) {
        e.preventDefault();
        try {

        const response = await api.post("links", { url });
        console.log(response);
        localStorage.setItem("setLink", url);
        if(response){
            alert('Link encurtado!');
        }
        } catch (err) {
        alert(err);
        }
    }

    useEffect(() => {
        api.get("links")
          .then((response) => {
            setUrls(response.data);
          });
      });
    
    
    return (
        <div className="home-container">
            <header>
                <img src={ImgCenter} alt="center" />
            </header>
            <form onSubmit={handleLink}>
            <div className="principal">
                <br></br>
                <br></br>
                <div className="py-5">
                    <h1>Encurte seus links</h1>
                    <p>Links são longos. Encurte os links que você deseja compartilhar e acompanhe<br></br>
                        enquanto viajam através da internet.
                    </p>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="form-group col-md-6">
                        <input 
                        className="form-control" 
                        placeholder="Cole o seu link aqui" 
                        style={{ color: 'white' }}
                        value={url}
                        onChange={e=>setUrl(e.target.value)}></input>
                    </div>
                    <button className="btn">ENCURTAR</button>
                </div>


            </div>
            </form>
            <Info />
            <div className="py-4 prefooter">
        <div className="container">
          <Row className="d-flex justify-content-center">
            <Col className="ml-4 py-5" xs={16}>
              {urls.map(urlItem =>{
                  <ul className="list" style={{ listStyle: "none" }} key={urls}>
                  <li><h3 className="font-weight-bold color texto" style={{ textAlign:'center'}}>Hits</h3></li>
              <li className="color" style={{fontSize:19, textAlign:'center'}}>{urlItem.url}</li>
                  <li className="click">Cliques em links</li>
                </ul>
              })}
            </Col>
          </Row>
        </div>
      </div>
            <Footer id="sticky-footer" />
        </div>
    );
}