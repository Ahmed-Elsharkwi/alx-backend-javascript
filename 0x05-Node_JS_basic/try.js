dict = {}
data = ["Ahmed", "mo"]
count = [0, 5]
for (var element=0; element < data.length; element++) {
	if (dict[element] == null) {
	   dict[data[element]] = [0, ""]
	}
	dict[data[element]][0] = dict[data[element]][0] + count[element]
	dict[data[element]][1] = dict[data[element]][1] + data[element]
};
console.log(dict)
