const jobs = [
    {
        title: "Digital Marketer",
        location: "Canada, CA",
        types: ["On-100% Remote", "Full-Time"]
    },
    {
        title: "Brand Manager",
        location: "China, CN",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Content Creator",
        location: "United Kingdom, GB",
        types: ["Hybrid", "Alternative Schedules"]
    },
    {
        title: "Sales Executive",
        location: "Lagos, NG",
        types: ["Hybrid", "Full-Time"]
    },
    {
        title: "Social Media",
        location: "San Francisco, CA",
        types: ["100% Remote", "Full-Time"]
    },
    {
        title: "Sales Manager",
        location: "Mexico, MX",
        types: ["Hybrid", "Alternative Schedule"]
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