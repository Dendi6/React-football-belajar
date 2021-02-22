import './Navigasi.css';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

export function NavigasiHome() {
    return (
        <Navbar
            alignLinks="right"
            brand={< a className="brand-logo" href="/" > <Icon>sports_soccer</Icon></a>}
            menuIcon={< Icon > menu</Icon >}
            className="nav"
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}>
            <NavLink to="/" className="sidenav-close" exact activeClassName="active" >Home</NavLink>
            {/* <NavLink to="/team" className="sidenav-close" exact activeClassName="active" >Team</NavLink> */}
        </Navbar >
    );
}


export function BackNav() {
    const history = useHistory()

    const back = () => {
        history.goBack()
    }

    return (
        <nav className="nav">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo right"><Icon>sports_soccer</Icon></a>
                <ul className="left">
                    <li><button onClick={back}><Icon>arrow_back</Icon></button></li>
                </ul>
            </div>
        </nav>
    );
}