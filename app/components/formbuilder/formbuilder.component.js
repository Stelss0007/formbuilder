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
var router_1 = require("@angular/router");
var formbuilder_service_1 = require("./services/formbuilder.service");
var FormbuilderComponent = (function () {
    function FormbuilderComponent(route) {
        var _this = this;
        this.route = route;
        this.droppedItems = [];
        this.formService = new formbuilder_service_1.FormbuilderService();
        this.route.params.subscribe(function (params) {
            _this.formId = params['id'];
        });
        this.form = this.formService.getForm();
        this.items = this.formService.getItems();
        this.formStylesSettings = new formbuilder_service_1.FormStylesSettings();
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
    FormbuilderComponent.prototype.checkFormUpdate = function () {
        if (this.formTemp != JSON.stringify(this.form)) {
            this.formTemp = JSON.stringify(this.form);
            this.formService.saveForm(this.formTemp);
        }
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
    FormbuilderComponent.prototype.ngDoCheck = function () {
    };
    FormbuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.checkFormUpdate();
        }, 2000);
    };
    FormbuilderComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], FormbuilderComponent);
exports.FormbuilderComponent = FormbuilderComponent;
//# sourceMappingURL=formbuilder.component.js.map