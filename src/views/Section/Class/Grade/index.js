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
                  {console.log(text.grade_id)}
                <a onClick={showModal}>修改 </a>
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
                            initialValue:text.grade_name
                        })(
                            <Input placeholder="班级名" />,
                        )}
                    </Form.Item>
                    <Form.Item label="教室号">
                        {getFieldDecorator('class', {
                            rules: [{ required: true, message: 'Please input your classname!' }],
                            initialValue:text.room_text
                        })(
                            <Select>
                                {
                                    getAllClass?getAllClass.map(item=>(
                                        <Option key={item.room_id} value={item.room_text}>{item.room_text}</Option>
                                    )):null
                                }
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="课程名">
                        {getFieldDecorator('course', {
                            rules: [{ required: true, message: 'Please input your coursename!' }],
                            initialValue:text.subject_text
                        })(
                            <Select>
                                {
                                    getSubjectData?getSubjectData.map(item=>(
                                        <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                                    )):null
                                }
                            </Select>
                        )}
                    </Form.Item>
                    </Form>
                    </Modal>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            ),
          }]
    //请求数据
    useEffect(()=>{
        props.getData()
        props.getClass()
        props.getSubject()
    },[])
    //获取数据
    const {getMessage,getAllClass,getSubjectData} = props
    console.log(getSubjectData)
   
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
                                {
                                    getAllClass?getAllClass.map(item=>(
                                        <Option key={item.room_id} value={item.room_text}>{item.room_text}</Option>
                                    )):null
                                }
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="课程名">
                        {getFieldDecorator('course', {
                            rules: [{ required: true, message: 'Please input your coursename!' }],
                        })(
                            <Select>
                                {
                                    getSubjectData?getSubjectData.map(item=>(
                                        <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                                    )):null
                                }
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
        },
        //教室号
        getClass() {
            dispatch({
                type:'class/Allclass'
            })
        },
        //所有课程
        getSubject() {
            dispatch({
                type:'class/subjectMsg'
            })
        }
    }
}
export default connect(mapState,mapDispatch)(Form.create()(Grade))