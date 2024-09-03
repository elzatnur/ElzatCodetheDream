const skill = ["Networking", "Java", "Automation"];
console.log(skill);
const getSkills = document.querySelector('#section-skills');
console.log(getSkills);
var skillList = document.querySelector(".skills")
console.log(skillList);
for(let i=0; i<skill.length; i++){
  var s= document.createElement("li");
  s.innerText= skill[i];
  console.log(s);
  skillList.appendChild(s);
  console.log(skillList);
}

const body = document.querySelector("body");
const footer = document.createElement('footer');
footer.className = "foot";
body.appendChild(footer);
console.log(footer);
const getFoot = document.querySelector('.foot');
const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');
const copyrightSymbol= '&#169';
var copyRightText = copyrightSymbol + "Ela Nur" + year;
getFoot.innerHTML= copyRightText;

//function for time
function displayTime(){
  const clock = document.getElementById("clock");
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const min = time.getMinutes().toString().padStart(2, "0");
  const sec = time.getSeconds().toString().padStart(2, "0");
  clock.textContent = `${hours}:${min}:${sec}`;
}
//adding element li
function createMessage(message){
  const listItem = document.createElement("li");
  listItem.innerHTML = message;
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", ()=> listItem.remove());
  listItem.appendChild(removeButton);
  return listItem;
  
}

const messageForm = document.querySelector('[name="leave_message"]');

console.log(messageForm);
messageForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const userN = e.target.userName.value;
  const email = e.target.email.value;
  const message = e.target.usersMessage.value;

  const listItem = createMessage(`${userN} (${email}): ${message}`);
  const messageList = document.getElementById("messages_list");
  messageList.appendChild(listItem);
  e.target.reset();
});
 
setInterval(displayTime, 1000);
displayTime();

document.getElementById("edit-button").addEventListener("click", function() {
  const editParagraph = document.getElementById("edit");
  editParagraph.contentEditable = "true";
  editParagraph.style.border = "1px solid #000";  
  document.getElementById("edit-button").style.display = "none";  
  document.getElementById("end-editing").style.display = "inline";  
});

document.getElementById("end-editing").addEventListener("click", function() {
  const editParagraph = document.getElementById("edit");
  editParagraph.contentEditable = "false";  
  editParagraph.style.border = "none"; 
  document.getElementById("edit-button").style.display = "inline";  
  document.getElementById("end-editing").style.display = "none";  
});








