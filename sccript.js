// define
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM reference 
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("callHistory");
const cardsContainer = document.getElementById("cardsContainer");




const hotlines = [
    {
        icon: "assets/emergency.png",
        title: "National Emergancy Number",
        subtitle: "National Emergancy",
        number: "999",
        category: "All",

    },

    {
        icon: "assets/police.png",
        title: "Police Helpline Number",
        subtitle: "Police",
        number: "999",
        category: "Police",

    },

    {
        icon: "assets/fire-service.png",
        title: "Fire Service Number",
        subtitle: "Fire Service",
        number: "999",
        category: "Fire",

    },

    {
        icon: "assets/ambulance.png",
        title: "Ambulance",
        subtitle: "Ambulance",
        number: "1994-999999",
        category: "Health",

    },

    {
        icon: "assets/emergency.png",
        title: "Women & Child Helpline",
        subtitle: "Women & Child Helpline",
        number: "109",
        category: "Help",

    },

    {
        icon: "assets/emergency.png",
        title: "Anti-Corruption Helpline",
        subtitle: "Anti-Corruption",
        number: "106",
        category: "Govt.",

    },

    {
        icon: "assets/emergency.png",
        title: "Electricity Helpline",
        subtitle: "Electricity Outage",
        number: "16216",
        category: "Electricity",

    },

    {
        icon: "assets/brac.png",
        title: "Brac Helpline",
        subtitle: "NGO",
        number: "16465",
        category: "NGO",

    },

    {
        icon: "assets/Bangladesh-Railway.png",
        title: "Bangladesh Railway Helpline",
        subtitle: "Bangladesh Railway",
        number: "163",
        category: "Travel",

    }

];



// Render cards dynamically
function renderCards() {
    cardsContainer.innerHTML = "";
    hotlines.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");


        card.innerHTML = `
      <div class="card-top">
        <img src="${item.icon}" alt="${item.title}" class="card-icon">
        <button class="card-like"><i class="fa-regular fa-heart"></i></button>
        </div>
        <div class="card-title-area">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-subtitle">${item.subtitle}</p>
        </div>
        
      </div>
      <div class="card-number">${item.number}</div>
      <span class="badge">${item.category}</span>
      <div class="card-actions">
        <button class="action copy"><i class="fa-regular fa-copy"></i> Copy</button>
        <button class="action call"><i class="fa-solid fa-phone"></i> Call</button>
      </div>
    `;

        //Like button
        card.querySelector(".card-like").addEventListener("click", () => {
            heartCount++;
            heartCountEl.textContent = heartCount;
        });

        // Copy Button 
        card.querySelector(".copy").addEventListener("click", () => {
            navigator.clipboard.writeText(item.number).then(() => {
                alert(`Copied: ${item.number}`);
                copyCount++;
                copyCountEl.textContent = copyCount;
            });
        });

        // Call Button 

        card.querySelector(".call").addEventListener("click", () => {
            if (coinCount < 20) {
                alert("Not enough coin to make a call");
                return;
            }

            alert(`Calling ${item.title} at ${item.number}...`
            );
            coinCount -= 20;
            coinCountEl.textContent = coinCount;

            addToHistory(item.title, item.number);
        });


        cardsContainer.appendChild(card);

    });

}

// Add call to history
function addToHistory(serviceName, number) {
    const time = new Date().toLocaleTimeString();
    if (historyList.querySelector(".empty")) {
        historyList.innerHTML = "";
    }
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="history-first">
    <span class="service">${serviceName}</span>
    <span class="meta">${number}</span>
    </span>
    <span class="time">${time}</span>`;
    historyList.prepend(li);



}

// Init
renderCards();