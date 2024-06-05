export default function hasValuesFromArray(set, array) {
  let value
  for(let num of array){
    value = set.has(num)
    if (value == false){
       return false
    }
  }
  return true
}
