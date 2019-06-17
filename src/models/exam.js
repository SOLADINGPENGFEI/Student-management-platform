import { examType,getSubject } from '../services/examManage'
export default {
    // 命名空间
    namespace: 'exammanage',
  
    // 模块内部的状态
    state: {
       examType: null,
       Subject: null
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      //获取试卷类型
      *examType({payload},{call,put}) {
          const getExamType = yield call(examType)
          yield put({
              type: 'getType',
              getExamType
          })
      },
      //获取课程接口
      *getSubject({payload},{call,put}) {
          const SubjectData = yield call(getSubject)
          yield put({
              type:'getSub',
              SubjectData
          })
      }
    },
  
    // 同步操作
    reducers: {
      //获取试卷类型
      getType(state,{getExamType}) {
          return {...state, examType:getExamType.data}
      },
      //获取课程接口
      getSub(state,{SubjectData}) {
          return {...state, Subject:SubjectData.data}
      }
    },
  
  };
  