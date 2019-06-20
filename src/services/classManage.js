import request from '../utils/request';

//获取全部教室
export function Allclass() {
    return request({
        url: '/manger/room',
        type: 'GET'
    })
}
//删除教室接口
export function Delclassroom(params) {
    return request({
        url: '/manger/room/delete',
        type: 'DELETE',
        params
    })
}
//添加教室接口
export function Addclassroom(params) {
    return request({
        url:'/manger/room',
        type: 'POST',
        params
    })
}
//删除班级接口
export function Delclass(params) {
    return request({
        url: '/manger/grade/delete',
        type: 'DELETE',
        data: params
    })
}
//添加班级接口
export function Addclass(params) {
    return request({
        url: '/manger/grade',
        type: 'POST',
        data: params
    })
}