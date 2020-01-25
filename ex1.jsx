const args = process.argv.slice(2);
// time complexity o(n2) ; space: o(1)
let arz = args[0]
		.trim()
		.split(',')
		.map(v => Number(v)),
	weiz = args[1],
	funk = args[2];

const findWeight = (arr, wei) => {
	console.time('O2');
	arr.forEach(item => {
		let newArr = arr;
		newArr.splice(arr.indexOf(item), 1);
		newArr.forEach(sec => {
			if (Number(sec) + Number(item) == wei) {
				console.log(sec, item, ':', wei);
				console.timeEnd('O2');
				return;
			}
		});
	});
	return -1;
};

// O(n) and linear
const findSum = (arr, wei) => {
	let hashTable = {};
	console.time('hash');
	arr.forEach((val, idx) => {
		let diff = wei - val;
		if (hashTable[val] != undefined) {
			console.log('Found EL ', val, diff, '\nFind Time: ');
			console.timeEnd('hash');
			return [val, hashTable[wei - val]];
		} else hashTable[diff] = idx;
	});
	return -1;
};
console.log(args);
funk == '-hashtable'
	? findSum(arz, weiz)
	: funk == '-o2'
	? findWeight(arz, weiz)
	: console.log(
			'only options -hashtable or -o2 allowed as last arg \n comma seperated array string in first arg, sum search integer as second ',
	  );
//findWeight(arz, weiz){ "keys": ["ctrl+alt+f"], "command": "js_prettier" }
