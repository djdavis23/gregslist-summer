import JobService from "./JobService.js"
let jobService = new JobService();

function drawJobs() {
  let jobs = jobService.getJobs();
  let template = '';

  jobs.forEach(job => {
    template += `
    <div class="card col-md-3">
    <div class="card-header text-white bg-primary">
      ${job.title}
    </div>
    <div class="card-body">
      <p class="card-text">${job.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${job.skills}</li>
      <li class="list-group-item">${job.hours}</li>
      <li class="list-group-item">${job.benefits}</li>
      <li class="list-group-item">${job.pocName}</li>
      <li class="list-group-item">${job.pocEmail}</li>
    </ul>
  </div>
    `
  })
  document.getElementById("jobs").innerHTML = template



}


export default class JobController {
  constructor() {
    drawJobs();
  }

  addJob(event) {
    event.preventDefault();
    let formData = event.target;
    jobService.addJob(formData);
    formData.reset();
    drawJobs();
  }
}