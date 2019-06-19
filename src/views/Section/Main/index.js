import React, { Component } from 'react';
import MainComp from '@/components/Menu'
//试题管理
import Addquestion from '../Question/Addquestion/index'
import typeQuestion from '../Question/Typequestion/index'
import questionView from '../Question/Viewquestion/index'
import EditQuestion from '../Question/EditQuestion/index'
import DetailCont from '../Question/Detail/index'
//用户管理
import AddUser from '../User/Add/index'
import Viewuser from '../User/View/index'
//考试管理
import AddExam from '../Exam/Addexam/index'
import ManageExam from '../Exam/ManageExam/index'
import ExamDetail from '../Exam/ExamDetail/index'

import style from './Main.css';
import { Menu, Dropdown, Icon, Layout,Spin } from 'antd';
import { Route,Switch } from 'dva/router'
import {connect} from 'dva'
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
               <span>国际化切换
               <button onClick={()=>this.props.changeLocal(this.props.locale==='zh'?'en':'zh')}>
               {this.props.locale==='zh'?'中文':'英文'}</button>
               </span>
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
          <Content style={{ padding: '0 30px' }}>
            <Switch>
                <Route path='/main/question/add' component={Addquestion}/>
                <Route path='/main/question/type' component={typeQuestion}/>
                <Route path='/main/question/view' component={questionView}/>
                <Route path='/main/question/viewEdit' component={EditQuestion}/>
                <Route path='/main/question/viewDetail' component={DetailCont}/>
            </Switch>
            <div>
              <Switch>
                <Route path='/main/user/add' component={AddUser}/>
                <Route path='/main/user/view' component={Viewuser}/>
                <Route path='/main/exam/add' component={AddExam}/>
                <Route path='/main/exam/manage' component={ManageExam}/>
                <Route path='/main/exam/detail' component={ExamDetail}/>
                <Route path='/main/class/manage' component={null}/>
                <Route path='/main/class/classroomManage' component={null}/>
                <Route path='/main/class/studentManage' component={null}/>
                <Route path='/main/paper/approval' component={null}/>
              </Switch>
            </div>
            {this.props.loading?<div className={style.loading}>
              <Spin/>
            </div>:null}
          </Content>
        </Layout>
      </Layout>
    )
  }
}



Main.propTypes = {

};
const mapStateToProps = state => {
    return {
      // loading: state.loading.global,
      locale: state.global.locale
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
