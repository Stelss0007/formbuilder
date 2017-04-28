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
var contact_service_1 = require("./services/contact.service");
var ContactComponent = (function () {
    function ContactComponent() {
        this.name = "";
        this.price = '';
        this.items = [];
        this.shopService = new contact_service_1.ContactService();
        this.items = this.shopService.getItems();
    }
    ContactComponent.prototype.addItem = function (name, price) {
        this.shopService.addItem(name, price);
        this.name = '';
        this.price = '';
    };
    ContactComponent.prototype.removeItem = function (item) {
        this.shopService.removeItem(item);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contacts',
        moduleId: module.id,
        templateUrl: 'views/contacts.component.html',
        styleUrls: ['styles/contacts.component.css'],
        providers: [contact_service_1.ContactService],
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contacts.component.js.map