import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { baseURL } from "../../config/ConfigApi";
import Loading from "../../component/Loading";
import compareValues from "../../component/Sorting";

const Axios = require('axios');

function Home() {
    const [league, setLeague] = useState([])
    const [loading, setLoading] = useState(null)

    const getLeague = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/search_all_leagues.php?c=England&s=Soccer`)
                .then(Response => {
                    const data = Response.data.countrys
                    data.sort(compareValues('idLeague'))
                    console.log(data)
                    setLeague(data);
                })
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLeague()
    }, [])

    const viewLeague = () => {
        return (
            league.map(data =>
                <Col s={6} m={4} key={data.idLeague}>
                    <Link to={{
                        pathname: `/league/${data.idLeague}/${data.strCurrentSeason}`,
                    }}
                    >
                        <Card
                            header={<CardTitle image={data.strBadge}></CardTitle>}
                            className="hoverable card-league">
                        </Card>
                    </Link >
                </Col >
            )
        );
    }

    return (
        <div className="container mt-2">
            <Row>
                {loading ? viewLeague() : <Loading />}
            </Row>
        </div >
    );
}

export default Home;