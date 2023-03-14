const url = 'https://farah-st.github.io/wdd230/chamber/data.json';

async function getBiz(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.business); 
    cards();

    document.body.querySelector('#cards').addEventListener('click', cards);
    document.body.querySelector('#list').addEventListener('click', table);

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
    let row = document.querySelectorAll('tr');
    row.forEach((item)=>{
        item.remove();
    })
    let section = document.querySelectorAll('section');
    section.forEach((item)=>{
        item.remove();
    })
    
    business.forEach((biz)=> {
        let card = document.createElement("section");
        let bName = document.createElement('h1');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let web = document.createElement('h4');
        let portrait = document.createElement('img');

        bName.textContent = biz.name;   
        address.textContent = `Address: ${biz.address}`; 
        phonenumber.textContent = `Phone Number: ${biz.phoneNumber}`;
        web.textContent = `${biz.weburl}`;

        portrait.setAttribute('src', biz.imageurl);
        portrait.setAttribute('alt', `${biz.name} logo`);
        portrait.setAttribute('loading', 'lazy');



        // card.appendChild(portrait);
        card.appendChild(bName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(web);
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

        td_name.textContent = biz.name;
        td_address.textContent = `Address: ${biz.address}`;
        td_phoneNumber.textContent = `Phone Number: ${biz.phoneNumber}`;
        td_weburl.textContent = `Website: ${biz.weburl}`;

        tr.appendChild(td_name);
        tr.appendChild(td_address);
        tr.appendChild(td_phoneNumber);
        tr.appendChild(td_weburl);
        document.querySelector('table').appendChild(tr);

    })
}