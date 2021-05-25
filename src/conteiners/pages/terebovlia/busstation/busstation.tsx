import React, { Component } from 'react';
import Text from './text';
import FirebaseImageUpload from '../../../../components/Firebaseimageupload/firebaseimageupload';
import railway6 from './railway6.jpg';
import railway7 from './railway7.jpg';

interface BusStationState {
    ishidden: boolean,
}

interface BusStationProps {

}

class BusStation extends Component<BusStationProps, BusStationState> {
    constructor(props: BusStationProps) {
        super(props)
        this.state = {
            ishidden: true
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData(value: boolean) {
        this.setState({
            ishidden: value
        })
    }

    render() {
        return (
            <div>
                <Text />
                <FirebaseImageUpload _path={'BusStation'} updateData={this.updateData} />
                <div hidden={this.state.ishidden}>
                    <div>
                        Молодці. Ви впорались із завданням.
                    </div>
                    <div>
                        Перша згадка про Теребовлю датується 1097 роком і вже тоді місто було центром великого Теребовлянського князівства,
                        яким правив могутній князь, один із трьох синів князя Ростислава. Троє братів тримали всю Галичину. Князь Василько був наймолодшим,
                        проте дуже завзятим. Про його осліплення написана окрема повість. Святополк Ізяславич та Давид Ігорович підступно поступили із ним після з’їзду князів.
                        Проте навіть після осліплення він ще 27 років воював,
                        примножував свої землі й князівство розвивалось. В 1997 році теребовлянці поставили йому пам’ятник. Поруч із князем хлопчина. Дехто каже, що це його син,
                        інші вважають, що - зброєносець або поводир
                        
                    </div>
                    <div>
                    <img className='img_content' src={railway6} />
                    </div>
                    <div>
                        Рекомендуємо обійти пам’ятник навкруги і сфотографувати весь текст, написаний на ньому. Хтозна, можливо це вам знадобиться ;)
                    </div>
                    <div>
                    <img className='img_content' src={railway7} />
                    </div>
                    <div>
                        {/* Молодці. Ви впорались із завданням. Тепер пора на залізничний вокзал. Там ви і знайдете наступний QR- код. */}
                    Тепер пора до залізничного вокзалу. Там ви і знайдете наступний QR- код.
                    </div>

                    <div>Координати:</div>
                    <div> 49°17'54.9"N 25°41'46.3"E</div>
                    {/* <div>
                        49.298687, 25.694509
                        </div> */}
                </div>
            </div>
        );
    }
}

export default BusStation;