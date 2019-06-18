import {GetGrade} from '../services/index'


export default {
    // 命名空间
    namespace: 'classmanger',
  
    // 模块内部的状态
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *GetGrade({ payload }, { call, put }) {  // eslint-disable-line
        let gradeData=yield call(GetGrade)
        console.log('gradeData',gradeData)
        yield put({
             type: 'getGradeList' ,
             gradeData
            });
      },
    },
  
    // 同步操作
    reducers: {
        getGradeList(state, {gradeData}) {
        return { ...state, gradeData};
      },
    },
  
  };
  
