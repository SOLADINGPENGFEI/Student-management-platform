import {login} from '../services/index'
import {setToken, getToken} from '@/utils/user'
import {routerRedux} from 'dva/router'

export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {
        isLogin: 0,
        userInfo: {},
        viewAuthority: [],  // 用户所拥有的视图权限
        myView: [],  // 拥有权限的前端路由
        forbiddenView: [] //没有权限访问的路由
    },
    
    // 订阅路由跳转
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname}) => {
          // console.log('pathname...',pathname)
          if(pathname.indexOf('/login') === -1) {
            // 不去登录页面做token检测
            if(!getToken()) {
                // 利用redux做路由跳转
                dispatch(routerRedux.replace({
                  // pathname: `/?redirect=${encodeURIComponent(pathname)}`
                  pathname:"/login"
                }))
            }
          } else {
            // 去登陆页面,如果已登录跳回首页
            if(getToken()) {
                // 利用redux做路由跳转
                dispatch(routerRedux.replace({
                  pathname: '/main'
                }))
            }
          }
        })
      },
    },
  
    // 异步操作
    effects: {
      *login({payload},{call, put}) {
        // console.log('payload...', payload, login)
        let data = yield call(login,payload)
        // console.log('data...',data)
        //设置登录态到cookie里
        if(data.code === 1) {
          setToken(data.token)
        }
        yield put({
          type: 'updateLogin',
          payload: data.code === 1? 1 : -1
        })
      }
   
    },
  
    // 同步操作
    reducers: {
      updateLogin(state, {payload}) {
        // console.log(payload)
          return {...state,isLogin:payload}
      },
      
    },
  
  };
  