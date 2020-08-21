/* Write a function that takes an array and returns its duplicate values.

Examples:

duplicates([2,2,1,4]) // => [2] 
duplicates([]) // => [] 
duplicates(["what", "are", 7, "doing"]) //=> []

Hints:

What type of collection has constant lookup/set methods? Follow-up Questions:

What if we want to preserve the order of our dupes? Can we do this with constant space? How does it impact our time complexity?*/


const duplicates = arr => {
	let dups = new Set();
	let output = new Set();
	arr.forEach(el => {
		if(dups.has(el) && !output.has(el)){
			output.add(el);
		} else {
			dups.add(el);
		}
	})
	return [...output];
}

console.log(duplicates([2,2,1,4,4,3]));
console.log(duplicates(["what", "are", 7, "doing"]));
console.log(duplicates([2,2,1,4,3,2]));
console.log(duplicates([]));