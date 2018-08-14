export default class Car {
  constructor(c) {
    this._id = c._id
    this.make = c.make
    this.model = c.model
    this.year = c.year
    this.price = c.price
    this.description = c.description
    this.imgUrl = c.imgUrl
  }
}