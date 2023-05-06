// Post Page dynamic ingredient list
const ingredientInput = document.getElementById("ingredient-input");
const ingredientList = document.getElementById("ingredient-list");
const addIngredientButton =
  document.getElementsByClassName("add-ingredient")[0];
const ingredientListBackend = document.getElementById(
  "ingredient-list-backend"
);

const backendIngredientList = [];

ingredientInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    const ingredient = ingredientInput.value.trim();

    if (ingredient != "") {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(ingredient));
      ingredientList.appendChild(li);
      ingredientInput.value = "";
      backendIngredientList.push(li.textContent);
    }
  }
});

addIngredientButton.addEventListener("click", (event) => {
  const ingredient = ingredientInput.value.trim();

  if (ingredient !== "") {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(ingredient));
    ingredientList.appendChild(li);
    ingredientInput.value = "";
    backendIngredientList.push(li.textContent);
  }
});

// const ingredientURL = "/ingredients";

// fetch(ingredientURL, {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({ ingredients: backendIngredientList }),
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log("response sent");
//     } else {
//       throw new Error(response.status);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });
