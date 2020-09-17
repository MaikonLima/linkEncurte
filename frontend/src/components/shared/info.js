import React, { Component } from "react";
import "../styles/info.css";

class CardInfo extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center py-5">
                <div className="d-flex justify-content-center texto">
                    <h3 className="color" style={{ textAlign: 'center' }}>Top 5</h3>
                </div>
            </div>
        );
    }
}

export default CardInfo;