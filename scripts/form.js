import { bus, it, sales, create, health, edu } from './jobs.js';
import { busJobs, itJobs, salesJobs, createJobs, healthJobs, eduJobs, archiJobs } from '../pages/scripts/6jobs.js';


const formHead = document.querySelector ('.js-formhead');

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

    const applyJob = jobList[index];

    formHead.innerHTML = `
        <h2>Apply for: <span class="orangehead">${applyJob.title} (${applyJob.Company} - ${applyJob.location})</span></h2>
    `;
} else {
    formHead.innerHTML = `
    <h2>Application Form</h2><p><div style="color:red;">Job not found.</div></p>
    `;
}

let resumeInput = document.getElementById('resume');
let resume;

window.previewApplication = function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const coverLetter = document.getElementById('coverLetter').value.trim();
    
    if (
        // !name || !email || !phone
        name.length === 0 || email.length === 0 || phone.length === 0
    ) {
        alert ('Missing required field(s)');
        return;
    }

    if (resumeInput.files.length > 0 && resumeInput.files[0].name) {
        resume = resumeInput.files[0].name;
    } else {
        resume = 'No file selected';
    }

    // Display values in preview
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewPhone').textContent = phone;
    document.getElementById('previewCoverLetter')
        .textContent = coverLetter;
    document.getElementById('previewResume').textContent = resume;

    // Show preview and hide form
    document.getElementById('jobForm')
        .classList.add('hidden');
    document.getElementById('previewSection')
        .classList.remove('hidden');
}

window.editApplication = function () {
    document.getElementById('jobForm').classList.remove('hidden');
    document.getElementById('previewSection').classList.add('hidden');
}

window.submitApplication = function () {
    if (resumeInput.files.length === 0) {
        alert('Please upload your resume before proceeding.');
        return; // Prevents the rest of the function from running
    }

    alert("Your application has been submitted!");

    document.getElementById('jobForm').reset();
    editApplication();
}