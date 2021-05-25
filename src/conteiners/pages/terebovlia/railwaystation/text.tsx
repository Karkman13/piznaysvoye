import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import railway1 from './railway1.jpg';
import railway2 from './railway2.jpg';
import railway3 from './railway3.jpg';
import railway4 from './railway4.jpg';
import railway5 from './railway5.jpg';
import fisherhotel1 from './fisherhotel1.jpg';


class Text extends Component {
    render() {
        return (
            <div>
                <div className='title_head'>
                    <div>Локація №2: Залізничний вокзал</div>
                    <Link to='/terebovlia/start'>
                        <div>Початок квесту тут...</div>
                    </Link>
                </div>
                <div>
                    Історія станції починається ще в австрійський період, коли 1896 року через Теребовлю було прокладено залізничну колію Тернопіль — Копичинці. Тоді ж, було й відкриття двох віадуків, що знаходяться за Теребовлею.
                </div>
                <ul>
                    Щось цікаве:
                    <li>
                        А чи знали ви, що другий поверх вокзалу використовувався як житло для сімей залізничників?
                        <img className='img_content' src={railway1} />
                    </li>
                    <li>
                        Також наприкінці 1930-их років через Теребовлю проїжджав швидкісний потяг “Люкс-торпеда”. Цей потяг розвивав швидкість до 120 км/год, мав 22 м довжини та вміщував 52 пасажири і був схожий на лімузин.
                        <img className='img_content' src={railway2} />
                    </li>
                    <li>
                        В міжвоєнний період часто міщани з Тернополя приїздили в Теребовлю аби повечеряти в кафе, що знаходилось на першому поверсі вокзалу. Сам поїзд від Тернополя йшов тоді 2 години, а квитки коштували 1 або 1,5 злотих.
                        <img className='img_content' src={railway3} />
                    </li>
                    <li>
                        Після Другої світової війни місто було перейменоване з Трембовля на Теребовля, проте стара назва станції залишалася до часів Незалежності України. Сьогодні використовуються обидві назви станції.
                        <img className='img_content' src={railway4} />
                    </li>
                    <li>
                        Ще до 2018 року в касах Укрзалізниці можна було придбати квитки саме до станції Трембовля. Тепер і на квитках, і на сайті їх купівлі (booking.uz.gov.ua) вказана сучасна назва міста, Теребовля.
                        <img className='img_content' src={railway5} />
                    </li>
                </ul>
                <div>
                    Зовсім поряд, за будівлею, є криниця, яка залишилась однією з небагатьох діючих у місті. Тому, якщо вас мучить спрага, можете пригоститись чистою теребовлянською водою.  Щоправда, доведеться прикласти трішки фізичних зусиль ;)
                </div>
                <div>
                    <img className='img_content' src={fisherhotel1}/>
                </div>
                <div>
                    Що ж, вирушаймо далі. По дорозі до нашої наступної локації можна помітити будинок, розташований на розі вулиць. Саме він зображений на світлині. В міжвоєнний період він був відомий як готель Фішера, а в радянські часи мав назву «Беркут». Загалом у 1950-тих роках у Теребовлі було три готелі.
                </div>
                <div>
                   Ось вам завдання: сфотографуйтеся на фоні готелю Фішера та завантажте фото сюди. 
                </div>
                {/* <div>
                    <div>
                        Координати:
                    </div>
                    <div>
                        49°17'54.5"N 25°41'42.9
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Text;