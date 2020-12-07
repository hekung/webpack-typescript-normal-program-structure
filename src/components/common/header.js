import './header.less'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Avatar, Dropdown, Menu, Tooltip, Button } from 'antd';
import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined
} from '@ant-design/icons';
import imgPath from '@/assets/img/img.jpg'
import { toggleCollapse } from '../../redux/actions'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullscreen: false
        }
    }
    handleCollapseChange() {
        // let collapse = !this.state.collapse
        // this.setState({
        //     collapse
        // })
        // this.props.onCollapse(collapse)
        this.props.toggleCollapse()
    }
    handleFullScreen() {
        let element = document.documentElement
        if (this.state.fullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen()
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen()
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen()
            } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen()
            }
        }
        let fullscreen = !this.state.fullscreen
        this.setState({
            fullscreen
        })
    }
    handleCommand(command) {
        if (command === 'loginout') {
            let url = '/innobeautyoms/auth/logout'
            this.util.get(url).then(res => {
                if (res.data.status === 0) {
                    window.location.reload()
                } else {
                    Message.error('系统错误')
                }
            })
        }
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <div onClick={() => this.handleCommand('loginout')}>退出登录</div>
                </Menu.Item>
            </Menu>
        )
        const tooltipText = <span>{this.state.fullscreen ? '取消全屏' : '全屏'}</span>;
        let collapse = this.props.collapse
        console.log(collapse)
        return (
            <div className="header">
                <Button type="text" className="collapse-btn" onClick={() => this.handleCollapseChange()}>
                    {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <div className="logo">OMS后台管理系统</div>
                <div className="header-right">
                    <div className="header-user-con">
                        <div className="btn-fullscreen" onClick={() => this.handleFullScreen()}>
                            <Tooltip className="item" title={tooltipText} placement="bottom">
                                {React.createElement(this.state.fullscreen ? FullscreenExitOutlined : FullscreenOutlined)}
                            </Tooltip>
                        </div>
                        <Dropdown overlay={menu} placement="topCenter">
                            <Avatar icon={<UserOutlined />} />
                            {/* <div className="user-avator">
                                <img src={imgPath} alt="" />
                            </div> */}
                        </Dropdown>

                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collapse: state.glob.collapse
    }
}
export default connect(mapStateToProps, { toggleCollapse })(Header)