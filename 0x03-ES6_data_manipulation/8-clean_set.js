export default function cleanSet(set, startString='') {
  let ind
  let string = ''
  let w = ''
  let i = 0
  for (let word of set) {
    if (word === undefined || word === null) {
      continue;  // Skip this iteration if word is undefined or null
    }
    ind = false
    let iter = 0
    for (let letter of startString) {
	    if ( letter == word[iter] ) {
		ind = true
	    } else {
		ind = false
		break
	    }
	    iter = iter + 1
    }
    if (ind == true) {
	w = word.slice(3, word.length)
	if (i > 0){
	 w = '-' + w
	}
	string = string + w
        i = i + 1
    }
  }
  return string
}
