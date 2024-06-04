export default function getListStudentIds(array) {
  let array_1 = []
  if (Array.isArray(array)) {
     array_1 = array.map(obj => obj.id)
  }
  return array_1
} 
