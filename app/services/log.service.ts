import {Injectable} from '@angular/core';

@Injectable() // Для того чтобы можно было использовать другие сервисы внутри текущего сервиса, то нужно использовать этот декоратор
export class LogService {
    write(logMessage:string):void {
        console.log(logMessage);
    }
}