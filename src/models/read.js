import {readClass} from '../services/index';


export default {
    // 命名空间
    namespace: 'read',
  
    // 模块内部的状态
    state: {
      
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *readClass({ payload }, { call, put }) {  // eslint-disable-line
        let studentList=yield call(readClass)
        console.log('studentList...',studentList)
        yield put({ 
            type: 'getStudentList'
         });
      },
    },
  
    // 同步操作
    reducers: {
        getStudentList(state, {studentList}) {
        return { ...state, studentList };
      },
    },
  
  };
  