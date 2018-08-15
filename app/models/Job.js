

export default class Job {
  constructor(j) {
    this.jobTitle = j.jobTitle
    this.description = j.description
    this.company = j.company
    this.hours = j.hours
    this.rate = j.rate
    this._id = j._id
  }
}