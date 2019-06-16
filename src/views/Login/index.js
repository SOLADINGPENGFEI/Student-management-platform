import React, {  useEffect } from 'react';
import {connect} from 'dva'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';

import styles from './login.css';

function LoginPage(props) {
    //判断是否登陆
    useEffect(() => {
      if(props.isLogin === 1) {
          //提示登录成功
          message.success('登录成功')
          //存储cookie
          //跳转主页面
          // console.log('props.history',props.history)
          props.history.replace("/main")
          // let pathName = decodeURIComponent(props.history.location.search.split('=')[1])
          // props.history.replace(pathName)
      } else if(props.isLogin === -1) {
        message.error('用户名或密码错误')
      }
    }, [props.isLogin])
      //处理表单提交
      let handleSubmit = e => {
          e.preventDefault();
          let {login} = props
          props.form.validateFields((err, values) => {
          if (!err) {
              // console.log('values...', values);
              login({
                  user_name: values.username,
                  user_pwd: values.password
              })
          }
          // console.log(props)
          });
      };
      const { getFieldDecorator } = props.form;
    
      return <div className={styles.index}>
            <div className={styles.login}>
            <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            validateTrigger:'onBlur',
            rules: [
                { required: true,pattern: /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,16}$/,
                 message: '请输入正确的密码!' }
                ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入包含大小写字母数字以及特殊字符"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className={styles.login_form_button} 
          >
            登录
          </Button>
          或者 <a href="">立即注册!</a>
        </Form.Item>
      </Form>
            </div>
          </div>
}

//props的类型检查
LoginPage.propTypes = {

}

//props 的默认值
LoginPage.defaultProps = {
    // props: null
}

const mapState = (state) => {
    console.log('state...',state)
    return {
       ...state.user
    }
}
const mapDispatch = dispatch => {
    return {
        login(payload) {
            // console.log(payload)
            dispatch({
                type:'user/login',
                payload
            })
        }
    }
}
export default connect(mapState,mapDispatch)(Form.create()(LoginPage));
