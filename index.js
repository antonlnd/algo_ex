let arr = ['all','cows','are','big'];

// will be index
for (let index in arr) {
	console.log(arr[index])
}

// will be val 
for (el of arr) {
	console.log(el)
}
console.log('-----')
arr.forEach(console.log)