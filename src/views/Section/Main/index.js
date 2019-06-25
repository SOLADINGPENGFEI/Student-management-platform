import React, { Component } from 'react';
import MainComp from '@/components/Menu'

import style from './Main.css';
import { Menu, Dropdown, Icon, Layout,Select } from 'antd';
import { Route,Switch,Redirect } from 'dva/router'
import {connect} from 'dva'
const {Header, Content, Sider } = Layout
const { Option } = Select;
class Main extends Component {
   state = {
    collapsed: false,
   }
   toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
    
  render() {
    if(!this.props.myView.length) {
        return null
    }
    const menu = (
      <Menu style={{marginTop:"30px"}}>
        <Menu.Item>
          <a onClick={()=>this.handleDraw()}>
            个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            我的班级
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            设置
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" onClick={()=>this.handleBack()}>
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    console.log(this.props.userImg)
    return (
      <Layout className={style.main} style={{width:"100%",height:"100%"}}>
          <Header className={style.header}>
               <img src={this.props.userImg} alt=""/>
               <Select defaultValue='EngLish'
               style={{ width: 120 }}
               onChange={()=>this.props.changeLocal(this.props.locale==='zh'?'en':'zh')}>
                 <Option value="EngLish">EngLish</Option>
                 <Option value="中文">中文</Option>
               </Select>
               <div className={style.person_data}>
                  <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="" style={{color:"#000"}}>
                      <img src="/public/head.jpg" alt=""/>
                        个人信息 
                        <Icon type="down" />
                      </a>
                  </Dropdown>
               </div>
          </Header>
        <Layout className={style.list}>
            <Sider style={{ width: 200,height:"100%"}}>
                <MainComp />
            </Sider>
          <Content style={{ padding: '0 25px' }}>
            <Switch>
                <Redirect exact from="/main" to="/main/question/add" />
                {/* 渲染该用户拥有的路由 */}
                
                {
                  this.props.myView.map((item)=>{
                  
                    if(item.children) {
                      return item.children.map((value)=>{
                          return <Route key={value.id} path={value.path} component={value.component} />
                      })
                    }
                  })
                }
            </Switch>
            {/* {this.props.loading?<div className={style.loading}>
              <Spin/>
            </div>:null} */}
          </Content>
        </Layout>
      </Layout>
    )
  }
  handleBack = () => {
    // document.Cookies.remove('authorization')
  }
  handleDraw = () => {
    this.props.history.replace('/main/draw')
  }
}


Main.propTypes = {

};
const mapStateToProps = state => {
    return {
      // loading: state.loading.global,
      locale: state.global.locale,
      myView: state.user.myView,
      forbiddenView: state.user.forbiddenView,
      userImg: state.user.userImg
    }
}
const mapDispatchToProps = dispatch => {
    return {
      changeLocal: payload => {
        dispatch({
          type: 'global/changeLocale',
          payload
        })
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
