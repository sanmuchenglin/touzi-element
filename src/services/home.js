import request from '../utils/request';

export function queryMenu(options) {
  return request('/api/menus', options);
}