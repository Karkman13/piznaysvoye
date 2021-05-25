import React, { Component} from 'react';
import Text from './text';
import FirebaseImageUpload from '../../../../components/Firebaseimageupload/firebaseimageupload';

interface SokilState{
    ishidden: boolean
}

interface SokilProps{

}

class SokilSocietyCenter extends Component<SokilProps, SokilState> {
    constructor(props:SokilProps){
        super(props)
        this.state={
            ishidden:true
        }
        this.updateData=this.updateData.bind(this);

    }


    updateData(value:boolean){
        this.setState({
            ishidden:value
        })
    }
    render () {
        return (
            <div>
                <Text />
                <div>
                    Ось вам наступне завдання: зробіть фото на фоні будинку товариства та завантажте сюди.
                </div>
                <FirebaseImageUpload _path={'SokilSocietyCenter'} updateData={this.updateData} />
                <div hidden={this.state.ishidden}>
                <div>
                    А наша наступна з вами локація - це церква святого Миколая
                </div>
                <div>
                    <div>
                        Координати:
                    </div>
                    <div>
                        49°18'00.1"N 25°41'25.9"E
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default SokilSocietyCenter;