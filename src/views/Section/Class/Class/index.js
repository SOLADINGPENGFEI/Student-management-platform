import React, { useEffect } from 'react'
import { connect } from 'dva'
import { Table, Divider, Tag ,Modal, Button} from 'antd';
import styles from './index.scss'
import { width } from 'window-size';


function Class(props) {
    useEffect(() => {
        props.getClass()
    }, [])
    console.log('props',props)
    let { classData ,visible} = props
    console.log(classData)
    
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
                    <a href="javascript:;">删除</a>
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
    console.log('data', data)
    function showModal(){
        console.log(1)
        visible=true
    }
    function handleOk(e){
        console.log(e)
        visible=false
    }
    function handleCancel(e){
        console.log(e)
        visible=false
    }
    // showModal = () => {
    //     // this.setState({
    //     //   visible: true,
    //     // });
    //   };
     
    //   handleOk = e => {
    //     console.log(e);
    //     // this.setState({
    //     //   visible: false,
    //     // });
    //   };
    
    //   handleCancel = e => {
    //     console.log(e);
    //     // this.setState({
    //     //   visible: false,
    //     // });
    //   };
    return (
        <div>
            <h2 className={styles.title}>班级管理</h2>
            <div className={styles.center}>
                 <div>
                    <Button type="primary" onClick={showModal}>
                    +添加班级
                    </Button>
                    <Modal
                    title="Basic Modal"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Class);