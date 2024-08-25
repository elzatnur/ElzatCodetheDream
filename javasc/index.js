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

// create a footer element
// const footer = document.createElement('footer');
// footer.className = 'foot';
// footer.setAttribute("id", "myfooter");
// console.log(footer);

// const body = document.querySelector('body');
// body.appendChild(footer);
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


// const tag = document.querySelector(".skills")
// console.log(tag);
// const sum = document.createElement("li");
// sum.innerText= "Networking"
// tag.appendChild(sum);



// footer.innerText = "Today's date: " + today;
// footer.className = "foot";
// footer.style.background = "yellow";
// const newPost = document.createElement("div)");
// newPost.className = ("top-post");
// newPost.innerHTML= <strong> This is new added post </strong>
// document.body.append(newPost); 

