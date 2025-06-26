const jobs = [
    {
        title: "Accountant",
        location: "California, US",
        types: ["On-Site", "Full-Time"],
        jobType: 'On-Site',
        jobSchedule: 'Full-Time',
        Company: 'AbD',
        salary: '$70 - $600+'
    },
    {
        title: "Task Consultant",
        location: "Australia, AU",
        types: ["Hybrid", "Alternative Schedules"],
        jobType: 'On-Site',
        jobSchedule: 'Full-Time',
        Company: 'AcD',
        salary: '$70 - $600+'
    },
    {
        title: "Auditor",
        location: "Sierra Leone, SL",
        types: ["Hybrid", "Full-Time"],
        jobType: 'On-Site',
        jobSchedule: 'Full-Time',
        Company: 'AeD',
        salary: '$70 - $600+'
    },
    {
        title: "Loan Officer",
        location: "Lagos, NG",
        types: ["Hybrid", "Alternative Schedules"],
        jobType: 'On-Site',
        jobSchedule: 'Full-Time',
        Company: 'AfD',
        salary: '$70 - $600+'
    },
    {
        title: "Economist",
        location: "San Francisco, CA",
        types: ["100% Remote", "Full-Time"],
        jobType: 'On-Site',
        jobSchedule: 'Full-Time',
        Company: 'AgD',
        salary: '$70 - $600+'
    },
    {
        title: "Risk Manager",
        location: "California, US",
        types: ["Hybrid", "Full-Time"],
        jobType: 'On-Site',
        jobSchedule: 'Full-Time',
        Company: 'AhD',
        salary: '$70 - $600+'
    }
];

const container = document.querySelector(".js-card-contain");

window.onload = function () {
    if (!container) {
        // console.error("Element with class 'container' not found.");
        return;
    }

    displayJobs ();

    function displayJobs () {
        jobs.forEach(job => {
            const card = document.createElement("a");
            card.href = "";
            card.className = "card js-card";

            card.innerHTML = `
                <div class="new">.New!.</div>
                <div class="title">${job.title}</div>
                <div class="type">
                ${job.types.map(type => `<span>${type}</span>`).join("")}
                </div>
                <div class="location">
                <i class="fa-solid fa-location-dot"></i>
                ${job.location}
                </div>
            `;

            container.appendChild(card);
        });
    }
}