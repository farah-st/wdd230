if(!localStorage.getItem("lastVisit")){
    localStorage.setItem("lastVisit", Date.now)
    'welcome'
} else {
    let currentDate = Date.now();
    let lastDate = localStorage.getItem("lastVisit");
    let diff = (currentDate-lastDate)/1000/60/60/24;
} 
// dom to change span