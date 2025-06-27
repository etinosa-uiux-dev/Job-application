import { bus, it, sales, create, health, edu } from './jobs.js';
import { busJobs, itJobs, salesJobs, createJobs, healthJobs, eduJobs, archiJobs } from '../pages/scripts/6jobs.js';


const starthead = document.querySelector ('.starthead');
const jobInfo = document.querySelector ('.js-info');
const littleInfo = document.querySelector ('.littleinfo');

// Get query parameter from URL
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const index = parseInt(params.get('index'));

let jobList = [];

switch (category) {
    case 'bus': jobList = bus; break;
    case 'it': jobList = it; break;
    case 'sales': jobList = sales; break;
    case 'create': jobList = create; break;
    case 'health': jobList = health; break;
    case 'edu': jobList = edu; break;
    case 'busJobs': jobList = busJobs; break;
    case 'itJobs': jobList = itJobs; break;
    case 'salesJobs': jobList = salesJobs; break;
    case 'createJobs': jobList = createJobs; break;
    case 'healthJobs': jobList = healthJobs; break;
    case 'eduJobs': jobList = eduJobs; break;
    case 'archiJobs': jobList = archiJobs; break;
    default: jobList = [];
}

if (!isNaN(index) && jobList[index]) {
    
    const selectedJob = jobList[index];


    // console.log (`${category}`,[index]);

    starthead.innerHTML = `
        <h1>Application  form for <span class="orangehead">${selectedJob.title}</span></h1>
    `

    jobInfo.innerHTML = `
        <ul>
            <li class="bold">Job Title :</li>
            <li class="light">${selectedJob.title}</li>
            <li class="bold">Job Type :</li>
            <li class="light">${selectedJob.jobType}</li>
            <li class="bold">Location :</li>
            <li class="light">${selectedJob.location}</li>
            <li class="bold">Job Schedule :</li>
            <li class="light">${selectedJob.jobSchedule}</li>
            <li class="bold">Company :</li>
            <li class="light">${selectedJob.Company || 'Not specified'}</li>
            <li class="bold">Salary-range :</li>
            <li class="light">${selectedJob.salary}</li>
        </ul>
    `

    littleInfo.innerHTML = `
        <p>
            Join <strong>${selectedJob.Company}</strong> as a dedicated <strong>${selectedJob.title}</strong> based in <strong>${selectedJob.location}</strong>. This is a <strong>${selectedJob.jobSchedule}</strong>, <strong>${selectedJob.jobType}</strong> opportunity where you'll play a key role for the organization and ensuring compliance. Competitive salary and growth potential included. <br> Applicants will receive a response within 5 - 7 business days after submission.
        </p>

        <a href="./form.html?category=${category}&index=${index}" target="_blank">
            <button>APPLY HERE</button>
        </a>
`
} else {
    jobInfo.innerHTML = '<p class="nojob">No job selected or invalid index.</p>';
}