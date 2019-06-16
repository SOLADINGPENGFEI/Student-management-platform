import React, { Component } from 'react';
import Editor from 'for-editor'
import {connect} from 'dva'
import {Button,Select, Input,Form,message} from 'antd'

const { Option } = Select;
class Addquestion extends Component {
    constructor() {
        super()
        this.state = {
          value: ''
        }
      }
      
      handleChange(value) {
        this.setState({
          value
        })
        console.log(value)
      }
      handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, value)=>{
          if(!err) {
            const {userData} = this.props
            this.props.Addquestion({
              title: value.title, //试题的标题
              questions_stem: value.theme, //题干
              questions_answer: value.answer, //题目答案
              subject_id: value.subjectText, //课程id
              exam_id: value.examText, //考试类型id
              questions_type_id: value.questionText, //试题类型id
              user_id:  userData.data[1].identity_id //用户id
            })
          }
        })
        if(this.props.addExamCode === 1) {
          message.success('试题添加成功')
        } else if(this.props.addExamCode === -1) {
          message.error('试题添加失败')
        }
      }
      
      render() {
        const { value } = this.state
        const {data,subdata,questionData} = this.props
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} >
              <h3>题目信息</h3>
              <div>
                <div><label>题干</label></div>
                <div>
                  <Form.Item>
                  {getFieldDecorator('title', {
                      rules: [{ required: true, message: '请输入标题' }],
                      initialValue:'输入标题'
                    })(
                      <Input placeholder="请输入题目标题,不超过20个字" />,
                    )}
                  </Form.Item>
                </div>
                <div>
                <div><label>题目主题</label></div>
                <Form.Item>
                {getFieldDecorator('theme', {
                    rules: [{ required: true }],
                    initialValue:'输入题目主题'
                  })(
                    <Editor/>,
                  )}
                </Form.Item>
              </div>
              </div>
              <div>
                <div><label>请选择考试类型:</label></div>
                <div>
                  <Form.Item>
                  {getFieldDecorator('examText', {
                    rules: [{ required: true }],
                  })(
                    <Select initialValue="请选择" style={{ width: 220 }}>
                    {
                      data?data.data.map(item=>(
                        <Option value={item.exam_id} 
                        key={item.exam_id}>{item.exam_name}</Option>
                      )):null
                    }
                  </Select>,
                  )}
                  </Form.Item>
                  
                </div>
              </div>
              <br/>
                <div>
                  <div><label>请选择课程类型:</label></div>
                  <div>
                    <Form.Item>
                    {getFieldDecorator('subjectText', {
                        rules: [{ required: true }],
                      })(
                        <Select initialValue="请选择" style={{ width: 220 }}>
                      {
                        subdata?subdata.data.map(item=>(
                            <Option value={item.subject_id}
                            key={item.subject_id}>{item.subject_text}</Option>
                        )):null
                      }
                    </Select>,
                      )}
                    </Form.Item>
                  </div>
                </div>
              <br/>
              <div>
                <div><label>请选择题目类型:</label></div>
                <div>
                  <Form.Item>
                  {getFieldDecorator('questionText', {
                    rules: [{ required: true }],
                  })(
                    <Select initialValue="请选择" style={{ width: 220 }}>
                    {
                      questionData?questionData.data.map(item=>(
                        <Option value={item.questions_type_id}
                        key={item.questions_type_id}>{item.questions_type_text}</Option>
                      )):null
                    }
                  </Select>,
                  )}
                  </Form.Item>
                  
                </div>
              </div>
              <div>
                <div><label>答案信息:</label></div>
                <Form.Item>
                {getFieldDecorator('answer', {
                    rules: [{ required: true }],
                    initialValue: '在这里写答案'
                  })(
                    <Editor />,
                  )}
                </Form.Item>
              </div>
              <Button htmlType="submit" type="primary">提交</Button>
          </Form>

        )
      }
      
      componentDidMount(){
        this.props.examType()
        this.props.getSubject()
        this.props.getquestionData()
        this.props.getUserId()
        
      }
    
}
const mapState = state => {
  return state.exam
}
const mapDispatch = dispatch => {
  return {
    examType() {
        dispatch({
          type:'exam/examType'
        })
      },
      getSubject() {
        dispatch({
          type:'exam/subject'
        })
      },
      getquestionData() {
        dispatch({
          type: 'exam/questionsType'
        })
      },
      Addquestion(payload) {
        dispatch({
          type:'exam/addQuestion',
          payload
        })
      },
      getUserId() {
        dispatch({
          type: 'exam/userMsg',
        })
      }
  }
}
export default connect(mapState,mapDispatch)(Form.create()(Addquestion));