import { Component } from '@angular/core';
import { FormbuilderService, FormbuilderItem } from './services/formbuilder.service';



@Component({
    selector: 'formbuilder',
    moduleId: module.id,
    templateUrl: 'views/formbuilder.component.html',
    styleUrls: ['styles/style.css'],
    providers: [FormbuilderService],
})

export class FormbuilderComponent {
    items = [
        {name: "Apple", type: "fruit"},
        {name: "Carrot", type: "vegetable"},
        {name: "Orange", type: "fruit"}
    ];

    droppedItems: = [];

    onItemDrop(e: any) {
        // Get the dropped data here
        this.droppedItems.push(e.dragData);
    }
}