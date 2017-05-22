import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//Подключаем модуль роутера
import {Routes, RouterModule} from '@angular/router';

//Подключаем наши компоненты
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
import { HomeComponent }   from './components/home/home.component';
import { AboutComponent }   from './components/about/about.component';
import { ShopComponent }   from './components/shop/shop.component';
import { ContactComponent }   from './components/contacts/contacts.component';
import {TabsModule} from "ng2-tabs";
import {DndModule} from 'ng2-dnd';
import { FormbuilderComponent }   from './components/formbuilder/formbuilder.component';
import {ColorPickerModule} from 'angular2-color-picker';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'contacts', component: ContactComponent},
    { path: 'formbuilder/:id', component: FormbuilderComponent},
    { path: 'formbuilder', component: FormbuilderComponent},
];

// Настройка модуля
@NgModule({
    // Импортируем модули
    imports:      [
        BrowserModule,
        FormsModule,
        TabsModule,
        RouterModule.forRoot(appRoutes),
        DndModule.forRoot(),
        ColorPickerModule,
    ],

    // Обявляем наши (созданые нами, сторонние) компоненты
    declarations: [
        AppComponent,
        ChildComponent,
        HomeComponent,
        AboutComponent,
        ShopComponent,
        ContactComponent,
        FormbuilderComponent
    ],

    // Главный компонент, загружается поумолчанию
    bootstrap:    [ AppComponent ]
})

//Експортируем наш главный модуль
export class AppModule { }