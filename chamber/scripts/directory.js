const url = 'https://farah-st.github.io/wdd230/chamber/data.json';

async function getBiz(){
    const response = await fetch(url);
    const data = await response.json();
    displayBusiness(data.business);
}

getBiz();

const displayBusiness = (business) => {
    const cards = document.querySelector("div.cards");
    business.forEach((biz)=> {
        let card = document.createElement("section");
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let h4 = document.createElement('h4');
        let portrait = document.createElement('img');

        p1.textContent = `Business name: ${biz.name}`;   
        p2.textContent = `Address: ${biz.address}`; 
        p3.textContent = `Phone Number: ${biz.phoneNumber}`;
        h4.textContent = `${biz.weburl}`;

        portrait.setAttribute('images', biz.imageurl);
        portrait.setAttribute('alt', `${biz.name} logo`);
        portrait.setAttribute('loading', 'lazy');

        // card.appendChild(portrait);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(h4);
        cards.appendChild(card);
    })
}

