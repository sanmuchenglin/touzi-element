import dva from 'dva';
import './index.less';

// 1. Initialize
const app = dva();
// const app = dva({
//   initialState: {
//     products: [
//       {name: 'dva', id: 1 },
//       {name: 'antd', id: 2 }
//     ]
//   }
// });

// 2. Plugins
// app.use({});

// 3. Model
//app.model(require('./models/products').default);
//app.model(require('./models/home').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
