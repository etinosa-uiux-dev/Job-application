function previewApplication() {
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

function editApplication() {
    document.getElementById('jobForm').classList.remove('hidden');
    document.getElementById('previewSection').classList.add('hidden');
}

function submitApplication() {
    alert("Your application has been submitted!");

    document.getElementById('jobForm').reset();
    editApplication();
}