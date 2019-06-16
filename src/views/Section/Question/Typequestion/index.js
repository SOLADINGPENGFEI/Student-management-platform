import React, { Component } from 'react';
import {connect} from 'dva'
import { Table,Button,Modal,Input } from 'antd';

class questionType extends Component {

    state = { 
       visible: false,
       typeData: []
     }
     showModal = () => {
       this.setState({
         visible: true
       })
     }
     handleOk = e => {
       this.setState({
         visible: false
       })
     }
     handleCancel = e => {
       this.setState({
         visible: false
       })
     }
     
    render() {
        const {typeData} = this.props
        
          const columns = [
            {
              title: '类型ID',
              dataIndex: 'questions_type_sort',
              key: 'questions_type_sort',
            },
            {
              title: '类型名称',
              dataIndex: 'questions_type_text',
              key: 'questions_type_text',
            },
            {
              title: '操作',
              dataIndex: '',
              key: '',
            },
          ];
        return (
        <div>
          <Button type="primary" onClick={this.showModal}>添加类型</Button>
          <Modal
          title="创建新类型"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <Input placeholder="请输入类型名称" onBlur={(e)=>this.handleValue(e)}/>
        </Modal>
          <Table  columns={columns} dataSource={typeData?typeData.data:null} />
        </div>
         );
    }
    componentDidMount() {
        this.props.getType()
        this.handleValue = e => {
          const value = e.target.value
            let obj = {
              questions_type_text: value,
              questions_type_id: +new Date(),
              questions_type_sort: this.props.typeData.data.length +1
            }
            // this.props.findType({
            //   text: value,
            //   sort: this.props.typeData.data.length +1
            // })
            this.props.typeData?this.props.typeData.data.push(obj):null
        }
    }
}
const mapState = state => {
    return state.exam
}
const mapDispatch = dispatch => {
    return {
        getType() {
            dispatch({
                type: 'exam/typeQuestion'
            })
        },
        findType(payload) {
            dispatch({
              type: 'exam/insertType',
              payload
            })
        }
    }
}
export default connect(mapState,mapDispatch)(questionType);