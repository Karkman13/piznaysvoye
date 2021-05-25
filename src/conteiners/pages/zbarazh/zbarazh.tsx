import React, { Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../notfound';
import Home from '../home';
import ZbarazhArtFest from './zbarazhartfest';
import CityMap from './citymap/citymap';
import CityHall from './cityhall/cityhall';
import BernadineMonastery from './bernardinemonastery/bernardinemonastery';
import ChurchOfTheAssumption from './churchoftheassumption/churchoftheassumption';
import Qahal from './qahal/qahal';
import ChurchOfTheResurrectionOfChrist from './churchoftheresurrectionofchrist/churchoftheresurrectionofchrist'
import BilinskisHouse from './bilinskishouse/bilinskishouse';
import SpeisersHouse from './speisershouse/speisershouse';
import WaterMill from './watermill/watermill';
import ZbarazhCastle from './zbarazhcastle/zbarazhcastle';



class Zbarazh extends Component {
    render () {
        return (
            <BrowserRouter>
            <Switch>
                <Route path='/zbarazh/zbarazhartfest' component={ZbarazhArtFest} />
                <Route path='/zbarazh/citymap' component={CityMap} />
                <Route path='/zbarazh/cityhall' component={CityHall} />
                <Route path='/zbarazh/bernadinemonastery' component={BernadineMonastery} />
                <Route path='/zbarazh/churchoftheassumption' component={ChurchOfTheAssumption} />
                <Route path='/zbarazh/qahal' component={Qahal} />
                <Route path='/zbarazh/churchoftheresurrectionofchrist' component={ChurchOfTheResurrectionOfChrist} />
                <Route path='/zbarazh/bilinskishouse' component={BilinskisHouse} />
                <Route path='/zbarazh/speisershouse' component={SpeisersHouse} />
                <Route path='/zbarazh/watermill' component={WaterMill} />
                <Route path='/zbarazh/zbarazhcastle' component={ZbarazhCastle} />
                <Route path='/' component={Home} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Zbarazh;