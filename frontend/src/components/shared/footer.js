import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

//Style
import "../styles/footer.css";

//Assets
import { FaFacebook} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <div className="py-4 footer">
        <div className="container">
          <Row className="d-flex justify-content-between">
            <Col>
              <p className="text">chr.dc</p>
            </Col>
            <Col className="ml-2" xs={15}>
              <AiFillTwitterCircle size={30} color="#777" />
            </Col>
            <Col className="ml-2" xs={14}>
              <FaFacebook size={26} color="#777" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
