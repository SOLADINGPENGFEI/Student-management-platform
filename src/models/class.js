import {grade,room,student} from '../services/class'


export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
        visible:false
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *grade({ payload }, { call, put }) {  // eslint-disable-line
        let classData=yield call(grade)
        console.log('classData',classData)
        yield put({
             type: 'getClassList',
             classData
             });
      },
      
      *student({ payload }, { call, put }) {  // eslint-disable-line
        let studentData=yield call(student)
        console.log('studentData',studentData)
        yield put({
             type: 'getStudentList',
             studentData
             });
      },

      *room({ payload }, { call, put }) {  // eslint-disable-line
        let roomData=yield call(room)
        console.log('roomData',roomData)
        yield put({
             type: 'getRoomList',
             roomData
             });
      },
    },
  
    // 同步操作
    reducers: {
        getClassList(state, {classData}) {
        return { ...state, classData };
      },
      getRoomList(state, {roomData}) {
        return { ...state, roomData };
      },
      getStudentList(state, {studentData}) {
        return { ...state, studentData };
      },
    },
  
  };
  