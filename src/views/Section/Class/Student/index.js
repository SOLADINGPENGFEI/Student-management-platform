import React,{useState,useEffect} from 'react'
import {Breadcrumb,Form,Input,Button,Select} from 'antd'
import { connect } from 'dva';

const {Option} = Select
function Student(props) {

    const { getFieldDecorator } = props.form
    //Form表单
    let handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    };
    return <div>
        <Breadcrumb style={{ margin: '16px 0',fontSize: 22 }}>
            <Breadcrumb.Item>学生管理</Breadcrumb.Item>
        </Breadcrumb>
        <div className="student-wrap">
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('name', {
                            
                        })(
                            <Input placeholder='输入学生姓名' style={{width:220}}/>,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('classroom', {
                            
                        })(
                            <Select style={{width:220}} placeholder="请选择班级号">
                                 <Option  value="jack">Jack</Option>
                            </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('grade', {
                            
                        })(
                            <Select style={{width:220}} placeholder="班级名">
                                 <Option value="jack">Jack</Option>
                            </Select>
                    )}
                </Form.Item>
                <Button style={{width:120}} type="primary" htmlType='submit'>搜索</Button>
                <Button style={{width:120}} type="primary">重置</Button>
            </Form>
        </div>
    </div>
}
const mapState = state => {

}
const mapDispatch = dispatch => {
    return {

    }
}
export default connect(mapState,mapDispatch)(Form.create()(Student))