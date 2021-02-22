import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-materialize";
import { baseURL } from "../../config/ConfigApi";
import Loading from '../../component/Loading';
import compareValues from "../../component/Sorting";

const Axios = require('axios');

const TeamEquipment = () => {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(false);
    let { idTeam } = useParams();

    const getEquipment = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/lookupequipment.php?id=${idTeam}`)
                .then(Response => {
                    const equip = Response.data.equipment;
                    if (equip != null) {
                        if (equip.length > 4) {
                            equip.sort(compareValues('strSeason', 'desc'))
                            equip.length = 4
                            setEquipment(equip);
                        } else {
                            setEquipment(equip);
                        }
                    } else {
                        setLoading(true)
                    }
                })
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    }

    const viewEquipment = () => {
        return (
            equipment.map(data =>
                <Col s={6} m={3} key={data.idEquipment}>
                    <Card className="card-detail">
                        <img src={data.strEquipment} className="images" alt={data.idTeam} />
                        <h6 className="detail-title">{data.strType}</h6>
                        <p>Season : {data.strSeason}</p>
                    </Card>
                </Col>
            )
        );
    }

    useEffect(() => {
        getEquipment()
    }, [])

    return (
        <Row>
            {loading ? viewEquipment() : <Loading />}
        </Row>
    );

}

export default TeamEquipment;