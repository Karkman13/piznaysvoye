import React, { Component} from 'react';
import speisershouse1 from './speisershouse1.jpg';
import speisershouse2 from './speisershouse2.jpg';

class SpeisersHouse extends Component{
    render(){
        return(
            <div>
                <div>
                    Локація №8 : Палац
                </div>
                <div>
                    По вул. Грушевського, № 18, на подвір'ї колишнього Українського народного дому знаходиться споруда, яка належить 
                    до пам'яток культурної спадщини місцевого значення ох. № 126М під назвою "Палац".
                </div>
                <div>
                    У повоєнному часі будинок був заселений місцевими жителями. До 1984 року в ньому проживало чотири сім’ї: Васютинський В.І. – вчитель української 
                    мови і літератури, який викладав у збаразькій школі-інтернаті, Гудима В.П. – вчитель фізкультури СШ №1, Курило В.Й. – начальник будинкової 
                    служби "Збаражгаз", Комендат С.І. – вихователька дитячого садка. В середині 80-х років їх переселити у новий будинок в житловому районі АТК. 
                    А в приміщені розташувалися ряд державних установ, зокрема райвно і редакція районної газети. Рішенням Збаразької районної ради №8 від 8 червня 
                    1995 року передається право на володіння районному комунальному архітектурно-плановому бюро (начальник –Дир Я.Д.). З їх дозволу в даному 
                    приміщенні також знаходились і інші служби, зокрема служба охорона навколишнього середовища (Барва М.І. - директор екологічної служби міста) 
                    і комунальне підприємство "Збаражпроект".
                </div>
                <div>
                    <ul>
                        Цікавинки:
                        <li>
                            цей будинок побудований власним коштом в кінці ХІХ століття як житловий. 
                        </li>
                        <li>
                                його власником був єврей Шпайзер - ветеринар Збаразького повіту. Відповідно до "Списку ветеринарних лікарів 
                                Польщі", опублікованому у Варшаві 1931 року, Ніссон Спейсер належав до міських ветеринарних лікарів Збаража, 
                                Тернопільського воєводства. 
                        </li>
                    </ul>
                </div>
                <div>
                    За дослідженням Тетяни  Федорів, Ніссон Спейсер був делегатом повітової Каси хворих, керував драматичним гуртком, брав активну 
                    участь у громадському житті міста. Він був одружений з Аделою Бренхольц і мав з нею дві дочки: Нусю (Лучія р.н.1925) і Мілку (1928 р.н.), 
                    які загинули під час Голокосту. Про лікаря Ніссона Спейсера є згадка у книзі Якуба Літтнера. Як пише автор, лікар вчинив самогубство, 
                    прийнявши отруту. На першому поверсі знаходилась аптека і клініка, а на другому поверсі житлові приміщення, де мешкав лікар з родиною. 
                    Саме ці функції пояснюють наявність у будівлі двох окремих входів
                </div>
                <div>
                    <img className='img_content' src={speisershouse1} />
                </div>
                <div>
                    Будинок цей – «Т»-подібної форми. Інші джерела датують його  початком ХХ століття. Фундамент кам’яний, стіни муровані із цегли на 
                    вапняковому розчині. Західний фасад будинку оформлений прямокутними і півкруглими віконними отворами. На невеликому прямокутному 
                    ганку - дверний отвір, який повторює форму вікон, а на верхньому ярусі ганку знаходиться балкон. Східно-південний і північний 
                    фасади оформлені прямокутними вікнами. З північної сторони знаходиться ще один вхід у приміщення, а східна сторона будинку (ІІ ярус) 
                    закінчується односкатним металевим дахом. Північна і південна сторони будинку покриті двоскатним дахом. Віконні отвори даху оформлені 
                    декоративними шпилями та металевим дахом із заломом.
                </div>
                <div>
                    <img className='img_content' src={speisershouse2} />
                </div>
                <div>
                    А ми рухаємось далі. Наступна наша локація - старий водяний млин.
                </div>
                <div>
                    <div>
                        Координати:
                    </div>
                    <div>
                        49.666118, 25.782151
                    </div>
                </div>
            </div>
        )
    }
}

export default SpeisersHouse;