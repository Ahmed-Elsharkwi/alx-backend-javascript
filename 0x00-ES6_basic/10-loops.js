export default function appendToEachArrayValue(array, appendString) {
  let value = 0
  for (let idx of array) { 
    array[value] = appendString + idx;
    value = value + 1
  }

  return array;
}
