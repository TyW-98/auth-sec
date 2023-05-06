
// Post Page dynamic ingredient list
const ingredientInput = document.getElementById("ingredient-input");
const ingredientList = document.getElementById("ingredient-list");
const addIngredientButton = document.getElementsByClassName("add-ingredient")[0]

ingredientInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    const ingredient = ingredientInput.value.trim();

    if (ingredientInput != "") {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(ingredient));
      ingredientList.appendChild(li);
      ingredientInput.value = "";
    }
  }
});

addIngredientButton.addEventListener("click", (event) => {
    const ingredient = ingredientInput.value.trim(); 
    
    if (ingredientInput != "") {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(ingredient));
        ingredientList.appendChild(li);
        ingredientInput.value = "";
    }
})
