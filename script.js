let input = document.querySelector(".entered-list");

let addBtn = document.querySelector(".add-list");

let tasks = document.querySelector(".tasks");

// add btn disable

input.addEventListener("keyup", () => {
  if (input.value.trim() !== 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newitem = document.createElement("div");
    newitem.classList.add("item");
    newitem.innerHTML = `
    <p>${input.value}</p>
    <div class="item-btn">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-xmark"></i>
    </div> `;

    tasks.appendChild(newitem);
    input.value = "";
  } else {
    alert("please enter a task");
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});

tasks.addEventListener("click", (i) => {
  if (i.target.classList.contains("fa-pen-to-square")) {
    i.target.parentElement.parentElement.classList.toggle("complated");
  }
});
