let participants_in_order = []
//Test
let original_size = 0 //Aux to know if the array changes
//Class identifiers in google meet
const CONTAINER_PARTICIPANTS = "zWGUib"
const CONTAINER_NEW_BUTTON = "vqs9je"
//-------------------------------------------------------
function check_new_users(){
	let participants = document.getElementsByClassName(CONTAINER_PARTICIPANTS)
	let new_participants = 0

	//if there is a new participant add it at the end
	for(let name of participants){
		if(! participants_in_order.includes(name.textContent)){
			participants_in_order.push(name.textContent)
			//Test
			new_participants ++
		}
	}

	//Test
	//Print when the list changes
	if(participants_in_order.length > original_size){
		console.log(participants_in_order)
		original_size += new_participants
	}else{
		console.log("No new users")
	}
	
}
let run_checking = window.setInterval(check_new_users, 1000)
function stop_checking(){
	clearInterval(run_checking)
}
//-------------------------------------------------------
let escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
	createHTML: (to_escape) => to_escape
})
const container = document.getElementsByClassName(CONTAINER_NEW_BUTTON)[0]
let new_button = document.createElement("button")
new_button.innerHTML = escapeHTMLPolicy.createHTML("Pasar Lista")
new_button.onclick = function() {
	navigator.clipboard.writeText(participants_in_order)
	alert("Participantes copiados en el portapapeles")
}
container.appendChild(new_button)
