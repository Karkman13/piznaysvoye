import React, { Component } from 'react';
import smile from './smile.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={smile} className="smile" alt="smile" />
                <h2>Тут має бути сайт, але його ще немає.</h2>
            </div>
        );
    }
}

export default Home;