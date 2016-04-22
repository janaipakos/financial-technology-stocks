System.register(['angular2/core', 'angular2/common', './stocks.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, stocks_service_1;
    var Manage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (stocks_service_1_1) {
                stocks_service_1 = stocks_service_1_1;
            }],
        execute: function() {
            Manage = (function () {
                function Manage(service, builder) {
                    this.service = service;
                    this.symbols = service.get();
                    this.stockForm = builder.group({
                        stock: ['']
                    });
                }
                Manage.prototype.add = function () {
                    this.symbols.push(this.stockForm.value.stock.toUpperCase());
                };
                Manage.prototype.remove = function (symbol) {
                    this.symbols = this.service.remove(symbol);
                };
                Manage = __decorate([
                    core_1.Component({
                        selector: 'manage',
                        viewProviders: [common_1.FORM_PROVIDERS, stocks_service_1.StocksService],
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n  <div class=\"demo-grid-1 mdl-grid\">\n    <div class=\"mdl-cell mdl-cell--4-col\"></div>\n    <div class=\"mdl-cell mdl-cell--4-col\">\n      <form [ngFormModel]=\"stockForm\" style=\"margin-bottom: 5px;\" (submit)=\"add()\">\n        <input ngControl=\"stock\" class=\"mdl-textfield__input\" type=\"text\" placeholder=\"Add Stock\" />\n      </form>\n      <table class=\"mdl-data-table mdl-data-table--selectable mdl-shadow--2dp\" style=\"width: 100%;\">\n        <tbody>\n          <tr *ngFor=\"#symbol of symbols\">\n            <td class=\"mdl-data-table__cell--non-numeric\">{{symbol}}</td>\n            <td style=\"padding-top: 6px;\">\n              <button class=\"mdl-button\" (click)=\"remove(symbol)\">Remove</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"mdl-cell mdl-cell--4-col\"></div>\n  </div>\n"
                    }), 
                    __metadata('design:paramtypes', [stocks_service_1.StocksService, common_1.FormBuilder])
                ], Manage);
                return Manage;
            }());
            exports_1("Manage", Manage);
        }
    }
});
//# sourceMappingURL=manage.js.map