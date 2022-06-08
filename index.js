//Sample Data

let cities = [
  {
    name: "Kerala",
    mountains: "false",
    places: "350",
    image: "abc8.jpg",
  },
  {
    name: "Malaysia",
    mountains: "true",
    places: "100",
    image: "abc5.jpg",
  },
  {
    name: "Delhi",
    mountains: "true",
    places: "250",
    image: "delhi.webp",
  },
  {
    name: "Mumbai",
    mountains: "false",
    places: "550",
    image: "mumbai.webp",
  },
  {
    name: "Paris",
    mountains: "true",
    places: "750",
    image: "abc6.jpeg",
  },
];

const search = document.getElementById("searchbar");
const cityList = document.getElementById("cityList");
const options = document.querySelectorAll(".btn");
const placeoptions = document.querySelectorAll(".button");

//displaying the cities
const displayCities = (locations) => {
  const cityItems = locations
    .map((city) => {
      return `           
            <div class="col-lg-4 col-sm-6 ml-5 city" places = "${city.places}" 
            mountains = "${city.mountains}" 
            style="float:left;border-radius:1em">
                <a href="register.html" id="${city.name}">
                  <div class="imgplace">
                    <img src="${city.image}" class="img-fluid">
                    <div class="text-center city-text">
                      <h1 style="color:black;font-family:font-family: "Gill Sans", "Gill Sans MT", Calibri, 
                      "Trebuchet MS", sans-serif">${city.name}</h1>
                      <h3 style="color:black">${city.places} activites</h3>
                    </div>
                  </div>
                </a>
              </div>            
        `;
    })
    .join("");

  cityList.innerHTML = cityItems;
};

//keyup event listener
search.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  const searchResults = cities.filter((city) => {
    return city.name.includes(searchString);
  });
  displayCities(searchResults);
});

const loadCities = () => {
  displayCities(cities);
};

//for initial loading
loadCities();

const filterOperation = () => {
  options.forEach((option) => {
    //click event listener
    option.addEventListener("click", (e) => {
      const filter = e.target.value;
      const divisions = document.querySelectorAll(".city");

      divisions.forEach((division) => {
        var filterValue = division.getAttribute("mountains");
        if (filter === "reset") {
          division.style.display = "block";
        } else if (filter === filterValue) {
          division.style.display = "block";
        } else {
          division.style.display = "none"; //no display
        }
      });
    });
  });
};

filterOperation();

const placesOperation = () => {
  // click event listener
  placeoptions.forEach((placeoption) => {
    placeoption.addEventListener("click", (e) => {
      const filter = e.target.value;
      const divisions = document.querySelectorAll(".city");

      divisions.forEach((division) => {
        var filterValue = division.getAttribute("places");
        if (filter === "reset") {
          division.style.display = "block";
        } else if (filter <= filterValue) {
          division.style.display = "block";
        } else {
          division.style.display = "none"; //no display
        }
      });
    });
  });
};

placesOperation();
