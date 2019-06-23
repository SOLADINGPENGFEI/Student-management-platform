import React,{useState,useEffect} from 'react'
import {Breadcrumb,Modal, Button,Form,Input,Select,Table, Divider} from 'antd'
import {connect} from 'dva'

import './grade.scss'
const {Option} = Select
function Grade(props) {
    const [visible,newVisible] = useState(false)
    let showModal = () => {
        newVisible(true)
      };
    
      let handleOk = e => {
        newVisible(false)
      };
    
      let handleCancel = e => {
        newVisible(false)
      };

      //Form
      let handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
      const { getFieldDecorator }  = props.form
      //table
      const columns = [
        {
          title: '班级名',
          dataIndex: 'grade_name',
          key: 'grade_name',
        },
        {
          title: '课程名',
          dataIndex: 'subject_text',
          key: 'subject_text',
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_text',
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a>修改</a>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            ),
          }]
    //请求数据
    useEffect(()=>{
        props.getData()
    },[])
    //获取数据
    const {getMessage} = props
    console.log(getMessage)
    return <div>
         <Breadcrumb style={{ margin: '16px 0',fontSize: 22 }}>
            <Breadcrumb.Item>班级管理</Breadcrumb.Item>
        </Breadcrumb> 
        <div className="grade-wrap">
            <div>
                <Button type="primary" onClick={showModal} style={{marginBottom:10}}>
                添加班级
                </Button>
                <Modal
                title="添加班级"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <Form onSubmit={handleSubmit}>
                <Form.Item label="班级名">
                    {getFieldDecorator('grade', {
                        rules: [{ required: true, message: 'Please input your gradename!' }],
                    })(
                        <Input placeholder="班级名" />,
                    )}
                </Form.Item>
                <Form.Item label="教室号">
                    {getFieldDecorator('class', {
                        rules: [{ required: true, message: 'Please input your classname!' }],
                    })(
                        <Select>
                            <Option value="1">1</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="课程名">
                    {getFieldDecorator('course', {
                        rules: [{ required: true, message: 'Please input your coursename!' }],
                    })(
                        <Select>
                            <Option value="1">1</Option>
                        </Select>
                    )}
                </Form.Item>
                </Form>
                </Modal>
                <Table columns={columns} dataSource={getMessage} />
            </div>
        </div>
    </div>

}
const mapState = state => {
    return state.class
}
const mapDispatch = dispatch => {
    return {
        //获取已经分配教室的班级
        getData() {
            dispatch({
                type: 'class/allocation'

            })
        }
    }
}
export default connect(mapState,mapDispatch)(Form.create()(Grade))