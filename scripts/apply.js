import { bus, it, sales, create, health, edu } from './jobs.js';


const starthead = document.querySelector ('.starthead');
const jobInfo = document.querySelector ('.js-info');
const littleInfo = document.querySelector ('.littleinfo');

// Get query parameter from URL
const params = new URLSearchParams(window.location.search);
let index = params.get('index');

if (index !== null && bus[index]) {

    const selectedJob = bus [index];

    console.log (bus[2]);

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

        <a href="./form.html?index=${index}" target="_blank">
            <button>APPLY HERE</button>
        </a>
`
} else {
    jobInfo.innerHTML = '<p class="nojob">No job selected or invalid index.</p>';
}