import { bus, it, sales, create, health, edu } from './jobs.js';


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
    default: jobList = [];
}

if (!isNaN(index) && jobList[index]) {

    const applyJob = jobList[index];

    formHead.innerHTML = `
        <h2>Apply for: <span class="orangehead">${applyJob.title} (${applyJob.Company} - ${applyJob.location})</span></h2>
    `;
} else {
    formHead.innerHTML = `
    <h2>Application Form</h2><span class"orangehead">Job not found.</span>
    `;
}


window.previewApplication = function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const coverLetter = document.getElementById('coverLetter').value;
    let resumeInput = document.getElementById('resume');
    let resume;

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
    alert("Your application has been submitted!");

    document.getElementById('jobForm').reset();
    editApplication();
}