import React, { Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Start from './start';
import WilingWall from './wailingwall/wailingwall';
import TerebovliaCastle from './terebovliacastle/terebovliacastle';
import SokilSocietyCenter from './sokilsocietycenter/sokilsocietycenter';
import ShevchenkoPark from './shevchenkopark/shevchenkopark';
import SaintNikolaChurch from './saintnikolaschurch/saintnikolaschurch';
import RailwayStation from './railwaystation/railwaystation';
import HigherSchoolculture from './higherschoolculture/higherschoolculture';
import CityHall from './cityhall/cityhall';
import CarmeliteChurch from './carmelitechurch/carmelitechurch';
import BusStation from './busstation/busstation';
import BaseliqueSaintPaul from './basiliquesaintpaul/basiliquesaintpaul';
import WallOfHistory from './wallofhistory/wallofhistory';
import NotFound from '../notfound';
import Home from '../home';
import './terebovlia.scss'
import ReactFirebaseUpload from './ReactFirebaseUpload';


class Terebovlia extends Component {
    render () {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/terebovlia/ReactFirebaseUpload" component={ReactFirebaseUpload} />
                <Route path="/terebovlia/start" component={Start} />
                <Route path="/terebovlia/wilingwall" component={WilingWall} />
                <Route path="/terebovlia/terebovliacastle" component={TerebovliaCastle} />
                <Route path="/terebovlia/sokilsocietycenter" component={SokilSocietyCenter} />
                <Route path="/terebovlia/shevchenkopark" component={ShevchenkoPark} />
                <Route path="/terebovlia/saintnikolachurch" component={SaintNikolaChurch} />
                <Route path="/terebovlia/railwaystation" component={RailwayStation} />
                <Route path="/terebovlia/higherschoolculture" component={HigherSchoolculture} />
                <Route path="/terebovlia/cityhall" component={CityHall} />
                <Route path="/terebovlia/carmelitechurch" component={CarmeliteChurch} />
                <Route path="/terebovlia/busstation" component={BusStation} />
                <Route path="/terebovlia/basiliquesaintpaul" component={BaseliqueSaintPaul} />
                <Route path="/terebovlia/wallofhistory" component={WallOfHistory} />
                <Route path='/' component={Home} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
            </BrowserRouter>
            
        )
    }
}

export default Terebovlia;