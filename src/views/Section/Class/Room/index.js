import React, { useEffect } from 'react'
import { connect } from 'dva'
import { Table, Divider, Tag ,Modal, Button,Popconfirm, message} from 'antd';
import styles from './index.scss'
import { room } from '../../../../services/class';


function Room(props) {
    useEffect(() => {
        props.getRoom()
        
    }, [])
    console.log('props',props)
    
   
    function showModal(){
        console.log(1)
        //visible=true
    }
    function handleOk(e){
        console.log(e)
        //visible=false
    }
    function handleCancel(e){
        console.log(e)
        //visible=false
    }
    //删除班级
    function confirm(e) {
        console.log(e);
        message.success('Click on Yes');
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Click on No');
      }
    
    let { roomData} = props
    console.log(roomData)

    const columns = [
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
                     <Popconfirm
    title="确定要删除班级吗"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <span>删除</span>
  </Popconfirm>
                </span>
            ),
        },
    ];
    const data = roomData && roomData.data.map((item, index) => {
        return {
            key: index,
            tags: item.room_text
        }
    })
    return (
        <div>
            <h2 className={styles.title}>教室管理</h2>
            <div className={styles.center}>
                 <div>
                    <Button type="primary" onClick={showModal}>
                    +添加教室
                    </Button>
                    <Modal
                    title="Basic Modal"
                    //visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    >
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
        getRoom() {
            dispatch({
                type: 'class/room'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Room);