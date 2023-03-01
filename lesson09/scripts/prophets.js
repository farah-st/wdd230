const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
//fetc code
async function getProphetData() { //running asyncronist at least one await
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json(); //js data can be js object making a js to json
    // console.table(data.prophets);  
    // note that we 
    // reference the prophet array of the data object 
    // given the structure of the json file
    displayProphets(data.prophets);
  }
  
  getProphetData();


  const displayProphets = (prophets) => { //calling data.prophets
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let portrait = document.createElement('img');
      
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;      
      p1.textContent = `Date of Birth: ${prophet.birthdate}`;   
      p2.textContent = `Place of Birth: ${prophet.birthplace}`; 
        
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
     
      portrait.setAttribute('loading', 'lazy');
    //   portrait.setAttribute('width', '340');
    //   portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(portrait);
      cards.appendChild(card);
    } // end of forEach loop
 )} // end of function expression

