import request from '../utils/request';

//获取全部教室
export function Allclass() {
    return request({
        url: '/manger/room',
        method: 'GET'
    })
}
//删除教室接口
export function Delclassroom(params) {
    return request({
        url: '/manger/room/delete',
        method: 'DELETE',
        params
    })
}
//添加教室接口
export function Addclassroom(params) {
    return request({
        url:'/manger/room',
        method: 'POST',
        params
    })
}
//删除班级接口
export function Delclass(params) {
    return request({
        url: '/manger/grade/delete',
        method: 'DELETE',
        params
    })
}
//添加班级接口
export function Addclass(params) {
    return request({
        url: '/manger/grade',
        method: 'POST',
        params
    })
}
//获取学生信息
export function studentInfo() {
    return request({
        url: '/student/info',
        method: 'GET'
    })
}
//获取已经分配教室的班级
export function allocation() {
    return request({
        url: '/manger/grade',
        method: 'GET'
    })
}
//学生管理
export function studentMsg() {
    return request({
        url: '/manger/student',
        method: 'GET'
    })
}
//获取所有的课程
export function subjectMsg() {
    return request({
        url: '/exam/subject',
        method: 'GET'
    })
}