import React,{useEffect} from 'react'
import {connect} from 'dva'
import styles from './read.scss'

function ReadClass(props){


    
    useEffect(()=>{
        props.getReadClass()
      
    },[])
    console.log('props',props)
    return <div className={styles.readClass}>
        <h2>待批班级</h2>
        <div className={styles.content}>
        待批班级11
        </div>
       
    </div>
}

const mapStateToProps=state=>{
    return state.read
}
const mapDispatchToProps=dispatch=>{
    return {
        getReadClass(){
            dispatch({
                type:'read/readClass'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReadClass);