import { examType,getSubject,getList } from '../services/examManage'
export default {
    // 命名空间
    namespace: 'exammanage',
  
    // 模块内部的状态
    state: {
       examType: null,
       Subject: null,
       ListPaper: null
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
      },
      //获取试卷列表
      *getList({payload},{call,put}) {
        const ListData = yield call(getList)
        console.log('ListData...',ListData)
        yield put({
            type:'GetData',
            ListData
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
      },
      //获取试卷列表
      GetData(state,{ListData}) {
        return {...state,ListPaper:ListData.exam}
      }
    },
  
  };
  