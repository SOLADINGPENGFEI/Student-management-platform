import request from '../utils/request';



//登录接口
export function login(params) {
  return request({
    url:'/user/login',
    method:'POST',
    data: params
  })
}
//获取考试类型

export function examType() {
  return request({
    url:'/exam/examType',
    method:'GET'
  })
}
//获取试题类型
export function questionsType() {
  return request({
    url:'/exam/getQuestionsType',
    method:'GET'
  })
}
//获取所有的课程
export function subject() {
  return request({
    url:'/exam/subject',
    method:'GET'
  })
}
//添加试题
export function addQuestion(params) {
  return request({
    url: '/exam/questions',
    method: 'POST',
    data: params
  })
}

//试题分类
export function typeQuestion() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET'
  })
}

//查看试题
export function viewQuestion() {
  return request({
    url: '/exam/question/new',
    method: 'GET'
  })
}

//获取所有的试题
export function allQuestion() {
  return request({
    url: '/exam/questions/new',
    method: 'GET'
  })
}
//获取用户ID
export function userMsg() {
    return request({
      url:'/user/userInfo',
      method: 'GET'
    })
}
//更新试题
export function updatequestion(params) {
  return request({
    url: '/exam/questions/update',
    method: 'PUT',
    data: params
  })
}
//按条件查询试题
export function FindData(params) {
  return request({
    url: '/exam/questions/condition',
    method: 'GET',
    params
  })
}
//添加试题类型
export function insertType(payload) {
  return request({
    url: '/exam/insertQuestionsType',
    method: 'GET',
    payload
  })
}

//获取用户权限
export function getViewAuthority(user_id) {
  return request({
    url: '/user/new?user_id='+user_id
  })
}