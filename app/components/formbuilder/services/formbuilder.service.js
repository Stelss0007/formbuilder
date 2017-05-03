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
var FormbuilderService = (function () {
    function FormbuilderService() {
        this.components = [
            {
                "icon": "fa-user",
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "First Name",
                "key": "firstName",
                "placeholder": "Enter your first name",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
            {
                "icon": "fa-envelope-o",
                "input": true,
                "tableView": true,
                "inputType": "email",
                "inputMask": "",
                "label": "Email",
                "key": "email",
                "placeholder": "Enter your email",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
            {
                "icon": "fa-phone",
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Phone",
                "key": "phone",
                "placeholder": "Enter your phone",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
            {
                "icon": "fa-map-marker",
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Address",
                "key": "phone",
                "placeholder": "Enter your address",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
            {
                "icon": "fa-globe",
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Url",
                "key": "phone",
                "placeholder": "Enter your url",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
            {
                "icon": "fa-calendar",
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Date Picker",
                "key": "phone",
                "placeholder": "Enter date",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
            {
                "icon": "fa-clock-o",
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Time Picker",
                "key": "phone",
                "placeholder": "Enter Time",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
            {
                "icon": "fa-terminal",
                "input": true,
                "tableView": true,
                "inputType": "text",
                "inputMask": "",
                "label": "Short Text",
                "key": "phone",
                "placeholder": "Short Text",
                "prefix": "",
                "suffix": "",
                "multiple": false,
                "defaultValue": "",
                "protected": false,
                "unique": false,
                "persistent": true,
                "validate": {
                    "required": false,
                    "minLength": "",
                    "maxLength": "",
                    "pattern": "",
                    "custom": "",
                    "customPrivate": false
                },
                "conditional": {
                    "show": false,
                    "when": null,
                    "eq": ""
                },
                "type": "textfield"
            },
        ];
    }
    FormbuilderService.prototype.getItems = function () {
        return this.components;
    };
    FormbuilderService.prototype.addItem = function (item) {
        this.components.push(item);
    };
    FormbuilderService.prototype.removeItem = function (item) {
        var index = this.components.indexOf(item);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    };
    return FormbuilderService;
}());
FormbuilderService = __decorate([
    core_1.Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
    ,
    __metadata("design:paramtypes", [])
], FormbuilderService);
exports.FormbuilderService = FormbuilderService;
//# sourceMappingURL=formbuilder.service.js.map