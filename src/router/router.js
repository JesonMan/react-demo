import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Loadable from 'react-loadable';
import css from './router.scss';

function Loading() {
  return <div>loading...</div>;
}

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */'pages/Home/Home'),
    loading: Loading
});

const Page1 = Loadable({
    loader: () => import(/* webpackChunkName: "Page1" */'pages/Page1/Page1'),
    loading: Loading
});

const Counter = Loadable({
    loader: () => import(/* webpackChunkName: "Counter" */'pages/Counter/Counter'),
    loading: Loading
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