import React from 'react'
import {Menu,Icon} from 'antd'
import {connect} from 'dva'
import {Link} from 'dva/router'
import {injectIntl} from 'react-intl'

const {SubMenu} = Menu

function MenuComp(props) {
    console.log(props.myView)
    return <Menu
    defaultSelectedKeys={['0']}
    defaultOpenKeys={['router.main.quesion']}
    mode="inline"
    theme="dark"
  >
    {
      props.myView.map((item, index)=>{
        return <SubMenu key={item.name} title={
          <span>
            <Icon type="user" />
            {props.intl.formatMessage({id: item.name})}
          </span>
        }>{
          item.children.map((value, key)=>{
            return <Menu.Item key={key}>
              <Link to={value.path}>
                {props.intl.formatMessage({id: value.name})}
              </Link>
            </Menu.Item>
          })
        }
        </SubMenu>
      })
    }
  </Menu>
}
const mapStateToProps = state => {
  return {
    myView: state.user.myView
  }
}
export default injectIntl(connect(mapStateToProps)(MenuComp))