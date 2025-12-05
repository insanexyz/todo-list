const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addItemBtn = document.querySelector(".add-item-btn");
const mainContainer = document.querySelector(".main");

const mainContainerWidth = mainContainer.clientWidth;


addItemBtn.addEventListener("click", (e) => {

  // Prevent submission
  e.preventDefault();

  // Get add item value
  let itemValue = input.value;
  input.value = "";

  // Create a new item
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = itemValue;
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn", "btn");
  
  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  // Delete button functionality
  deleteBtn.addEventListener("click", () => {
    li.remove();
  })

  // Refocus to add new item
  input.focus();
})
