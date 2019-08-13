(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orders/orders.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\r\n    <div class=\"container\">\r\n        <header>\r\n            <h3>\r\n                <span class=\"glyphicon glyphicon-folder-open\"></span>&nbsp;&nbsp;注文情報\r\n            </h3>\r\n        </header>\r\n        <br />\r\n\r\n        <div class=\"container\">\r\n            <div *ngIf=\"customers\">\r\n\r\n                <div class=\"row\" *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\r\n                    <h4>{{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\r\n                    <br />\r\n                    <table *ngIf=\"customer.orders && customer.orders.length\" class=\"table table-striped table-hover orders-table\">\r\n                        <tr *ngFor=\"let order of customer.orders;trackBy:trackbyService.order\">\r\n                            <td>{{order.productName}}</td>\r\n                            <td class=\"text-right\">{{ order.itemCost | currency:'JPY':'symbol' }}</td>    \r\n                        </tr>\r\n                        <tr class=\"summary-border\">\r\n                            <td>&nbsp;</td>\r\n                            <td class=\"text-right\">{{ customer.orderTotal | currency:'JPY':'symbol' }}\r\n                        </tr>\r\n                    </table>\r\n                    <div *ngIf=\"!customer.orders || !customer.orders.length\">\r\n                        注文情報がありません。\r\n                    </div> \r\n                </div>\r\n\r\n                <cm-pagination [hidden]=\"!customers\"\r\n                    [totalItems]=\"totalRecords\" \r\n                    [pageSize]=\"pageSize\" \r\n                    (pageChanged)=\"pageChanged($event)\"></cm-pagination>\r\n\r\n            </div>\r\n            <div *ngIf=\"!customers\">\r\n                顧客情報がありません。\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");




var routes = [
    { path: '', component: _orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule.components = [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"]];
    OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/trackby.service */ "./src/app/core/services/trackby.service.ts");




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dataService, trackbyService) {
        this.dataService = dataService;
        this.trackbyService = trackbyService;
        this.totalRecords = 0;
        this.pageSize = 5;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getCustomersPage(1);
    };
    OrdersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    OrdersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.totalRecords = response.totalRecords;
            _this.customers = response.results;
        });
    };
    OrdersComponent.ctorParameters = function () { return [
        { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"] }
    ]; };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-customers-orders',
            template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/orders/orders.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");




var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"]],
            declarations: [_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"].components]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es5.js.map