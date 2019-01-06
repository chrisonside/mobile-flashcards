/* Note - I am re-using a few helper functions from one of my previous Udacity projects */

export function isArrayEmpty(array) {
  return array.length <= 0;
}

export function isObjectEmpty(obj) {
  if(Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  } else {
    return false;
  }
}

export function convertToArray(object) {
  return Object.keys(object).map(i => object[i]);
}

export function objectToArray(object) {
  let myArray = [];
  if(!isObjectEmpty(object)) {
    myArray = convertToArray(object);
  }
  return myArray;
}