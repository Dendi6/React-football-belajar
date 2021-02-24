import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { baseURL } from "../../config/ConfigApi";
import Loading from "../../component/Loading";
import { faTeamspeak } from "@fortawesome/free-brands-svg-icons";

const Axios = require('axios');

const Event = () => {
    const [evens, setEvent] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const getEvent = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/eventspastleague.php?id=${id}`)
                .then(Response => {
                    const data = Response.data.events
                    console.log(data)
                    setEvent(data)
                })
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEvent()
    }, [])

    const viewEvent = () => {
        return (
            evens.map(event =>
                <Card className="card-list" key={event.idEvent}>
                    <div className="center">
                        <h6>{event.dateEvent}</h6>
                        <p><i>Season : {event.strSeason}</i></p>
                        <p>{event.strVenue}</p>
                    </div>
                    <Row className="center mt-2">
                        <Col s={5} m={5}>
                            <h6 className="detail-title">{event.strHomeTeam}</h6>
                            <h5>{event.intHomeScore}</h5>
                        </Col>
                        <Col s={2} m={2}>VS</Col>
                        <Col s={5} m={5}>
                            <h6 className="detail-title">{event.strAwayTeam}</h6>
                            <h5>{event.intAwayScore}</h5>
                        </Col>
                    </Row>
                </Card>
            )
        );
    }

    return (
        <div className="mt-2">
            {viewEvent()}
        </div>
    );
}

export default Event