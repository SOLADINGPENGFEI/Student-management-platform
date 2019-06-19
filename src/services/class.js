import request from '../utils/request';

//获取已经分配教室的班级
export function grade() {
    return request({
      url:'/manger/grade',
      method:'GET'
    })
  }