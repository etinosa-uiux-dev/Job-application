const jobs = [
    {
        title: "Doctor",
        location: "United States, US",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Medical Laboratory Scientist",
        location: "California, US",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Speech Therapist",
        location: "United Kingdom, GB",
        types: ["On-Site", "Alternative Schedule"]
    },
    {
        title: "Healthcare Assistant",
        location: "Austria, AT",
        types: ["Hybrid", "Alternative Schedule"]
    },
    {
        title: "Nurse",
        location: "San Francisco, CA",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Pharmacist",
        location: "Belgium, BE",
        types: ["On-site", "Alternative Schedule"]
    }
];

const container = document.querySelector(".js-card-contain");

displayJobs ();

function displayJobs () {
    jobs.forEach (job => {
        const card = document.createElement ("a");
        card.href = "";
        card.className = "card js-card"

        card.innerHTML = `
            <div class="new">.New!.</div>
            <div class="title">${job.title}</div>
            <div class="type">
                ${job.types.map (type => `<span>${type}</span>`).join("")}
            </div>
            <div class="location">
                <i class="fa-solid fa-location-dot"></i>
                ${job.location}
            </div>
        `

        container.appendChild (card);
    });
}