import React from 'react'
import {Menu,Icon} from 'antd'
import {Link} from 'dva/router'
import {injectIntl} from 'react-intl'

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
          <span>
          {props.intl.formatMessage({id:'router.main.question'})}
          </span>
        </span>
      }
    >
      <Menu.Item key="1">
          <Link to='/main/question/add'>{props.intl.formatMessage({id:'router.main.question.add'})}</Link>
      </Menu.Item>
      <Menu.Item key="2">
          <Link to='/main/question/type'>{props.intl.formatMessage({id:'router.main.question.type'})}</Link>
      </Menu.Item>
      <Menu.Item key="3">
          <Link to='/main/question/view'>{props.intl.formatMessage({id:'router.main.question.view'})}</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="user"
      title={
        <span>
          <Icon type="appstore" />
          <span>
          {props.intl.formatMessage({id:'router.main.user'})}
          </span>
        </span>
      }
    >
      <Menu.Item key="4">
          <Link to='/main/user/add'>{props.intl.formatMessage({id:'router.main.user.add'})}</Link>
      </Menu.Item>
      <Menu.Item key="5">
          <Link to='/main/user/view'>{props.intl.formatMessage({id:'router.main.user.view'})}</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="exam"
      title={
        <span>
          <Icon type="appstore" />
          <span>
            {props.intl.formatMessage({id:'router.main.exam'})}
          </span>
        </span>
      }
    >
      <Menu.Item key="6">
          <Link to='/main/exam/add'>{props.intl.formatMessage({id:'router.main.exam.add'})}</Link>
      </Menu.Item>
      <Menu.Item key="7">
          <Link to='/main/exam/manage'>{props.intl.formatMessage({id:'router.main.exam.manage'})}</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="class"
      title={
        <span>
          <Icon type="mail" />
          <span>{props.intl.formatMessage({id:'router.main.class'})}</span>
        </span>
      }
    >
      <Menu.Item key="8">
          <Link to='/main/class/manage'>{props.intl.formatMessage({id:'router.main.class.manage'})}</Link>
      </Menu.Item>
      <Menu.Item key="9">
          <Link to='/main/class/classroomManage'>{props.intl.formatMessage({id:'router.main.class.classroomManage'})}</Link>
      </Menu.Item>
      <Menu.Item key="10">
          <Link to='/main/class/studentManage'>{props.intl.formatMessage({id:'router.main.class.studentManage'})}</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="paper"
      title={
        <span>
          <Icon type="appstore" />
          <span>{props.intl.formatMessage({id:'router./main/paper'})}</span>
        </span>
      }
    >
      <Menu.Item key="11">
          <Link to='/main/paper/approval'>{props.intl.formatMessage({id:'router./main/paper/approval'})}</Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
}
export default injectIntl(MenuComp)