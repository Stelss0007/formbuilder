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
var ContactItem = (function () {
    function ContactItem(name, price) {
    }
    return ContactItem;
}());
exports.ContactItem = ContactItem;
var ContactService = (function () {
    function ContactService() {
        this.data = [
            {
                firstName: 'John',
                lastName: 'Smith',
                email: 'john@mail.com',
                phone: '38 (099) 880 9800'
            },
            {
                firstName: 'Antony',
                lastName: 'Jonson',
                email: 'antony@mail.com',
                phone: '38 (099) 112 9820'
            },
            {
                firstName: 'Leonardo',
                lastName: 'McGreg',
                email: 'leonardo@mail.com',
                phone: '38 (089) 678 9100'
            },
            {
                firstName: 'Jony',
                lastName: 'Wile',
                email: 'joni@mail.com',
                phone: '38 (099) 678 9675'
            },
        ];
    }
    ContactService.prototype.getItems = function () {
        return this.data;
    };
    ContactService.prototype.addItem = function (name, price) {
        this.data.push(new ContactItem(name, price));
    };
    ContactService.prototype.removeItem = function (item) {
        var index = this.data.indexOf(item);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
    ,
    __metadata("design:paramtypes", [])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map