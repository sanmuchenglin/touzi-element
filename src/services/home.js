import request from '../utils/request';

export function getMenuList(param) {
  return request('/api/menus', {
    body: JSON.stringify(param),
    method: 'POST'
  });
}