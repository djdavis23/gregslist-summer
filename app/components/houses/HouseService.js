import House from "../../models/House.js"
//@ts-ignore
const houseAPI = axios.create({
  baseURL: '//localhost:3000/api/houses/',
  timeout: 3000
})


export default class HouseService {
  constructor() {

  }

  getHouses(draw, handleError) {
    houseAPI.get()
      .then(res => {
        console.log(res)
        let houses = res.data.map(h => {
          return new House(h)
        })
        draw(houses)
      })
      .catch(handleError)
  }

  addHouse(data, draw, handleError) {
    let newHouse = new House({
      bathrooms: data.bathrooms.value,
      bedrooms: data.bedrooms.value,
      description: data.description.value,
      levels: data.levels.value,
      price: data.price.value,
      year: data.yearBuilt.value,
      imgUrl: data.imgURL.value
    })
    console.log("new house", newHouse)
    houseAPI.post('', newHouse)
      .then(res => {
        this.getHouses(draw, handleError)
      })
      .catch(handleError)
  }

  delete(hID, draw, error) {
    houseAPI.delete(hID)
      .then(res => {
        this.getHouses(draw, error)
      })
      .catch(error)
  }

  bid(id, update, draw, error) {
    houseAPI.put(id, update)
      .then(res => {
        this.getHouses(draw, error)
      })
      .catch(error)
  }


}