import React, { Component } from 'react';
import FirebaseImageUpload from '../../../../components/Firebaseimageupload/firebaseimageupload';
import Text from './text';

interface RailwayState {
    hidebutton: boolean;
    ishidden: boolean
}

interface RaiplwayProops {
    hideprops: boolean;
}

class RailwayStation extends Component<RaiplwayProops, RailwayState> {
    constructor(props: RaiplwayProops) {
        super(props);

        this.state = {
            hidebutton: false,
            ishidden: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.handlelog = this.handlelog.bind(this);
    }

    handleClick(event: any) {
        this.setState({ hidebutton: false });
    }

    updateData = (value: boolean) => {
        this.setState({ ishidden: value })
    }

    handlelog(event: any) {
        event.preventDefault();
        console.log(this.state.ishidden);
        console.log('sdasd');
    }

    render() {
        return (
            <div>
                <Text />
                <FirebaseImageUpload _path={'RailwayStation'} updateData={this.updateData} />
                <div className="hide_div"
                    hidden={this.state.ishidden}>
                    <div>
                        Молодці, ви справились із завданням.
                    </div>
                    <div>
                        Наступна наша локація зовсім поряд - це костел св. апостолів Петра і Павла.
                    </div>
                    <div>
                        <div>
                            Координати:
                        </div>
                        <div>
                            49°17'55.6"N 25°41'40.3"
                        </div>
                    </div>
                </div>
                {/* <button onClick={this.handlelog}>try</button> */}
            </div>
        );
    }
}

export default RailwayStation;