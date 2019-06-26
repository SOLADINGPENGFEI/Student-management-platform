import request from '../utils/request';



//获取试卷类型接口
export function examType() {
    return request({
        url: '/exam/examType',
        method: 'GET'
    })
}

//获取课程接口
export function getSubject() {
    return request({
        url: '/exam/subject',
        method: 'GET'
    })
}

//获取试卷列表
export function getList() {
    return request({
        url: '/exam/exam',
        method: 'GET'
    })
}

//创建试题
export function createItem(params) {
    return request({
        url:'/exam/exam',
        method:'POST',
        data: params
    })
}

//获取试卷详情
export function detailExam() {
    return request({
        url:'/exam/exam/w5tcy-g2dts',
        method:'GET'
    })
}

//获取学生试卷列表
export function studentPaper() {
    return request({
        url: '/manger/grade',
        method: 'GET'
    })
}
//获取学生试卷列表接口 grade_id=
export function studentDateil(params) {
    return request({
        url: '/exam/student?grade_id='+params,
        type: 'GET'

    })
}