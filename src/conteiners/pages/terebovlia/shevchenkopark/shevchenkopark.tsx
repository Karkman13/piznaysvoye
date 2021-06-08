import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnswerWordComponent from '../../../../components/AnserWordComponent/anserwordcomponent'

interface ShevchenkoState {
    answer: string[],
    ishidden: boolean
}

interface ShevchenkoProps {

}

class ShevchenkoPark extends Component<ShevchenkoProps, ShevchenkoState> {
    constructor(props: ShevchenkoProps) {
        super(props)
        this.state = {
            answer: ['гуска', 'баба оля'],
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
                        Локація №10: парк імені Тараса Шевченка
                    </div>
                    <Link to='/terebovlia/start'>
                        <div>Початок квесту тут...</div>
                    </Link>
                </div>
                <div>
                    Перед тим як ми розкажемо вам трішки про це місце, вам необхідно буде відповісти на запитання:
                </div>
                <div>
                    Яка тварина була зображена на муралі?
                </div>
                <AnswerWordComponent answer={this.state.answer} updateData={this.updateData} />
                <div hidden={this.state.ishidden}>
                    <div>
                        Молодці. Зараз ви знаходитесь біля парку імені Тараса Шевченка
                    </div>
                    <ul>
                        Цікавинки:
                        <li>
                            Ще до Першої світової війни на цьому місці знаходився так званий великий ринок. Також є припущення,
                            що в центрі ринку колись могла розташовуватись перша міська ратуша.
                        </li>
                        <li>
                            Взагалі місто Теребовля у середньовічних книгах згадується як одне із центрів торгівлі та ремісництва.
                            Велика кількість ярмарків приваблювала сюди купців із сусідніх країн, які торгували своїм крамом на центральних вуличках міста.
                        </li>
                    </ul>
                    <div>
                        А перед тим як вирушити до найголовнішої туристичної точки міста Теребовля, ми маємо для вас ще одну локацію.
                    </div>
                    <div>
                        Це стіна, де НКВС розстрілювало патріотів Теребовлянщини. Колись місцеві називали між собою це місце «Стіною плачу», та зараз вона розрослася «Деревом життя».
                    </div>
                    <div>
                        <div>
                            Стіна знаходиться на вулиці Гжицького за координатами:
                        </div>
                        <div>
                            49°17'53.3"N 25°41'12.1"E
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShevchenkoPark;