import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import './tags.less'
const routeList = [
    { title: '商品列表', path: '/index' },
    { title: '新建商品', path: '/addGoods' },
    { title: '销售单列表', path: '/orderTable' },
    { title: '销售单查询', path: '/orderQueryTable' },
    { title: '新建订单', path: '/addOrder' },
    { title: '代理商列表', path: '/agentTable' },
    { title: '新建代理商', path: '/addAgent' }
]
class Tags extends Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this)
        this.state = {
            tagsList: [
                // { path: '/orderTable', title: '销售单列表' }
            ],

        }
    }
    closeTags(index) {
        // const delItem = this.state.tagsList.
        let tagsList = this.state.tagsList, isClickLast = false
        if (index === tagsList.length - 1) {
            isClickLast = true
        }
        tagsList.splice(index, 1)
        this.setState(() => ({
            tagsList
        }))
        if (isClickLast) {
            this.props.history.push(
                tagsList[index - 1].path
            )
        }
        // const item = this.tagsList[index]
        //     ? this.tagsList[index]
        //     : this.tagsList[index - 1]
        // if (item) {
        //     delItem.path === this.$route.fullPath && this.$router.push(item.path)
        // } else {
        //     this.$router.push('/')
        // }
    }
    handleMenuClick(e) {
        if (e.key == 1) {
            this.setState(() => ({
                tagsList: []
            }))
            this.props.history.push('/index')
        } else {
            let { pathname, search } = route || this.props.location
            let curFullPath = pathname + search
            const curItem = this.state.tagsList.filter(item => item.path === curFullPath)
            this.tagsList = curItem
        }
    }
    setTags(route) {
        let { pathname, search } = route || this.props.location
        let curFullPath = pathname + search
        const isExist = this.state.tagsList.some(item => item.path === curFullPath)
        if (!isExist) {
            let tagsList
            if (this.state.tagsList.length >= 8) {
                tagsList = this.state.tagsList.slice(0, 8)
            } else {
                tagsList = this.state.tagsList.slice()
            }
            let routeItem = routeList.find(e => e.path === pathname)
            tagsList.push({
                path: curFullPath,
                title: routeItem.title
            })

            this.setState({
                tagsList
            })

        }
    }
    componentDidMount() {
        this.setTags()
        this.props.history.listen((to) => {
            this.setTags(to)
        })
    }
    render() {
        if (!this.state.tagsList.length) {
            return null
        }
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                    关闭所有
                </Menu.Item>
                <Menu.Item key="2">
                    关闭其他
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="tags">
                <ul>
                    {
                        this.state.tagsList.map((item, index) =>
                            <li key={index.toString()} className={item.path == (this.props.location.pathname + this.props.location.search) ? 'tags-li active' : 'tags-li'}>
                                <Link to={item.path} className="tags-li-title">{item.title}</Link>
                                <span className="tags-li-icon" onClick={() => this.closeTags(index)}>
                                    <CloseOutlined />
                                </span>
                            </li >
                        )
                    }
                </ul>
                <div className="tags-close-box">
                    <Dropdown overlay={menu}>
                        <Button className="tags-control-btn">
                            标签选项 <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default withRouter(Tags);