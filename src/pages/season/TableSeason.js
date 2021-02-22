import "./TableSeason.css";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Table } from "react-materialize";
import { baseURL } from "../../config/ConfigApi";
import Loading from '../../component/Loading';

const Axios = require('axios');

function TableSeason() {
    const [tables, setTables] = useState([])
    const [loading, setLoading] = useState(false)
    const { id, strSeason } = useParams()

    const getTabel = async () => {
        try {
            const data = await Axios
                .get(`${baseURL}/1/lookuptable.php?l=${id}&s=${strSeason}`)
                .then(Response => {
                    const Table = Response.data.table
                    setTables(Table)
                })
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTabel()
    }, [])

    const viewTable = () => {
        return (
            tables.map(table =>
                <tr key={table.intRank}>
                    <td>{table.intRank}</td>
                    <td>
                        <Link to={{ pathname: `/team/${table.idTeam}` }}>
                            <img src={table.strTeamBadge} />
                        </Link></td>
                    <td>
                        <Link to={{ pathname: `/team/${table.idTeam}` }}>
                            {table.strTeam}
                        </Link></td>
                    <td>{table.intWin}</td>
                    <td>{table.intDraw}</td>
                    <td>{table.intLoss}</td>
                    <td><b>{table.intPoints}</b></td>
                    <td>{table.intGoalsFor}</td>
                </tr>
            )
        );
    }

    return (
        <div className="container">
            <Card
                title={strSeason}
                className="card-detail">
            </Card>
            <Card className="card-detail">
                <Table className="highlight">
                    <thead>
                        <tr>
                            <th data-field="id">No</th>
                            <th data-field="name">Logo</th>
                            <th data-field="price">Team</th>
                            <th data-field="price">Win</th>
                            <th data-field="price">Lose</th>
                            <th data-field="price">Draw</th>
                            <th data-field="price">Point</th>
                            <th data-field="price">Goal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? viewTable() : (<tr><td colSpan="8" className="center">{< Loading />}</td></tr>)}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
}

export default TableSeason