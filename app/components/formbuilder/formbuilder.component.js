"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var formbuilder_service_1 = require("./services/formbuilder.service");
var FormbuilderComponent = (function () {
    function FormbuilderComponent() {
        this.items = [
            { name: "Apple", type: "fruit" },
            { name: "Carrot", type: "vegetable" },
            { name: "Orange", type: "fruit" }
        ];
        this.droppedItems = [];
    }
    FormbuilderComponent.prototype.onItemDrop = function (e) {
        // Get the dropped data here
        this.droppedItems.push(e.dragData);
    };
    return FormbuilderComponent;
}());
FormbuilderComponent = __decorate([
    core_1.Component({
        selector: 'formbuilder',
        moduleId: module.id,
        templateUrl: 'views/formbuilder.component.html',
        styleUrls: ['styles/style.css'],
        providers: [formbuilder_service_1.FormbuilderService],
    })
], FormbuilderComponent);
exports.FormbuilderComponent = FormbuilderComponent;
//# sourceMappingURL=formbuilder.component.js.map