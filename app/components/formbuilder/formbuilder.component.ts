import { Component } from '@angular/core';
import { FormbuilderService } from './services/formbuilder.service';



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

    constructor(){
        this.formService = new FormbuilderService();
        this.items = this.formService.getItems();
    }

    addElementToForm(item:any):void {
        this.droppedItems.push(item);
    }

    onItemDrop(e: any):void {
        // Get the dropped data here
        this.addElementToForm(e.dragData);
    }
}