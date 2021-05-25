import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nikola1 from './nikola1.jpg';
import nikola2 from './nikola2.jpeg';
import nikola3 from './nikola3.jpg';
import nikola4 from './nikola4.jpg';
import nikola5 from './nikola5.jpg';

class Text extends Component {
    render() {
        return (
            <div>
                <div className='title_head'>
                    <div>
                        Локація №5: церква святого Миколая
                    </div>
                    <Link to='/terebovlia/start'>
                        <div>Початок квесту тут...</div>
                    </Link>
                </div>
                <div>
                    Церква святого Миколая є найстарішою мурованою церквою в Теребовлі. Побудований храм ще в XVI столітті.
                    До того часу це місце було торговою площею. Церква названа в честь цього святого, тому що саме Миколая
                    вважають покровителем моряків та торговців.
                </div>
                <ul>
                    Цікавинки:
                    <li>
                        Церква була видозмінена та перебудована декілька разів.
                        <img className='img_content' src={nikola1} />
                    </li>
                    <li>
                        Якщо обійти храм, позаду нього ви зможете побачити дві квадратні ніші - це були бійниці (див на фото), які зараз замуровані. Церква мала оборонний характер споруди.
                        <img className='img_content' src={nikola2} />
                    </li>
                    <li>
                        Є свідчення про те, що первісно місцевий храм мав деякі ознаки готичного стилю.
                        <img className='img_content' src={nikola3} />
                    </li>
                    <li>
                        Церква була оточена кам’яним муром, від якого збереглась лише невелика частина з південо-східної сторони.
                        <img className='img_content' src={nikola4} />
                    </li>
                    <li>
                        До ХІХ століття на задньому подвір’ї храму розміщувався цвинтар, який згодом було винесено за межі міста.
                        Через кладовища біля церков забруднювалась вода і не раз у Теребовлі була морова холера, що скошувала третину населення.
                        <img className='img_content' src={nikola5} />
                    </li>
                    <li>
                        У притворі церкви висять  два розп’яття з каменю пісковика, зроблені ще у XVII ст.
                    </li>
                    <li>
                        Існує легенда, що в XVII столітті, коли турки нападали на місто, частина людей заховалась саме у цій церкві.
                        Двоє турецьких послів стали біля брами і покликали священника. Вони сказали йому: "Ми даємо вам  велику свічку.
                        Ви молитесь за всіх, адже так у вас в Біблії написано, то помоліться й за нас. Але запаліть цю свічку, і ми вас не рухатимемо".
                        Священик взяв свічу, поставив посеред церкви і люди навколо неї почали молитись. Свічка згасла, вони запалили її знову і молились з наміренням про те,
                        щоб турки сюди більше не повертались. Але тут свіча згасла знову і, коли свічка згасла втретє, одному із старших людей прийшла думка перевірити, що це за свічка.
                        Вони взяли ножа, розрізали її й побачили як звідти висипалось багато пороху. Ось так підло турки хотіли зруйнувати цей храм і людей у ньому.
                        Але сам Бог завадив цьому відбутись.
                    </li>
                    <li>
                        На території церкви знаходиться ще дзвіниця, товщина стін якої понад 1 метр. Нагорі знаходиться один великий дзвін і три менші.
                        Коли дзвіниця була тільки збудована, вона мала 7 дзвонів, найважчий з яких важив 300 кг.
                    </li>
                </ul>

            </div>
        )
    }
}

export default Text;