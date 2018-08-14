import HouseService from "./HouseService.js"
let houseService = new HouseService();

function drawHouses(houses) {
  let template = '';

  houses.forEach(house => {
    template += `
    <div style="outline: 1px solid black" class="col-md-3">
        <p>Bedrooms: ${house.bedrooms}</p>
        <p>Bathrooms: ${house.bathrooms}</p>
        <p>Description: ${house.description}</p>
        <p>Levels: ${house.levels}</p>
        <p>Year Built: ${house.year}</p>
        <p>Price: $${house.price}</p>
        <img src="${house.imgUrl}" class="mb-2" height="125px" alt="somethingelse">
    </div>
    `
  })
  document.getElementById("houses").innerHTML = template;
}

function handleError(error) {
  console.log(error.message)
}

export default class HouseController {
  constructor() {
    houseService.getHouses(drawHouses, handleError)
  }

  addHouse(event) {
    event.preventDefault();
    let formData = event.target;
    houseService.addHouse(formData, drawHouses, handleError);
    formData.reset();
  }
}