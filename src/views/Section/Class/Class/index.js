import React, {useEffect ,useState} from 'react'
import { connect } from 'dva'
import { Table, Divider, Tag ,Modal, Button,Select ,Input} from 'antd';
import styles from './index.scss'


function Class(props) {
    useEffect(() => {
        props.getClass()
        props.getRoom()
        // props.getStudent()
        
    }, [])
    
    const [visible,upVisible]=useState(false)
    
    console.log('props',props)
    let { classData,roomData} = props
    console.log(classData)
    
    function del(){
        console.log('删除')
    }

    const columns = [
        {
            title: '班级名',
            dataIndex: 'name',
            key: 'name',
            render: text => <span>{text}</span>,
        },
        {
            title: '课程名',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '教室号',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags}
                </span>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">修改</a>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={del}>删除</a>
                </span>
            ),
        },
    ];
    const data = classData && classData.data.map((item, index) => {
        return {
            key: index,
            name: item.grade_name,
            age: item.subject_text,
            tags: item.room_text
        }
    })
    const { Option } = Select;
    console.log('data', data)
    function showModal(){
        upVisible(true)
    }
    function handleOk(e){
        console.log(e)
        upVisible(false)
    }
    function handleCancel(e){
        console.log(e)
        upVisible(false)
    }
    //选择器
    function onChange(value) {
        console.log(`selected ${value}`);
      }
      
      function onBlur() {
        console.log('blur');
      }
      
      function onFocus() {
        console.log('focus');
      }
      
      function onSearch(val) {
        console.log('val...', val);
      }
    return (
        <div>
            <h2 className={styles.title}>班级管理</h2>
            <div className={styles.center}>
                 <div>
                    <Button type="primary" onClick={showModal}>
                    +添加班级
                    </Button>
                    <Modal
                    title="添加班级"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    >
                    <p><span className={styles.color}>*</span>班级名:</p>
                    <Input placeholder="班级名" />
                    <p><span className={styles.color}>*</span>教室号:</p>
                    <Select
    showSearch
    style={{ width: 475 }}
    placeholder="请选择教室号"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
      {
          data&&data.map((item,index)=>{
              return <Option value={item.tags} key={index}>{item.tags}</Option>
          })
      }
    
  </Select>
  <p><span className={styles.color}>*</span>课程名:</p> 
  <Select
    showSearch
    style={{ width: 475 }}
    placeholder="课程名"
    optionFilterProp="children2"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
     {
          data&&data.map((item,index)=>{
              return <Option value={item.age} key={item.key}>{item.age}</Option>
          })
      }
  </Select>
                    </Modal>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state.class
}
const mapDispatchToProps = dispatch => {
    return {
        getClass() {
            dispatch({
                type: 'class/grade'
            })
        },
        getRoom() {
            dispatch({
                type: 'class/room'
            })
        },
        // getStudent() {
        //     dispatch({
        //         type: 'class/student'
        //     })
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Class);