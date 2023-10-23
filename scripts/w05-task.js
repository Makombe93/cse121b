/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const article = document.createElement("article");
      
      const h3 = document.createElement("h3");
      h3.textContent = temple.templeName;
      
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.location;
      
      article.appendChild(h3);
      article.appendChild(img);
      
      templesElement.appendChild(article);
    });
  };
  



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
  };
  
  // Call the getTemples function to retrieve and display temple data.
  getTemples();
  

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ""; 
  };
  

/* sortBy Function */
const sortBy = (temples) => {
    reset(); // Clear the displayed temples first.
    const filter = document.getElementById("sortBy").value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "nonutah":
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter((temple) => new Date(temple.dateDedicated) < new Date("1950-01-01")));
        break;
      case "all":
        displayTemples(temples);
        break;
    }
  };
  


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
  });
  