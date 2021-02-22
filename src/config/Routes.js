import { Switch, Route } from "react-router-dom";
import { NavigasiHome, BackNav } from "./../layout/Navigasi";
import Home from './../pages/home/Home';
import League from './../pages/league/League';
import Team from './../pages/team/Team';
import TableSeason from "./../pages/season/TableSeason";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <NavigasiHome />
                <Home />
            </Route>
            <Route path="/table/:id/:strSeason">
                <BackNav />
                <TableSeason />
            </Route>
            <Route path="/league/:id">
                <BackNav />
                <League />
            </Route>
            <Route path="/team/:idTeam">
                <BackNav />
                <Team />
            </Route>
        </Switch>
    );
}

export default Routes;