import React, { Component } from 'react';

interface AnswerState {
    word: string,
    iswrong: boolean,
    ishidden: boolean
}

interface AnswerProps {
    updateData: (value: boolean) => any,
    answer: string[]
}

class AnswerWordComponent extends Component<AnswerProps, AnswerState>{
    constructor(props: AnswerProps) {
        super(props)
        this.state = {
            word: '',
            iswrong: false,
            ishidden: true
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    updateData(value: boolean){
        console.log(this.state.ishidden);
        this.setState({ ishidden: value });
        console.log('is hidden value changed');
    }

    _handleChange(event: any) {
        this.setState({
            word: event.target.value
        });
        console.log(this.state.word);
    }

    _handleClick(event: any) {
        event.preventDefault();
        console.log(this.state.word);
        // this.props.answer.forEach(i => {
        //     if (this.state.word == i){
        //         console.log('fucking good');
        //     }
        //     else{
        //         this.setState({
        //             iswrong: true
        //         })
        //         console.log(this.state.iswrong);
        //         console.log('не зупинилося')
        //     }
        // }
        // )

        // let status = this.props.answer.includes(this.state.word);
        // console.log(status);
        // if (!status) {
        //     this.setState({
        //         iswrong:true
        //     })
        // }
        // else{
        //     this.setState({
        //         iswrong:false
        //     })
        //     this.props.updateData(this.state.iswrong);
        // }
        console.log(this.state.iswrong);
        if (this.props.answer.includes(this.state.word)) {
            this.setState({
                iswrong: false
            })
            console.log('state changed to false')
            this.props.updateData(this.state.iswrong);
        }
        else {
            this.setState({
                iswrong: true
            })
            console.log('state changed to true')
        }
        console.log(this.state.iswrong);
    }
    
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.word} onChange={this._handleChange} />
                    <button onClick={this._handleClick}>Click</button>
                </div>
                <div className='wronganswer' hidden={!this.state.iswrong}>
                    Не правильно!
                </div>
            </div>
        );
    }
}

export default AnswerWordComponent;