import HouseService from "./HouseService.js"
let houseService = new HouseService();

function drawHouses() {
  let houses = houseService.getHouses();
  let template = '';

  houses.forEach(house => {
    template += `
    <div style="outline: 1px solid black" class="col-md-3">
        <p>Bedrooms: ${house.bedrooms}</p>
        <p>Bathrooms: ${house.bathrooms}</p>
        <p>Sq Footage: $${house.sqFeet}</p>
        <p>Lot Size: ${house.lotSize}</p>
        <p>Year Built: ${house.yrBuilt}</p>
        <p>Price: $${house.price}</p>
        <img src="${house.imgURL}" alt="somethingelse">
    </div>
    `
  })
  document.getElementById("houses").innerHTML = template;
}

export default class HouseController {
  constructor() {

  }

  addHouse(event) {
    event.preventDefault();
    let formData = event.target;
    console.log(formData)
    houseService.addHouse(formData);
    formData.reset();
    drawHouses();

  }
}