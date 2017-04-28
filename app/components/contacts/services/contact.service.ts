import {Injectable} from '@angular/core';

export class  ContactItem {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    constructor(name: string, price: number) {

    }
}

@Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
export class ContactService {

    private data: ContactItem[] = [
        {
            firstName: 'John',
            lastName: 'Smith',
            email: 'john@mail.com',
            phone: '38 (099) 880 9800'
        },
        {
            firstName: 'Antony',
            lastName: 'Jonson',
            email: 'antony@mail.com',
            phone: '38 (099) 112 9820'
        },
        {
            firstName: 'Leonardo',
            lastName: 'McGreg',
            email: 'leonardo@mail.com',
            phone: '38 (089) 678 9100'
        },
        {
            firstName: 'Jony',
            lastName: 'Wile',
            email: 'joni@mail.com',
            phone: '38 (099) 678 9675'
        },
    ];

    constructor(){
    }

    getItems(): ContactItem[] {
        return this.data;
    }

    addItem(name: string, price: number){
        this.data.push(new ContactItem(name, price));
    }

    removeItem(item:ContactItem): void {
        let index: number = this.data.indexOf(item);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }
}