import { bus, it, sales, create, health, edu } from './jobs.js';

import { archiJobs } from '../pages/scripts/6jobs.js';


const busBox = document.querySelector ('.busbox');
const itBox = document.querySelector ('.itbox');
const salesBox = document.querySelector ('.salesbox');
const createBox = document.querySelector ('.createbox');
const healthBox = document.querySelector ('.healthbox');
const eduBox = document.querySelector ('.edubox');

const searchJobs = document.querySelector ('.js-search');
const searchResults = document.querySelector ('.js-search-results');

window.onload = function () {
    if (!busBox) {
        // console.error("Element with class 'busbox' not found.");
        return;
    }

    displayBus();

    function displayBus () {
        bus.forEach ( (bus, index) => {
            const busCard = document.createElement ('a');
            busCard.href = `../apply.html?category=bus&index=${index}`;
            busCard.className = 'card'

            busCard.innerHTML = `
                <div class="icon">
                    <img src="${bus.image}" alt="">
                </div>
                <p>${bus.title}</p>
            `

            busBox.appendChild (busCard);

            busCard.addEventListener ('click', () => {
                console.log (index);
            });
        });

        const viewMoreLink = document.createElement('a');
        viewMoreLink.href = 'pages/business.html';
        viewMoreLink.className = 'text';
        viewMoreLink.innerHTML = '<p>view more ></p>';

        busBox.appendChild(viewMoreLink);
    }

    displayIt ()

    function displayIt () {
        it.forEach ( (it,index) => {
            const itCard = document.createElement ('a');
            itCard.href = `../apply.html?category=it&index=${index}`;
            itCard.className = 'card'

            itCard.innerHTML = `
                <div class="icon">
                    <img src="${it.image}" alt="">
                </div>
                <p>${it.title}</p>
            `

            itBox.appendChild (itCard);
        });

        const viewMoreLink = document.createElement('a');
        viewMoreLink.href = 'pages/it.html';
        viewMoreLink.className = 'text';
        viewMoreLink.innerHTML = '<p>view more ></p>';

        itBox.appendChild(viewMoreLink);
    }

    displaySales ();

    function displaySales () {
        sales.forEach ( (sale, index) => {
            const saleCard = document.createElement ('a');
            saleCard.href = `../apply.html?category=sales&index=${index}`;
            saleCard.className = 'card'

            saleCard.innerHTML = `
                <div class="icon">
                    <img src="${sale.image}" alt="">
                </div>
                <p>${sale.title}</p>
            `

            salesBox.appendChild (saleCard);
        });

        const viewMoreLink = document.createElement('a');
        viewMoreLink.href = 'pages/sales.html';
        viewMoreLink.className = 'text';
        viewMoreLink.innerHTML = '<p>view more ></p>';

        salesBox.appendChild(viewMoreLink);
    }

    displayCreate ();

    function displayCreate () {
        create.forEach ( (create, index) => {
            const createCard = document.createElement ('a');
            createCard.href = `../apply.html?category=create&index=${index}`;
            createCard.className = 'card'

            createCard.innerHTML = `
                <div class="icon">
                    <img src="${create.image}" alt="">
                </div>
                <p>${create.title}</p>
            `

            createBox.appendChild (createCard);
        });

        const viewMoreLink = document.createElement('a');
        viewMoreLink.href = 'pages/create.html';
        viewMoreLink.className = 'text';
        viewMoreLink.innerHTML = '<p>view more ></p>';

        createBox.appendChild(viewMoreLink);
    }

    displayHealth ();

    function displayHealth () {
        health.forEach ( (health, index) => {
            const healthCard = document.createElement ('a');
            healthCard.href = `../apply.html?category=health&index=${index}`;
            healthCard.className = 'card'

            healthCard.innerHTML = `
                <div class="icon">
                    <img src="${health.image}" alt="">
                </div>
                <p>${health.title}</p>
            `

            healthBox.appendChild (healthCard);
        });

        const viewMoreLink = document.createElement('a');
        viewMoreLink.href = 'pages/health.html';
        viewMoreLink.className = 'text';
        viewMoreLink.innerHTML = '<p>view more ></p>';

        healthBox.appendChild(viewMoreLink);
    }

    displayEdu ();

    function displayEdu () {
        edu.forEach ( (edu, index) => {
            const eduCard = document.createElement ('a');
            eduCard.href = `../apply.html?category=edu&index=${index}`;
            eduCard.className = 'card'

            eduCard.innerHTML = `
                <div class="icon">
                    <img src="${edu.image}" alt="">
                </div>
                <p>${edu.title}</p>
            `

            eduBox.appendChild (eduCard);
        });

        const viewMoreLink = document.createElement('a');
        viewMoreLink.href = 'pages/edu.html';
        viewMoreLink.className = 'text';
        viewMoreLink.innerHTML = '<p>view more ></p>';

        eduBox.appendChild(viewMoreLink);
    }

    searchJobs.addEventListener ('keyup', () => {
        searching ();
    });

    function searching () {
        const searchString = searchJobs.value.trim ().toLocaleLowerCase ();

        searchResults.innerHTML = '';

        const allJobs = [
            { data: bus, category: 'bus' },
            { data: it, category: 'it' },
            { data: sales, category: 'sales' },
            { data: create, category: 'create' },
            { data: health, category: 'health' },
            { data: edu, category: 'edu' },
            { data: archiJobs, category: 'archi' }
        ];

        let matchedResults = [];

        /* allJobs.filter  ( ({data, category}) => {

            data.forEach ( (job, index) => {
                if ( bus.title.toLocaleLowerCase ().includes (searchString)){
                    .....
                }
            });
        });*/

        allJobs.filter  ( (jobGroup) => {
            const data = jobGroup.data;
            const category = jobGroup.category;

            data.forEach ( (job, index) => {

                if (job.title.toLocaleLowerCase ().includes (searchString)) {
                    matchedResults.push({
                        title: job.title,
                        category: category,
                        index: index
                    });
                }
            });
        });

       matchedResults.forEach(result => {
            const resultItem = `
                <a href="../../apply.html?category=${result.category}&index=${result.index}">${result.title}</a>
            `;
            searchResults.innerHTML += resultItem;
        });

        if (!searchString || matchedResults.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
            searchResults.style.display = 'none';
        } else {
            searchResults.style.display = 'flex';
        }
    }
}