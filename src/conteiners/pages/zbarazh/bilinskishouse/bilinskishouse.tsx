import React, { Component} from 'react';
import FirebaseImageUpload from '../../../../components/Firebaseimageupload/firebaseimageupload';
import bilinskishouse1 from './bilinskishouse1.jpg';
import bilinskishouse2 from './bilinskishouse2.png';
import speisershouse1 from './speisershouse1.jpg';
import speisershouse2 from './speisershouse2.jpg';

interface BilinskisHouseState{
    ishidden: boolean
}

interface BilinskisHouseProps{

}

class BilinskisHouse extends Component<BilinskisHouseProps, BilinskisHouseState>{
    constructor(props: BilinskisHouseProps){
        super(props)
        this.state ={
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
                    Локація №7: Будинок Білінських
                </div>
                <div>
                    А зараз перед вами знаходиться особняк, який колись належав відомій у Збаражі родині Білинських. Хоча в інвентарній справі рік 
                    спорудження особняка датується  1903 р. і приписується Тарасу Білинському, все ж історична довідка наводить іншу цифру: "Рік 
                    будівництва 1894, архітектор — Станкевич". В жовтні 1939 р. - знаходилася редакція газети "Червоний Збараж", з 1944 — "Червона зірка", 
                    з 50-х років "Колгоспне життя", з 90-го року — редакція газети Народного руху України "Гомін", а після припинення її роботи Борис 
                    Білинський передав будинок ГО "Народний рух України". 
                </div>
                <div>
                    В 1991 році на стіні будинку встановлена меморіальна дошка присвячена перебуванню тут Івана Франка в 1895, 1897, 1898, 1900, 1902 роках 
                    і освячена Йосипом Янішевським. Тоді ж було задекларовано створення музею Білинських, однак, 16 вересня 1998 р. будинок Борисом Білинським 
                    було продано Людмилі Грабовській. Особняк було перебудовано, піч з центральної зали розібрано, а кахель передано у фонди заповідника. З 2001 р. 
                    і до цього часу в приміщенні функціонує магазин "Людмила". Ось такі скупі цифри і факти історії особняка Білинського, але за холодними стінами, 
                    як правило, стоять гарячі серця господарів.
                </div>
                <div>
                    Отже, Володимир Білинський. У довіднику "Українські лікарі" подано, що він народився 5 травня 1869 року в селі Стрілиська (Стрілища) на Львівщині у 
                    сім’ї священика Теофіла Білинського. Медицину Володимир Білинський студіював у Віденському університеті, де був активним членом студентської громади "Січ". 
                    Після закінчення університету займався приватною практикою у місті Збаражі, а відтак став повітовим лікарем Збаразького повіту. Окрім того, був активним 
                    громадсько-політичним діячем і на політичній ниві багато співпрацював з І. Франком, одним із активних членів Товариства "Просвіта" (за звітом т-ства 
                    1903 рік, тобто часу заснування).
                </div>
                <div>
                    <img className='img_content' src={bilinskishouse1} />
                </div>
                <div>
                    В. Білинський був одружений з Галиною Білинською, дочкою священика з села Синяви - представницею іншої вітки Білинських. Галина (1878–1960), 
                    була дочкою Омеляна Білинського. У Володимира і Галини було троє дітей: Наталка, Ярослав і Тарас (який потім перейняв практику від батька 
                    і був лікарем у Збаражі). Помер В. Білинський під час епідемії тифу 7 травня 1918 року (про це вже йшлося раніше)
                </div>
                <div>
                    Про відвідини І. Франком у Збаражі В. Білинського відомо зі "Спогадів збаразьких селян", де зазначено: Франко після зборів відвідав лікаря 
                    Білинського. Тут він весь час був мовчазний. І як згадує дружина Білинського, мало розмовляв, лише надвечір, виходячи з хати сказав до неї: 
                    "Отаке життя мужицьке – для панів свині дорожчі від людей". Так сказав Іван Франко, бо перед тим чув, як селянин Антон Грициняк розповів історію, 
                    яка лягла в основу "Свинської конституції".
                </div>
                <div>
                    Відразу після цих пафосних слів, в достовірність яких важко повірити і які без сумніву є видумкою районних журналістів, котрі вважали, що 
                    саме так мав казати "революціонер-демократ", у цих спогадах є продовження: "Письменник пішов ночувати в село Залужжя до Шмигельського Тимоша, 
                    з братом якого – Андрієм – він був знайомий". Справді, чого він мав ночувати між панами. Він їх не любить і в нього нема нічого спільного з ними.
                </div>
                <div>
                    Друге джерело – це спогади Луки Іщука: Був у Збаражі, – мовиться у тих спогадах, – лікар Білинський. Знав його Франко та й він Франка знав. 
                    Але, скажу правду, Білинський, як перекотиполе, перекочувався з партії в партію; спершу він був соціалістом, потім в радикали перейшов, 
                    а нарешті став націоналістом. І був він такий, що все йому мало, дай більше. Узнав цей Білинський, що в Красносільцях треба лікаря, 
                    і захотілось йому стати там лікарем, не кидаючи посади в Збаражі. То й став він писати, щоб посаду лікаря в Красносільцях дали йому теж. 
                    Дізнався про це Франко:
                </div>
                <div>
                    <img className='img_content' src={bilinskishouse2} />
                </div>
                <div>
                    – Що ти робиш? Адже ж ти знаєш, що на весь повіт всього два платні лікарі. Ти ж не зумієш всім хворим дати допомогу, – говорив йому Франко.
                </div>
                <div>
                    На запитання Білинський відповів запитанням:
                </div>
                <div>
                    – А скажіть, – каже, – якби вам трапились два плуги, щоб виорати свою ниву – один новий, другий старий, поламаний, – який би взяв пан?
                </div>
                <div>
                    – Я узяв би той плуг, – відповів розгніваний Франко, – який би виорав таке зілля, як ви, пане лікарю, з ниви народної.
                </div>
                <div>
                    Ніхто не записав спогади про І. Франка від дружини В. Білинського. Зрештою, чого записувати від неї, коли вона дружина націоналіста. 
                    Найприкріше, що про останній візит І. Франка у Збараж ще перед тим, як виступити наприкінці грудня 1911 року в "Міщанському братстві" 
                    із читанням поеми "Мойсей" взагалі ніхто не залишив жодних спогадів. Галина (Олена) Білинська похоронена на міському цвинтарі в 
                    гробівці, в якому спочивають її чоловік Володимир та замордований більшовицькими садистами син Тарас. Пам’ятник нагадує витесану з 
                    теребовлянського пісковика свічку, яку завчасно згасила недоля
                </div>
                <div>
                    Що ж, рушаємо далі. Наша наступна локація будинок Спейсера, або стара ветеринарна клініка. Вам буде необхідно зробити фото на його фоні та завантажити сюди
                </div>
                <div>
                    <div>
                        Координати:
                    </div>
                    <div>
                        49.668495, 25.777051
                    </div>
                </div>
                <FirebaseImageUpload _path={'BilinskisHouse'} updateData={this.updateData} /> 
                <div hidden={this.state.ishidden}>
                    <div>
                        Локація №8: Будинок Спейсера
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
                        У повоєнному часі будинок був заселений місцевими жителями. До 1984 року в ньому проживало чотири сім’ї: Васютинський В.І. – вчитель української 
                        мови і літератури, який викладав у збаразькій школі-інтернаті, Гудима В.П. – вчитель фізкультури СШ №1, Курило В.Й. – начальник будинкової 
                        служби "Збаражгаз", Комендат С.І. – вихователька дитячого садка. В середині 80-х років їх переселити у новий будинок в житловому районі АТК. 
                        А в приміщені розташувалися ряд державних установ, зокрема райвно і редакція районної газети. Рішенням Збаразької районної ради №8 від 8 червня 
                        1995 року передається право на володіння районному комунальному архітектурно-плановому бюро (начальник –Дир Я.Д.). З їх дозволу в даному 
                        приміщенні також знаходились і інші служби, зокрема служба охорона навколишнього середовища (Барва М.І. - директор екологічної служби міста) 
                        і комунальне підприємство "Збаражпроект".
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
            </div>
        )
    }
}

export default BilinskisHouse;