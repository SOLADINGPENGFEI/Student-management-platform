import React, {useEffect} from 'react'
import { connect } from 'dva'
import { Tag } from 'antd';


function Detail(props) {
    useEffect(()=>{
        props.getAllData()
    },[])
    const {AllData} = props
    const detailID = props.history.location.search.slice(1)
    const detail = AllData?AllData.data.filter(item=>{
        if(item.questions_id===detailID){
            return item
        } else {
            return null
        }
    }):null
    let detailquestion 
        if(detail) {
            detailquestion = {
                author:detail[0].user_name,
                tags: [detail[0].questions_type_text,detail[0].subject_text,detail[0].exam_name],
                title: detail[0].title,
                theme: detail[0].questions_stem,
                answer: detail[0].questions_answer
            }
        } else {
            return null
        }
    console.log(AllData)
    return <div>
        <div className="detail">
            <div className="author">出题人: {detailquestion.author}</div>
            <h3 className='titleMsg'></h3>
             <div className="tags">
                 {
                     detailquestion.tags.map((item,index)=>(
                        <Tag key={index} color="magenta">{item}</Tag>
                     ))
                 }
                
             </div>
            <h5 className="title">{detailquestion.title}</h5>
            <div className="cont">{detailquestion.theme}</div>
            <div className="sample">
                <div className="sample_item">
                    <span>示例 1:</span>
                    <div></div>
                </div>
                <div className="sample_item">
                    <span>示例 1:</span>
                    <div></div>
                </div>
            </div>
            <div className="attention">
                <span>{detailquestion.theme}</span>
            </div>
        </div>
        <div className="answer">
            <h3>答案信息</h3>
            <div className="answer-cont">
                {detailquestion.answer}
            </div>
        </div>
    </div>
}
const mapState = state => {
    return state.exam
}
const mapDispatch = dispatch => {
    return {
        getAllData(){
            dispatch({
                type:'exam/allQuestion'
            })
          }
    }
}
export default connect(mapState,mapDispatch)(Detail)