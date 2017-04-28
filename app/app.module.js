"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
//Подключаем модуль роутера
var router_1 = require("@angular/router");
var ng2_drag_drop_1 = require("ng2-drag-drop");
//Подключаем наши компоненты
var app_component_1 = require("./app.component");
var child_component_1 = require("./child.component");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var shop_component_1 = require("./components/shop/shop.component");
var contacts_component_1 = require("./components/contacts/contacts.component");
var formbuilder_component_1 = require("./components/formbuilder/formbuilder.component");
// определение маршрутов
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'shop', component: shop_component_1.ShopComponent },
    { path: 'contacts', component: contacts_component_1.ContactComponent },
    { path: 'formbuilder', component: formbuilder_component_1.FormbuilderComponent },
];
// Настройка модуля
var AppModule = (function () {
    //Експортируем наш главный модуль
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // Импортируем модули
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes),
            ng2_drag_drop_1.Ng2DragDropModule
        ],
        // Обявляем наши (созданые нами, сторонние) компоненты
        declarations: [
            app_component_1.AppComponent,
            child_component_1.ChildComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            shop_component_1.ShopComponent,
            contacts_component_1.ContactComponent,
            formbuilder_component_1.FormbuilderComponent
        ],
        // Главный компонент, загружается поумолчанию
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map