const fruitLink = "https://andejuli.github.io/wdd230/fruit.json";
let drinkList = [];

async function getFruit() {
    const response = await fetch(fruitLink);
    if (response.ok) {
        const fruits = await response.json();
        output(fruits);
    }
};

function output(fruits) {
    let num=0;
    while (num<3) {
        const label = document.createElement("label");
        const select = document.createElement("select");
        const name = `fruit${num+1}`

        select.name = name;
        select.id = name;
        select.innerHTML = `<option value="Select Fruit">Select Fruit</option>`;

        label.textContent = `Fruit ${num+1}:`
        label.setAttribute("class", "top")

        for (let i = 0; i < fruits.length; i++) {
            const fruit = fruits[i];
            const option = document.createElement("option");
            option.value = fruit.name;
            option.textContent = fruit.name;
            select.appendChild(option);
        }
        label.appendChild(select);
        document.getElementById("fruits-options-fieldset").appendChild(label)
        num += 1;
    }
}
getFruit();
