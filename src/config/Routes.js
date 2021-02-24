import { Switch, Route } from "react-router-dom";
import { NavigasiHome, BackNav } from "./../layout/Navigasi";
import Home from './../pages/home/Home';
import League from './../pages/league/League';
import Team from './../pages/team/Team';
import About from './../pages/about/About';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <NavigasiHome />
                <Home />
            </Route>
            <Route path="/league/:id/:season">
                <BackNav />
                <League />
            </Route>
            <Route path="/team/:idTeam">
                <BackNav />
                <Team />
            </Route>
            <Route path="/about">
                <NavigasiHome />
                <About />
            </Route>
        </Switch>
    );
}

export default Routes;