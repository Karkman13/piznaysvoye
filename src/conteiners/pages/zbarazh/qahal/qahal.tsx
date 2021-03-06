import React, { Component} from 'react';
import FirebaseImageUpload from '../../../../components/Firebaseimageupload/firebaseimageupload'
import Qahal1 from './Qagal1.jpg';
import Qahal2 from './Qahal2.jpg';
import Qahal3 from './Qahal3.jpg';

interface QahalState{
    ishidden: boolean;
}

interface QahalProps{

}

class Qahal extends Component<QahalProps, QahalState>{
    constructor(props: QahalProps){
        super(props)
        this.state = {
            ishidden: true
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData (value: boolean){
        this.setState({
            ishidden: value
        })
    }

    render(){
        return(
            <div>
                <div>
                    Локація №5 : Кагал
                </div>
                <div>
                    "Єврейський кагал" (зараз будинок на площі I. Франка) – самоуправна громада і, зокрема її управління. Кагали виникли на 
                    українських землях, які входили до складу Польщі і Великого Князівства Литовського в XVI ст. і були наслідком широкої 
                    автономії, що її мали євреї. Влада кагалу над єврейською громадою була майже повна: кагал нормував і контролював економічне, 
                    релігійне, освітнє, ритуальне і навіть особисте життя членів громади і виконував над ними судочинство на підставі єврейського права.
                </div>
                <div>
                    <img className='img_content' src={Qahal1} />
                </div>
                <div>
                    В цьому будинку була каса взаємодопомоги, клуб, бібліотека і інші установи. Дуже відомий у 30-х роках у Збаражі був клуб – 
                    ЖОА. Це жидівська організація академічних музикантів, тобто музикантів найвищого рівня. Особливо вражало жителів міста, як 
                    вони могли грати на різних інструментах, час від часу їх міняючи.
                </div>
                <div>
                    <img className='img_content' src={Qahal2} />
                </div>
                <div>
                    Кагал міг відлучати євреїв від синагоги ("херем"), що ставило їх поза законом. З другого боку кагал за принципом кругової поруки 
                    збирав для держави податок від євреїв. Управління Кагалом складалося здебільше з семи осіб: старшин (рабин, суддя, писар і "школьник"), 
                    які одержували від громади платню, і почесних членів. Членів кагалу вибирала єврейська громада: спочатку кожен мав право голосу, згодом 
                    тільки багаті та впливові.
                </div>
                <div>
                    <img className='img_content' src={Qahal3} />
                </div>
                <div>
                    В архітектурному плані будинок двоповерховий, над центральним входом балкон, вікна другого поверху арочного типу, прикрашені складними 
                    напівкруглими сандриками. Весь перший поверх оздоблений тинькованим декоративним рустом. Дверні проходи фасаду першого поверху зверху 
                    оформлені прямокутними сандриками, по боках прикрашені півкулями. Дверний отвір другого поверху порталу оформлений декоративними пілястрами 
                    і півкруглими сандриками, оздоблений рослинним орнаментом.
                </div>
                <div>
                    В 70-80 роках ХХ ст. в цьому будинку була центральна районна бібліотека, в 90-х роках там розміщалися – Рух, Спілка ветеранів і 
                    політв’язнів, а на даний час знаходиться філіал земельного відділу і приватні адвокати.
                </div>
                <div>
                    Ось вам завдання: по дорозі до наступної локації ви натрапите на памятник "Каменяру". Зробіть на його фоні фото і завантажте сюди, тоді вам 
                    відкриється наступна локація
                </div>
                <div>
                    <div>
                        Координати:
                    </div>
                    <div>
                        49.666606, 25.778201
                    </div>
                </div>
                <FirebaseImageUpload  _path={'Qahal'} updateData={this.updateData} />
                <div hidden={this.state.ishidden}>
                    <div>
                        Молодці. Ви впоралися із завданням.
                    </div>
                    <div>
                        Тепер нам пора до церкви Воскресіння Хрестового.
                    </div>
                    <div>
                        <div>
                            Координати:
                        </div>
                        <div>
                            49.667297, 25.777828
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Qahal;