import React,{useState,useEffect} from 'react'
import {Breadcrumb,Form,Input,Button,Select,Table} from 'antd'
import { connect } from 'dva';
import './student.scss'
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
    //table表格
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '学号',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '班级',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: '教室',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: '密码',
            dataIndex: 'pwd',
            key: 'pwd',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <a>删除</a>
            </span>
          ),
        },
      ];
      //请求数据
      useEffect(()=>{
          props.getInfo()
      },[])
      //获取数据
      const { getstudentData } = props
      console.log(getstudentData)
    return <div>
        <Breadcrumb style={{ margin: '16px 0',fontSize: 22 }}>
            <Breadcrumb.Item>学生管理</Breadcrumb.Item>
        </Breadcrumb>
        <div className="student-wrap">
            <div className="search">
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('name', {
                            
                        })(
                            <Input placeholder='输入学生姓名' style={{width:200}}/>,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('classroom', {
                            
                        })(
                            <Select style={{width:200}} placeholder="请选择班级号">
                                 <Option  value="jack">Jack</Option>
                            </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('grade', {
                            
                        })(
                            <Select style={{width:200}} placeholder="班级名">
                                 <Option value="jack">Jack</Option>
                            </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button style={{width:120}} type="primary" htmlType='submit'>搜索</Button>
                </Form.Item>
                <Form.Item>
                    <Button style={{width:120}} type="primary">重置</Button>
                </Form.Item>
            </Form>
            </div>
            <Table columns={columns} />
        </div>
    </div>
}
const mapState = state => {
    return state.class
}
const mapDispatch = dispatch => {
    return {
        getInfo() {
            dispatch({
                type:'class/studentInfo'
            })
        }
    }
}
export default connect(mapState,mapDispatch)(Form.create()(Student))