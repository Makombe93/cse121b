/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Batsirai Thelma Makombe";
const currentYear = new Date().getFullYear();
const profilePicture = 'images/myImage.jpeg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByTagName("img")[0];




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = `<strong>${currentYear}</strong>`;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let food = ['Rice', 'Cheese', 'Pork', 'Pasta salad', 'Sherpherds pie','Chocolate', 'Fries'];
foodElement.innerHTML = `${food}`;

food.push('Biltong');
foodElement.innerHTML += `<br>${food}`;

food.shift();
foodElement.innerHTML += `<br>${food.join('<br>')}`;

food.pop();
foodElement.innerHTML = `${food}`;







