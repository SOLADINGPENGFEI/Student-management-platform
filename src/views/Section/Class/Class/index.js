import React, { useEffect } from 'react'
import { connect } from 'dva'

function ClassManger(props) {
    useEffect(()=>{
        props.getGrade()
    },[])

    return (
        <div>班级管理</div>
    )
}


const mapStateToProps = state => {
    return state.class
}

const mapDispatchToProps = dispatch => {
    return {
        getGrade(){
            dispatch({
                type: 'class/getGrade'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassManger)