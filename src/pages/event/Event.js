import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { baseURL } from "../../config/ConfigApi";
import Loading from "../../component/Loading";

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
                    console.log(Response.data.events)
                })
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEvent()
    }, [])

    return (
        <div>
            asdkasjdkj
        </div>
    );
}

export default Event