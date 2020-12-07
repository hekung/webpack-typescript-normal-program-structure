import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Link,
    withRouter
} from "react-router-dom";
import { Menu, Button } from 'antd';
import { UsergroupAddOutlined, AppstoreAddOutlined, DatabaseOutlined } from '@ant-design/icons'
import './sideBar.less'
const { SubMenu } = Menu;

class SiderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultSelectedKeys: ['index'],
            selectedKeys: ['index'],
            defaultOpenKeys: ['sub0', 'sub1', 'sub2']
        }
    }
    componentDidMount() {
        console.log(this.props)
        let pathName = this.props.location.pathname.substring(1)
        this.setState({
            selectedKeys: [pathName]
        })
        this.props.history.listen((to) => {
            let pathName = to.pathname.substring(1)
            this.setState({
                selectedKeys: [pathName]
            })
        })
    }
    render() {

        return (
            <div className="sidebar">
                <Menu
                    defaultSelectedKeys={this.state.defaultSelectedKeys}
                    defaultOpenKeys={this.state.defaultOpenKeys}
                    selectedKeys={this.state.selectedKeys}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.props.collapse}
                    className="side-menu"
                >
                    <SubMenu key="sub0" title={
                        <span>
                            <AppstoreAddOutlined />
                            <span>商品管理</span>
                        </span>
                    }>
                        <Menu.Item key="index">
                            <Link to='/index'>商品列表</Link>
                        </Menu.Item>
                        <Menu.Item key="addGoods">
                            <Link to='/addGoods'>新建商品</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" title={
                        <span>
                            <DatabaseOutlined />
                            <span>订单管理</span>
                        </span>
                    }>
                        <Menu.Item key="orderTable">
                            <Link to='/orderTable'>销售单列表</Link>
                        </Menu.Item>
                        <Menu.Item key="addOrder">
                            <Link to='/addOrder'>新建销售单</Link>
                        </Menu.Item>
                        <Menu.Item key="orderQueryTable">
                            <Link to='/orderQueryTable'>销售单查询</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={
                        <span>
                            <UsergroupAddOutlined />
                            <span>代理商管理</span>
                        </span>
                    }>
                        <Menu.Item key="agentTable">
                            <Link to='/agentTable'>代理商列表</Link>
                        </Menu.Item>
                        <Menu.Item key="addAgent">
                            <Link to='/addAgent'>新建代理商</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        collapse: state.glob.collapse
    }
}

export default withRouter(connect(mapStateToProps)(SiderBar));
