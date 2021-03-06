import React, { Component } from 'react';
import AnswerWordCpmponent from '../../../../components/AnserWordComponent/anserwordcomponent';
import Text from './text';

interface WordState {
    word: string,
    answer: string[],
    ishidden: boolean

}

interface WordProps {

}

class BasiliqueSaintPaul extends Component<WordProps, WordState> {
    constructor(props: WordProps) {
        super(props)
        this.state = {
            word: '',
            answer: ['вежі', 'колони', 'вишки', 'дах', 'балюстрада', 'фронтон'],
            ishidden: true
        }
        this._handleChange = this._handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    _handleChange(event: any) {
        this.setState({
            word: event.target.value
        });
    }

    updateData(value: boolean) {
        this.setState({
            ishidden: value
        })
        console.log('objet hide/show')
    }

    render() {
        return (
            <div>
                <Text />
                <AnswerWordCpmponent answer={this.state.answer} updateData={this.updateData} />
                <div className='basiliquenextstep' hidden={this.state.ishidden}>
                    <div>
                        А ми рухаємось далі. Наступна наша локація - будинок спортивного товариства «Сокіл».
                    </div>
                    <div>
                        <div>
                            Координати:
                        </div>
                        <div>
                            49°17'55.8"N 25°41'31.0"E
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasiliqueSaintPaul;