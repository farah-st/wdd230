let drink_count = document.querySelector('#drink-count');

const order_button = document.querySelector("#button");

let count = localStorage.getItem('drinks-counted');

if (count == null){
    count = 0;
}
localStorage.setItem('drinks-counted', count);
drink_count.innerHTML = localStorage.getItem('drinks-counted');
// it was equal to == 1
if (localStorage.getItem('drinks-counted') == 0){
    drink_count.innerHTML += ` drink`;
}

else{
    drink_count.innerHTML += ` drinks`;
}


order_button.addEventListener('click', () => {
    count++;
    localStorage.setItem('drinks-counted', count);
})