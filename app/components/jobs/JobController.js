import JobService from "./JobService.js"
let jobService = new JobService();
const jobForm = document.getElementById("job-input")

function drawJobs(jobs) {

  let template = '';

  jobs.forEach(job => {
    template += `
    <div class="card col-md-3 mt-2">
      <div class="card-header text-white bg-primary">
        ${job.jobTitle}
      </div>
      <div class="card-body">
        <p class="card-text">${job.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>${job.company}</strong></li>
        <li class="list-group-item">Hours per week: ${job.hours}</li>
        <li class="list-group-item">Hourly Rate: $${job.rate.toFixed(2)}</li>
        <li class="list-group-item"><button class="btn btn-danger" onclick="app.controllers.jobController.delete('${job._id}')">Delete</button></li>      
      </ul>      
    </div>
    `
  })
  document.getElementById("jobs").innerHTML = template
}

function handleError(error) {
  console.log(error.message)
}


export default class JobController {
  constructor() {
    jobService.getJobs(drawJobs, handleError)
  }

  addJob(event) {
    event.preventDefault();
    this.hideForm()
    let formData = event.target;
    jobService.addJob(formData, drawJobs, handleError);
    formData.reset();
  }

  delete(jobID) {
    jobService.delete(jobID, drawJobs, handleError)
  }

  showForm() {
    jobForm.classList.remove("hidden")
    jobForm.classList.add("reveal")
    jobForm.scrollIntoView(false)
  }

  hideForm() {
    jobForm.classList.remove("reveal")
    jobForm.classList.add("hidden")
  }
}