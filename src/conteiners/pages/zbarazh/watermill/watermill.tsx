import React, { Component} from 'react';
import watermill1 from './watermill1.jpg';
import watermill2 from './watermill2.jpg';
import watermill3 from './watermill3.jpg';

class WaterMill extends Component{
    render(){
        return(
            <div>
                <div>
                    Локація №9 : Водяний Млин
                </div>
                <div>
                    Джерельні витоки архітектурного уособлення мукомельної справи у Збаражі сягають початків ХVІІІ ст., 
                    хоча на, так званому, „берлінському плані“ облоги Збаража 1649 р. в районі бастіону „Лебідь“ уже 
                    показано млин. В той час це були, як правило, дерев'яні споруди біля річки з гідроприводним механізмом. 
                    Не дивно, що після спалення міста військами Ібрагіма Шишмана і Петра Дорошенка у 1675 р. будівництво 
                    млинів довелося розпочинати заново.
                </div>
                <div>
                    <img className='img_content' src={watermill1} />
                </div>
                <div>
                    По вул. Данила Галицького, № 8 у Збаражі, за № 156 М біля дамби на р. Гнізна знаходиться пам'ятка культурної 
                    спадщини під назвою „Млин“, який отримав в народі назву „Пригородецький“, оскільки знаходився на Пригородку. 
                </div>
                <div>
                    <img className='img_content' src={watermill2} />
                </div>
                <div>
                    «Паспорт історичної пам`ятки. Короткі відомості“ констатує, що споруда була збудована з каменю і цегли у 1780 р. 
                    за В. Потоцького на новій греблі, у 1867 р. зазнав модернізації, а в 1912 р. - встановлено турбіну. У 1925 р. 
                    на млині встановлено динамо-машину для освітлення будинків міщан за відповідну оплату (функціонувала до 1939 р.). 
                    В 1950 р. споруда млина піддається капітальному ремонту і тут відкрито столярну майстерню, а в 1960 р. - закритий 
                    і за призначенням не використовується. Частково відремонтований у 1990-х роках ХХ ст.
                </div>
                <div>
                    <img className='img_content' src={watermill3} />
                </div>
                <div>
                    А ми вирушаємо далі - у місце, де вирує історія. Збаражський замок- це справжня середньовічна твердиня на вершині гори,
                    звідки відкривається прекрасний вид на місто.
                </div>
                <div>
                    <div>
                        Коррдинати:
                    </div>
                    <div>
                        49.663768, 25.784762
                    </div>
                </div>
                <div>
                    Підказка: табличка знаходиться в приміщені каси на дверях.
                </div>
            </div>
        )
    }
}

export default WaterMill;