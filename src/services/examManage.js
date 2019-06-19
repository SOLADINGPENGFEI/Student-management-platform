import request from '../utils/request';



//获取试卷类型接口
export function examType() {
    return request({
        url: '/exam/examType',
        type: 'GET'
    })
}

//获取课程接口
export function getSubject() {
    return request({
        url: '/exam/subject',
        type: 'GET'
    })
}

//获取试卷列表
export function getList() {
    return request({
        url: '/exam/exam',
        type: 'GET'
    })
}

