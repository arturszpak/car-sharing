// własny kod w 95%

const ticks = document.querySelectorAll(".tick");
const deletes = document.querySelectorAll(".delete");
const buttonsAdd = document.querySelectorAll(".plus");
const sectionLists = document.querySelectorAll(".section-list");
const edits = document.querySelectorAll(".edit");
const addSectionBtn = document.querySelector("#add-section-btn");
const delSectionBtn = document.querySelectorAll(".del-img");

const changeStatus = (event) => {
  event.target.src = "./assets/img/to-do/tick.png";
};

const removeTask = (event) => {
  // console.log(event.target.parentNode.parentNode);
  event.target.parentNode.parentNode.remove();
};

// const editTask = () => {}

const addTask = (e) => {
  const addInput = e.target.parentNode.nextElementSibling.value;
  if (addInput === "") return;
  const list = e.target.parentNode.parentNode.parentNode.querySelector(
    ".section-list"
  );
  const newLi = document.createElement("li");
  newLi.classList.add("section-list-element");
  list.appendChild(newLi);

  newLi.innerHTML += `<div class="element-container">
    <img src="./assets/img/to-do/tick-done.png" alt="tick" class="element-img tick" />
    <p class="element-text">${addInput}</p>
    <img src="./assets/img/to-do/pencil.png" alt="edit" class="element-img edit" />
    <img src="./assets/img/to-do/close.png" alt="delete" class="element-img delete" /></div>`;

  e.target.parentNode.nextElementSibling.value = "";

  newLi.querySelector(".delete").addEventListener("click", removeTask);
  newLi.querySelector(".tick").addEventListener("click", changeStatus);
  newLi.querySelector(".edit").addEventListener("click", renameTask);
};

const renameTask = (event) => {
  const parent = event.target.parentNode;
  const pElement = parent.querySelector(".element-text");
  const pElementText = pElement.textContent;

  pElement.innerHTML = `<input type="text" value="${pElementText}">`;

  const editing = (e) => {
    if (e.key == "Enter") {
      let newTextValue = pElement.querySelector(".element-text input").value;
      console.log(newTextValue);
      parent.querySelector("input").parentNode.remove();
      const newP = document.createElement("p");
      newP.classList.add("element-text");
      newP.innerHTML = newTextValue;

      function insertAfter(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
      }
      insertAfter(newP, parent.querySelector(".tick"));
      document.removeEventListener("keydown", editing);
    }
  };
  document.addEventListener("keydown", editing);
};

const addNewSection = (e) => {
  const input = document.querySelector(".form__field");
  if (input.value === "") return;
  const mainDiv = document.createElement("div");
  const controlsDiv = document.querySelector(".to-do-controls");
  mainDiv.classList.add("to-do-section");
  mainDiv.innerHTML = `<h2 class="section-heading">${input.value}<span ><img src="./assets/img/to-do/close.png" class="del-img"
  alt="close"></span></h2>
  <ul class="section-list"></ul>
  <div class="add-task">
    <button type="button" class="add-task-btn">
        <img src="./assets/img/to-do/add.png" alt="add" class="element-img plus">
    </button>
    <input type="text" placeholder="Dodaj zadanie...">
  </div>`;
  controlsDiv.parentNode.insertBefore(mainDiv, controlsDiv);
  mainDiv.querySelector(".add-task-btn").addEventListener("click", addTask);
  mainDiv.querySelector(".del-img").addEventListener("click", deleteSection);
  input.value = "";
};

const deleteSection = (e) => {
  console.log(e.target.parentNode.parentNode.parentNode.remove());
};

ticks.forEach((tick) => tick.addEventListener("click", changeStatus));
deletes.forEach((del) => del.addEventListener("click", removeTask));
buttonsAdd.forEach((btn) => btn.addEventListener("click", addTask));
edits.forEach((edit) => edit.addEventListener("click", renameTask));
addSectionBtn.addEventListener("click", addNewSection);
delSectionBtn.forEach((btn) => btn.addEventListener("click", deleteSection));