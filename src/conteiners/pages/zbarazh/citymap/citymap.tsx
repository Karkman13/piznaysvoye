import React, { Component} from 'react';
import FirebaseImageUpload from '../../../../components/Firebaseimageupload/firebaseimageupload';

interface CityMapState {
    ishidden: boolean;
}

interface CityMapProps {

}

class CityMap extends Component<CityMapProps, CityMapState>{
    constructor(props: CityMapProps){
        super(props)
        this.state ={
            ishidden: true
        }
        this.updateData=this.updateData.bind(this);
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
                    Локація №1 : Карта Міста
                </div>
                <div>
                    Привіт. Це стартова точка туристичного квесту від проєкту "Пізнай Своє".
                </div>
                <div>
                    Зараз ви знаходитесь біля муралу, який був намальований командою цього проєкту.
                </div>
                <div>
                    Двох молодих людей,що зображені на муралі звати Ярко і Дзвінка, і саме із ними ви зможете дізнатись 
                    багато нового й цікавого про місто. Попереду на вас чекають цікаві завдання, мальовничі місця, щирі 
                    посмішки та ще багато-багато цікаво.
                </div>
                <div>
                    У кожній  наступній локації будуть розвішані QR-коди, які ви зможете  відсканувати, прочитати щось цікаве 
                    про це місце та дізнатись ваше наступне завдання. Кожний QR- код вестиме вас до наступної локації. 
                </div>
                <div>
                    Та перед тим трішки про мурал біля якого ви зараз знаходитесь. Чому саме карта, і чому саме ця стіна? 
                    Мурал фактично й розміщений на початку умовного туристичного маршруту, оскільки так чи інакше, це як дорога 
                    прямісінько з автовокзалу, так і дорога до замку. Тому саме тут
                </div>
                <div>
                    А чому на муралі карта міста з історичними пам'ятками? Ідеєю муралу було сконцентровати увагу кожного 
                    туриста не тільки на головну пам'ятку міста- замок, але й показати що у Збаражі є багато локацій, 
                    які варто відвідати кожному туристу й побачити їх на власні очі.
                </div>
                <div>
                    Усі ці пам'ятки зображені на муралі, й усіх їх ви зможете побачити пройшовши всі локації та просканувавши QR-коди.
                </div>
                <div>
                    Ну  що, готовий проходити квест та вивчати це місто? Ми тобі у цьому допоможемо. 
                </div>
                <div>
                    Починаємо))
                </div>
                <div>
                    Ось вам і перше завдання: сфотографуйтеся на фоні муралу та завантажте фото сюди.
                </div>
                <FirebaseImageUpload _path={'CityMap'} updateData={this.updateData} />
                <div hidden={this.state.ishidden}>
                    <div>
                        Молодці. Наша наступна локація оглядова точка біля памятника Богдану Хмельницькому.
                    </div>
                    <div>
                        <div>
                            Координати:
                        </div>
                        <div>
                            49.661737, 25.778463
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CityMap;