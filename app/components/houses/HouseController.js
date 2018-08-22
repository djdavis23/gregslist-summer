import HouseService from "./HouseService.js"
let houseService = new HouseService();
const houseForm = document.getElementById("house-input")

function drawHouses(houses) {
  let template = '';

  houses.forEach(house => {
    template += `
    <div style="outline: 1px solid black" class="col-md-3 pt-2 pb-2">
      <p>Bedrooms: ${house.bedrooms}</p>
      <p>Bathrooms: ${house.bathrooms}</p>
      <p>Description: ${house.description}</p>
      <p>Levels: ${house.levels}</p>
      <p>Year Built: ${house.year}</p>
      <p>Price: $${house.price}</p>
      <img src="${house.imgUrl}" class="mb-2" width="100%" alt="somethingelse">
      <div class="mt-2">
        <button class="btn btn-danger" onclick="app.controllers.houseController.delete('${house._id}')">Delete</button>
        <button class="btn btn-success" onclick="app.controllers.houseController.bid('${house._id}',${house.price})">Bid</button>
      </div>
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
    this.hideForm()
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

  showForm() {
    houseForm.classList.remove("hidden")
    houseForm.classList.add("reveal")
    houseForm.scrollIntoView(false)
  }

  hideForm() {
    houseForm.classList.remove("reveal")
    houseForm.classList.add("hidden")
  }
}