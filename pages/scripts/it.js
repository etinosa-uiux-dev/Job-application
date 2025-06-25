const jobs = [
    {
        title: "Frontend Developer",
        location: "California, US",
        types: ["On-100% Remote", "Full-Time"]
    },
    {
        title: "UI/UX Designer",
        location: "Australia, AU",
        types: ["100% Remote", "Full-Time"]
    },
    {
        title: "IT Support",
        location: "Sierra Leone, SL",
        types: ["Hybrid", "Full-Time"]
    },
    {
        title: "Cloud Engineer",
        location: "Lagos, NG",
        types: ["Hybrid", "Alternative Schedules"]
    },
    {
        title: "DevOps Engineer",
        location: "San Francisco, CA",
        types: ["100% Remote", "Full-Time"]
    },
    {
        title: "Data Analyst",
        location: "California, US",
        types: ["Hybrid", "Full-Time"]
    }
];

const container = document.querySelector(".js-card-contain");

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