let globalTaskData = []; // global declaration to used to store in local storage
taskContents = document.getElementById("taskcontentsrow");

const addCard = () => {
  const newTaskDetails = {
    id: `${Date.now()}`,
    url: document.getElementById("imageURL").value,
    title: document.getElementById("taskTitle").value,
    description: document.getElementById("taskdesc").value,
    type: document.getElementById("taskType").value
  };

  taskContents.insertAdjacentHTML(
    "beforeend",
    generateTaskCard(newTaskDetails)
  );

  globalTaskData.push(newTaskDetails);
  saveToLocalStorage();
};

const generateTaskCard = ({ id, url, title, description, type }) => {
  return `<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
    <div class="card">
        <div class="card-header d-flex justify-content-end gap-2 ">
            <button class="btn btn-outline-info" name=${id} onclick="editTask(this)">
                <i class="fas fa-pencil-alt" name=${id} onclick="editTask(this)"></i>
            </button>
            <button class="btn btn-outline-danger" name=${id} onclick="deleteTask(this)"> 
            <i class="far fa-trash-alt" name=${id} onclick="deleteTask(this)"></i></button> 
        </div>
        <img src=${url} class="card-img-top" style="height: auto;" alt="card_image">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <span class="badge bg-primary">${type}</span>
        </div>
        <div class="card-footer ">
            <button class="btn btn-outline-primary float-end">Open Task</button>
        </div>
        </div>
   </div>`;
};

const saveToLocalStorage = () => {
  localStorage.setItem(
    "tasky",
    JSON.stringify({
      tasks: globalTaskData,
    })
  ); // JSON - Javascript Object Notation
};

const reloadTaskCard = () => {
  const localStorageCopy = JSON.parse(localStorage.getItem("tasky"));
  console.log(localStorageCopy);
  if (localStorageCopy) {
    globalTaskData = localStorageCopy["tasks"];
  }
  console.log(globalTaskData);
  globalTaskData.map((cardData) => {
    taskContents.insertAdjacentHTML("beforeend", generateTaskCard(cardData));
  });
};

const deleteTask = (e) => {
  const targetID = e.getAttribute("name");
  globalTaskData = globalTaskData.filter((cardData) => cardData.id!==targetID);
  saveToLocalStorage();
  window.location.reload();
};

const editTask = (e) => {
  const targetID = e.getAttribute("name");
  console.log(e);
  console.log(e.parentNode);
  console.log(e.parentNode.parentNode.childNodes);
  console.log(e.parentNode.parentNode.childNodes[5].childNodes[1]);
  console.log(e.parentNode.parentNode.childNodes[5].childNodes[3]);
  console.log(e.parentNode.parentNode.childNodes[5].childNodes[5]);

  console.log(e.parentNode.parentNode.childNodes[5].childNodes[1].setAttribute("contenteditable","true"));
  console.log(e.parentNode.parentNode.childNodes[5].childNodes[3].setAttribute("contenteditable","true"));
  console.log(e.parentNode.parentNode.childNodes[5].childNodes[5].setAttribute("contenteditable","true"));

  console.log(e.parentNode.parentNode.childNodes[7].childNodes[1]);
  e.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML = "Save Changes"
  e.parentNode.parentNode.childNodes[7].childNodes[1].setAttribute("onclick", "saveEditTask(this)")
  e.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("background", "transparent")
  e.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("color", "orange")
  e.parentNode.parentNode.childNodes[7].childNodes[1].style.setProperty("border", "2px solid orange")
  // console.log(e.childNode);
  saveToLocalStorage();
  // window.location.reload();
};

const saveEditTask = (e) => {
  const targetID = e.getAttribute("name");
  console.log(e);
  // console.log(e.parentNode);
  // console.log(e.parentNode.parentNode.childNodes);
  // console.log(e.parentNode.parentNode.childNodes[5].childNodes[1]);
  // console.log(e.parentNode.parentNode.childNodes[5].childNodes[3]);
  // console.log(e.parentNode.parentNode.childNodes[5].childNodes[5]);

};