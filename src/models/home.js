import { getMenuList } from '../services/home'
import { routerRedux } from 'dva/router';

export default {

  namespace: 'home',

  state: {
    message: {
      bars: 10,
      mails: 23,
      notis: 100
    },
    menus: [],
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

    *getMenuList({payload}, {call, put }) {
      const data = yield call(getMenuList, payload)
      yield put({type: 'addList', menus: data.data.menu.menu})
    }
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
      routerRedux.push("/products")
      return {
        ...state,
        collapsed: !state.collapsed
      };
    },
    addList(state, {menus}) {
      return {
        ...state,
        menus
      }
    }
  },

};
