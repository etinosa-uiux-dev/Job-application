const jobs = [
    {
        title: "Curriculum Developer",
        location: "United States, US",
        types: ["Hybrid", "Altenative Schedule"]
    },
    {
        title: "Academic Counselor",
        location: "California, US",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Lecture",
        location: "United Kingdom, GB",
        types: ["Hybrid", "Alternative Schedule"]
    },
    {
        title: "Elementary Tutor",
        location: "Austria, AT",
        types: ["On-Site", "Alternative Schedule"]
    },
    {
        title: "Adult Education",
        location: "San Francisco, CA",
        types: ["On-Site", "Alternative Schedule"]
    },
    {
        title: "Librarian",
        location: "Belgium, BE",
        types: ["On-site", "Alternative Schedule"]
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