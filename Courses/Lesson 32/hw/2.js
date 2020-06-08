'use strict'
class Product {
    constructor(name, price, giftProduct) {
        this.name = name;
        this.price = price;
        this.giftProduct = giftProduct;
    }
}
class Basket {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct() {

    }
    clearBasket() {
        this.products = [];
    }
    totalSum() {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        return sum;
    }
}
class Voucher {
    constructor(discount) {
        this.discount = discount;
    }
}
class GiftVoucher extends Voucher {
    constructor(discount) {
        super(discount);
    }
};
class OfferVoucher extends Voucher {
    constructor(discount, subsetOfProducts, trashHold) {
        super(discount);
        this.subsetOfProducts = subsetOfProducts;
        this.trashHold = trashHold;
    }
};
let hat = new Product('hatCat', 10.50, false);
let jumper = new Product('jumperGucci', 54.65, false);
let newBasket = new Basket();
newBasket.addProduct(hat);
newBasket.addProduct(jumper);

console.log(newBasket.totalSum());