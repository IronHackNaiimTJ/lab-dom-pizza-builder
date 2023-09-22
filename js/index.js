// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderSelection(ingClass, ingState) {
  const ing = document.querySelectorAll(ingClass);
  for (const oneIng of ing) {
    if (state[ingState]) {
      oneIng.style.visibility = 'visible';
    } else {
      oneIng.style.visibility = 'hidden';
    }
  }
}

function renderPepperoni() {
  renderSelection('.pep', 'pepperoni');
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  renderSelection('.mushroom', 'mushrooms');
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  renderSelection('.green-pepper', 'greenPeppers');
}

function renderAddRem(ingClass, ingState, ingClassEdit) {
  const ingred = document.querySelector(ingClass);
  if (state[ingState]) {
    ingred.classList.add(ingClassEdit);
  } else {
    ingred.classList.remove(ingClassEdit);
  }
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  renderAddRem('.sauce', 'whiteSauce', 'sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  renderAddRem('.crust', 'glutenFreeCrust', 'crust-gluten-free');
}

function renderButton(btnClass, stateName) {
  const btn = document.querySelector(btnClass);
  if (state[stateName]) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  renderButton('.btn-pepperoni', 'pepperoni');
  renderButton('.btn-mushrooms', 'mushrooms');
  renderButton('.btn-green-peppers', 'greenPeppers');
  renderButton('.btn-sauce', 'whiteSauce');
  renderButton('.btn-crust', 'glutenFreeCrust');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
