const fs = require('node:fs');

const countStudents = (path) => {
 fs.createReadStream(path, { encoding: "utf-8" })
  .on("data", (data) => {
    var count = -1
    var array_1 = []
    var array_2 = []
    var string = ""
    for (var i=0; i<data.length; i++) {
       if (data[i + 1] != null && data[i + 1].match(/^[a-z]|[0-9]|,|\n$/i) && count >= 0) {
         if (data[i] == ',' ||  data[i] == '\n') {
            if (string != "") {
               array_2.push(string)
            }
            var string = ""
         }
         if (data[i] != ',' && data[i] != '\n') {
            string = string + data[i]
         }
       }
      if (data[i] == '\n' && data[i - 1] != null && data[i - 1].match(/^[a-z]$/i)) {
       if (array_2.length != 0) {
	 array_1.push(array_2)
       }
	 var array_2 = []
	 count = count + 1
      }
    }
    console.log(`Number of students: ${count}`)
    array_2 = {}
    for (var i=0; i < array_1.length; i++) {
      if (array_2[array_1[i][3]] == null) {
	 array_2[array_1[i][3]] = [1, array_1[i][0]]
      }
      else {
	 array_2[array_1[i][3]][0] += 1
	 array_2[array_1[i][3]].push(array_1[i][0])
      }
    }
    for (const key in array_2) {
	process.stdout.write(`Number of students in ${key}: ${array_2[key][0]}. List: `);
	for (var j=1; j < array_2[key].length; j++) {
	   let word = ""
	   word += array_2[key][j]
	   if ( j + 1 != array_2[key].length ) {
              word += ", "
	   }
	   process.stdout.write(`${word}`); 
	}
	process.stdout.write("\n");
    }
  })
  .on("error", (error) => {
    console.error('Cannot load the database');
  });
}
module.exports = countStudents
