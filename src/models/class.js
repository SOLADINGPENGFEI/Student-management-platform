import {getGrade} from '../services/index.js'


export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *getGrade({ payload }, { call, put }) {  // eslint-disable-line
        let gradeData=yield call(getGrade,payload)
        console.log('gradeData...',gradeData)
        yield put({
             type: 'GetGradeList' ,
             gradeData
            });
      },
    },
  
    // 同步操作
    reducers: {
      GetGradeList(state, {gradeData}) {
        return { ...state, gradeData};
      },
    },
  
  };
  
