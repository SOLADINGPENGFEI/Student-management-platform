import request from '../utils/request';

export function ReadClass(){
    return request({
        url:"/exam/student",
        method:'GET'
    });
}