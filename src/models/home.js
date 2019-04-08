
export default {

  namespace: 'home',

  state: {
    message: {
      bars: 10,
      mails: 23,
      notis: 100
    },
    collapsed: false,
    height: 600    
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    adapt(state, action) {
      return {
        ...state, 
        height: action.payload
      }
    },
    //菜单栏伸缩
    collapse(state, action) {
      return {
        ...state,
        collapsed: !state.collapsed
      };
    }
  },

};
