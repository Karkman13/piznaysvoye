import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LinksPage extends Component {
    render() {
        return (
            <div>
                <Link to="/notfound">
                    <div>not found</div>
                </Link>
                <Link to="/terebovlia/">
                    <div>terebovlia</div>
                </Link>
                <Link to="/terebovlia/start">
                    <div>start</div>
                </Link>
                <Link to="/terebovlia/busstation">
                    <div>bus station #1</div>
                </Link>
                <Link to="/terebovlia/railwaystation">
                    <div>railwayt station #2</div>
                </Link>
                <Link to="/terebovlia/basiliquesaintpaul">
                    <div>basilique saint paul #3</div>
                </Link>
                <Link to="/terebovlia/sokilsocietycenter">
                    <div>sokil society center #4</div>
                </Link>
                <Link to="/terebovlia/saintnikolachurch">
                    <div>saint nikolas church #5</div>
                </Link>
                <Link to="/terebovlia/cityhall">
                    <div>city hall #6</div>
                </Link>
                <Link to="/terebovlia/carmelitechurch">
                    <div>carmelite church #7</div>
                </Link>
                <Link to="/terebovlia/wallofhistory">
                    <div>wall of history #8 </div>
                </Link>
                <Link to="/terebovlia/higherschoolculture">
                    <div>higher school culture #9</div>
                </Link>
                <Link to="/terebovlia/shevchenkopark">
                    <div>shevchenko park #10</div>
                </Link>
                <Link to="/terebovlia/wilingwall">
                    <div>wailing wall #11</div>
                </Link>
                <Link to="/terebovlia/terebovliacastle">
                    <div>terebovlia castle #12</div>
                </Link>
                <Link to='/zbarazh/zbarazhartfest'>
                    <div>ZbarazhArtFest</div>
                </Link>
                <Link to='/zbarazh/citymap'>
                    <div>
                        City Map #1
                    </div>
                </Link>
                <Link to='zbarazh/cityhall'>
                    <div>
                        City Hall #2
                    </div>
                </Link>
                <Link to='/zbarazh/bernadinemonastery'>
                    <div>
                        Bernadine Monastery #3
                    </div>
                </Link>
                <Link to='/zbarazh/churchoftheassumption'>
                    <div>
                        Churc Of The Assumption #4
                    </div>
                </Link>
                <Link to='/zbarazh/qahal'>
                    <div>
                        Qahal #5
                    </div>
                </Link>
                <Link to='/zbarazh/churchoftheresurrectionofchrist'>
                    <div>
                        Church Of The Resurrection Of Christ #6
                    </div>
                </Link>
                <Link to='/zbarazh/bilinskishouse'>
                    <div>
                        Bilinski's House #7
                    </div>
                </Link>
                <Link to='/zbarazh/speisershouse'>
                    <div>
                        Speiser's House #8
                    </div>
                </Link>
                <Link to='/zbarazh/watermill'>
                    <div>
                        Waater Mill #9
                    </div>
                </Link>
                <Link to='/zbarazh/zbarazhcastle'>
                    <div>
                        Zbarazh Castle #10
                    </div>
                </Link>
            </div>
        );
    }
}

export default LinksPage;