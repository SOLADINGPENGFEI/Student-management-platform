import React, { useState, useEffect } from "react";
import { Form,Tabs, Input, Select, Button,Breadcrumb } from "antd";
import { connect } from "dva";

import './AddUser.scss'
function AddUser(props) {

    const { TabPane } = Tabs;
    const { Option } = Select;
    // 输入框的key
    function callback(key) {
        console.log(key);
    }

    // select的value
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    //获取输入框里的值
    let handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values)=> {
            if(!err) {
                console.log(values)

            }
        })
    }
    //button按钮的加载效果
    const [loading,newLoad] = useState(false)
    const [iconLoading,newIconLoad] = useState(false)
    let enterLoading = () => {
        newLoad(true)
      };
    
    let enterIconLoading = () => {
        newIconLoad(true)
    };
    //form表单的属性
    const {getFieldDecorator} = props.form

    //请求数据
    useEffect(()=>{
        props.getshowUser()
        props.getidentity()
        props.getviewAuthor()
        props.getapiAuthority()
    },[])

    //获取数据
    const {identity,userAll,viewAuthorsAll,apiAuthorityAll} = props
    return (
        <div className='wrap-user'>
            <Breadcrumb style={{ margin: '16px 0',fontSize:22 }}>
                <Breadcrumb.Item>添加用户</Breadcrumb.Item>
            </Breadcrumb> 
            <div className='main'>
            <div className='section'>
            <Form onSubmit={handleSubmit}>
                <Tabs className='type' onChange={callback} type="card">
               
                    <TabPane tab="添加用户" key="1">
                    <Form.Item>
                        {getFieldDecorator('username', {
                        })(<Input placeholder="请输入用户名" />)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('pwd', {
                        })(<Input placeholder="请输入密码" />)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Author', {
                             initialValue:"请选择身份id"
                        })(<Select style={{ width: 180 }} onChange={handleChange}>
                            {identity?identity.map(item=>(
                                <Option key={item.user_id}
                                value={item.identity_text}>{item.identity_text}</Option>
                            )):null}
                            </Select>)}
                    </Form.Item>
                    <div>
                        <Button type="primary" htmlType="submit"
                        loading={iconLoading}
                        onClick={enterIconLoading}>确定</Button>
                        <Button>重置</Button>
                    </div>
                    </TabPane>
                    
                    <TabPane tab="更新用户" key="2">
                        <Form.Item>
                            {getFieldDecorator('authors', {
                                initialValue:"请选择身份id"
                            })(<Select  style={{ width: 180 }} onChange={handleChange}>
                                {userAll?userAll.map(item=>(
                                    <Option key={item.user_id}
                                    value={item.user_name}>{item.user_name}</Option>
                                )):null}
                                </Select>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('username', {
                            })(<Input placeholder="请输入用户名" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('pwd', {
                            })(<Input placeholder="请输入密码" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('author', {
                                initialValue:"请选择身份id"
                            })(<Select  style={{ width: 180 }} onChange={handleChange}>
                                {identity?identity.map(item=>(
                                <Option key={item.user_id}
                                value={item.identity_text}>{item.identity_text}</Option>
                            )):null}
                            </Select>)}
                        </Form.Item>
                        <div>
                            <Button type="primary" htmlType="submit"
                            loading={iconLoading}
                            onClick={enterIconLoading}>确定</Button>
                            <Button>重置</Button>
                        </div>
                    </TabPane>
                </Tabs>
                    </Form>
                </div>  
                <div className='section'>
                    <Button>添加身份</Button>
                    <Form>
                        <Form.Item>
                            {getFieldDecorator('username', {
                            })(<Input placeholder="请输入身份名称" />)}
                        </Form.Item>
                        <div>
                            <Button type="primary" htmlType="submit"
                            loading={iconLoading}
                            onClick={enterIconLoading}>确定</Button>
                            <Button>重置</Button>
                        </div>
                    </Form>
                </div>
                    <div className='section'>
                        <Button>添加api接口</Button>
                        <Form>
                            <Form.Item>
                                {getFieldDecorator('apiName', {
                                })(<Input placeholder="请输入api接口权限名称" />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('apiUrl', {
                                })(<Input placeholder="请输入api接口权限Url" />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('apiMethod', {
                                })(<Input placeholder="请输入api接口权限方法" />)}
                            </Form.Item>
                        </Form>
                        <div>
                            <Button type="primary" htmlType="submit"
                            loading={iconLoading}
                            onClick={enterIconLoading}>确定</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className='section'>
                        <Button>添加视图接口权限</Button>
                        <Form>
                            <Form.Item>
                                {getFieldDecorator('identityView', {
                                    initialValue:"请选择已有视图"
                                })(<Select  style={{ width: 180 }} onChange={handleChange}>
                                    {viewAuthorsAll?viewAuthorsAll.map(item=>(
                                        <Option key={item.view_id}
                                        value={item.view_authority_text}>{item.view_authority_text}</Option>
                                    )):null}
                                        
                                    </Select>)}
                            </Form.Item>
                            <div>
                                <Button type="primary" htmlType="submit"
                                loading={iconLoading}
                                onClick={enterIconLoading}>确定</Button>
                                <Button>重置</Button>
                            </div>
                        </Form>
                    </div>
                    <div className='section'>
                        <Button>给身份设置api接口权限</Button>
                        <Form>
                            <Form.Item>
                                {getFieldDecorator('APIidentityID', {
                                    initialValue:"请选择身份id"
                                })( <Select  style={{ width: 230 }} onChange={handleChange}>
                                        {identity?identity.map(item=>(
                                            <Option key={item.user_id}
                                            value={item.identity_text}>{item.identity_text}</Option>
                                        )):null}
                                    </Select>)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('apiID', {
                                    initialValue:"请选择api接口权限id"
                                })( <Select  style={{ width: 230 }} onChange={handleChange}>
                                    {apiAuthorityAll?apiAuthorityAll.map(item=>(
                                        <Option key={item.api_authority_text}
                                        value={item.api_authority_text}>{item.api_authority_text}</Option>
                                    )):null}
                                    </Select>)}
                            </Form.Item>
                            <div>
                                <Button type="primary" htmlType="submit"
                                loading={iconLoading}
                                onClick={enterIconLoading}>确定</Button>
                                <Button>重置</Button>
                            </div>
                        </Form>
                    </div>
                    <div className='section'>
                        <Button>给身份设置视图权限</Button>
                        <Form>
                            <Form.Item>
                                {getFieldDecorator('identityID', {
                                   initialValue:"请选择身份id"
                                })( <Select  style={{ width: 230 }} onChange={handleChange}>
                                        {identity?identity.map(item=>(
                                            <Option key={item.user_id}
                                            value={item.identity_text}>{item.identity_text}</Option>
                                        )):null}
                                    </Select>)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('ViewID', {
                                    initialValue:"请选择视图接口权限id"
                                })( <Select  style={{ width: 230 }} onChange={handleChange}>
                                        {viewAuthorsAll?viewAuthorsAll.map(item=>(
                                            <Option key={item.view_id}
                                            value={item.view_authority_text}>{item.view_authority_text}</Option>
                                        )):null}
                                    </Select>)}
                            </Form.Item>
                            <div>
                                <Button type="primary" htmlType="submit"
                                loading={iconLoading}
                                onClick={enterIconLoading}>确定</Button>
                                <Button>重置</Button>
                            </div>
                        </Form>
                    </div>
            </div>
    </div>

    );
}
const mapState = state => {
    return state.userManage
}
const mapDispatch = dispatch => {
   return {
    //所有身份数据
    getshowUser() {
        dispatch({
            type:'userManage/showUser'
        })
    },
    //视图接口权限
    getviewAuthor(){
        dispatch({
            type:'userManage/viewAuthor'
        })
    },
    //展示身份和api权限关系
    getapiAuthority() {
        dispatch({
            type:'userManage/apiAuthority'
        })
    },

    //身份数据
    getidentity() {
        dispatch({
            type: 'userManage/identity'
        })
    }
   }

}
export default connect(mapState,mapDispatch)(Form.create()(AddUser));
