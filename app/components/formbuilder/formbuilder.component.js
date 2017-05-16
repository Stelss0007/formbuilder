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
var angular2_color_picker_1 = require("angular2-color-picker");
var FormbuilderComponent = (function () {
    function FormbuilderComponent(cpService) {
        this.cpService = cpService;
        this.droppedItems = [];
        this.formService = new formbuilder_service_1.FormbuilderService();
        this.form = new Form();
        this.items = this.formService.getItems();
        this.formStylesSettings = new FormStylesSettings();
        console.log(this.form);
    }
    FormbuilderComponent.prototype.addItemAfterDrop = function ($event) {
        //console.log($event);
        var position = this.checkPosition($event);
        console.log(position);
        this.form.items.splice(position, 0, $event.dragData);
        //this.targetList.push($event.dragData);
    };
    FormbuilderComponent.prototype.checkPosition = function ($event) {
        var formbuilder = document.querySelector("formbuilder");
        var elements = document.querySelectorAll("formbuilder .form-elements-list");
        var formbuilderOffsetTop = formbuilder.offsetTop + 100;
        for (var key = 0; key < elements.length; ++key) {
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
        this.form.items.push(item);
    };
    FormbuilderComponent.prototype.removeItem = function (item) {
        var index = this.form.items.indexOf(item);
        if (index !== -1) {
            this.form.items.splice(index, 1);
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
    __metadata("design:paramtypes", [angular2_color_picker_1.ColorPickerService])
], FormbuilderComponent);
exports.FormbuilderComponent = FormbuilderComponent;
var Form = (function () {
    function Form() {
        this.default = {
            colors: ['#fff', '#000', '#2889e9', '#e920e9', '#333', 'rgb(236,64,64)'],
        };
        this.styles = {
            formWidth: '100%',
            labelAlign: 'top',
            fontFamily: 'Helvetica',
            fontSize: '12px',
        };
        this.name = 'Test Form Name';
        this.colors = {
            colorPage: 'none',
            colorForm: 'none',
            colorFont: '#333',
        };
        this.items = [];
        this.css = "";
    }
    return Form;
}());
var FormStylesSettings = (function () {
    function FormStylesSettings() {
        this.fontFamilies = [
            "Arial",
            "Arial Black",
            "Helvetica",
            "Lucida Grande",
            "Tahoma",
            "Times New Roman",
            "Verdana",
        ];
        this.fontSizes = [
            "8px",
            "10px",
            "12px",
            "14px",
            "16px",
            "18px",
            "20px",
        ];
        this.formAligns = [
            "top",
            "left",
            "right",
        ];
    }
    return FormStylesSettings;
}());
//# sourceMappingURL=formbuilder.component.js.map