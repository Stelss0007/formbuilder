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
var shop_service_1 = require("../../services/shop.service");
var ShopComponent = (function () {
    function ShopComponent() {
        this.name = "";
        this.price = '';
        this.items = [];
        this.shopService = new shop_service_1.ShopService();
        this.items = this.shopService.getItems();
    }
    ShopComponent.prototype.addItem = function (name, price) {
        this.shopService.addItem(name, price);
        this.name = '';
        this.price = '';
    };
    ShopComponent.prototype.removeItem = function (item) {
        this.shopService.removeItem(item);
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    core_1.Component({
        selector: 'shop-app',
        moduleId: module.id,
        templateUrl: 'views/shop.component.html',
        styleUrls: ['styles/shop.component.css'],
        providers: [shop_service_1.ShopService],
    }),
    __metadata("design:paramtypes", [])
], ShopComponent);
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shop.component.js.map