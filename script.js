const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addItemBtn = document.querySelector(".add-item-btn");

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

  li.appendChild(span);
  li.appendChild(deleteBtn);

  span.textContent = itemValue;
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.classList.add("btn");

  ul.appendChild(li);


  // Delete button functionality
  const allDeleteBtns = document.querySelectorAll(".delete-btn");

  allDeleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    })
  })

  // Refocus to add new item
  input.focus();
})

