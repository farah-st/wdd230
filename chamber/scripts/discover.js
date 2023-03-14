let diff = 0;
// Test if the user has NOT been to the site. If not, 
// then store the current date in on their local storage
// so that next time they visit the site, we can make a 
// comparison.
if(!localStorage.getItem("lastVisit")){

    localStorage.setItem("lastVisit", Date.now());
    // console.log("if statment");
}
// This condition is if the user HAS visited the site before.
// If they have, then get the current date, get the date of the 
// last time they visited the site, and compare the two to
// see how many days ago they came to the site. 
else {
    let currentDate = Date.now(); // get today's date
    let lastDate = localStorage.getItem("lastVisit"); // get date of
                                                      // last time they visted
                                                      // the site
    //  console.log(currentDate);     
    //  console.log(lastDate);                                             
    diff = Math.round((currentDate-lastDate)/1000/60/60/24);  // do the comparison.
    // console.log(diff);
    // console.log("else statement");
    localStorage.setItem("lastVisit", Date.now()); //updates it
}
// dom to change span
// console.log(diff);
let dateText = `${diff} days since last visited`;
document.querySelector("#diff").innerHTML = dateText;