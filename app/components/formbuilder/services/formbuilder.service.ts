import {Injectable} from '@angular/core';


@Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
export class FormbuilderService {

    private components:any = [
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

        {
            "icon": "fa-sticky-note-o",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "TextArea",
            "key": "phone",
            "placeholder": "Long Text",
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
            "type": "textarea"
        },

        {
            "icon": "fa-asterisk",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Password",
            "key": "phone",
            "placeholder": "Password",
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
            "type": "password"
        },

        {
            "icon": "fa-hashtag",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Number",
            "key": "phone",
            "placeholder": "Number",
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
            "type": "number"
        },

        {
            "icon": "fa-check-square",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "CheckBox",
            "key": "phone",
            "placeholder": "CheckBox",
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
            "type": "checkbox"
        },

        {
            "icon": "fa-dot-circle-o",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Radio",
            "key": "phone",
            "placeholder": "Radio",
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
            "type": "radio"
        },

        {
            "icon": "fa-list",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Select",
            "key": "phone",
            "placeholder": "Select",
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
            "type": "select",
            "options": [
                "Value 1",
                "Value 2",
                "Value 3",
                "Value 4",
            ],
        },

        {
            "icon": "fa-font",
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Text",
            "key": "phone",
            "placeholder": "Text",
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
            "type": "text",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aut cumque cupiditate dignissimos dolore dolores eligendi enim ..."
        },

        // ====================================== //
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

    getForm():any {
        let form = localStorage.getItem('form');
        form = form ? JSON.parse(form) : null;

        return form || new Form();
    }

    saveForm(form:any):any {
        localStorage.setItem('form', form);
    }
}


export class Form {
    default: any = {
        colors: ['#fff', '#000', '#2889e9', '#e920e9', '#333', 'rgb(236,64,64)'],
    };
    styles: any =  {
        formWidth: '100%',
        labelAlign: 'top',
        fontFamily: 'Helvetica',
        fontSize: '12px',
    };
    name: string = 'Test Form Name';
    colors: any =   {
        colorPage: 'none',
        colorForm: 'none',
        colorFont: '#333',
    };
    items: any = [];
    css: string = "";
}

export class FormStylesSettings {
    fontFamilies: any = [
        "Arial",
        "Arial Black",
        "Helvetica",
        "Lucida Grande",
        "Tahoma",
        "Times New Roman",
        "Verdana",
    ];
    fontSizes: any = [
        "8px",
        "10px",
        "12px",
        "14px",
        "16px",
        "18px",
        "20px",
    ];

    formAligns: any = [
        "top",
        "left",
        "right",
    ];
}