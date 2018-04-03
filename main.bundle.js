webpackJsonp([1,4],{

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 229;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(241);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(298),
        styles: [__webpack_require__(295)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lists_lists_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_detail_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lists_filter_pipe__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__lists_lists_component__["a" /* ListsComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_7__detail_detail_component__["a" /* DetailComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__lists_lists_component__["a" /* ListsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lists_filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = (function () {
    function DetailComponent(appService, route) {
        this.appService = appService;
        this.route = route;
        this.contact = { age: '',
            friends: '',
            hair_color: '',
            height: '',
            id: '',
            name: '',
            professions: '',
            thumbnail: '',
            weight: '' };
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    DetailComponent.prototype.getParams = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.contact = _this.getContact(_this.id);
            console.log(_this.contact);
        });
    };
    DetailComponent.prototype.getContacts = function () {
        var _this = this;
        this.appService.getData().subscribe(function (data) {
            _this.data = data.Brastlewark;
            _this.getParams();
        }, function (error) { return console.log(error); });
    };
    DetailComponent.prototype.getContact = function (index) {
        console.log(this.data);
        return this.data[index];
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-detail',
        template: __webpack_require__(299),
        styles: [__webpack_require__(296)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], DetailComponent);

var _a, _b;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        if (filterString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] == filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsComponent = (function () {
    function ListsComponent(appService) {
        this.appService = appService;
        this.data = [];
        this.filteredName = '';
    }
    ListsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ListsComponent.prototype.getContacts = function () {
        var _this = this;
        this.appService.getData().subscribe(function (data) {
            _this.data = data.Brastlewark;
        }, function (error) { return console.log(error); });
    };
    ;
    return ListsComponent;
}());
ListsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-lists',
        template: __webpack_require__(300),
        styles: [__webpack_require__(297)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], ListsComponent);

var _a;
//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, ".gencontainer{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.goback{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 300;\n  cursor: pointer;\n}\n\n.container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 0 5rem ;\n\n}\n\np {\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n\nli {\n  font-size: 1.5rem;\n  font-weight: 300;\n}\n\n.titlegnome{\n  margin: 2rem;\n  text-align: center;\n}\n\n.titlegnome h1 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n\n.containergnome{\n  margin: 1rem;\n}\n\n.infognome{\n  margin: 2rem;\n  text-align: center;\n}\n\n.containergnome__shape {\n  width: 32rem;\n  height: 32rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  shape-outside: circle(50% at 50% 50% !important);\n  -webkit-clip-path: circle(50% at 50% 50%) !important;\n  clip-path: circle(50% at 50% 50%) !important;\n  background-color: #f7f7f7;\n  position: relative;\n  overflow: hidden;\n  }\n\n.containergnome__img {\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all .5s;\n }\n\n .btn-inline {\n   border: none;\n   color: #eb2f64;\n   font-size: inherit;\n   border-bottom: 1px solid currentColor;\n   padding-bottom: 2px;\n   display: inline-block;\n   background-color: transparent;\n   cursor: pointer;\n   transition: all .2s; }\n   .btn-inline span {\n     margin-left: 3px; }\n   .btn-inline:hover {\n     color: #333; }\n     .btn-inline:hover span {\n       margin-left: 8px;\n       transition: all .2s; }\n   .btn-inline:focus {\n     outline: none;\n      }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "@media (min-width: 500px) {\n\n}\n\n\n.navgnome{\n  position: fixed;\n  width: 100%;\n  height: 15rem;\n  padding: 3rem;\n  top: -5px;\n  background-color: white;\n  z-index: 100;\n\n}\n\nh1{\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\ninput{\n  border-radius: 10px;\n  box-shadow: none;\n  border: 1px;\n  background-color: #f4f2f2;\n  border-style: none;\n  height: 2.4rem;\n  width: 20rem;\n}\n.navgnome__container{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-align: center;\n      align-items: center;\n\n}\n\n.listcontainer{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  z-index: 90;\n  margin-top: 15rem;\n}\n\n.containergnome {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin: 3rem 2rem;\n}\n\n.containergnome__item{\n   height: 10rem;\n   width: 20rem;\n   display: -ms-flexbox;\n   display: flex;\n   -ms-flex-pack: center;\n       justify-content: center;\n\n}\n\n.containergnome__shape {\n  width: 10rem;\n  height: 10rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  shape-outside: circle(50% at 50% 50% !important);\n  -webkit-clip-path: circle(50% at 50% 50%) !important;\n  clip-path: circle(50% at 50% 50%) !important;\n  background-color: #f7f7f7;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;}\n\n.containergnome__img {\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all .5s;\n }\n\n .containergnome__caption {\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, 0%);\n   color: #fff;\n   text-transform: uppercase;\n   font-size: 1rem;\n   text-align: center;\n   opacity: 0;\n   transition: all .4s;\n   -webkit-backface-visibility: hidden;\n           backface-visibility: hidden;\n  }\n\n .containergnome:hover .containergnome__caption {\n   opacity: 1;\n }\n\n .containergnome:hover .containergnome__img {\n   transform:  scale(1.5);\n   -webkit-filter: blur(1px) brightness(80%);\n           filter: blur(1px) brightness(80%);\n   font-weight: 400;}\n\n .containergnome:hover .containergnome__font{\n\n   font-weight: 400;}\n\n .containergnome__font{\n   font-size: 16px;\n   font-weight: 300;\n   cursor: pointer;\n }\n\n .selectors {\n   display: -ms-flexbox;\n   display: flex;\n }\n\n .select2 {\n   position: relative;\n   overflow: hidden;\n   display: block;\n   margin: auto;\n   width: 330px;\n   height: 100%;\n   border-bottom: 0px;\n   border-radius: 3px;\n   font-size: 12px;\n   box-shadow: 0px 1em 2em -1.5em rgba(0, 0, 0, 0.5);\n }\n .select2 i.toggle {\n   position: absolute;\n   z-index: 4;\n   right: 1.5em;\n   top: 1.6em;\n   color: #ccc;\n }\n .select2 .title,\n .select2 .placeholder {\n   position: relative;\n   display: block;\n   width: 100%;\n   height: 100%;\n   padding: 1.5em 2em;\n   background: white;\n   border-top: 1px solid rgba(0, 0, 0, 0.05);\n   cursor: pointer;\n }\n .select2 > label > input {\n   position: absolute;\n   left: 0px;\n   top: 0px;\n   z-index: 2;\n   width: 100%;\n   height: 100%;\n   display: block;\n   opacity: 0;\n   cursor: pointer;\n }\n .select2 > label > input:checked {\n   z-index: 2;\n }\n .select2 > label > input:checked ~ i.toggle.icon-plus {\n   display: none;\n }\n .select2 > label > input:checked ~ i.toggle.icon-minus {\n   display: block;\n }\n .select2 > label > input:not(:checked) ~ i.toggle.icon-minus {\n   display: none;\n }\n .select2 > label > input:not(:checked) ~ i.toggle.icon-plus {\n   display: block;\n }\n .select2 > label > input:not(:checked) ~ label.option input:not(:checked) ~ .title {\n   display: none !important;\n }\n .select2 > label > input:disabled {\n   cursor: no-drop;\n }\n .select2 label > span.placeholder {\n   position: relative;\n   z-index: 0;\n   display: inline-block;\n   width: 100%;\n   color: #999;\n   border-top: 0px;\n }\n .select2 label.option {\n   display: block;\n   overflow: hidden;\n   z-index: 1;\n   width: 100%;\n   transition: all 1s ease-out;\n }\n .select2 label.option span.title {\n   position: relative;\n   z-index: 2;\n   transition: background .3s ease-out;\n }\n .select2 label.option span.title i.icon {\n   padding-right: 8px;\n   color: #92a8d1;\n }\n .select2 label.option span.title:hover {\n   color: #fff;\n   background: rgba(146, 168, 209, 0.5);\n   box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);\n }\n .select2 label.option input {\n   display: none;\n }\n .select2 label.option input:checked ~ span.title {\n   position: absolute;\n   display: block;\n   z-index: 1;\n   top: 0px;\n   font-size: 12px;\n   background: #fff;\n   border-top: 0px;\n   box-shadow: none;\n   color: inherit;\n   width: 100%;\n }\n .select2 label.option input:disabled ~ span.title {\n   background: #f9f9f9 !important;\n   color: #aaa;\n }\n .select2 label.option input:disabled ~ span.title:hover {\n   color: #aaa;\n   background: none;\n   cursor: no-drop;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<div class=\"gencontainer\">\n\n  <div class=\"container\">\n    <div class =\"titlegnome\">\n      <div class= \"titlegnome__title\">\n        <h1> {{ contact.name }} </h1>\n      </div>\n      <p>{{ contact.professions}}</p>\n      <p>{{ contact.age }} years old</p>\n\n    </div>\n    <div class =\"containergnome\">\n      <figure class=\"containergnome__shape\">\n        <img src=\"{{ contact.thumbnail }}\" class=\"containergnome__img\">\n      </figure>\n    </div>\n    <div class =\"infognome\">\n      <ul>\n        <li>{{ contact.hair_color }} hair color </li>\n        <li>{{ contact.weight | number : '1.2-2' }} kg. - {{ contact.height | number : '1.2-2'}} cm.</li>\n        <li>Friends: {{ contact.friends }}</li>\n      </ul>\n    </div>\n  </div>\n  <div class =\"goback\"  >\n    <button class=\"btn-inline\"><span routerLink=\"/\"> <<< Go Back!</span>  </button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navgnome\">\n  <div class=\"navgnome__container\">\n    <h1>\n      Brastlewark!\n    </h1>\n\n    <div class=\"search\">\n      <input type=\"text\" placeholder=\"  Search Gnome by age\" [(ngModel)]= \"filteredName\">\n    </div>\n  </div>\n</nav>\n\n\n<div class = \"listcontainer\" >\n  <div\n    *ngFor=\"let contact of data | filter:filteredName:'age'; let i = index\"\n    class=\"containergnome\">\n    <div [routerLink]=\"[i]\" class=\"containergnome__item\">\n        <figure class=\"containergnome__shape\">\n          <img src={{contact.thumbnail}} class=\"containergnome__img\">\n          <figcaption class=\"containergnome__caption\"> + details</figcaption>\n        </figure>\n    </div>\n    <div>\n      <p [routerLink]=\"[i]\" class =\"containergnome__font\" >{{contact.name}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.apiUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
    }
    AppService.prototype.getData = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ })

},[583]);
//# sourceMappingURL=main.bundle.js.map