import dynamic from 'dva/dynamic'
//引入路由
const AddQuestions = dynamic({
    component: () => import('@/views/Section/Question/Addquestion/index.js')
})
const TypeQuestions = dynamic({
    component: () => import('@/views/Section/Question/Typequestion/index.js')
})
const ViewQuestions = dynamic({
    component: () => import('@/views/Section/Question/Viewquestion/index.js')
})
const EditQuestions = dynamic({
    component: () => import('@/views/Section/Question/EditQuestion/index.js')
})
const DetailQuestions = dynamic({
    component: () => import('@/views/Section/Question/Detail/index.js')
})
const AddUser = dynamic({
    component: () => import('@/views/Section/User/Add/index.js')
})
const ViewUser = dynamic({
    component: () => import('@/views/Section/User/View/index.js')
})
const AddExam = dynamic({
    component: () => import('@/views/Section/Exam/Addexam/index.js')
})
const ManageExam = dynamic({
    component: () => import('@/views/Section/Exam/ManageExam/index.js')
})
const ExamDetail = dynamic({
    component: () => import('@/views/Section/Exam/ExamDetail/index.js')
})

const EditExam = dynamic({
    component: () => import('@/views/Section/Exam/createNew/index.js')
})
const Grademanage = dynamic({
    component: () => import('@/views/Section/Class/Grade/index.js')
})
const Classroom = dynamic({
    component: () => import('@/views/Section/Class/Classroom/index.js')
})
const Student = dynamic({
    component: () => import('@/views/Section/Class/Student/index.js')
})
const AwaitClass = dynamic({
    component: () => import('@/views/Section/Marking/Awaiting/index.js')
})



export default {
    routes: [{
        name: 'router.main.question',
        children: [{
            name: 'router.main.question.add',
            id: 'main-addQuestions',
            path: '/main/question/add',
            component: AddQuestions
        },{
            name: 'router.main.question.type',
            id: 'main-questionsType',
            path: '/main/question/type',
            component: TypeQuestions
        },{
            name: 'router.main.question.view',
            id: 'main-watchQuestions',
            path: '/main/question/view',
            component: ViewQuestions
        },{
            name: '',
            id: 'main-editQuestions',
            path: '/main/question/viewEdit',
            component: EditQuestions
        },{
            name: '',
            id: 'main-questionsDetail',
            path: '/main/question/viewDetail',
            component: DetailQuestions
        }]
    },{
        name: 'router.main.user',
        children: [{
            name: 'router.main.user.add',
            id: 'main-addUser',
            path: '/main/user/add',
            component: AddUser
        },{
            name: 'router.main.user.view',
            id: 'main-showUser',
            path: '/main/user/view',
            component: ViewUser
        }]
    },{
        name: 'router.main.exam',
        children: [{
            name: 'router.main.exam.add',
            id: 'main-addExam',
            path: '/main/exam/add',
            component: AddExam
        },{
            name: 'router.main.exam.manage',
            id: 'main-menu',
            path: '/main/exam/manage',
            component: ManageExam
        },{
            name: '',
            id: 'main-examDetail',
            path: '/main/exam/detail',
            component: ExamDetail
        },{
            name: '',
            id: 'main-editQuestions',
            path: '/main/exam/edit',
            component: EditExam
        }]
    },{
        name: 'router.main.class',
        children: [{
            name: 'router.main.class.manage',
            id: 'main-grade',
            path: '/main/class/manage',
            component: Grademanage
        },{
            name: 'router.main.class.classroomManage',
            id: 'main-room',
            path: '/main/class/classroomManage',
            component: Classroom
        },{
            name: 'router.main.class.studentManage',
            id: 'main-student',
            path: '/main/class/studentManage',
            component: Student
        }]
    },{
        name: 'router.main.paper',
        children: [{
            name: 'router.main.paper.approval',
            id: 'main-examPaperClassList',
            path: '/main/paper/approval',
            component: AwaitClass
        }]
    }]
}