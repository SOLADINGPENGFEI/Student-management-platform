import React, { Component } from 'react';
import {connect} from 'dva'
import { Table,Button,Modal,Input,Breadcrumb } from 'antd';

class questionType extends Component {

    state = { 
       visible: false,
      //  typeData: []
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
              key: 'questions_type_sort',
              title: '类型ID',
              dataIndex: 'questions_type_sort',
              
            },
            {
              key: 'questions_type_text',
              title: '类型名称',
              dataIndex: 'questions_type_text',
            },
            {
              title: '操作',
              dataIndex: 'questions_type_id',
              key:'questions_type_id',
            },
          ];
         
        return (
          <div>
          <Breadcrumb style={{ margin: '16px 0',fontSize: 22 }}>
            <Breadcrumb.Item>试题分类</Breadcrumb.Item>
          </Breadcrumb> 
          <div style={{ background: '#fff', padding: 25, minHeight: 225,borderRadius:'10px' }}>
          
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
          <Table  columns={columns} rowKey={item=>item.questions_type_sort} dataSource={typeData?typeData.data:null} />
        </div>
        </div>
        </div>
         );
    }
    handleValue = e => {
      const value = e.target.value
        let obj = {
          questions_type_text: value,
          questions_type_id: +new Date(),
          questions_type_sort: this.props.typeData.data.length +1
        }
        if(this.props.typeData) {
          this.props.typeData.data.push(obj)
        } else {
          return null
        }
      }
    componentDidMount() {
        this.props.getType()
      
            // this.props.findType({
            //   text: value,
            //   sort: this.props.typeData.data.length +1
            // })
           
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
        findType() {
            dispatch({
              type: 'exam/insertType'
            })
        }
    }
}
export default connect(mapState,mapDispatch)(questionType);