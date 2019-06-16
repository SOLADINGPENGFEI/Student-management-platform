import React, { Component } from 'react';
import {connect} from 'dva'
import { Select,Input,Button,Radio,Form } from 'antd';
import './view.scss'
const { Option } = Select;
// const InputGroup = Input.Group;
class questionView extends Component {
    state = { 
        checked: true
     }
     inquireSubmit = e => {
      const _this=this;
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          _this.props.getCondition({
              questions_type_id:values.questionsType,
               subject_id:values.subjectType,
               exam_id:values.ExamType
           })
        }
      });
    };
    render() {
        const {subdata,data,questionData,AllData} = this.props
        const {getFieldDecorator} = this.props.form
        return (
            <div>
               <div className='viewNav'>
               <Form onSubmit={this.inquireSubmit}>
                        <div className='leiXing'>
                            <div>课程类型:</div>
                            <Form.Item>
                                {getFieldDecorator('subjectType', {
                                    rules: [{ required: false, message: '' }],
                                })(
                                    <Radio.Group  buttonStyle="solid">
                                    {
                                    subdata && subdata.data.map((item) =>
                                            <Radio.Button className='getsetion' key={item.subject_id} value={item.subject_id}>{item.subject_text}</Radio.Button>
                                        )
                                    }
                                </Radio.Group>
                                )}
 
                            </Form.Item>
                            
                        </div>

                        <div className='kaoShi'>
                            <div className='shi'>
                                <h3>考试类型：</h3>
                                <Form.Item>
                                    {getFieldDecorator('ExamType', {
                                        rules: [{ required: false, message: '' }],
                                        initialValue:"请选择考试类型" 
                                    })(
                                        <Select style={{ width: 180 }}>
                                    
                                            {
                                                data && data.data.map((item) =>
                                                        <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                                    )
                                            }
                                        </Select>
                                    )}
    
                                </Form.Item>
                            </div>
                            <div className='shi'>
                                <h3>题目类型：</h3>
                                <Form.Item>
                                    {getFieldDecorator('questionsType', {
                                        rules: [{ required: false, message: '' }],
                                        initialValue:"请选择题目类型" 
                                    })(
                                        <Select style={{ width: 180 }}>
                                            {
                                                questionData && questionData.data.map((item) =>
                                                <Option key={item.questions_type_id} value={item.questions_type_id} >{item.questions_type_text}</Option>
                                                    )
                                            }
                                        </Select>
                                    )}
                                </Form.Item>
                               
                            </div>
                            <Button type="primary" htmlType="submit">查询</Button>
                        </div>
                    </Form>
                </div>
                <div className='list'>
                  {
                        AllData?AllData.data.map((item) => 
                            <div key={item.questions_id} className='dl'>
                            <div className='dt'  onClick={()=>this.detailCont(item.questions_id)}>
                                <div className='titles'>{item.title}</div>
                                <div className='spans'>
                                    <span key={item.questions_type_id}>{item.questions_type_text}</span>
                                    <span key={item.subject_id}>{item.subject_text}</span>
                                    <span key={item.exam_id}>{item.exam_name}</span>
                                </div>
                                <div className='namea' key={item.user_id}>{item.user_name}发布</div>
                            </div>
                            <div className='dd' onClick={()=>this.editquestion(item)}>编辑</div>
                        </div>
                        ):null
                    }
                </div>
            </div>
        );
    }
    
    editquestion = (item) => {
      console.log(item)
      // console.log(this.props.history)
      this.props.history.replace('/main/question/viewEdit?'+item.questions_id)
    }
    detailCont = (id) => {
      console.log(id)
      this.props.history.replace('/main/question/viewDetail?'+id)
    }
    componentDidMount() {
        this.props.getSubject()
        this.props.examType()
        this.props.getquestionData()
        this.props.getAllData()
    }
}

const mapState = state => {
    return state.exam
}
const mapDispatch = dispatch => {
   return {
    getSubject() {
        dispatch({
          type:'exam/subject'
        })
      },
      examType() {
        dispatch({
          type:'exam/examType'
        })
      },getquestionData() {
        dispatch({
          type: 'exam/questionsType'
        })
      },getAllData(){
        dispatch({
            type:'exam/allQuestion'

        })
      },
      //按条件获取试题查询借口 /exam/questions/condition
      getCondition(payload){
          dispatch({
              type:"exam/FindData",
              payload
          })
      }
   }
}
export default connect(mapState,mapDispatch)(Form.create()(questionView));