import React from 'react'
import {Menu,Icon} from 'antd'
import {Link} from 'dva/router'

const {SubMenu} = Menu

function MenuComp(props) {
    // console.log(props)
    return <Menu
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
    theme="dark"
  >
    <SubMenu
      key="question"
      title={
        <span>
          <Icon type="appstore" />
          <span>试卷管理</span>
        </span>
      }
    >
      <Menu.Item key="1">
          <Link to='/main/question/add'>添加试题</Link>
      </Menu.Item>
      <Menu.Item key="2">
          <Link to='/main/question/type'>试题分类</Link>
      </Menu.Item>
      <Menu.Item key="3">
          <Link to='/main/question/view'>查看试题</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="user"
      title={
        <span>
          <Icon type="appstore" />
          <span>用户管理</span>
        </span>
      }
    >
      <Menu.Item key="4">
          <Link to='/main/user/add'>添加用户</Link>
      </Menu.Item>
      <Menu.Item key="5">
          <Link to='/main/user/view'>用户展示</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="exam"
      title={
        <span>
          <Icon type="appstore" />
          <span>考试管理</span>
        </span>
      }
    >
      <Menu.Item key="6">
          <Link to='/main/exam/add'>添加考试</Link>
      </Menu.Item>
      <Menu.Item key="7">
          <Link to='/main/exam/manage'>试卷管理</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="class"
      title={
        <span>
          <Icon type="mail" />
          <span>班级管理</span>
        </span>
      }
    >
      <Menu.Item key="8">
          <Link to='/main/class/manage'>班级管理</Link>
      </Menu.Item>
      <Menu.Item key="9">
          <Link to='/main/class/classroomManage'>教室管理</Link>
      </Menu.Item>
      <Menu.Item key="10">
          <Link to='/main/class/studentManage'>学生管理</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="paper"
      title={
        <span>
          <Icon type="appstore" />
          <span>阅卷管理</span>
        </span>
      }
    >
      <Menu.Item key="11">
          <Link to='/main/paper/approval'>待批班级</Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
}
export default MenuComp