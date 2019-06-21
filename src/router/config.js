import dynamic from 'dva/dynamic';
// 引入路由
const SortQuestions =  dynamic({
  component: () => import('@/views/Main/Questions/SortQuestions'),
});
const ViewQuestions =  dynamic({
  component: () => import('@/views/Main/Questions/ViewQuestions'),
});

export default {
  routes: [{
    name: 'router.questions',
    children: [{
      name: 'router.questions.add',
      id: 'main-addQuestions',
      path: '/questions/add',
      component: ViewQuestions
    },{
      name: 'router.questions.view',
      id: 'main-watchQuestions',
      path: '/questions/view',
      component: ViewQuestions
    },{
      name: 'router.questions.type',
      id: 'main-questionsType',
      path: '/questions/type',
      component: SortQuestions
    }]
  }]
}
