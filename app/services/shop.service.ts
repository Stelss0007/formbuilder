import {Injectable} from '@angular/core';
import {LogService} from './log.service';

export class  ShopItem {
    name: string;
    done: boolean;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.done = false;
    }
}

@Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
export class ShopService {

    private logService: LogService;

    private data: ShopItem[] = [
        { name:"Apple iPhone 7", price: 56000, done: false},
        { name: "HP Elite x3", price: 56000, done: false},
        { name: "Alcatel Idol S4", price: 25000, done: false}
    ];

    constructor(){
        this.logService = new LogService();
    }

    getItems(): ShopItem[] {
        this.logService.write("операция получения данных");
        return this.data;
    }

    addItem(name: string, price: number){
        this.logService.write("операция добавления данных");
        this.data.push(new ShopItem(name, price));
    }

    removeItem(item:ShopItem): void {
        this.logService.write("операция удаления данных");
        let index: number = this.data.indexOf(item);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }
}