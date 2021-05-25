import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fisherhotel1 from './fisherhotel1.jpg';
import yarkoanddzvi from './yarkoandzvi.png';
import yarkoanddzvi2 from './yarkoandzvi2.png';
import terebovlia from './terebovlia.jpg';
import './busstation.scss'

interface TextBusState {
    ishidden: boolean
}

interface TextBusProps {

}

class Text extends Component<TextBusProps, TextBusState> {
    constructor(props: TextBusProps) {
        super(props)
        this.state = {
            ishidden: true
        }
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(event: any) {
        this.setState({
            ishidden: false
        })
    }


    render() {
        return (
            <div>
                <div className='title_head'>
                    <div>
                        Локація №1: Автовокзал
                </div>
                    <Link to='/terebovlia/start'>
                        <div>Початок квесту тут...</div>
                    </Link>
                </div>
                {/* <div>
                    Привіт. Це стартова точка туристичного квесту від проєкту "Пізнай Своє".
                </div> */}
                <div className='link_div_about'>
                    Привіт. Це стартова точка туристичного квесту від проєкту <Link to='/'>"Пізнай Своє"</Link>.
                </div>
                <div>
                    Нас звати Ярко і Дзвінка. Дуже раді, що ви зацікавились і готові відкривати для себе місто. Попереду вас чекають оригінальні завдання, мальовничі місця та багато цікавинок.
                </div>
                <div className="imgyarko">
                    <img src={yarkoanddzvi2} />
                </div>
                <div>
                    У кожній локації будуть розташовані QR-коди, які ви зможете  відсканувати, прочитати інформацію про місце та отримати завдання, яке приведе до наступної локації.
                </div>
                <div>
                    Ну що, готові проходити квест та вивчати Теребовлю? Ми тобі у цьому допоможемо.
                </div>
                <div>
                    Починаймо!)
                </div>
                <div>
                    Пропонуємо розпочати нашу мандрівку по Теребовлі із залізничного вокзалу, оскільки ще 120 років тому це було перше місце, яке відкривалось очам туристів.
                    {/* Пропонуємо розпочати нашу мандрівку по Теребовлі із костелу Петра і Павла. */}
                </div>
                {/* <div>
                    <div>Координати:</div>
                    <div> 49°17'54.9"N 25°41'46.3"E</div>
                </div> */}
                <div>
                    <img className='img_content' src={terebovlia} alt='fisherhotel' />
                    <div>
                        {/* По дорозі до вокзалу можна помітити будинок, розташований на розі вулиць. Саме він зображений на світлині. В міжвоєнний період він був відомий як готель Фішера, а в радянські часи мав назву «Беркут». Загалом у 1950-тих роках у Теребовлі було три готелі. */}
                        {/* По дорозі до костелу можна помітити будинок, розташований на розі вулиць. Саме він зображений на світлині. В міжвоєнний період він був відомий як готель Фішера, а в радянські часи мав назву «Беркут». Загалом у 1950-тих роках у Теребовлі було три готелі. */}
                        
                    </div>
                </div>
                <div>
                    <div className='quest_area'>Ось вам і перше завдання: По дорозі до вокзалу ви проходитимете парком князя Василька. 
                    У парку потрібно знайти пам'ятник князю Васильку, сфотографуватися на його фоні та завантажити фото сюди й тоді вам відкриється наступна локація.</div>
                    {/* <button onClick={this._handleClick}>Підказка</button>
                    <div hidden={this.state.ishidden}>
                        <div>Координати:</div>
                        <div > 49°17'52.5"N 25°41'44.2"E</div>
                    </div> */}
                </div>
                {/* <div>
                    Проте, сподіваємось підказкою користуватись вам не доведеться і ви зможете самі віднайти будівлю по фотографії.
                </div> */}
            </div>
        );
    }
}

export default Text;