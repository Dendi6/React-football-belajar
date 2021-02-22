import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { baseURL } from "../../config/ConfigApi";
import Loading from "../../component/Loading";

const Axios = require('axios');

function ListTeam() {

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    const getTeams = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/lookup_all_teams.php?id=${id}`)
                .then(Response => {
                    const dataTeams = Response.data.teams;
                    setTeams(dataTeams);
                });
            setLoading(true);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTeams();
    }, [])

    //view dari list team
    const viewListTeam = () => {
        return (
            teams.map(team =>
                <Col s={6} m={4} key={team.idTeam}>
                    <Link to={{ pathname: `/team/${team.idTeam}` }}>
                        <Card
                            header={<CardTitle image={team.strTeamBadge}></CardTitle>}
                            title={team.strTeam}
                            className="hoverable card-list">
                        </Card>
                    </Link>
                </Col>
            )
        );
    }

    return (
        <Row className="mt-2">
            {loading ? viewListTeam() : <Loading />}
        </Row>
    );
}

export default ListTeam;