import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Text from './text'
import AnswerWordComponent from '../../../../components/AnserWordComponent/anserwordcomponent';

interface CarmeliteState {
    answer: string[],
    ishidden: boolean
}

interface CarmeliteProps {

}


class CarmeliteChurch extends Component<CarmeliteProps, CarmeliteState> {
    constructor(props: CarmeliteProps) {
        super(props)
        this.state = {
            answer: ['4', 'Чотири', 'чотири', 'ЧОТИРИ'],
            ishidden: true
        }
        this.updateData = this.updateData.bind(this);
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
                <div className='title_head'>
                    <div>
                        Локація №7: Церква о. Кармелітів
                    </div>
                    <Link to='/terebovlia/start'>
                        <div>Початок квесту тут...</div>
                    </Link>
                </div>
                <div>
                    Ви знаходитесь на території комплексу монастиря босих кармелітів. Але перед тим, як ми вам розповімо трішки про цей комплекс, вам необхідно відповісти на питання:
                </div>
                <div>
                    Скільки годинників налічувала перша автентична дерев’яна вежа міської ратуші?
                </div>
                <AnswerWordComponent answer={this.state.answer} updateData={this.updateData} />
                <div hidden={this.state.ishidden}>
                    <Text />
                </div>
            </div>
        );
    }
}

export default CarmeliteChurch;