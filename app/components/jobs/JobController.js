import JobService from "./JobService.js"
let jobService = new JobService();

function drawJobs(jobs) {

  let template = '';

  jobs.forEach(job => {
    template += `
    <div class="card col-md-3">
      <div class="card-header text-white bg-primary">
        ${job.jobTitle}
      </div>
      <div class="card-body">
        <p class="card-text">${job.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${job.company}</li>
        <li class="list-group-item">${job.hours}</li>
        <li class="list-group-item">$${job.rate.toFixed(2)}</li>      
      </ul>
      <div class="card-body">
        <button onclick="app.controllers.jobController.delete('${job._id}')">Delete</button>
      </div>
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
    let formData = event.target;
    jobService.addJob(formData, drawJobs, handleError);
    formData.reset();
  }

  delete(jobID) {
    jobService.delete(jobID, drawJobs, handleError)
  }
}