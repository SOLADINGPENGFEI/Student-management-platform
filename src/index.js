import dva from 'dva';
import './index.css';

import 'antd/dist/antd.css'
// import createLoading from 'dva-loading' 
// import {createLogger} from 'redux-logger'
import {message} from 'antd'
// 1. Initialize
const app = dva();

// 2. Plugins
app.use({
    // onAction: createLogger(),
    onError:(e) => {
        message.error(e.message,3)
    }
});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/question').default);
app.model(require('./models/exam').default);
app.model(require('./models/manageUser').default);
app.model(require('./models/global').default);
app.model(require('./models/classManage').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
