let size = 0;
let delivery;
let toppings;

const pizzaPrice = () => {

    const size1 = document.querySelector('#size1');
    const size2 = document.querySelector('#size2');
    const size3 = document.querySelector('#size3');
    const size4 = document.querySelector('#size4');
    const delivery_way = document.querySelector('#delivery').value;
    const name = document.querySelector('#nameclient').value;
    const answer = document.querySelector('#answers');

if (size1.checked) {
    size = Number(size1.value);
    console.log(size);
} else if (size2.checked) {
    size = Number(size2.value);
    console.log(size);
} else if (size3.checked) {
    size = Number(size3.value);
    console.log(size);
} else {
    size = Number(size4.value);
    console.log(size)
}

if (delivery_way == "delivery home") {
    delivery = 5;
    console.log(delivery);
} else {
    delivery = 0;
    console.log(delivery)
}

let toppingCount = 0;

let checkboxes = document.querySelectorAll('input[name="toppings"]');
let values = [];
for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
        values.push(checkboxes[i].value);
        toppingCount = toppingCount + 1;
    }
}
 
let sum = 0;
toppingCount = Number(toppingCount);

if (toppingCount > 4) { 
    sum = size + delivery + (toppingCount-4)*0.5;
    answer.innerHTML = `Order for ${name} <br> Toppings: ${values} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
} else if (toppingCount <= 4) {
    sum = size + delivery;
    answer.innerHTML = `Order for ${name} <br> Toppings: ${values} <br> Delivery: ${delivery_way} <br> Price: ${sum}€`;
} else {
        answer.textContent = 'Please, choose options';
    }
}

const sizeInputs = document.querySelectorAll('input[name="size"]');
for (const i of sizeInputs) {
    i.addEventListener('click', pizzaPrice);
}

const toppingCheckboxes = document.querySelectorAll('input[name="toppings"]');
for (const i of toppingCheckboxes) {
    i.addEventListener('click', pizzaPrice);
};

const deliverySelect = document.querySelector('#delivery');
deliverySelect.addEventListener('change', pizzaPrice);

const nameSelect = document.querySelector('#nameclient');
nameSelect.addEventListener('click', pizzaPrice);
