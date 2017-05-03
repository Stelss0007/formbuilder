import {Injectable} from '@angular/core';


@Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
export class FormbuilderService {

    private components:any = [
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

    constructor(){
    }

    getItems():any [] {
        return this.components;
    }

    addItem(item:any){
        this.components.push(item);
    }

    removeItem(item:any): void {
        let index: number = this.components.indexOf(item);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }
}