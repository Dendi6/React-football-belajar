import React from "react";
import { Card, Row, Col } from "react-materialize";

function About() {
    return (
        <div className="container">
            <Card className="card-detail">
                <Row>
                    <Col s={12} m={6}>
                        <img src="images/football.svg" className="images" />
                    </Col>
                    <Col s={12} m={6}>
                        <div className="detail-about">
                            <h6>About Us</h6>
                            <p>Aplikasi ini di bangun menggunakan React JS dan Materialize sebagai framework css. Tujuan dari aplikasi adalah untuk belajar React js</p>
                            <br></br>
                            <p>Selamat Menggunakan, Terima Kasih</p>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div >
    );
}

export default About;