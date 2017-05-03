import { Component, ElementRef, ViewContainerRef } from '@angular/core';
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
    el:any;
    formService: FormbuilderService;

    sourceList: Widget[] = [
        new Widget('1'), new Widget('2'),
        new Widget('3'), new Widget('4'),
        new Widget('5'), new Widget('6')
    ];

    targetList: Widget[] = [];
    addItemAfterDrop($event: any) {
        //console.log($event);
        let position = this.checkPosition($event);
        console.log(position);
        this.targetList.splice(position, 0, $event.dragData);
        //this.targetList.push($event.dragData);
    }

    checkPosition($event: any) {
        let formbuilder = document.querySelector("formbuilder");
        let elements = document.querySelectorAll("formbuilder .form-group");
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
        this.targetList.push(item);
    }

    removeItem(item: any): void {
        let index: number = this.targetList.indexOf(item);
        if (index !== -1) {
            this.targetList.splice(index, 1);
        }
    }


    constructor(private elementRef:ElementRef, private viewContainer:ViewContainerRef,) {
        this.el = viewContainer.element.nativeElement;
        this.formService = new FormbuilderService();
        this.items = this.formService.getItems();
    }

}

class Widget {
    constructor(public name: string) {}
}