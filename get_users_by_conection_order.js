let participants_in_order = []
let size_participants = 0

while(1){
	//"zWGUib" is the class for getting the names
	let participants = document.getElementsByClassName("zWGUib")
	let new_participants = 0

	for(let name of participants){
		if(! participants_in_order.includes(name.textContent)){
			participants_in_order.push(name.textContent)
			new_participants ++
		}
	}

	if(size_participants != participants_in_order.length){
		console.log(participants_in_order)
		size_participants += new_participants
	}
	
}
