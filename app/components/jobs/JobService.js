import Job from "../../Models/Job.js"

let jobs = [];

export default class JobService {
  constructor() {

  }

  addJob(data) {
    let newJob = new Job(
      this.title = data.title.value,
      this.description = data.description.value,
      this.skills = data.skills.value,
      this.hours = data.hours.value,
      this.benefits = data.benefits.value,
      this.pocName = data.pocName.value,
      this.pocEmail = data.pocEmail.value
    )
    jobs.push(newJob);
  }

  getJobs() {
    let jobsCopy = [];
    jobs.forEach(job => {
      jobsCopy.push(new Job(
        job.title,
        job.description,
        job.skills,
        job.hours,
        job.benefits,
        job.pocName,
        job.pocEmail
      ))
    })
    return jobsCopy;
  }

}