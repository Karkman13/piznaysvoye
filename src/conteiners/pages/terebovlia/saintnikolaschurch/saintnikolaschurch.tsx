import React, { Component } from 'react';
import Text from './text';
import './saintnikolaschurch.scss'

interface NikolaState{
    firstdate: string,
    seconddate: string,
    ishidden: boolean,
    iswrong: boolean
}

interface NikolaProps{

}

class SaintNikolaChurch extends Component<NikolaProps, NikolaState> {
    constructor(props:NikolaProps){
        super(props)
        this.state={
            firstdate: '',
            seconddate: '',
            ishidden: true,
            iswrong: true
        }
        this._handleFirstChange=this._handleFirstChange.bind(this);
        this._handleSecondChange=this._handleSecondChange.bind(this);
        this._hadnleClick=this._hadnleClick.bind(this);
    }

    _handleFirstChange(event:any){
        this.setState({
            firstdate: event.target.value
        })
    }

    _handleSecondChange(event:any){
        this.setState({
            seconddate: event.target.value
        })
    }

    _hadnleClick(event:any){
        if (this.state.firstdate == '1092' && this.state.seconddate == '1124'){
            this.setState({
                ishidden: false,
                iswrong: true
            })
        }
        else{
            this.setState({
                ishidden:true,
                iswrong:false
            })
        }
    }


    render() {
        return (
            <div>
                <Text />
                <div>
                Ось ваше наступне завдання: пам’ятаєте, ми вам говорили про важливість сфотографувати пам’ятник?  Так ось, питання:
                </div>
                <div>
                У яких роках князь Василько правив у Теребовлі?
                </div>
                <div className='input_text_element'>
                    <input type='text' value={this.state.firstdate} onChange={this._handleFirstChange} />
                    <div> - </div>
                    <input type='text' value={this.state.seconddate} onChange={this._handleSecondChange} />
                    <button onClick={this._hadnleClick}>Click</button>
                </div>
                <div hidden={this.state.iswrong}>
                    Не правильно!
                </div>
                <div hidden={this.state.ishidden}>
                    <div>
                    Молодці, а тепер вирушаймо далі. Наступна наша локація - це міська ратуша, яку ви зможете знайти за координатами
                    </div>
                    <div>
                     49°17'58.9"N 25°41'19.7"E
                    </div>
                    <div>
                    А коли будете йти до ратуші, по дорозі знайдіть пам’ятник Героя України, який жив у 1909- 1959 роках, й прапори організації якого ви мабуть уже не раз помічали у Теребовлі
                    </div>
                </div>
            </div>
        );
    }
}

export default SaintNikolaChurch;