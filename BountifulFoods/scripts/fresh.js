localStorage.setItem("drinks", JSON.stringify(drinkList));
let exist = localStorage.getItem('drinks');
if (exist) {
  drinkList = JSON.parse(localStorage.getItem('drinks'));
  update(drinkList);
}