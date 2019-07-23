import React, {Component} from 'react';
import css from './page1.scss';
import image from './images/yunanquan.png';

export default class Page1 extends Component {
    render() {
        return (
            <div className={css.box}>
                <img src={image}/>
                <p>This is Page1</p>
            </div>
        )
    }
}