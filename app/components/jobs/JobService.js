import Job from "../../Models/Job.js"
//@ts-ignore
const jobAPI = axios.create({
  baseURL: '//localhost:3000/api/jobs/',
  timeout: 3000
})

export default class JobService {
  constructor() {

  }

  getJobs(draw, error) {
    jobAPI.get()
      .then(res => {
        let jobs = res.data.map(j => {
          return new Job(j)
        })
        draw(jobs)
      })
      .catch(error)

  }

  addJob(data, draw, error) {
    let myJob = new Job({
      jobTitle: data.jobTitle.value,
      company: data.company.value,
      hours: data.hours.value,
      rate: data.rate.value,
      description: data.description.value
    })
    jobAPI.post('', myJob)
      .then(res => {
        this.getJobs(draw, error)
      })
      .catch(error)
  }

  delete(jobID, draw, error) {
    jobAPI.delete(jobID)
      .then(res => {
        this.getJobs(draw, error)
      })
      .catch(error)
  }

}