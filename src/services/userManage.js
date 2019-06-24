import request from '../utils/request';

//展示用户数据
export function usersShow() {
    return request({
        url:'/user/user',
        method: 'GET'
    })
}

//展示身份数据
export function USerIdentity() {
    return request({
        url:'/user/identity',
        method:'GET'
    })
}

//展示身份和api权限关系
export function  api_authority() {
    return request({
        url:'/user/identity_api_authority_relation',
        method:'GET'
    })
}

//展示身份和api接口关系 
export function  identity_api_authority_relation() {
    return request({
        url:'/user/identity_api_authority_relation',
        method:'GET'
    })
}

//视图接口权限
export function  view_authority() {
    return request({
        url:'/user/view_authority',
        method:'GET'
    })
}
 
// 身份与视图权限关系
export function  identity_view_authority_relation() {
    return request({
        url:'/user/identity_view_authority_relation',
        method:'GET'
    })
}