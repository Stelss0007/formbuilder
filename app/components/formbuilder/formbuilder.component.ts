import { Component, ViewContainerRef } from '@angular/core';
import { FormbuilderService } from './services/formbuilder.service';
import {ColorPickerService} from 'angular2-color-picker';

@Component({
    selector: 'formbuilder',
    moduleId: module.id,
    templateUrl: 'views/formbuilder.component.html',
    styleUrls: ['styles/style.css'],
    providers: [FormbuilderService],
})

export class FormbuilderComponent {
    items:any [];
    droppedItems:any = [];
    formService: FormbuilderService;
    form: Form;
    formStylesSettings: FormStylesSettings;


    addItemAfterDrop($event: any) {
        //console.log($event);
        let position = this.checkPosition($event);
        console.log(position);
        this.form.items.splice(position, 0, $event.dragData);
        //this.targetList.push($event.dragData);
    }

    checkPosition($event: any) {
        let formbuilder = document.querySelector("formbuilder");
        let elements = document.querySelectorAll("formbuilder .form-elements-list");
        let formbuilderOffsetTop = formbuilder.offsetTop + 100;

        for (let key = 0; key < elements.length; ++key) {
            console.log('test');
            let element = elements[key];
            let elementTop = element.offsetTop + formbuilderOffsetTop;
            console.log(elementTop + '<' + $event.mouseEvent.pageY + ' && ' + (elementTop  + element.offsetHeight) + '>' + $event.mouseEvent.pageY)
            if (elementTop < $event.mouseEvent.pageY && (elementTop  + element.offsetHeight) > $event.mouseEvent.pageY) {
                return key;
            }
        }

        return elements.length;
    }

    addItem(item: any) {
        this.form.items.push(item);
    }

    removeItem(item: any): void {
        let index: number = this.form.items.indexOf(item);
        if (index !== -1) {
            this.form.items.splice(index, 1);
        }
    }


    constructor(private cpService: ColorPickerService) {
        this.formService = new FormbuilderService();

        this.form = new Form();
        this.items = this.formService.getItems();
        this.formStylesSettings = new FormStylesSettings();

        console.log(this.form);
    }

}

class Form {
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

class FormStylesSettings {
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