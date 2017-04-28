import { Component } from '@angular/core';
import { ShopService, ShopItem } from '../../services/shop.service';



@Component({
    selector: 'shop-app',
    moduleId: module.id,
    templateUrl: 'views/shop.component.html',
    styleUrls: ['styles/shop.component.css'],
    providers: [ShopService],
})

export class ShopComponent {
    name:string="";
    price:string = '';
    shopService: ShopService;
    items: ShopItem[] = [];

    constructor(){
        this.shopService = new ShopService();
        this.items = this.shopService.getItems();
    }


    addItem(name: string, price: number): void {
        this.shopService.addItem(name, price);
        this.name = '';
        this.price = '';
    }

    removeItem(item:ShopItem): void {
        this.shopService.removeItem(item);
    }
}