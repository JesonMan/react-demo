import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import loadable from '@loadable/component';
import css from './router.scss';

const Home = loadable(() => import(/* webpackChunkName: "Home" */'pages/Home/Home'), {
    fallback: <div>loading...</div>
});

const Page1 = loadable(() => import(/* webpackChunkName: "Page1" */'pages/Page1/Page1'), {
    fallback: <div>loading...</div>
});

const Counter = loadable(() => import(/* webpackChunkName: "Counter" */'pages/Counter/Counter'), {
    fallback: <div>loading...</div>
});

const getRouter = () => (
    <Router>
        <div>
            <ul className={css['nav-ctn']}>
                <li><NavLink exact to="/">首页</NavLink></li>
                <li><NavLink to="/page1">Page1</NavLink></li>
                <li><NavLink to="/counter">Counter</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/counter" component={Counter}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;