import CarService from "./CarService.js";

let carService = new CarService()
const carForm = document.getElementById("car-input")


function drawCars(cars) {

  let template = ''

  cars.forEach(car => {
    template += `
    <div style="outline: 1px solid black" class="col-md-3 pt-2 pb-2">
      <p>Make: ${car.make}</p>
      <p>Model: ${car.model}</p>
      <p>Price: $${car.price}</p>        
      <p>Year: ${car.year}</p>
      <p>Color: ${car.description}</p>
      <img src="${car.imgUrl}" width="100%" alt="somethingelse">
      <div class="mt-2">
        <button class="btn btn-danger"onclick="app.controllers.carController.deleteCar('${car._id}')">DELETE</button>
        <button class="btn btn-success" onclick="app.controllers.carController.bid('${car._id}', ${car.price})">BID</button>
      </div>   
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
    // this.toggleForm()
    this.hideForm()
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

  showForm() {
    carForm.classList.remove("hidden")
    carForm.classList.add("reveal")
    carForm.scrollIntoView(false)
  }

  hideForm() {
    carForm.classList.remove("reveal")
    carForm.classList.add("hidden")
  }

}