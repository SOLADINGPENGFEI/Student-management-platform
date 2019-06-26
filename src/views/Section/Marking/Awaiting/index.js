import React,{useState,useEffect} from 'react'
import {connect} from 'dva'
import {Table,Breadcrumb,Divider} from 'antd'

import './class.scss'
function AwaitGrade(props) {
    //请求数据
    useEffect(()=>{
        props.getClass()
    },[])
    //获取数据
    const {ClassData} = props
    console.log(ClassData)

    const correctPaper=(text)=>{
      props.getClassMate(text.grade_id)
     props.history.push('/main/papers/ClassList')
  }
    //table表格数据
    const columns = [
        {
          title: '班级名',
          dataIndex: 'grade_name',
          key: 'grade_name',
        },
        {
          title: '课程名称',
          dataIndex: 'subject_text',
          key: 'subject_text',
        },
        {
          title: '阅卷状态',
          dataIndex: null,
          key: null,
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
            key: 'room_id',
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
              <a onClick={(e)=>correctPaper(text)}>批卷</a>
            </span>
          ),
        },
      ];
    return <div>
        <Breadcrumb style={{ margin: '16px 0',fontSize:22 }}>
            <Breadcrumb.Item>待批班级</Breadcrumb.Item>
        </Breadcrumb> 
        <div className='class-list'>
            <Table columns={columns} dataSource={ClassData}  rowKey={item=>item.grade_name} />
        </div>
    </div>
}
const mapState = state => {
    return state.exammanage
}   
const mapDispatch = dispatch => {
    return {
        getClass() {
            dispatch({
                type:'exammanage/studentPaper'
            }) 
        },
        getClassMate(payload){
          dispatch({
           type:'exammanage/paperClassMate',
           payload
        }) 
        }
    }
}
export default connect(mapState,mapDispatch)(AwaitGrade)