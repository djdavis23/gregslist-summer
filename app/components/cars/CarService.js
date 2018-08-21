import Car from '../../models/Car.js'

//creates a new HTTP request object
//@ts-ignore
const carsAPI = axios.create({
  //base connection url
  baseURL: '//localhost:3000/api/cars/',
  //only wait 3 seconds for a response
  timeout: 3000
})

export default class CarService {
  constructor() {

  }

  getCars(draw, handleError) {
    carsAPI.get()
      .then(res => {
        console.log(res)
        let cars = res.data.map(c => {
          return new Car(c)
        })
        draw(cars)
      })
      .catch(handleError)
  }

  addCar(formData, draw, handleError) {
    let newCar = new Car({
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    })
    //first parameter is any addition to base URL
    //second parameter is object to pass
    carsAPI.post('', newCar)
      .then(res => {
        this.getCars(draw, handleError)
      })
      .catch(handleError)
  }

  deleteCar(draw, handleError, id) {
    carsAPI.delete(id)
      .then(res => {
        this.getCars(draw, handleError)
      })
      .catch(handleError)
  }
  bid(carID, update, draw, handleError) {
    carsAPI.put(carID, update)
      .then(res => {
        this.getCars(draw, handleError)
      })
  }
}