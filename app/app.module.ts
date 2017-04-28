import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//Подключаем модуль роутера
import {Routes, RouterModule} from '@angular/router';
import {Ng2DragDropModule} from "ng2-drag-drop";

//Подключаем наши компоненты
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
import { HomeComponent }   from './components/home/home.component';
import { AboutComponent }   from './components/about/about.component';
import { ShopComponent }   from './components/shop/shop.component';
import { ContactComponent }   from './components/contacts/contacts.component';
import { FormbuilderComponent }   from './components/formbuilder/formbuilder.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'contacts', component: ContactComponent},
    { path: 'formbuilder', component: FormbuilderComponent},
];

// Настройка модуля
@NgModule({
    // Импортируем модули
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        Ng2DragDropModule
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