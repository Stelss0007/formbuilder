"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var formbuilder_service_1 = require("./services/formbuilder.service");
var FormbuilderComponent = (function () {
    function FormbuilderComponent(elementRef, viewContainer) {
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.droppedItems = [];
        this.sourceList = [
            new Widget('1'), new Widget('2'),
            new Widget('3'), new Widget('4'),
            new Widget('5'), new Widget('6')
        ];
        this.targetList = [];
        this.el = viewContainer.element.nativeElement;
        this.formService = new formbuilder_service_1.FormbuilderService();
        this.items = this.formService.getItems();
    }
    FormbuilderComponent.prototype.addItemAfterDrop = function ($event) {
        //console.log($event);
        var position = this.checkPosition($event);
        console.log(position);
        this.targetList.splice(position, 0, $event.dragData);
        //this.targetList.push($event.dragData);
    };
    FormbuilderComponent.prototype.checkPosition = function ($event) {
        var formbuilder = document.querySelector("formbuilder");
        var elements = document.querySelectorAll("formbuilder .form-group");
        var formbuilderOffsetTop = formbuilder.offsetTop + 100;
        for (var key = 0; key < elements.length; ++key) {
            console.log('test');
            var element = elements[key];
            var elementTop = element.offsetTop + formbuilderOffsetTop;
            console.log(elementTop + '<' + $event.mouseEvent.pageY + ' && ' + (elementTop + element.offsetHeight) + '>' + $event.mouseEvent.pageY);
            if (elementTop < $event.mouseEvent.pageY && (elementTop + element.offsetHeight) > $event.mouseEvent.pageY) {
                return key;
            }
        }
        return elements.length;
    };
    FormbuilderComponent.prototype.addItem = function (item) {
        this.targetList.push(item);
    };
    FormbuilderComponent.prototype.removeItem = function (item) {
        var index = this.targetList.indexOf(item);
        if (index !== -1) {
            this.targetList.splice(index, 1);
        }
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
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ViewContainerRef])
], FormbuilderComponent);
exports.FormbuilderComponent = FormbuilderComponent;
var Widget = (function () {
    function Widget(name) {
        this.name = name;
    }
    return Widget;
}());
//# sourceMappingURL=formbuilder.component.js.map