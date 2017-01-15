"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Item = (function () {
    function Item(purchase, price, quantity) {
        this.purchase = purchase;
        this.price = price;
        this.quantity = quantity;
        this.done = false;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            { purchase: "Хлеб", quantity: 1, done: false, price: 15.9 },
            { purchase: "Масло", quantity: 1, done: false, price: 60 },
            { purchase: "Картофель", quantity: 1, done: true, price: 22.6 },
            { purchase: "Сыр", quantity: 1, done: false, price: 310 }
        ];
    }
    AppComponent.prototype.addItem = function (text, price, quantity) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        if (quantity == null || quantity == undefined)
            return;
        this.items.push(new Item(text, price, quantity));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sportsLease-app',
            templateUrl: 'app/component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map