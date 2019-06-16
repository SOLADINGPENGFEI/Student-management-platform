import request from '../utils/request';

export function readClass(){
    return request({
        url:'/exam/student',
        method:'GET'
    });
}