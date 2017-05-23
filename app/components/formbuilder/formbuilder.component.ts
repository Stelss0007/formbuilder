import {Component, DoCheck} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormbuilderService, Form, FormStylesSettings } from './services/formbuilder.service';

@Component({
    selector: 'formbuilder',
    moduleId: module.id,
    templateUrl: 'views/formbuilder.component.html',
    styleUrls: ['styles/style.css'],
    providers: [FormbuilderService],
})

export class FormbuilderComponent implements DoCheck{
    items:any [];
    droppedItems:any = [];
    formService: FormbuilderService;
    form: Form;
    formTemp: any;
    interval: any;
    formStylesSettings: FormStylesSettings;
    formId: number;


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
        let parrentConteinerTop =  document.querySelector('.form-palete').scrollTop;
        let formbuilderOffsetTop = formbuilder.offsetTop;
        let elementsCount = elements.length;

        for (let key = 0; key < elementsCount; ++key) {
            let element = elements[key];
            let elementTop = element.offsetTop + formbuilderOffsetTop;
            // console.log(element.offsetTop +' => '+ ($event.mouseEvent.pageY + parrentConteinerTop));
            if (elementTop < ($event.mouseEvent.pageY + parrentConteinerTop) && (elementTop  + element.offsetHeight) > ($event.mouseEvent.pageY + parrentConteinerTop)) {
                return key;
            }
        }

        return elements.length;
    }

    checkFormUpdate() {
        if(this.formTemp != JSON.stringify(this.form)) {
            this.formTemp = JSON.stringify(this.form);
            this.formService.saveForm(this.formTemp);
        }
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

    ngDoCheck() {

    }

    ngOnInit(){
        this.interval = setInterval(() => {
            this.checkFormUpdate();
        }, 2000);
    }

    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    constructor(
        private route: ActivatedRoute
    ) {
        this.formService = new FormbuilderService();
        this.route.params.subscribe(params => {
            this.formId = params['id'];
        });
        this.form = this.formService.getForm();
        this.items = this.formService.getItems();
        this.formStylesSettings = new FormStylesSettings();


        console.log(this.form);
    }

}
