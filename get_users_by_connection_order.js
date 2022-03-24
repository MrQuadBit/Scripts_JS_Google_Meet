let team_members = []
let aplc_members = []
//Class identifiers in google meet
const CONTAINER_PARTICIPANTS = "zWGUib"
const CONTAINER_NEW_BUTTON = "R5ccN" // This change all the time, so review it if it give an error
const TIME_REPLAY = 550

//ToDo: Add team leader to the end of the list
const team_leaders = {
	"name 1":false,
	"name 2":false
}

//ToDo: Make 2 list, for our team and other for another extra team
const aplicativos = {
	"name 1":false,
	"name 2":false,
	"name 3":false
}

function check_new_users(){
	let participants = document.getElementsByClassName(CONTAINER_PARTICIPANTS)
	let order_aplc = 0

	for(let name of participants){

		//Check team leaders
		if(team_leaders[name.textContent] == false){
			team_leaders[name.textContent] = true
			continue
		}else if(team_leaders[name.textContent] == true){
			continue
		}

		//Check aplicativos members
		if(aplc_members[name.textContent] == false){
			aplc_members[name.textContent] = ++order_aplc
			continue
		}else if(aplc_members[name.textContent] == true){
			continue
		}

		//Check team members
		if(! team_members.includes(name.textContent)){
			team_members.push(name.textContent)
		}
	}
}
let run_checking = window.setInterval(check_new_users, TIME_REPLAY)
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
	for(let i = 0; i < team_members.length; i++){
		participants = participants.concat(i+1, " - ", team_members[i], "\n")
	}

	//Team leaders
	for(let name in team_leaders){
		if(team_leaders[name]){
			participants = participants.concat("# - ", name, "\n")
		}
	}
	navigator.clipboard.writeText(participants)
	alert("Participantes copiados en el portapapeles")
}
container.appendChild(new_button)
