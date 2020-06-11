const ticks = document.querySelectorAll(".tick");
const deletes = document.querySelectorAll(".delete");
const buttonsAdd = document.querySelectorAll(".plus");
const sectionLists = document.querySelectorAll(".section-list");

const changeStatus = (event) => {
    event.target.src = "../assets/img/to-do/tick.png";
}

const removeTask = (event) => {
    // console.log(event.target.parentNode.parentNode);
    event.target.parentNode.parentNode.remove();
}

// const editTask = () => {}

const addTask = (event) => {
    const addInput = document.getElementById("add-input").value;
    if (addInput === "") return;
    const list = document.querySelector(".section-list");
    const newLi = document.createElement("li");
    newLi.classList.add("section-list-element");
    list.appendChild(newLi);

    newLi.innerHTML += `<div class="element-container">
    <img src="./assets/img/to-do/tick-done.png" alt="tick" class="element-img tick" />
    <p class="element-text">${addInput}</p>
    <img src="./assets/img/to-do/pencil.png" alt="edit" class="element-img edit" />
    <img src="./assets/img/to-do/close.png" alt="delete" class="element-img delete" /></div>`;

    document.getElementById("add-input").value = "";

    newLi.querySelector(".delete").addEventListener("click", removeTask);
    newLi.querySelector(".tick").addEventListener("click", changeStatus);

    //edit
    // newLi.querySelector(".edit").addEventListener("click", editTask);
}

ticks.forEach(tick => tick.addEventListener("click", changeStatus));
deletes.forEach(del => del.addEventListener("click", removeTask));
buttonsAdd.forEach(btn => btn.addEventListener("click", addTask));