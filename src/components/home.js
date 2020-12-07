import React, { Component } from 'react';
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from "react-router-dom";

const Header = loadable(() => import('./common/header'))
const SideBar = loadable(() => import('./common/sideBar'))
const Tags = loadable(() => import('./common/tags'))
const GoodsTable = loadable(() => import('./pages/goodsManage/GoodsTable'))
const AddGoods = loadable(() => import('./pages/goodsManage/AddGoods'))
const OrderTable = loadable(() => import('./pages/orderManage/OrderTable'))
const OrderQueryTable = loadable(() => import('./pages/orderManage/OrderQueryTable'))
const AddOrder = loadable(() => import('./pages/orderManage/AddOrder'))
const AgentTable = loadable(() => import('./pages/agentManage/AgentTable'))
const AddAgent = loadable(() => import('./pages/agentManage/AddAgent'))
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagsList: []
        }
    }
    render() {
        let contentBoxClass = 'content-box'
        if (this.props.collapse) {
            contentBoxClass += ' content-collapse'
        }
        return (
            <div className="wrapper">
                <Header />
                <SideBar />
                <div className={contentBoxClass}>
                    <Tags />
                    <div className="content">
                        <Switch>
                            <Redirect exact from='/' to="/index" />
                            <Route path="/index">
                                <GoodsTable />
                            </Route>
                            <Route path="/addGoods">
                                <AddGoods />
                            </Route>
                            <Route path="/orderTable">
                                <OrderTable />
                            </Route>
                            <Route path="/orderQueryTable">
                                <OrderQueryTable />
                            </Route>
                            <Route path="/addOrder">
                                <AddOrder />
                            </Route>
                            <Route path="/agentTable">
                                <AgentTable />
                            </Route>
                            <Route path="/addAgent">
                                <AddAgent />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        collapse: state.glob.collapse
    }
}

export default connect(mapStateToProps)(Home)
