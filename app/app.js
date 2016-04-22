System.register(['angular2/core', 'angular2/router', './dashboard', './manage'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_1, manage_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (manage_1_1) {
                manage_1 = manage_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Dashboard', component: dashboard_1.Dashboard },
                        { path: '/manage', name: 'Manage', component: manage_1.Manage }
                    ]),
                    core_1.Component({
                        selector: 'app'
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row\">\n        <span class=\"mdl-layout-title\">Stock Tracker</span>\n        <div class=\"mdl-layout-spacer\"></div>\n        <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['Dashboard']\">Dashboard</a>\n          <a class=\"mdl-navigation__link\" [routerLink]=\"['Manage']\">Manage</a>\n        </nav>\n      </div>\n    </header>\n    <main class=\"mdl-layout__content\" style=\"padding: 20px;\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map