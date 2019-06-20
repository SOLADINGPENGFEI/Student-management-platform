import { Allclass,Delclassroom,Addclassroom,Delclass,Addclass} from '../services/classManage'
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
        getAllClass: null,
        getAddroom: null,
        getDelroom: null,
        getAddClass: null,
        getDelClass: null
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      //获取全部教室
      *Allclass({payload},{call, put}) {
          const getAllgrade = yield call(Allclass)
          console.log('getAllgrade...',getAllgrade)
          yield put({
              type: 'getAll',
              getAllgrade
          })
      },
      //删除教室
      *Delclassroom({payload},{call,put}) {
          const DelMsg = yield call(Delclassroom,payload)
          console.log('DelMsg...',DelMsg)
          yield put({
              type:'deleteroom',
              DelMsg
          })
      },
      //添加教室
      *Addclassroom({payload},{call,put}) {
          const newroom = yield call(Addclassroom,payload)
          console.log('newroom...',newroom)
          yield put({
              type: 'Addnewroom',
              newroom
          })
      },
      //添加班级
      *Addclass({payload},{call,put}) {
          const newClass = yield call(Addclass,payload)
          console.log('newClass...',newClass)
          yield put({
              type: 'Addnew',
              newClass
          })
      },
      //删除班级
      *Delclass({payload},{call,put}) {
          const delMsg = yield call(Delclass,payload)
          console.log('delMsg...',delMsg)
          yield put({
              type: 'DEL',
              delMsg
          })
      }
    },
  
    // 同步操作
    reducers: {
        //获取全部教室
        getAll(state,{getAllgrade}) {
            return {...state, getAllClass:getAllgrade.data}
        },
        //删除教室
        deleteroom(state,{DelMsg}) {
            return {...state,getDelroom:DelMsg}
        },
        //添加教室
        Addnewroom(state,{newroom}) {
            return {...state,getAddroom:newroom}
        },
        //添加班级
        Addnew(state,{newClass}) {
            return {...state,getAddClass:newClass}
        },
        //删除班级
        DEL(state,{delMsg}) {
            return {...state,getDelClass:delMsg}
        }
    },
  
  };
  