/**
 * throttle for do fun 
 * @param {*} func  a functon for throttle
 * @param {*} delay  delay time
 */
export const delay = (func, delay=200) => {
  let timeout = null;
  return function (...args) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args)
    }, delay)
  }
}