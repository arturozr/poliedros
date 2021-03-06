(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ui.component */ "./src/app/ui/ui.component.ts");
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "./src/app/landingpage/landingpage.component.ts");






const routes = [
    {
        path: '',
        component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_3__["LandingpageComponent"]
    },
    {
        path: 'ui',
        component: _ui_ui_component__WEBPACK_IMPORTED_MODULE_2__["UiComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'poliedros';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui.component */ "./src/app/ui/ui.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "./src/app/landingpage/landingpage.component.ts");








class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__["UiComponent"],
        _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__["LandingpageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _ui_ui_component__WEBPACK_IMPORTED_MODULE_4__["UiComponent"],
                    _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__["LandingpageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/landingpage/landingpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/ui"]; };
class LandingpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingpageComponent.??fac = function LandingpageComponent_Factory(t) { return new (t || LandingpageComponent)(); };
LandingpageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LandingpageComponent, selectors: [["app-landingpage"]], decls: 90, vars: 2, consts: [[1, "container", "p-5", "center"], [1, "row"], [1, "col-4"], [1, "p-4"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-text"], [1, "d-grid", "gap-2", "col-6", "mx-auto"], ["type", "button", 1, "btn", "btn-dark", 3, "routerLink"], ["role", "button", "href", "https://github.com/arturozr/poliedros", "target", "_blank nodepend", 1, "btn", "btn", "btn-outline-dark", "btn-xl", "js-scroll-trigger"], [1, "col-8"], ["data-bs-toggle", "collapse", "href", "#multiCollapseExample1", "role", "button", "aria-expanded", "false", "aria-controls", "multiCollapseExample1", 1, "btn", "btn-dark"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#multiCollapseExample2", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", ".multi-collapse", "aria-expanded", "false", "aria-controls", "multiCollapseExample1 multiCollapseExample2", 1, "btn", "btn-danger"], [1, "col"], ["id", "multiCollapseExample1", 1, "collapse", "multi-collapse"], [1, "card", "card-body"], ["id", "multiCollapseExample2", 1, "collapse", "multi-collapse"], [1, "text-center"]], template: function LandingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Informaci\u00F3n del estudiante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Arturo Zili Rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Materia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Pruebas de software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Tipo de examen:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Extraordinario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Semestre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Quinto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Probar formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Informaci\u00F3n acerca de Euler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Formula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Mostrar ambos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Leonhard Euler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "(1707/04/15 - 1783/09/18)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Uno de los matem\u00E1ticos m\u00E1s destacados de la historia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Obras:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Introductio in Analysis Infinitorum,etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Campos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Matem\u00E1ticas, f\u00EDsica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Reconocidopor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " N\u00FAmero e; F\u00F3rmula de Euler, Identidad de Euler; Caracter\u00EDstica de Euler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Padres:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Marguerite Brucker y Paul Euler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "C\u00F3nyuges:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Katharina Gsell (1734-1773), Salome Abigail Gsell (1776-1783) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Hijos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Johann, Christoph, Charlotte, Karl, Carl, Helene ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Leonhard Paul Euler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Formula:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "V - E + F = 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmdwYWdlL2xhbmRpbmdwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landingpage',
                templateUrl: './landingpage.component.html',
                styleUrls: ['./landingpage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pruebas/pruebas.ts":
/*!************************************!*\
  !*** ./src/app/pruebas/pruebas.ts ***!
  \************************************/
/*! exports provided: pruebas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pruebas", function() { return pruebas; });
class pruebas {
    constructor() {
        this.espoliedro = undefined;
        this.v = undefined;
        this.e = undefined;
        this.f = undefined;
    }
    verificar(v, e, f) {
        if (v == (parseInt(v)))
            v = parseInt(v);
        if (e == (parseInt(e)))
            e = parseInt(e);
        if (f == (parseInt(f)))
            f = parseInt(f);
        if (v.toString().trim().length == 0 || e.toString().trim().length === 0 || f.toString().trim().length === 0)
            return this.espoliedro = "Debe llenar todos los campos";
        if (typeof (v) !== "number" || typeof (e) !== "number" || typeof (f) !== "number")
            return this.espoliedro = "Debe introducir solo numeros";
        if (Math.sign(v) === -1 || Math.sign(e) === -1 || Math.sign(f) === -1)
            return this.espoliedro = "Debe ingresar solo n??meros positivos";
        if (Number.isInteger(v) === false || Number.isInteger(e) === false || Number.isInteger(f) === false)
            return this.espoliedro = "Solo se permiten n??meros enteros";
        let resultado = v - e + f;
        if (resultado === 2) {
            return this.espoliedro = "Si es un poliedro";
        }
        else {
            return this.espoliedro = "No es un poliedro";
        }
    }
}


/***/ }),

/***/ "./src/app/ui/ui.component.ts":
/*!************************************!*\
  !*** ./src/app/ui/ui.component.ts ***!
  \************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pruebas_pruebas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pruebas/pruebas */ "./src/app/pruebas/pruebas.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = function () { return ["/"]; };
class UiComponent {
    constructor() { }
    ngOnInit() { }
    validar() {
        const $alerta = document.getElementById('alerta');
        let vrf = new _pruebas_pruebas__WEBPACK_IMPORTED_MODULE_1__["pruebas"](), color_alert = $alerta.classList[1].toString();
        switch (vrf.verificar(this.valor1, this.valor2, this.valor3).toString()) {
            case 'Si es un poliedro':
                $alerta.classList.replace(color_alert, 'alert-success');
                break;
            case 'No es un poliedro':
                $alerta.classList.replace(color_alert, 'alert-danger');
                break;
            default:
                $alerta.classList.replace(color_alert, 'alert-warning');
                break;
        }
        this.respuesta = vrf.verificar(this.valor1, this.valor2, this.valor3);
    }
}
UiComponent.??fac = function UiComponent_Factory(t) { return new (t || UiComponent)(); };
UiComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UiComponent, selectors: [["app-ui"]], decls: 42, vars: 6, consts: [["type", "button", 1, "btn", "btn-danger", 3, "routerLink"], [1, "container", "center", "p-5"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-6"], [1, "input-group", "mb-3"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", "id", "valor1", "name", "valor1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", "id", "valor2", "name", "valor2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", "id", "valor3", "name", "valor3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-grid", "gap-2", "col-6", "mx-auto"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "col-6", "p-4"], [1, "text-center"], ["id", "alerta", "role", "alert", 1, "alert", "alert-success"]], template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " F\u00F3rmula de euler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_12_listener($event) { return ctx.valor1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_16_listener($event) { return ctx.valor2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UiComponent_Template_input_ngModelChange_20_listener($event) { return ctx.valor3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UiComponent_Template_button_click_22_listener() { return ctx.validar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Verificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Teorema de Euler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " V = N\u00FAmeros de Vertices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " E = N\u00FAmeros de Aristas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " F = N\u00FAmeros de Caras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Formula:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "V - E + F = 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.valor1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.valor2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.valor3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.respuesta, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui',
                templateUrl: './ui.component.html',
                styleUrls: ['./ui.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/leonardo/Desktop/poliedros/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map