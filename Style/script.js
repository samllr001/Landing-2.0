// inputs
let inputType = document.querySelector('#type-select')
let inputProduct = document.querySelector('#product-name')
let inputCount = document.querySelector('#product-count')

// button
let addProduct = document.querySelector('.add-product')
let clearProducts = document.querySelector('.clear-list')


let productList = document.querySelector('.products-list')

let productArray = []

addProduct.addEventListener('click', addProducts )
clearProducts.addEventListener('click', handleClearProducts)

function handleClearProducts() {
    productList.innerHTML = ''
    productArray = []
}

function addProducts() {
    let inputTypeValue = inputType.value
    let inputProductVale = inputProduct.value
    let inputCountValue = inputCount.value

    let productItem = `<div class='product-item'>${inputTypeValue} ${inputProductVale} ${inputCountValue}</div>`
    productArray.push(productItem)
    productList.innerHTML = ''
    productArray.forEach((elem)=> productList.innerHTML += elem)
    inputType.value = ''
    inputProduct.value = ''
    inputCount.value = ''

}



