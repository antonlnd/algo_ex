function weekTemps(){
	this.dataStore = []
	this.add = add;
	this.average = average
}

function add(temp){
	this.dataStore.push(temp)
}
function average(){
	let total = 0
	for(i = 0; i<this.dataStore.length;++i)
		total+=this.dataStore[i]
	return total / this.dataStore.length
}

let thisWeek = new weekTemps()
thisWeek.add(Math.random()*100)
console.log(thisWeek.average())
