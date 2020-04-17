function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-task/add-task.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-task/add-task.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddTaskAddTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto mt-3\">\n    <form autocomplete=\"off\" #f=\"ngForm\" (ngSubmit)=\"onAddtask()\">\n      <h4 class=\"text-center\">New Task</h4>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input\n          type=\"text\"\n          name=\"name\"\n          id=\"name\"\n          [(ngModel)]=\"name\"\n          class=\"form-control\"\n          ngModel\n          #Name=\"ngModel\"\n          required\n        />\n        <small\n          *ngIf=\"Name.touched && Name.errors?.required\"\n          class=\"text-danger\"\n        >\n          Name is Required\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"mr-2\" for=\"Completed\">Completed</label>\n        <input\n          type=\"checkbox\"\n          name=\"done\"\n          id=\"Completed\"\n          [(ngModel)]=\"done\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"text-right\">\n        <button\n          type=\"submit\"\n          [disabled]=\"f.invalid\"\n          class=\"btn btn-primary mr-2\"\n        >\n          <i class=\"fas fa-save\"></i> Submit\n        </button>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/main\">\n          <i class=\"far fa-window-close\"></i> Cancel\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-task/edit-task.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-task/edit-task.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEditTaskEditTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto mt-3\">\n    <form autocomplete=\"off\" #f=\"ngForm\" *ngFor=\"let item of Task\">\n      <h4 class=\"text-center\">Update Task</h4>\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input\n          type=\"text\"\n          id=\"name\"\n          name=\"name\"\n          #name\n          [(ngModel)]=\"item.name\"\n          class=\"form-control\"\n          placeholder=\"\"\n          required\n          email\n        />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"mr-2\" for=\"Completed\">Completed</label>\n        <input\n          type=\"checkbox\"\n          name=\"done\"\n          [(ngModel)]=\"item.done\"\n          id=\"Completed\"\n          placeholder=\"\"\n          #done\n        />\n      </div>\n      <div class=\"text-right\">\n        <button\n          type=\"submit\"\n          (click)=\"onUpdatetask(f.value, item.owner)\"\n          class=\"btn btn-warning mr-2\"\n        >\n          <i class=\"fas fa-save\"></i> Update\n        </button>\n        <button type=\"button\" routerLink=\"/main\" class=\"btn btn-danger\">\n          <i class=\"far fa-window-close\"></i> Cancel\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <svg\n    viewBox=\"0 0 541.17206 328.45184\"\n    height=\"328.45184\"\n    width=\"541.17206\"\n    id=\"svg2\"\n    version=\"1.1\"\n  >\n    <metadata id=\"metadata8\"></metadata>\n    <defs id=\"defs6\">\n      <pattern\n        patternUnits=\"userSpaceOnUse\"\n        width=\"1.5\"\n        height=\"1\"\n        patternTransform=\"translate(0,0) scale(10,10)\"\n        id=\"Strips2_1\"\n      >\n        <rect\n          style=\"fill: black; stroke: none;\"\n          x=\"0\"\n          y=\"-0.5\"\n          width=\"1\"\n          height=\"2\"\n          id=\"rect5419\"\n        />\n      </pattern>\n      <linearGradient osb:paint=\"solid\" id=\"linearGradient6096\">\n        <stop\n          id=\"stop6094\"\n          offset=\"0\"\n          style=\"stop-color: #000000; stop-opacity: 1;\"\n        />\n      </linearGradient>\n    </defs>\n    <g transform=\"translate(170.14515,0.038164)\" id=\"layer1\">\n      <g id=\"g6219\">\n        <path\n          transform=\"matrix(1.0150687,0,0,11.193923,-1.3895945,-2685.7441)\"\n          style=\"\n            display: inline;\n            fill: #000000;\n            fill-opacity: 1;\n            stroke: #000000;\n            stroke-width: 0.1px;\n            stroke-linecap: butt;\n            stroke-linejoin: miter;\n            stroke-opacity: 1;\n          \"\n          d=\"m 145.0586,263.51309 c -90.20375,-0.0994 -119.20375,-0.0994 -119.20375,-0.0994\"\n          id=\"path6180\"\n        />\n        <g id=\"g6174\">\n          <ellipse\n            ry=\"9.161705\"\n            rx=\"9.3055239\"\n            cy=\"91.32917\"\n            cx=\"84.963676\"\n            id=\"path4488\"\n            style=\"\n              display: inline;\n              opacity: 1;\n              fill: none;\n              fill-opacity: 0.4627451;\n              fill-rule: nonzero;\n              stroke: #000000;\n              stroke-width: 1.08691013;\n              stroke-miterlimit: 4;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4490\"\n            d=\"m 84.984382,-0.03816399 c 0.911733,-5.0186e-4 1.661858,18.47051499 1.674386,41.22988399 0.0069,12.610431 -0.214009,23.904598 -0.56753,31.469836 -0.282878,6.088471 -0.652275,9.761785 -1.058838,9.762119 -0.406564,3.33e-4 -0.78198,-3.672386 -1.074838,-9.760657 -0.36185,-7.564779 -0.595233,-18.858715 -0.602175,-31.469228 -0.01253,-22.759565 0.717262,-41.23145213 1.628995,-41.23195399 z\"\n            style=\"\n              display: inline;\n              fill: #000000;\n              stroke: none;\n              stroke-width: 0.23743393px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4496\"\n            d=\"m 85.115421,100.5729 c -0.0036,3.37532 -0.0071,6.75165 -0.0107,10.12897 m 0.512159,0.18258 c -1.914603,-0.23621 -3.505591,1.17801 -4.861444,2.68113 -1.355853,1.50312 -2.473764,3.09173 -3.387866,4.59538 -0.914103,1.50365 -1.620209,2.91586 -2.416229,4.41952 -0.79602,1.50365 -1.67928,3.09352 -0.808656,3.24054 0.870624,0.14702 3.490408,-1.14815 5.700074,-1.91396 2.209666,-0.76581 4.001473,-1.00079 5.922125,-0.86765 1.920652,0.13314 3.947462,0.6325 6.245357,1.6195 2.297896,0.98701 4.861161,2.46015 4.9051,0.91309 0.04394,-1.54706 -2.430929,-6.11379 -4.787811,-9.33976 -2.356882,-3.22597 -4.596047,-5.11158 -6.51065,-5.34779 z\"\n            style=\"\n              display: inline;\n              fill: #000000;\n              fill-opacity: 1;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <rect\n            ry=\"5\"\n            y=\"314.84082\"\n            x=\"35.355339\"\n            height=\"9.8994951\"\n            width=\"100.76272\"\n            id=\"rect4553\"\n            style=\"\n              display: inline;\n              opacity: 1;\n              fill: #000000;\n              fill-opacity: 1;\n              fill-rule: nonzero;\n              stroke: #000000;\n              stroke-width: 1.00157475;\n              stroke-miterlimit: 4;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4513\"\n            d=\"m 74.6875,125.03748 c -8.394789,7.68654 -16.790624,15.37405 -23.988969,22.38484 -7.198345,7.0108 -13.197555,13.3433 -18.781379,20.01048 -5.583823,6.66719 -10.749655,13.66605 -13.916608,18.7496 -3.166952,5.08355 -4.333432,8.24971 -4.750315,11.08369 -0.416883,2.83399 -0.08368,5.33304 1.809372,16.25302 1.893048,10.91998 5.343489,30.24673 9.760132,48.66349 4.416642,18.41676 9.798356,35.91675 15.180267,53.41738\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4517\"\n            d=\"m 76.9375,124.66248 c -4.548745,6.50695 -9.29087,13.29053 -13.530749,18.69724 -4.239879,5.4067 -8.072459,9.57255 -11.572943,13.98975 -3.500484,4.41719 -6.66636,9.08269 -9.333429,13.99996 -2.66707,4.91727 -4.833205,10.08267 -6.333458,15.08327 -1.500252,5.0006 -2.33339,9.8328 -2.500149,14.33343 -0.166759,4.50062 0.333124,8.66631 1.249922,15.50064 0.916798,6.83434 2.249854,16.33237 3.499902,24.91604 1.250047,8.58368 2.416611,16.24967 4.583438,28.58394 2.166827,12.33427 5.333153,29.33244 8.499966,46.33323\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4521\"\n            d=\"m 96.8125,126.22498 c 6.89586,6.45836 13.7917,12.9167 19.98957,19.14581 6.19786,6.22912 11.69789,12.22914 17.11456,18.39581 5.41666,6.16667 10.74996,12.49995 14.74993,17.91655 3.99997,5.41659 6.66659,9.91653 7.16671,17.83316 0.50012,7.91664 -1.16644,19.24921 -3.3502,31.24619 -2.18376,11.99698 -4.81616,24.33632 -8.42063,38.99809 -3.60448,14.66177 -8.06212,31.17154 -12.56244,47.83939\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4525\"\n            d=\"m 91.9375,124.09998 c 5.854072,7.16655 11.70824,14.33322 16.21863,20.16651 4.51039,5.83328 7.67706,10.33329 11.92718,16.33346 4.25012,6.00017 9.58322,13.49984 12.66653,18.58299 3.08332,5.08314 3.91663,7.74974 4.68205,10.91384 0.76542,3.1641 1.40129,6.50242 1.69781,8.02406 0.29651,1.52165 0.22299,1.06579 0.14933,0.60912\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4533\"\n            d=\"m 89,123.66248 c 6.159885,11.51771 12.31996,23.03577 16.83724,31.78904 4.51728,8.75327 7.29964,14.54985 9.24424,18.32123 1.9446,3.77138 3.00519,5.42118 4.1838,9.19262 1.17861,3.77144 2.47477,9.6631 1.94443,23.80647 -0.53034,14.14338 -2.88706,36.53226 -5.4209,56.44951 -2.53383,19.91725 -5.24428,37.35836 -7.95503,54.80146\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4537\"\n            d=\"m 87.0625,123.03748 c 2.916637,10.42937 5.833458,20.8594 7.291964,26.66356 1.458505,5.80416 1.458505,6.98257 2.402021,11.11052 0.943517,4.12795 2.827535,11.19302 4.065005,16.02501 1.23748,4.832 1.82668,7.42447 2.12139,10.84263 0.29471,3.41815 0.29471,7.65958 -0.11785,20.44893 -0.41255,12.78934 -1.23731,34.11536 -2.18014,53.62015 -0.94282,19.50478 -2.003429,37.18159 -3.064154,54.86032\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4541\"\n            d=\"m 85.206367,122.98266 c 0.117841,11.74369 0.235693,23.48835 0.235693,36.55072 -10e-7,13.06238 -0.117833,27.43796 -0.05891,45.3521 0.05892,17.91413 0.29461,39.36153 0.707091,58.80738 0.412482,19.44585 1.001711,36.88701 1.590999,54.32995\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4545\"\n            d=\"m 83.12978,122.92016 c -2.601311,10.56131 -5.214983,21.17282 -7.40283,31.41665 -2.187847,10.24384 -3.955407,20.14218 -5.074975,26.03483 -1.119568,5.89264 -1.59092,7.77805 -1.885708,10.07706 -0.294789,2.29901 -0.412567,5.0079 5.1e-5,17.56339 0.412617,12.55548 1.355064,34.93859 2.474996,54.74239 1.119932,19.80379 2.415574,37.00049 3.712005,54.20767\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4549\"\n            d=\"m 79.25478,124.23266 c -5.440192,11.56251 -10.880951,23.12622 -15.899657,33.56368 -5.018706,10.43747 -9.614414,19.74672 -11.912808,26.70033 -2.298394,6.95362 -2.298394,11.54922 -1.355419,24.57415 0.942974,13.02493 2.828182,34.46917 5.066095,53.84746 2.237913,19.37829 4.833109,36.71892 7.425959,54.04387\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4556\"\n            d=\"m 42.426407,155.38825 c 3.4184,0.82513 6.836082,1.65009 10.606997,2.18034 3.770916,0.53024 7.89657,0.76599 11.608535,0.88382 3.711965,0.11782 7.012548,0.11782 10.429711,0.0589 3.417163,-0.0589 6.953769,-0.17681 10.606588,-0.23572 3.652818,-0.0589 7.425155,-0.0589 11.137027,-0.23569 3.711875,-0.17679 7.366225,-0.53043 10.724475,-0.70716 3.35826,-0.17672 6.4233,-0.17672 9.48702,-0.58922 3.06372,-0.41251 6.12885,-1.23774 9.1918,-2.06238\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4560\"\n            d=\"m 13.113199,198.16821 c 47.547038,0.40361 95.093071,0.80721 142.638101,1.2108\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1.00614154px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4529\"\n            d=\"m 132.6875,263.34998 c -4.2289,18.4155 -8.45806,36.83216 -12.6875,55.25\"\n            style=\"\n              display: inline;\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <ellipse\n            ry=\"4.6715717\"\n            rx=\"2.5\"\n            cy=\"238.08525\"\n            cx=\"119.12262\"\n            id=\"path4614\"\n            style=\"\n              display: inline;\n              opacity: 1;\n              fill: #000000;\n              fill-opacity: 1;\n              fill-rule: nonzero;\n              stroke: #000000;\n              stroke-width: 1.00157475;\n              stroke-miterlimit: 4;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \"\n          />\n          <ellipse\n            ry=\"4.3158579\"\n            rx=\"4.9001703\"\n            cy=\"4.3948641\"\n            cx=\"85.016434\"\n            id=\"path4616\"\n            style=\"\n              display: inline;\n              opacity: 1;\n              fill: #000000;\n              fill-opacity: 1;\n              fill-rule: nonzero;\n              stroke: #000000;\n              stroke-width: 0.82170224;\n              stroke-miterlimit: 4;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \"\n          />\n          <ellipse\n            transform=\"translate(-170.14515,-0.038164)\"\n            ry=\"3.880542\"\n            rx=\"3.5777507\"\n            cy=\"164.5713\"\n            cx=\"321.42224\"\n            id=\"path4565\"\n            style=\"\n              opacity: 1;\n              fill: #000000;\n              fill-opacity: 1;\n              fill-rule: nonzero;\n              stroke: #000000;\n              stroke-width: 1.00157475;\n              stroke-miterlimit: 4;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4567\"\n            d=\"m 321.74355,168.0687 c -1e-5,3.3913 -3.42414,11.26702 -8.73834,11.26702 -5.3142,0 -18.59463,27.24606 -8.38477,3.759 1.35199,-3.11016 5.69513,-12.89881 10.50609,-15.15612 8.05545,-3.77965 6.61702,-3.26121 6.61702,0.1301 z\"\n            style=\"\n              opacity: 1;\n              fill: #000000;\n              fill-opacity: 1;\n              fill-rule: nonzero;\n              stroke: #000000;\n              stroke-width: 1.00157475;\n              stroke-miterlimit: 4;\n              stroke-dasharray: none;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4570\"\n            d=\"m 325,163.45184 c 1.66722,0.62594 3.33388,1.25167 3.33438,1.56444 5e-4,0.31276 -1.66671,0.31276 -3.33438,0.31276\"\n            style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4578\"\n            d=\"m 314.72098,177.37003 c -0.21488,1.64138 -0.42965,3.28197 0.28484,3.96351 0.71449,0.68155 2.35396,0.39999 3.99418,0.1183\"\n            style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4578-1\"\n            d=\"m 316,176.45184 c -0.29612,1.41007 -0.59214,2.81967 -0.25801,3.48764 0.33413,0.66798 1.29605,0.59017 2.25801,0.51236\"\n            style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            transform=\"translate(-170.14515,-0.038164)\"\n            id=\"path4610\"\n            d=\"m 318,180.45184 c 0.66667,0 1.33434,0 1.501,0.16616 0.16667,0.16617 -0.16667,0.49951 0.001,0.66667 0.16767,0.16717 0.68771,0.16717 0.89053,0.36949 0.20282,0.20233 -0.0582,0.46335 -0.39253,0.79768\"\n            style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4573\"\n            d=\"m 155,199.59998 34.15106,6.52318 v 11.49049 l -1.06066,13.43503 -3.88908,19.44543 -3.00521,10.42983 -4.06586,12.19759 -17.14734,-4.94975 -14.92431,-4.65869 v 0 L 155,199.59998\"\n            style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4575\"\n            d=\"m 172.53405,202.94118 -2.65165,33.23402 -3.53553,16.97056 -5.12652,15.73313\"\n            style=\"\n              fill: none;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n          <path\n            id=\"path4579\"\n            d=\"m 187.2662,239.00256 c 0.76634,-0.82482 2.12163,-2.00333 3.50552,-2.26818 1.38389,-0.26485 2.79921,0.38383 3.2412,1.53192 0.442,1.14808 -0.0885,2.79852 -1.5624,3.24089 -1.4739,0.44236 -3.88809,-0.32312 -3.7995,0.001 0.0886,0.32427 2.68064,1.73812 4.00626,3.12221 1.32563,1.38408 1.38456,2.73956 0.79537,3.38822 -0.5892,0.64866 -1.82576,0.58977 -2.53349,0.11762 -0.70773,-0.47215 -0.88437,-1.35536 -1.59092,-2.65068 -0.70656,-1.29532 -1.94507,-3.00565 -2.47512,-4.09626 -0.53005,-1.09062 -0.35326,-1.56206 0.41308,-2.38689 z\"\n            style=\"\n              fill: #000000;\n              fill-opacity: 1;\n              stroke: #000000;\n              stroke-width: 1px;\n              stroke-linecap: butt;\n              stroke-linejoin: miter;\n              stroke-opacity: 1;\n            \"\n          />\n        </g>\n      </g>\n    </g>\n    <g id=\"layer3\">\n      <g\n        id=\"text4526\"\n        style=\"\n          fill: url(#Strips2_1);\n          fill-opacity: 1;\n          stroke: none;\n          stroke-width: 1.23488784;\n        \"\n        transform=\"matrix(0.97168718,0,0,1.0291378,170.14515,0.038164)\"\n        aria-label=\"4\"\n      >\n        <path\n          id=\"path4555\"\n          style=\"\n            fill: url(#Strips2_1);\n            fill-opacity: 1;\n            stroke: #000000;\n            stroke-width: 1.23488784;\n            stroke-opacity: 1;\n          \"\n          d=\"M -0.46490841,256.59082 H -26.166013 v 43.5298 h -41.214384 v -43.5298 h -75.829833 l -9.95629,-15.28174 64.136994,-140.0826 h 8.914347 l 33.573515,15.8606 -48.507941,89.60655 -11.461305,19.56526 h 39.130513 l 4.399288,-43.06672 h 36.815096 v 43.06672 h 25.70110459 z\"\n        />\n      </g>\n      <g\n        id=\"text4526-2\"\n        style=\"\n          fill: url(#Strips2_1);\n          fill-opacity: 1;\n          stroke: none;\n          stroke-width: 1.23488784;\n        \"\n        transform=\"matrix(0.97168718,0,0,1.0291378,377.95605,103.2934)\"\n        aria-label=\"4\"\n      >\n        <path\n          id=\"path4558\"\n          style=\"\n            fill: url(#Strips2_1);\n            fill-opacity: 1;\n            stroke: #000000;\n            stroke-width: 1.23488784;\n            stroke-opacity: 1;\n          \"\n          d=\"m 147.55592,156.33602 h -25.70111 v 43.5298 H 80.640431 v -43.5298 H 4.8105946 L -5.1456892,141.05429 58.991302,0.97168512 h 8.914347 L 101.47916,16.832277 52.971223,106.43883 41.50992,126.00409 h 39.130511 l 4.399288,-43.06672 h 36.815091 v 43.06672 h 25.70111 z\"\n        />\n      </g>\n    </g>\n  </svg>\n\n  <p id=\"errorText\">O-o-oh! Something broke.</p>\n  <a id=\"errorLink\" routerLink=\"\">Go Back</a>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto mt-3\">\n    <form autocomplete=\"off\" #f=\"ngForm\" (ngSubmit)=\"onLogin()\">\n      <h4 class=\"text-center\">Login</h4>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n          type=\"email\"\n          name=\"email\"\n          id=\"email\"\n          ngModel\n          [(ngModel)]=\"email\"\n          class=\"form-control\"\n          #Email=\"ngModel\"\n          required\n        />\n        <small\n          *ngIf=\"Email.touched && Email.errors?.required\"\n          class=\"text-danger\"\n        >\n          Email is Required\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          name=\"password\"\n          id=\"password\"\n          [(ngModel)]=\"password\"\n          class=\"form-control\"\n          ngModel\n          #Password=\"ngModel\"\n          required\n        />\n        <small\n          *ngIf=\"Password.touched && Password.errors?.required\"\n          class=\"text-danger\"\n        >\n          Password is Required\n        </small>\n      </div>\n      <button\n        type=\"submit\"\n        [disabled]=\"f.invalid\"\n        class=\"btn btn-primary btn-block\"\n      >\n        <i class=\"fas fa-paper-plane\"></i> Login\n      </button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-right\">\n  <button routerLink=\"/add-task\" class=\"btn btn-info mt-5 mb-4\">\n    <i class=\"fas fa-plus\"></i> Add task\n  </button>\n</div>\n<h4 class=\"mb-5\">My Task List</h4>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Completed</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let t of task; let i = index\">\n      <td>{{ i + 1 }}</td>\n      <td>{{ t.name }}</td>\n      <td *ngIf=\"t.done\" style=\"color: green;\">\n        <i class=\"fas fa-thumbs-up fa-2x\"></i>\n      </td>\n      <td *ngIf=\"!t.done\" style=\"color: red;\">\n        <i class=\"fas fa-thumbs-down fa-2x\"></i>\n      </td>\n      <td>\n        <button [routerLink]=\"['/Edit', t._id]\" class=\"btn btn-warning mr-2\">\n          <i class=\"fas fa-edit\"></i> Edit\n        </button>\n\n        <button (click)=\"deleteTask(t._id)\" class=\"btn btn-danger\">\n          <i class=\"far fa-trash-alt\"></i> Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm navbar-default bg-default\">\n  <button\n    class=\"navbar-toggler d-lg-none\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#collapsibleNavId\"\n    aria-controls=\"collapsibleNavId\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item mr-5 my-3\">\n        <a><i class=\"fas fa-tasks\"></i> Task Mangement </a>\n      </li>\n      <li\n        *ngIf=\"userservice.isLogedin()\"\n        [routerLinkActive]=\"['active']\"\n        class=\"nav-item\"\n      >\n        <a class=\"nav-link btn btn-dark my-1\" [routerLink]=\"['/main']\"\n          ><i class=\"fas fa-home\"></i> Task\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n      <li\n        *ngIf=\"!userservice.isLogedin()\"\n        [routerLinkActive]=\"['active']\"\n        class=\"nav-item\"\n      >\n        <a\n          class=\"nav-link btn btn-secondary my-3 mr-3\"\n          [routerLink]=\"['/login']\"\n        >\n          <i class=\"fas fa-sign-in-alt\"></i> Login\n        </a>\n      </li>\n      <li\n        *ngIf=\"!userservice.isLogedin()\"\n        [routerLinkActive]=\"['active']\"\n        class=\"nav-item\"\n      >\n        <a class=\"nav-link btn btn-info my-3\" [routerLink]=\"['/register']\"\n          >Register\n        </a>\n      </li>\n      <li *ngIf=\"userservice.isLogedin()\" class=\"nav-item mr-5 my-4\">\n        <a>Welcome, {{ name | titlecase }} </a>\n      </li>\n      <li *ngIf=\"userservice.isLogedin()\" class=\"nav-item\">\n        <a\n          (click)=\"lOGOUT()\"\n          style=\"cursor: pointer; color: white;\"\n          class=\"nav-link btn btn-danger my-3\"\n        >\n          <i class=\"fas fa-sign-out-alt\"></i> Logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto mt-3\">\n    <form autocomplete=\"off\" #f=\"ngForm\" (ngSubmit)=\"onRegister()\">\n      <h4 class=\"text-center\">SignUp</h4>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input\n          type=\"text\"\n          name=\"name\"\n          id=\"username\"\n          ngModel\n          [(ngModel)]=\"username\"\n          class=\"form-control\"\n          #Username=\"ngModel\"\n          placeholder=\"\"\n          required\n        />\n        <small\n          *ngIf=\"Username.touched && Username.errors?.required\"\n          class=\"text-danger\"\n        >\n          Username is Required\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n          type=\"email\"\n          name=\"email\"\n          id=\"email\"\n          [(ngModel)]=\"email\"\n          class=\"form-control\"\n          ngModel\n          #Email=\"ngModel\"\n          required\n          email\n        />\n        <small\n          *ngIf=\"Email.touched && Email.errors?.required\"\n          class=\"text-danger\"\n        >\n          Email is Required\n        </small>\n        <small *ngIf=\"Email.touched && Email.errors?.email\" class=\"text-danger\">\n          Email invalid\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          name=\"password\"\n          id=\"password\"\n          [(ngModel)]=\"password\"\n          class=\"form-control\"\n          ngModel\n          #Password=\"ngModel\"\n          required\n          minlength=\"5\"\n        />\n        <small\n          *ngIf=\"Password.touched && Password.errors?.required\"\n          class=\"text-danger\"\n        >\n          Password is Required\n        </small>\n        <small\n          *ngIf=\"Password.touched && Password.errors?.minlength\"\n          class=\"text-danger\"\n        >\n          Password must be at least 5 characters\n        </small>\n      </div>\n      <button\n        type=\"submit\"\n        [disabled]=\"f.invalid\"\n        class=\"btn btn-primary btn-block\"\n      >\n        <i class=\"fas fa-paper-plane\"></i> Submit\n      </button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/add-task/add-task.component */
    "./src/app/components/add-task/add-task.component.ts");
    /* harmony import */


    var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/edit-task/edit-task.component */
    "./src/app/components/edit-task/edit-task.component.ts");

    var routes = [{
      path: "",
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "register",
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: "main",
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: "add-task",
      component: _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: "Edit/:id",
      component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: "**",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'projet';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/add-task/add-task.component */
    "./src/app/components/add-task/add-task.component.ts");
    /* harmony import */


    var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/edit-task/edit-task.component */
    "./src/app/components/edit-task/edit-task.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"], _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_16__["AddTaskComponent"], _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_17__["EditTaskComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeModule"]],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/add-task/add-task.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/add-task/add-task.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddTaskAddTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/add-task/add-task.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/add-task/add-task.component.ts ***!
    \***********************************************************/

  /*! exports provided: AddTaskComponent */

  /***/
  function srcAppComponentsAddTaskAddTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function () {
      return AddTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AddTaskComponent =
    /*#__PURE__*/
    function () {
      function AddTaskComponent(taskser, userSER, router, toster) {
        _classCallCheck(this, AddTaskComponent);

        this.taskser = taskser;
        this.userSER = userSER;
        this.router = router;
        this.toster = toster;
      }

      _createClass(AddTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.userSER.getcurrentuser();
          this.owner = this.user.id;
          this.done = false;
        }
      }, {
        key: "onAddtask",
        value: function onAddtask() {
          var _this = this;

          if (this.name) {
            var task = {
              name: this.name,
              done: this.done,
              owner: this.owner
            };
            this.taskser.saveTask(task).subscribe(function (resp) {
              _this.toster.success(resp.message);

              _this.router.navigate(["/main"]);
            });
          }
        }
      }]);

      return AddTaskComponent;
    }();

    AddTaskComponent.ctorParameters = function () {
      return [{
        type: _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-add-task",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-task/add-task.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-task.component.css */
      "./src/app/components/add-task/add-task.component.css")).default]
    })], AddTaskComponent);
    /***/
  },

  /***/
  "./src/app/components/edit-task/edit-task.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/edit-task/edit-task.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEditTaskEditTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC10YXNrL2VkaXQtdGFzay5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/edit-task/edit-task.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/edit-task/edit-task.component.ts ***!
    \*************************************************************/

  /*! exports provided: EditTaskComponent */

  /***/
  function srcAppComponentsEditTaskEditTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function () {
      return EditTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditTaskComponent =
    /*#__PURE__*/
    function () {
      function EditTaskComponent(TaskSer, route, router) {
        _classCallCheck(this, EditTaskComponent);

        this.TaskSer = TaskSer;
        this.route = route;
        this.router = router;
      }

      _createClass(EditTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.id = this.route.snapshot.paramMap.get("id");
          this.TaskSer.GetTaskById(this.id).subscribe(function (data) {
            if (data.success) {
              _this2.Task = data.task;
            }
          });
        }
      }, {
        key: "onUpdatetask",
        value: function onUpdatetask(form, o) {
          var _this3 = this;

          this.id = this.route.snapshot.paramMap.get("id");
          var updatetask = {
            name: form.name,
            done: form.done,
            owner: o
          };
          this.TaskSer.PutTaskById(this.id, updatetask).subscribe(function (data) {
            if (data.success) {
              _this3.router.navigate(["/main"]);
            }
          });
        }
      }]);

      return EditTaskComponent;
    }();

    EditTaskComponent.ctorParameters = function () {
      return [{
        type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-task",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-task/edit-task.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-task.component.css */
      "./src/app/components/edit-task/edit-task.component.css")).default]
    })], EditTaskComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Merriweather+Sans\");\nmain {\n  height: 100vh;\n  width: 100vw;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Merriweather Sans\", sans-serif;\n}\nmain #errorText {\n  font-size: 22px;\n  margin: 14px 0;\n}\nmain #errorLink {\n  font-size: 20px;\n  padding: 12px;\n  border: 1px solid;\n  color: #000;\n  background-color: transparent;\n  text-decoration: none;\n  transition: all 0.5s ease-in-out;\n}\nmain #errorLink:hover,\nmain #errorLink:active {\n  color: #fff;\n  background: #000;\n}\nmain #g6219 {\n  transform-origin: 85px 4px;\n  -webkit-animation: an1 12s 0.5s infinite ease-out;\n  animation: an1 12s 0.5s infinite ease-out;\n}\n@-webkit-keyframes an1 {\n  0% {\n    transform: rotate(0);\n  }\n  5% {\n    transform: rotate(3deg);\n  }\n  15% {\n    transform: rotate(-2.5deg);\n  }\n  25% {\n    transform: rotate(2deg);\n  }\n  35% {\n    transform: rotate(-1.5deg);\n  }\n  45% {\n    transform: rotate(1deg);\n  }\n  55% {\n    transform: rotate(-1.5deg);\n  }\n  65% {\n    transform: rotate(2deg);\n  }\n  75% {\n    transform: rotate(-2deg);\n  }\n  85% {\n    transform: rotate(2.5deg);\n  }\n  95% {\n    transform: rotate(-3deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes an1 {\n  0% {\n    transform: rotate(0);\n  }\n  5% {\n    transform: rotate(3deg);\n  }\n  15% {\n    transform: rotate(-2.5deg);\n  }\n  25% {\n    transform: rotate(2deg);\n  }\n  35% {\n    transform: rotate(-1.5deg);\n  }\n  45% {\n    transform: rotate(1deg);\n  }\n  55% {\n    transform: rotate(-1.5deg);\n  }\n  65% {\n    transform: rotate(2deg);\n  }\n  75% {\n    transform: rotate(-2deg);\n  }\n  85% {\n    transform: rotate(2.5deg);\n  }\n  95% {\n    transform: rotate(-3deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7QUFDeEU7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUVoQixhQUFhO0VBR2Isc0JBQXNCO0VBRXRCLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFFckIsZ0NBQWdDO0FBQ2xDO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBRUUsMEJBQTBCO0VBQzFCLGlEQUFpRDtFQUNqRCx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFO0lBRUUsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUVFLDBCQUEwQjtFQUM1QjtFQUNBO0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFFRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUVFLHVCQUF1QjtFQUN6QjtFQUNBO0lBRUUsMEJBQTBCO0VBQzVCO0VBQ0E7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUVFLHdCQUF3QjtFQUMxQjtFQUNBO0lBRUUseUJBQXlCO0VBQzNCO0VBQ0E7SUFFRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUVFLG9CQUFvQjtFQUN0QjtBQUNGO0FBRUE7RUFDRTtJQUVFLG9CQUFvQjtFQUN0QjtFQUNBO0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFFRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUVFLHVCQUF1QjtFQUN6QjtFQUNBO0lBRUUsMEJBQTBCO0VBQzVCO0VBQ0E7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUVFLDBCQUEwQjtFQUM1QjtFQUNBO0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFFRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUVFLHlCQUF5QjtFQUMzQjtFQUNBO0lBRUUsd0JBQXdCO0VBQzFCO0VBQ0E7SUFFRSxvQkFBb0I7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NZXJyaXdlYXRoZXIrU2Fuc1wiKTtcbm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbm1haW4gI2Vycm9yVGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxNHB4IDA7XG59XG5tYWluICNlcnJvckxpbmsge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5tYWluICNlcnJvckxpbms6aG92ZXIsXG5tYWluICNlcnJvckxpbms6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5tYWluICNnNjIxOSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogODVweCA0cHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDg1cHggNHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW4xIDEycyAwLjVzIGluZmluaXRlIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGFuMSAxMnMgMC41cyBpbmZpbml0ZSBlYXNlLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuMSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICB9XG4gIDE1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMi41ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMi41ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gIH1cbiAgMzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xLjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xLjVkZWcpO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA1NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEuNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEuNWRlZyk7XG4gIH1cbiAgNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDg1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyLjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIuNWRlZyk7XG4gIH1cbiAgOTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuMSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICB9XG4gIDE1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMi41ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMi41ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gIH1cbiAgMzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xLjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xLjVkZWcpO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA1NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEuNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEuNWRlZyk7XG4gIH1cbiAgNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDg1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyLjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIuNWRlZyk7XG4gIH1cbiAgOTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(userservice, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.userservice = userservice;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this4 = this;

          var user = {
            email: this.email,
            password: this.password
          };
          this.userservice.auth(user).subscribe(function (resp) {
            if (!resp.success) {
              _this4.toastr.error("Error", resp.message);
            } else {
              _this4.toastr.success("Success");

              _this4.router.navigate(["/main"]);

              _this4.userservice.saveUser(resp.returnuser.token, resp.returnuser);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/main/main.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/main/main.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(taskSer, userSER, toaster) {
        _classCallCheck(this, MainComponent);

        this.taskSer = taskSer;
        this.userSER = userSER;
        this.toaster = toaster;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchTask();
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          var _this5 = this;

          if (confirm("Are you sure to delete this Task")) {
            this.taskSer.deleteTask(id).subscribe(function (resp) {
              _this5.toaster.success(resp.message);

              _this5.fetchTask();
            }, function (err) {
              _this5.toaster.error("failed");
            });
          }
        }
      }, {
        key: "fetchTask",
        value: function fetchTask() {
          var _this6 = this;

          var user = this.userSER.getcurrentuser();
          var query = {
            owner: user.id
          };
          this.taskSer.getalltask(query).subscribe(function (resp) {
            _this6.task = resp.task;
          });
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-main",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.css */
      "./src/app/components/main/main.component.css")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(userservice, router) {
        _classCallCheck(this, NavbarComponent);

        this.userservice = userservice;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.user = this.userservice.GetUser().subscribe(function (data) {
            if (data) {
              _this7.name = data.name;
            }
          });
        }
      }, {
        key: "lOGOUT",
        value: function lOGOUT() {
          this.userservice.Logout();
          this.router.navigate(["/login"]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-navbar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(userservice, router, toastr) {
        _classCallCheck(this, RegisterComponent);

        this.userservice = userservice;
        this.router = router;
        this.toastr = toastr;
        this.username = "";
        this.email = "";
        this.password = "";
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this8 = this;

          var user = {
            username: this.username,
            email: this.email,
            password: this.password
          };
          this.userservice.createUser(user).subscribe(function (resp) {
            if (resp.message) {
              _this8.router.navigate(["/login"]);

              _this8.toastr.success("Success", "Account Created");
            } else {
              _this8.toastr.error("Error", "Email Exist");
            }
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(userSer, router) {
        _classCallCheck(this, AuthGuard);

        this.userSer = userSer;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.userSer.isLogedin()) {
            return true;
          }

          this.router.navigate(["/login"], {
            queryParams: {
              returnUrl: state.url
            }
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/task.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/task.service.ts ***!
    \******************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppServicesTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TaskService =
    /*#__PURE__*/
    function () {
      function TaskService(http) {
        _classCallCheck(this, TaskService);

        this.http = http;
      }

      _createClass(TaskService, [{
        key: "getauthHeadres",
        value: function getauthHeadres() {
          var token = localStorage.getItem("Authtoken");
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(token)
          });
        }
      }, {
        key: "saveTask",
        value: function saveTask(task) {
          var headers = this.getauthHeadres();
          return this.http.post("http://localhost:3000/api/task/add", task, {
            headers: headers
          });
        }
      }, {
        key: "getalltask",
        value: function getalltask(query) {
          var h = this.getauthHeadres();
          return this.http.post("http://localhost:3000/api/task/lists", query, {
            headers: h
          });
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          var h = this.getauthHeadres();
          return this.http.delete("http://localhost:3000/api/task/delete/".concat(id), {
            headers: h
          });
        }
      }, {
        key: "GetTaskById",
        value: function GetTaskById(id) {
          var h = this.getauthHeadres();
          return this.http.get("http://localhost:3000/api/task/task/".concat(id), {
            headers: h
          });
        }
      }, {
        key: "PutTaskById",
        value: function PutTaskById(id, updatetask) {
          var h = this.getauthHeadres();
          return this.http.put("http://localhost:3000/api/task/edit/".concat(id), updatetask, {
            headers: h
          });
        }
      }]);

      return TaskService;
    }();

    TaskService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], TaskService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "createUser",
        value: function createUser(user) {
          return this.http.post("http://localhost:3000/api/user/register", user);
        }
      }, {
        key: "auth",
        value: function auth(user) {
          return this.http.post("http://localhost:3000/api/user/auth", user);
        }
      }, {
        key: "saveUser",
        value: function saveUser(token, user) {
          localStorage.setItem("Authtoken", token);
          localStorage.setItem("User", JSON.stringify(user));
        }
      }, {
        key: "isLogedin",
        value: function isLogedin() {
          if (localStorage.getItem("Authtoken")) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "Logout",
        value: function Logout() {
          localStorage.removeItem("Authtoken");
          localStorage.removeItem("User");
        }
      }, {
        key: "getcurrentuser",
        value: function getcurrentuser() {
          return JSON.parse(localStorage.getItem("User"));
        }
      }, {
        key: "GetUser",
        value: function GetUser() {
          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            setInterval(function () {
              observer.next(JSON.parse(localStorage.getItem("User")));
            }, 100);
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/houssem/Bureau/2eme-tour-le-31-03-2019/projetTask/frontEnd/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map