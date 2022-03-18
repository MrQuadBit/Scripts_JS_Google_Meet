let participants_in_order = []
let size_participants = 0

while(1){
	//"zWGUib" is the class for getting the names
	let participants = document.getElementsByClassName("zWGUib")

	for(let name of participants){
		if(! participants_in_order.includes(name.textContent)){
			participants_in_order.push(name.textContent)
			size_participants ++
		}
	}

	if(size_participants != participants_in_order.length)
	console.log(participants_in_order)
}
