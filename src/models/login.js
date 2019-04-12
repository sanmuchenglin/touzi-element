import { doLogin, doLogout } from '../services/login'
import {routerRedux} from 'dva/router';
import { setCookie, removeCookie } from '../utils/cookieutils'

export default {

  namespace: 'login',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *doLogin({ payload }, { call, put }) {
      const data = yield call(doLogin, payload)
      if(data && data.data) {
        setCookie("TOKEN", data.data, {})
      }
      yield put(routerRedux.push("/"))
    },
    //退出登录
    *doLogout({payload}, {call, put}) {
      yield call(doLogout, payload)
      removeCookie("TOKEN")
      yield put(routerRedux.push("/login"))
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
