import {Injectable} from '@angular/core';


@Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
export class FormbuilderService {

    private components:any = [
        {
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
            "input": true,
            "tableView": true,
            "inputType": "email",
            "inputMask": "",
            "label": "Email",
            "key": "firstName",
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
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Phone",
            "key": "firstName",
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