/**
 * throttle for do fun (delay execution method)
 * @param {*} func  Execution method
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