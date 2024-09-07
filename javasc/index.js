const skills = ["Networking", "Java", "Automation"];
const skillList = document.querySelector(".skills");

skills.forEach(skill => {
  const skillItem = document.createElement("li");
  skillItem.innerText = skill;
  skillList.appendChild(skillItem);
});

// Create and append footer
const body = document.querySelector("body");
const footer = document.createElement('footer');
footer.className = "foot";
body.appendChild(footer);

// Add copyright information to footer
const year = new Date().getFullYear();
footer.innerHTML = `&copy; Ela Nur ${year}`;

// Function to create and append a new message
function createMessage(message) {
  const listItem = document.createElement("li");
  listItem.innerHTML = message;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => listItem.remove());

  listItem.appendChild(removeButton);
  return listItem;
}

// Handle message form submission
const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { userName, email, usersMessage } = e.target.elements;
  const messageText = `${userName.value} (${email.value}): ${usersMessage.value}`;
  
  const messageList = document.getElementById("messages_list");
  const listItem = createMessage(messageText);
  messageList.appendChild(listItem);

  e.target.reset();
});

// Update time every second
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

// Fetch GitHub repositories
fetch("https://api.github.com/users/elzatnur/repos")
  .then(response => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then(repositories => {
    const projectList = document.createElement('ul');
    const projectSection = document.getElementById("projects");
    projectSection.appendChild(projectList);

    repositories.forEach(repository => {
      const project = document.createElement('li');
      project.innerText = repository.name;
      projectList.appendChild(project);
    });
  })
  .catch(error => {
    console.error("Error fetching data: ", error.message);
  });
  function displayTime() {
    const clock = document.getElementById("clock");
    const time = new Date();
    clock.textContent = time.toLocaleTimeString("en-US", { hour12: false });
  }












