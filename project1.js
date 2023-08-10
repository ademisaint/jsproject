const form = document.getElementById('form');
//const costPriceInput = form.elements['costPrice']; 

console.log(form.elements)

const calcCpPerItem = document.getElementById('button')
const calcSpPerItemL = document.getElementById('calcSellPriceL')
const calcSpPerItemM = document.getElementById('calcSellPriceM')
const calcSpPerItemH = document.getElementById('calcSellPriceH')

function getCostPrice(){
    let cp = parseFloat(document.getElementById('costPrice').value);
    let numOfItems = parseInt(document.getElementById('NumOfItems').value);
    let cpPerItem = cp / numOfItems

    document.getElementById('costPricePerItem').value = cpPerItem
    document.getElementById('costPricePerItem1').value = cpPerItem
    document.getElementById('costPricePerItem2').value = cpPerItem
    document.getElementById('costPricePerItem3').value = cpPerItem

    console.log(cpPerItem)   
}

calcCpPerItem.addEventListener('click', (button) => {
    button.preventDefault();
    getCostPrice()
})


function getSellingPriceL(){
    let cppi1 = parseFloat(document.getElementById('costPricePerItem1').value);
    let spPerItem = (cppi1 * (5 / 100)) + cppi1;
    let profit = spPerItem - cppi1

    document.getElementById('sellingPricePerItem1').value = spPerItem.toFixed(2);
    document.getElementById('profit').value = profit

    console.log(spPerItem)
}

calcSpPerItemL.addEventListener('click', (button) => {
    button.preventDefault();
    getSellingPriceL()
})

function getSellingPriceM(){
    let cppi1 = parseFloat(document.getElementById('costPricePerItem2').value);
    let spPerItem = (cppi1 * (10 / 100)) + cppi1;
    let profit2 = spPerItem - cppi1

    document.getElementById('sellingPricePerItem2').value = spPerItem.toFixed(2);
    document.getElementById('profit2').value = profit2

    console.log(spPerItem)
}

calcSpPerItemM.addEventListener('click', (button) => {
    button.preventDefault();
    getSellingPriceM()
})

function getSellingPriceH(){
    let cppi1 = parseFloat(document.getElementById('costPricePerItem3').value);
    let spPerItem = (cppi1 * (20 / 100)) + cppi1;
    let profit3 = spPerItem - cppi1

    document.getElementById('sellingPricePerItem3').value = spPerItem.toFixed(2);
    document.getElementById('profit3').value = profit3

    console.log(spPerItem)
}

calcSpPerItemH.addEventListener('click', (button) => {
    button.preventDefault();
    getSellingPriceH()
})
