import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import LoginPage from './views/Login/index';
import Main from './views/Section/Main/index';
import {connect} from 'dva'

//引入国际化
import {IntlProvider,addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zhCN from '@/lang/zh-CN.js'
import enUS from '@/lang/en-US.js'

const localMap = {
    en: enUS,
    zh: zhCN
}
addLocaleData([...en,...zh])

const mapStateToProps = state => {
  console.log(state)
  return {
    locale: state.global.locale
  }
}

const RouterView = connect(mapStateToProps)(({locale,history})=>{
  return <IntlProvider locale={locale} messages={localMap[locale]}>
    <Router history={history}>
        <Switch>
          <Route path="/main"  component={Main} />
          <Route path="/login"  component={LoginPage} />
          <Redirect from='/' to='/login'/>
        </Switch>
    </Router>
  </IntlProvider>
})
function RouterConfig({ history }) {
  return (
        <RouterView  history={history}/>
  );
}

export default RouterConfig;
