import React, { Component } from 'react';
import Text from './text'
import AnswerWordComponent from '../../../../components/AnserWordComponent/anserwordcomponent'

interface SchoolState {
    answer: string[],
    ishidden: boolean
}

interface SchoolProps {

}

class HigherSchoolCulture extends Component<SchoolProps, SchoolState> {
    constructor(props: SchoolProps) {
        super(props)
        this.state = {
            answer: ['кобзар'],
            ishidden: true
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData(value: boolean) {
        this.setState({
            ishidden: value
        })
        console.log('objet hide/show')
    }

    render() {
        return (
            <div>
                <Text />
                <div>
                    А ми для вас маємо запитання:
                </div>
                <div>
                    Яку саме книгу читає Славко?
                </div>
                <AnswerWordComponent answer={this.state.answer} updateData={this.updateData} />
                <div hidden={this.state.ishidden}>
                    <div>
                        Саме так. Й наступна наша локація - це парк, який названий в честь автора величного "Кобзаря".
                    </div>
                </div>
                {/* <div>
                Підказка: QR-код розміщений не у парку, а біля нього. За пам'ятником Т.Шевченка, на будівлі, що знаходиться на вул. Зазамче, 
                2 (біля продуктового магазину "Під замком")
                </div> */}
            </div>
        );
    }
}

export default HigherSchoolCulture;