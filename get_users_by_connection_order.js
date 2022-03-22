let participants_in_order = []
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
		}
	}
}
let run_checking = window.setInterval(check_new_users, 750)
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
	let participants = ""
	for(let i = 0; i < participants_in_order.length; i++){
		participants = participants.concat(i+1, " - ", participants_in_order[i], "\n")
	}
	navigator.clipboard.writeText(participants)
	alert("Participantes copiados en el portapapeles")
}
container.appendChild(new_button)
