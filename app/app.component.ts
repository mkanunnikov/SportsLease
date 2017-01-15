import {Component} from '@angular/core';

export class Item {
    purchase: string;
    done: boolean;
    price: number;
    quantity: number;


    constructor(purchase: string, price: number, quantity: number) {

        this.purchase = purchase;
        this.price = price;
        this.quantity = quantity;
        this.done = false;
    }
}

@Component({
    selector: 'sportsLease-app',
    templateUrl: 'app/component.html'
})
export class AppComponent {
    items: Item[] =
        [
            {purchase: "Хлеб", quantity: 1, done: false, price: 15.9},
            {purchase: "Масло", quantity: 1, done: false, price: 60},
            {purchase: "Картофель", quantity: 1, done: true, price: 22.6},
            {purchase: "Сыр", quantity: 1, done: false, price: 310}
        ];

    addItem(text: string, price: number, quantity: number): void {

        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        if (quantity == null || quantity == undefined)
            return;
        this.items.push(new Item(text, price, quantity));
    }
}