import { bus, it, sales, create, health, edu } from './jobs.js';

const busBox = document.querySelector ('.busbox');
const itBox = document.querySelector ('.itbox');
const salesBox = document.querySelector ('.salesbox');
const createBox = document.querySelector ('.createbox');
const healthBox = document.querySelector ('.healthbox');
const eduBox = document.querySelector ('.edubox');

// displayBus ();
// displayIt ();
// displaySales ();
// displayCreate ();
// displayHealth ();
// displayEdu ();

window.onload = function () {
    if (!busBox) {
        // console.error("Element with class 'busbox' not found.");
        return;
    }

    displayBus();

    function displayBus () {
        bus.forEach ( (bus, index) => {
            const busCard = document.createElement ('a');
            busCard.href = `../apply.html?index=${index}`;
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
        it.forEach (it => {
            const itCard = document.createElement ('a');
            itCard.href = '';
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
        sales.forEach (sale => {
            const saleCard = document.createElement ('a');
            saleCard.href = '';
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
        create.forEach (create => {
            const createCard = document.createElement ('a');
            createCard.href = '';
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
        health.forEach (health => {
            const healthCard = document.createElement ('a');
            healthCard.href = '';
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
        edu.forEach (edu => {
            const eduCard = document.createElement ('a');
            eduCard.href = '';
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
}