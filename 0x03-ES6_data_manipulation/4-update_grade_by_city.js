export default function updateStudentGradeByCity(array, city, newGrades) {
  let array_1 = array.filter((obj) => obj.location == city)
  return array_1.map(obj => {
     let value = newGrades.find(item => item.studentId === obj.id)
     if (value) 
     {
	 return {
	   ...obj,
	   grade: value.grade
	 };
     } else {
	 return {
	 ...obj,
         grade: 'N/A'
	 };
     }
  })
}
