const args = process.argv.slice(2)

let arz = args[0].trim().split(',').map(v => Number(v)) , weiz = args[1];
const findWeight = (arr, wei) => {
	const sum = arr.reduce((start,val) => start+=val)
	arr.forEach(item => {
		let newArr = arr
		newArr.splice(arr.indexOf(item),1)
		newArr.forEach(sec => {
			if((Number(sec) + Number(item)) == wei)
				return console.log(sec , item, ":" , wei)	 

		})
	})
	return -1
}

findWeight(arz, weiz)