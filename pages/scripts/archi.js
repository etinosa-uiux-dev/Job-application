const jobs = [
    {
        title: "Architect",
        location: "United States, US",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Urban Planner",
        location: "Nigeria, NG",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "CAD Technician",
        location: "United Kingdom, GB",
        types: ["Hybrid", "Alternative Schedule"]
    },
    {
        title: "Design Manager",
        location: "Austria, AT",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "BIM Cordinator",
        location: "San Francisco, CA",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Construction Project Coordinator",
        location: "Belgium, BE",
        types: ["On-site", "Full-Time"]
    }
];

const container = document.querySelector(".js-card-contain");

displayJobs ();

function displayJobs () {
    jobs.forEach ( job => {
        const card = document.createElement ("a");
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
        `
        container.appendChild (card);
    });
}