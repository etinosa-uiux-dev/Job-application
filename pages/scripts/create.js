const jobs = [
    {
        title: "Graphic Designer",
        location: "United States, US",
        types: ["On-100% Remote", "Full-Time"]
    },
    {
        title: "Video Editor",
        location: "Bahamas,BS",
        types: ["On-100% Remote", "Full-Time"]
    },
    {
        title: "Interior Designer",
        location: "United Kingdom, GB",
        types: ["On-Site", "Full-Time"]
    },
    {
        title: "Illustrator",
        location: "Bangladesh, BD",
        types: ["Hybrid", "Full-Time"]
    },
    {
        title: "Brand Strategist",
        location: "San Francisco, CA",
        types: ["Hybrid", "Full-Time"]
    },
    {
        title: "Animator",
        location: "Japan, JP",
        types: ["On-site", "Full-Time"]
    }
];

const container = document.querySelector(".js-card-contain");

displayJobs ();

function displayJobs () {
    jobs.forEach (job => {
        const card = document.createElement ("a");
        card.href = "";
        card.className =  "card js-card";

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