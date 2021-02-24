import "./League.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Tabs, Tab } from "react-materialize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { baseURL } from "../../config/ConfigApi";

import Loading from "../../component/Loading";
import ListTeam from "../team/ListTeam";
import TableSeason from "../season/TableSeason";
import Event from "../event/Event";


const Axios = require('axios');

function League() {
    const [league, setLeague] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    const getLeague = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/lookupleague.php?id=${id}`)
                .then(Response => {
                    const League = Response.data.leagues[0]
                    setLeague(League)
                })
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLeague()
    }, [])

    const viewLeague = () => {
        return (
            <Card className="card-detail">
                <Row>
                    <Col s={12} m={6}>
                        <img src={league.strBadge} className="images" alt={league.idLeague} />
                    </Col>
                    <Col s={12} m={6}>
                        <div className="detail">
                            <h5 className="detail-title">{league.strLeague}</h5>
                            <p><i>{league.strCountry}, Season : {league.strCurrentSeason}</i></p>
                            <div className="icon">
                                <a href="/"><FontAwesomeIcon className="youtube" icon={['fab', 'youtube']} size="2x" /></a>
                                <a href="/"><FontAwesomeIcon className="instagram" icon={['fab', 'instagram']} size="2x" /></a>
                                <a href="/"><FontAwesomeIcon className="facebook" icon={['fab', 'facebook-f']} size="2x" /></a>
                                <a href="/"><FontAwesomeIcon className="twitter" icon={['fab', 'twitter']} size="2x" /></a>
                            </div>
                        </div>
                    </Col>
                </Row >
            </Card>
        );
    }

    return (
        <div className="container">
            {loading ? viewLeague() : <Loading />}

            <Tabs className="tabs-fixed-width">
                <Tab
                    active
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Last Event">
                    <Event />
                </Tab>
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="List Team">
                    {<ListTeam />}
                </Tab>
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="List Table">
                    {<TableSeason />}
                </Tab>
            </Tabs>
        </div>
    );
}

export default League;