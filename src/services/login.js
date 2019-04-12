import request from '../utils/request';

/**
 * 登录
 * @param {*} param  
 */
export function doLogin(param) {
  return request('/api/login', {
    body: JSON.stringify(param),
    method: 'POST'
  });
}

export function doLogout(param) {
  return request('/api/logout', {
    body: JSON.stringify(param),
    method: 'POST'
  });
}