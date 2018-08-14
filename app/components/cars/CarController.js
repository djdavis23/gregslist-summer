import CarService from "./CarService.js";

let carService = new CarService()

function drawCars(cars) {

  let template = ''

  cars.forEach(car => {
    template += `
    <div style="outline: 1px solid black" class="col-md-3">
        <p>Make: ${car.make}</p>
        <p>Model: ${car.model}</p>
        <p>Price: $${car.price}</p>
        <button onclick="app.controllers.carController.bid('${car._id}', ${car.price})">BID</button>
        <p>Year: ${car.year}</p>
        <p>Color: ${car.description}</p>
        <img src="${car.imgUrl}" height="125px" alt="somethingelse">
        <button onclick="app.controllers.carController.deleteCar('${car._id}')">DELETE</button>
    </div>
    `
  })

  document.getElementById('cars').innerHTML = template
}

function handleError(error) {
  console.log(error.message)
}

export default class CarController {

  constructor() {
    carService.getCars(drawCars, handleError)
  }

  addCar(triggeredEvent) {
    triggeredEvent.preventDefault();
    console.log(triggeredEvent)
    let formData = triggeredEvent.target
    carService.addCar(formData, drawCars, handleError)
    formData.reset()
  }

  deleteCar(id) {
    carService.deleteCar(drawCars, handleError, id)
  }

  bid(carID, price) {
    price++
    let update = {
      price: price
    }
    carService.bid(carID, update, drawCars, handleError)
  }

}