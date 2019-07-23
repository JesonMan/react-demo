import React from 'react';
import ReactDom from 'react-dom';
//import Hello from 'components/Hello';
import getRouter from 'router/router';
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDom.render(
    <Provider store={store}>
        { getRouter() }
    </Provider>,
    document.getElementById('app')
);
