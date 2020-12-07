import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import loadable from '@loadable/component'
// import 'element-theme-default'
import('antd/dist/antd.css'); // or 'antd/dist/antd.less'
import('./assets/css/main.css');
import('./assets/css/color-dark.css');

const Home = loadable(() => import('./components/home'))

class App extends Component {
    render() {
        return (
            <Home />
        );
    }
}

export default App;
