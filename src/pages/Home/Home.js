import React, {Component} from 'react';
import css from './index.scss';
import image from './images/react.png'

export default class Home extends Component {
    render() {
        return (
            <div className={css['home-wrap']}>
                <img src={image}/>
                <p>Welcome to home</p>
            </div>
        )
    }
}