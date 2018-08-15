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
        <button onclick="app.controllers.houseController.delete('${house._id}')">Delete</button>
        <button onclick="app.controllers.houseController.bid('${house._id}',${house.price})">Bid</button>
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

  delete(houseID) {
    houseService.delete(houseID, drawHouses, handleError)
  }

  bid(id, price) {
    price += 1000
    let update = {
      price: price
    }
    houseService.bid(id, update, drawHouses, handleError)
  }
}