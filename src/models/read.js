import {readClass} from '../services/index';


export default {
    // 命名空间
    namespace: 'read',
  
    // 模块内部的状态
    state: {
        studentList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *readClass({ payload }, { call, put }) {  // eslint-disable-line
        var studentList=yield call(readClass)
        console.log('studentList...',studentList)
        yield put({ 
            type: 'getStudentList',
            payload:studentList
         });
      },
    },
  
    // 同步操作
    reducers: {
        getStudentList(state,action) {
          console.log(action.payload)
        return { ...state,studentList:action.payload };
      },
    },
  
  };
  