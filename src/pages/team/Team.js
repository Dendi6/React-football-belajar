import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-materialize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { baseURL } from "../../config/ConfigApi";
import Loading from '../../component/Loading';
import TeamEquipment from "./EquipmentTeam";

const Axios = require('axios');

function Team() {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(false)
    let { idTeam } = useParams();

    const getTeam = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/lookupteam.php?id=${idTeam}`)
                .then(Response => {
                    const team = Response.data.teams[0]
                    setTeam(team)
                });
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTeam();
    }, [])

    //view dari detail tim Header jumbotron
    const viewDetailTeam = () => {
        return (
            <div>
                <Card className="card-detail">
                    <Row>
                        <Col s={12} m={6}>
                            <img src={team.strTeamBadge} className="images" alt={team.srtTeam} />
                        </Col>
                        <Col s={12} m={6}>
                            <div className="detail">
                                <h5 className="detail-title">{team.strTeam}</h5>
                                <p><i>{team.strStadium}, {team.strStadiumLocation}</i></p>
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
            </div>
        );
    }

    return (
        <div className="container">
            {loading ? viewDetailTeam() : <Loading />}
            <div className="center p-tb-1">
                <h5 className="detail-title">Equipment</h5>
            </div>
            {<TeamEquipment />}
        </div >
    );
}

export default Team;