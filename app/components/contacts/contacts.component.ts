import { Component } from '@angular/core';
import { ContactService, ContactItem } from './services/contact.service';



@Component({
    selector: 'contacts',
    moduleId: module.id,
    templateUrl: 'views/contacts.component.html',
    styleUrls: ['styles/contacts.component.css'],
    providers: [ContactService],
})

export class ContactComponent {
    name:string="";
    price:string = '';
    shopService: ContactService;
    items: ContactItem[] = [];

    constructor(){
        this.shopService = new ContactService();
        this.items = this.shopService.getItems();
    }


    addItem(name: string, price: number): void {
        this.shopService.addItem(name, price);
        this.name = '';
        this.price = '';
    }

    removeItem(item:ContactItem): void {
        this.shopService.removeItem(item);
    }
}