System.register(['angular2/core', './summary', './stocks.service'], function(exports_1, context_1) {
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
    var core_1, summary_1, stocks_service_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_1_1) {
                summary_1 = summary_1_1;
            },
            function (stocks_service_1_1) {
                stocks_service_1 = stocks_service_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(service) {
                    var _this = this;
                    this.symbols = service.get();
                    service.load(this.symbols)
                        .subscribe(function (stocks) { return _this.stocks = stocks.json(); });
                }
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        viewProviders: [stocks_service_1.StocksService],
                        directives: [summary_1.Summary],
                        template: "\n    <div class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--12-col\" *ngIf=\"!stocks\" style=\"text-align: center;\">\n        Loading\n      </div>\n      <div class=\"mdl-cell mdl-cell--3-col\" *ngFor=\"#stock of stocks\">\n        <summary [symbol]=\"stock\"></summary>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [stocks_service_1.StocksService])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});
//# sourceMappingURL=dashboard.js.map