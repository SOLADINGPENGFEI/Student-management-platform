import {ReadClass} from '../services/index'


export default {
    // 命名空间
    namespace: 'read',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *ReadClass({ payload }, { call, put }) {  // eslint-disable-line
        let ReadClassData=yield call(ReadClass,payload)
        console.log('ReadClassData...',ReadClassData)
        yield put({
             type: 'getStudentList' ,
             ReadClassData
            });
      },
    },
  
    // 同步操作
    reducers: {
        getStudentList(state, {ReadClassData}) {
        return { ...state, ReadClassData };
      },
    },
  
  };
  