import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import './styles.css';
import ImgCenter from '../../assets/logo-chaordic.png';
import Footer from "../../components/shared/footer";
import api from "../../services/api";


export default function Home() {

    const [url, setUrl] = useState('');
    const [urls, setUrls] = useState([]);

    async function handleLink(e) {
        e.preventDefault();
        try {
            const response = await api.post("links", { url });
            console.log(response);
            localStorage.setItem("setLink", url);
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
        <div className="container">
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
                                onChange={e => setUrl(e.target.value)}></input>
                        </div>
                        <button className="btn">ENCURTAR</button>
                    </div>
                </div>
            </form>

            <div className="prefooter">
                <div className="container">
                    <div className="d-flex justify-content-center py-5">
                        <div className="d-flex justify-content-center texto">
                            <h3 className="color" style={{ fontSize:50, textAlign: 'center', color: '#9e2e3f'}}>Top 5</h3>
                        </div>
                    </div>
                    <Row className="d-flex justify-content-center">
                        <Col className="ml-4 py-5" xs={5}>
                            {urls.map(item => (
                                <div className="ul-url" style={{ listStyle: "none" }} key={item.id}>
                                    <Row>
                                        <Col>
                                        <a href={item.shortUrl}  style={{ fontSize: 15, color: '#9e2e3f',textDecoration:'none',fontWeight:'bold' }}>{item.shortUrl}</a>
                                        </Col>
                                        <Col xs lg={1}>
                                        <p style={{color:'grey'}}>{item.hits}</p>
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="container">
                <div className="container-custom">
                    <h1 className="text-center">HITS</h1>
                </div>
            </div>
            <Footer id="sticky-footer" />
        </div>
    );
}