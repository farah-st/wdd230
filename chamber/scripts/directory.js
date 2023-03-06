const url = 'https://farah-st.github.io/wdd230/chamber/data.json';

async function getBiz(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    displayBusiness(data.business);
    cards();
    document.body.querySelector('#cards').addEventListener('click', cards);
    document.body.querySelector('#table').addEventListener('click', table);

    function cards(){
      displayBusiness(data.business);
    }

    function table(){
      displayTable(data.business);
    }
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

function displayTable(business){
    let row = document.querySelectorAll('tr');
    row.forEach((item)=>{
        item.remove();
    })
    let section = document.querySelectorAll('section');
    section.forEach((item)=>{
        item.remove();
    })

    business.forEach((biz)=>{
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_address = document.createElement('td');
        let td_phoneNumber = document.createElement('td');
        let td_weburl = document.createElement('td');

        td_name.textContent = `${biz.name}`;
        td_address.textContent = `${biz.address}`;
        td_phoneNumber.textContent = `${biz.phoneNumber}`;
        td_weburl.textContent = `${biz.weburl}`;

        tr.appendChild(td_name);
        tr.appendChild(td_address);
        tr.appendChild(td_phoneNumber);
        tr.appendChild(td_weburl);
        document.querySelector('table').appendChild(tr);

    })
}

