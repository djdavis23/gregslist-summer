import House from "../../models/House.js"

let houses = [];
export default class HouseService {
  constructor() {

  }

  addHouse(formData) {
    let newHouse = new House(
      formData.bedrooms.value,
      formData.bathrooms.value,
      formData.size.value,
      formData.lotSize.value,
      formData.yearBuilt.value,
      formData.price.value,
      formData.imgURL.value
    )
    houses.push(newHouse);
  }

  getHouses() {
    let housesCopy = [];
    houses.forEach(house => {
      housesCopy.push(new House(
        house.bedrooms,
        house.bathrooms,
        house.sqFeet,
        house.lotSize,
        house.yrBuilt,
        house.price,
        house.imgURL
      ));
    });
    return housesCopy;
  }
}