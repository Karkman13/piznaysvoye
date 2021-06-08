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
            iswrong: true,
            ishidden: false
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleChange(event: any) {
        this.setState({
            word: event.target.value
        });
        console.log(this.state.word);
    }

    _handleClick(event: any) {
        event.preventDefault();

        let a = this.state.word.toLowerCase();
        if (this.props.answer.includes(a)) {
            this.setState({
                iswrong: false,
                ishidden: false
            }, ()=> {
                this.props.updateData(this.state.iswrong);
            })
        }
        else {
            this.setState({
                iswrong: true,
                ishidden: true
            }, ()=> {
                this.props.updateData(this.state.iswrong);
            })
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.word} onChange={this._handleChange} />
                    <button onClick={this._handleClick}>Click</button>
                </div>
                <div className='wronganswer' hidden={!this.state.ishidden}>
                    Не правильно!
                </div>
            </div>
        );
        
    }
}

export default AnswerWordComponent;