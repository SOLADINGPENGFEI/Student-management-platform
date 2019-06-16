import React, { Component } from 'react';
import MainComp from '@/components/Menu'

import Addquestion from '../Question/Addquestion/index'
import typeQuestion from '../Question/Typequestion/index'
import questionView from '../Question/Viewquestion/index'
import EditQuestion from '../Question/EditQuestion/index'
import DetailCont from '../Question/Detail/index'

import style from './Main.css';
import { Menu, Dropdown, Icon, Layout,Breadcrumb } from 'antd';
import { Route,Switch } from 'dva/router'
const {Header, Content, Sider } = Layout

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
    const menu = (
      <Menu style={{marginTop:"30px"}}>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
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
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className={style.main} style={{width:"100%",height:"100%"}}>
          <Header className={style.header}>
               <img src="/public/bwLOGO.png" alt=""/>
               <div className={style.person_data}>
                  <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="javascript:;" style={{color:"#000"}}>
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
          <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>学生管理系统</Breadcrumb.Item>
          </Breadcrumb> 
            <div style={{ background: '#fff', padding: 25, minHeight: 225,borderRadius:'10px' }}>
            <Switch>
                <Route path='/main/question/add' component={Addquestion}/>
                <Route path='/main/question/type' component={typeQuestion}/>
                <Route path='/main/question/view' component={questionView}/>
                <Route path='/main/question/viewEdit' component={EditQuestion}/>
                <Route path='/main/question/viewDetail' component={DetailCont}/>
            </Switch>
            </div>
            <div>
              <Switch>
                <Route path='/main/user/add' component={null}/>
                <Route path='/main/user/view' component={null}/>
                <Route path='/main/exam/add' component={null}/>
                <Route path='/main/exam/manage' component={null}/>
                <Route path='/main/class/manage' component={null}/>
                <Route path='/main/class/classroomManage' component={null}/>
                <Route path='/main/class/studentManage' component={null}/>
                <Route path='/main/paper/approval' component={null}/>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}



Main.propTypes = {

};

export default Main;
