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
var core_1 = require("@angular/core");
var log_service_1 = require("./log.service");
var ShopItem = (function () {
    function ShopItem(name, price) {
        this.name = name;
        this.price = price;
        this.done = false;
    }
    return ShopItem;
}());
exports.ShopItem = ShopItem;
var ShopService = (function () {
    function ShopService() {
        this.data = [
            { name: "Apple iPhone 7", price: 56000, done: false },
            { name: "HP Elite x3", price: 56000, done: false },
            { name: "Alcatel Idol S4", price: 25000, done: false }
        ];
        this.logService = new log_service_1.LogService();
    }
    ShopService.prototype.getItems = function () {
        this.logService.write("операция получения данных");
        return this.data;
    };
    ShopService.prototype.addItem = function (name, price) {
        this.logService.write("операция добавления данных");
        this.data.push(new ShopItem(name, price));
    };
    ShopService.prototype.removeItem = function (item) {
        this.logService.write("операция удаления данных");
        var index = this.data.indexOf(item);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    };
    return ShopService;
}());
ShopService = __decorate([
    core_1.Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
    ,
    __metadata("design:paramtypes", [])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map