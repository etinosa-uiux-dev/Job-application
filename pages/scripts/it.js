import { itJobs } from './6jobs.js';


const container = document.querySelector(".js-card-contain");

window.onload = function () {
    if (!container) {
        // console.error("Element with class 'busbox' not found.");
        return;
    }
        
    displayJobs ();

    function displayJobs () {
        itJobs.forEach( (job, index) => {
            const card = document.createElement("a");
            card.href = `../../apply.html?category=itJobs&index=${index}`;
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