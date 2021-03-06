import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import basilique1 from './basilique1.jpg';
import basilique2 from './basilique2.jpg';
import basilique3 from './basilique3.jpg';
import basilique4 from './basilique4.jpg';

class Text extends Component {
    render() {
        return (
            <div>
                <div className='title_head'>
                    <div>
                        Локація №3: Костел святого Петра і Павла
                </div>
                    <Link to='/terebovlia/start'>
                        <div>Початок квесту тут...</div>
                    </Link>
                </div>
                <div>
                    Костел був збудований у 1928 році. Його будували чотири роки за ініціативи ксьондза Євстахія Яловіцького.
                    Священослужитель зміг побудувати костел завдяки тому, що продав 260 гектарів своєї власної землі на Львівщині
                    і майже пів мільйона злотих пішло на будівництво цього костелу. Автором проекту був Адольф Жишка-Богуш, відомий
                    як один із реставраторів Вавельського палацу в Кракові.
                </div>
                <ul>
                    Цікавинки:
                <li>
                        Костел налічує близько 76 колон з білого тесаного каменю, що знаходяться довкола і всередині будівлі.
                        <img className='img_content' src={basilique1} />
                    </li>
                    <li>
                        Раніше в центрі подвір'я розташовувалась скульптура Ісуса Христа, що несе хрест. Але пам’ятник було зруйновано.
                        З ним пов’язана історія. Під час відходу німецьких військ в Другій світовій війні німці-офіцери приїхали на залізничний
                        вокзал і почали розстрілювати людей. Багатьом вдалось втекти на подвір’я костелу і врятуватись. Своєму порятунку вони
                        завдячують саме Ісусу Христу.
                        <img className='img_content' src={basilique2} />
                    </li>
                    <li>
                        Цікавим є те, що автентично навколо колонади були ще стіни, що разом формували криту галерею навколо двору перед храмом.
                        Тому цей костел створений як старі римських базиліки закритого типу.
                        <img className='img_content' src={basilique3} />
                    </li>
                    <li>
                        Цей храм має майже точну копію на території Польщі, в Познані. Його збудували за тим же проектом,
                        що й теребовлянський і там він зберігся й донині в первісному вигляді.
                        <img className='img_content' src={basilique4} />
                    </li>
                    <li>
                        З 1946 по 1950 рік будівля костелу використовувалась як зерносховище, а з 1956 р. святиню переобладнано під районний будинок культури.
                </li>
                    <li>
                        Свою духовну історію Петропавлівська базиліка почала відроджувати з 1992 року, коли будівлю храму було передано під опіку
                </li>
                    <li>
                        Сьогодні храм живе своїм звичним духовним життям та перебуває в процесі реставрування
                </li>
                </ul>
                <div>
                    Щоб дізнатись наступну локацію, вам необхідно відповісти на питання. Уважно подивіться на давню світлину і на костел.
                    Напишіть, використовуючи одне слово, що кардинально змінилось на фасаді костелу
                </div>
            </div>
        )
    }
}

export default Text;