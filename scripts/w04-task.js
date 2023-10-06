/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Batsirai Thelma Makombe",
    photo : "images/myImage.jpeg",
    favoriteFoods: [
        'Fried Rice',
        'Pasta Salad',
        'Coleslaw Salad',
        'Potato Fries',
        'Fried Chicken',
        'Potato Roast'
    ],
    hobbies: [
        'Reading',
        'Dancing',
        'Singing',
        'Cooking'
    ],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : 'Gweru, Zimbabwe',
        length : '24 years'
    },
   
);
myProfile.placesLived.push(
    {
        place : 'Lusaka, Zambia',
        length : '5 years'
    },
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  const li = document.createElement("li");
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
  const li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
  const dt = document.createElement("dt");
  dt.textContent = place.place;
  const dd = document.createElement("dd");
  dd.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});

