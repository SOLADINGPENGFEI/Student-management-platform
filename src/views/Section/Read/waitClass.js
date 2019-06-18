import React,{useEffect} from 'react'
import { connect } from 'dva'
import styles from './waitClass.scss'
import { Pagination } from 'antd';

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

function WaitClass(props) {
    useEffect(()=>{
        props.getReadStudent()
    },[])
    
    const navList=[{
        title:'班级名'
    },{
        title:'课程名称'
    },{
        title:'阅卷状态'
    },{
        title:'课程名称'
    },{
        title:'成材率'
    },{
        title:'操作'
    }]

    console.log('props',props)
    const exam=props.ReadClassData&&props.ReadClassData.exam
    console.log(exam)
    return (
        <div style={{ padding: 15, minHeight: 225 }}>
            <h2>待批班级</h2>
            <div className={styles.center}>
                <div className={styles.nav}>
                    {
                        navList.map((item,i)=>{
                            return <span key={i}>{item.title}</span>
                        })
                    }
                </div>
                <ul>
                    {
                      exam&&exam.map((v,index)=>{
                          return <li key={index} className={styles.li}>
                              <span>{v.student_name}</span>
                          </li>
                      })  
                    }
                </ul>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return state.read
}

const mapDispatchToProps=dispatch=>{
    return {
        getReadStudent(){
            dispatch({
                type:'read/ReadClass'
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WaitClass);