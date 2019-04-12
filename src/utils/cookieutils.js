import Cookies from 'js-cookie'

function setCookie(name, data, express) {
  Cookies.set(name, data, express)
}

function removeCookie(name, express) {
  express && Cookies.remove(name, express)
  !express && Cookies.remove(name)
}

function getCookie(name) {
  return Cookies.get(name)
}

function checkCookie(name) {
  let value = getCookie(name)
  if(value === undefined || value === null) return false;
  else return true;
}
export { setCookie, removeCookie, getCookie, checkCookie} 