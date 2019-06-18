import React,{useEffect} from 'react'
import {connect} from 'dva'
import {Form,Breadcrumb,Select,Button,Radio} from 'antd'

import './manage.scss'
const { Option } = Select;
function ManageExam(props) {
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
            console.log(values);
            }
        });
    };
    useEffect(()=>{
        props.getType()
        props.getSubjectType()
    },[])
    const {getFieldDecorator} = props.form
    const {Subject,examType} = props
    return <div className="managePage">
        <Breadcrumb style={{ margin: '16px 0',fontSize: 22 }}>
          <Breadcrumb.Item>试卷列表</Breadcrumb.Item>
        </Breadcrumb>
        <div className='searchNav'>
        <Form onSubmit={handleSubmit}>
            <Form.Item label="考试类型">
                {getFieldDecorator('examType', {rules: [{required: true,message: '请选择类型!',},],
                initialValue: '请选择'
                })(
                    <Select style={{ width: 120 }}>
                        {
                            examType?examType.map(item=>(
                                <Option key={item.exam_id}
                                value ={item.exam_name}>{item.exam_name}</Option>
                            )):null
                        }
                        
                    </Select>
                )}
            </Form.Item>
            <Form.Item label="课程">
                {getFieldDecorator('examTest', {rules: [{required: true,message: '请选择课程!',},],
                initialValue: '请选择'
                })(
                    <Select style={{ width: 120 }}>
                        {
                            Subject?Subject.map(item=>(
                                <Option key={item.subject_id}
                                value ={item.subject_text}>{item.subject_text}</Option>
                            )):null
                        }
                        
                    </Select>
                )}
            </Form.Item>
           <Button icon="search" type="primary" htmlType="submit">查询</Button>          
        </Form>
        </div>
        <div className="exam-list">
            <div className="title">
                <div>试卷列表</div>
                <Radio.Group  style={{ marginBottom: 16 }}>
                    <Radio.Button value="全部">全部</Radio.Button>
                    <Radio.Button value="进行中">进行中</Radio.Button>
                    <Radio.Button value="已结束">已结束</Radio.Button>
                </Radio.Group>
            </div>
        </div>
    </div>
}
const mapState = state => {
    // console.log(state.exammanage)
    return state.exammanage
}
const mapDispatch = dispatch => {
    return {
        getType() {
           dispatch({
               type:'exammanage/examType'
           })
        },
        getSubjectType() {
            dispatch({
                type:'exammanage/getSubject'
            })
        }
    }
}
export default connect(mapState,mapDispatch)(Form.create()(ManageExam))