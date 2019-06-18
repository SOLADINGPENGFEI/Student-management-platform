import React, { useEffect } from 'react'
import { connect } from 'dva'
import { getGrade } from '../../../../services';

function ClassManger(props) {
    useEffect(()=>{
        props.grade()
    },[])

    return (
        <div>班级管理</div>
    )
}


const mapStateToProps = state => {
    return state.manger
}

const mapDispatchToProps = dispatch => {
    return {
        grade(){
            dispatch({
                type: 'classmanger/GetGrade'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassManger)