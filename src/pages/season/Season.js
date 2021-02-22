import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { baseURL } from "../../config/ConfigApi";
import Loading from "../../component/Loading";
import compareValues from "../../component/Sorting";

const Axios = require('axios');

function Season() {
    const [seasons, setSeason] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const getSeason = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/search_all_seasons.php?id=${id}`)
                .then(Response => {
                    const Season = Response.data.seasons
                    Season.sort(compareValues('strSeason', 'desc'))
                    setSeason(Season)
                })
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSeason()
    }, [])

    const viewSeason = () => {
        return (
            seasons.map(season =>
                <Col s={6} m={4} key={season.strSeason}>
                    <Link to={{ pathname: `/table/${id}/${season.strSeason}` }}>
                        <Card
                            title={season.strSeason}
                            className="hoverable card-list">
                        </Card>
                    </Link>
                </Col>
            )
        );
    }

    return (
        <Row className="mt-2">
            {loading ? viewSeason() : <Loading />}
        </Row>
    );
}

export default Season