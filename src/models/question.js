import  {
  addQuestion,
  examType,
  questionsType,
  subject,
  typeQuestion,
  allQuestion,
  userMsg,updatequestion,FindData,insertType} from '../services/index'
// import {setToken, getToken} from '@/utils/user'

export default {
    // 命名空间
    namespace: 'exam',
  
    // 模块内部的状态
    state: {
        addExamCode: 0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *examType({payload},{call,put}) {
            let data = yield call(examType)
            // console.log('data...',data)
            yield put({
              type: 'getexamType',
              data
            })
      },
      *subject({payload},{call,put}) {
        let subdata = yield call(subject)
        // console.log('subdata...',subdata)
        yield put({
          type: 'getSubject',
          subdata
        })
      },
      *questionsType({payload},{call,put}) {
        let questionData = yield call(questionsType)
        // console.log('questionsType...',questionData)
        yield put({
          type: 'getquestionsType',
          questionData
        })
      },
      *addQuestion({payload},{call,put}) {
        // console.log('payload...',payload)
        let addData = yield call(addQuestion,payload)
        console.log('addData...',addData)
        yield put({
          type:'addquestion',
          payload: addData.code === 1? 1:-1
        })
      },
      *typeQuestion({payload},{call,put}) {
        let typeData = yield call(typeQuestion)
          // console.log('typeData...',typeData)
          yield put({
            type: 'Type',
            typeData
          })
      },
      *allQuestion({payload},{call,put}) {
        let AllData = yield call(allQuestion)
          console.log('AllData...',AllData)
          yield put({
            type: 'getAllData',
            AllData
          })
      },
      *userMsg({payload},{call,put}) {
        let userData = yield call(userMsg)
        yield put({
          type: 'UserId',
          userData
        })
      },
      //更新试题
      *updatequestion({payload},{call,put}) {
        let updateData = yield call(updatequestion,payload)
        console.log('updateData...',updateData)
        yield put({
          type: 'getUpdate',
          updateData
        })
      },
      //按条件查询试题
      *FindData({payload},{call,put}) {
        let findquestion = yield call(FindData)
        console.log('findquestion...',findquestion)
        yield put({
          type: 'Find',
          findquestion
        })
      },
      //添加试题类型
      *insertType({payload},{call,put}) {
        let typeData = yield call(insertType,payload)
        console.log('insertType...',typeData)
        yield put({
          type: 'getType',
          typeData
        })
      }
    },
  
    // 同步操作
    reducers: {
      getexamType(state,{data}) {
        return { ...state,data};
      },
      getSubject(state,{subdata}) {
        return {...state, subdata}
      },
      getquestionsType(state,{questionData}) {
        return {...state,questionData}
      },
      addquestion(state, {payload}) {
        console.log(payload)
        return {...state,addExamCode:payload}
      },
      Type(state, {typeData}) {
        return {...state,typeData}
      },
      getAllData(state,{AllData}) {
        return {...state, AllData}
      },
      UserId(state, {userData}) {
        return {...state, userData}
      },
      //更新试题
      getUpdate(state,{updateData}) {
        return {...state, updateData}
      },
      //按条件查询试题
      Find(state,{findquestion}) {
        return {...state, findquestion}
      },
      //添加试题类型
      getType(state,{typeData}) {
        return {...state,typeData}
      }
    },
  
  };
  