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


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-list/edit-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-list/edit-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditListEditListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n        <h1 class=\"title\">\n            Edit List\n        </h1>\n\n        <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter List Name...\">\n        <br><br>\n        <div class=\"buttons is-right\">\n            <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n            <button class=\"button is-primary is-medium\" (click)=\"updateList(listTitleInput.value)\">Save</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-task/edit-task.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-task/edit-task.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditTaskEditTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n        <h1 class=\"title\">\n            Edit Task\n        </h1>\n\n        <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter Task Name...\">\n        <br><br>\n        <div class=\"buttons is-right\">\n            <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n            <button class=\"button is-primary is-medium\" (click)=\"updateTask(taskTitleInput.value)\">Save</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginPageLoginPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered-content\">\n    <div class=\"white-box\">\n\n        <h1 class=\"title has-text-primary\">Login</h1>\n\n        <div class=\"field\">\n            <p class=\"control has-icons-left has-icons-right\">\n                <input #emailInput type=\"email\" class=\"input has-background-light\" placeholder=\"Email\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-envelope\"></i>\n                </span>\n            </p>\n        </div>\n        <div class=\"field\">\n            <p class=\"control has-icons-left\">\n                <input #pwInput type=\"password\" class=\"input has-background-light\" placeholder=\"Password\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-lock\"></i>\n                </span>\n            </p>\n        </div>\n        <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n            <p class=\"control\">\n                <button class=\"button is-success\" (click)=\"onLoginBtnClicked(emailInput.value, pwInput.value)\">\n                    Login\n                </button>\n            </p>\n        </div>\n        <br>\n        <p class=\"has-text-grey\">Not got an account? <a routerLink=\"/signup\">Sign Up</a> Now!</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-list/new-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-list/new-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNewListNewListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n        <h1 class=\"title\">\n            Create a New List\n        </h1>\n\n        <input #listTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter List Name...\">\n        <br><br>\n        <div class=\"buttons is-right\">\n            <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n            <button class=\"button is-primary is-medium\" (click)=\"createList(listTitleInput.value)\">Create</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-task/new-task.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-task/new-task.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNewTaskNewTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered-content\">\n    <div class=\"modal-box\">\n        <h1 class=\"title\">\n            Create a New Task\n        </h1>\n\n        <input #taskTitleInput class=\"input has-background-light is-medium\" type=\"text\" placeholder=\"Enter Task Name...\">\n        <br><br>\n        <div class=\"buttons is-right\">\n            <button class=\"button is-medium\" routerLink=\"/\">Cancel</button>\n            <button class=\"button is-primary is-medium\" (click)=\"createTask(taskTitleInput.value)\">Create</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupPageSignupPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered-content\">\n    <div class=\"white-box\">\n\n        <h1 class=\"title has-text-primary\">Sign Up</h1>\n\n        <div class=\"field\">\n            <p class=\"control has-icons-left has-icons-right\">\n                <input #emailInput type=\"email\" class=\"input has-background-light\" placeholder=\"Email\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-envelope\"></i>\n                </span>\n            </p>\n        </div>\n        <div class=\"field\">\n            <p class=\"control has-icons-left\">\n                <input #pwInput type=\"password\" class=\"input has-background-light\" placeholder=\"Password\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-lock\"></i>\n                </span>\n            </p>\n        </div>\n        <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n            <p class=\"control\">\n                <button class=\"button is-success\" (click)=\"onSignupBtnClicked(emailInput.value, pwInput.value)\">\n                    Sign Up\n                </button>\n            </p>\n        </div>\n        <br>\n        <p class=\"has-text-grey\">Already got an account? <a routerLink=\"/login\">Log In</a></p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-view/task-view.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-view/task-view.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskViewTaskViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: inline-block !important;\">\r\n  <button class=\"button is-success\" (click)=\"onLogoutBtnClick()\" style=\"right: 0 !important;\">\r\n    Logout\r\n  </button>\r\n</div>\r\n<div class=\"centered-content\">\r\n    <div class=\"task-manager-container\">\r\n        <div class=\"sidebar has-background-white \">\r\n            <h1 class=\"title has-text-primary\">\r\n                Lists\r\n            </h1>\r\n            <div class=\"list-menu\">\r\n                <a class=\"list-menu-item\" *ngFor=\"let list of lists\" [routerLink]=\"['/lists', list._id]\" routerLinkActive=\"is-active\">\r\n                    <p>{{list.title}}</p>\r\n                </a>\r\n            </div>\r\n            <div class=\"button is-primary\" routerLink=\"/new-list\">+ New List</div>\r\n        </div>\r\n        <div class=\"task-list-container has-background-light\">\r\n            <div *ngIf=\"tasks\">\r\n                <div class=\"top-bar\">\r\n                    <h1 class=\"title has-text-primary\">\r\n                        Tasks\r\n                    </h1>\r\n                    <div class=\"dropdown is-hoverable is-right\">\r\n                        <div class=\"dropdown-trigger\">\r\n                          <button class=\"button\" aria-haspopup=\"true\">\r\n                            <span><i class=\"fas fa-cog\" aria-hidden=\"true\"></i></span>\r\n                            <span class=\"icon is-small\">\r\n                              <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\r\n                            <div class=\"dropdown-content\">\r\n                                <a [routerLink]=\"['/edit-list', selectedListId]\" class=\"dropdown-item\">\r\n                                  Edit\r\n                                </a>\r\n                                <hr class=\"dropdown-divider\">\r\n                                <a (click)=\"onDeleteListClick()\" class=\"dropdown-item has-text-danger\">\r\n                                  Delete\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                </div>\r\n\r\n                <div class=\"task\" *ngFor=\"let task of tasks\" (click)=\"onTaskClick(task)\" [ngClass]=\"{ 'completed': task.completed }\">\r\n                    <div class=\"task-text\">\r\n                        <p>{{task.title}}</p>\r\n                    </div>\r\n                    <div class=\"task-buttons\">\r\n                        <button class=\"button\" [routerLink]=\"['/lists', selectedListId, 'edit-task', task._id]\">\r\n                            <div class=\"icon\">\r\n                                <i class=\"fas fa-edit\"></i>\r\n                            </div>\r\n                        </button>\r\n                        <button class=\"button is-danger\" (click)=\"onDeleteTaskClick(task._id)\" style=\"margin-left: 10px;\">\r\n                            <div class=\"icon\">\r\n                                <i class=\"fas fa-trash\"></i>\r\n                            </div>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <h3 class=\"empty-state-text\" *ngIf=\"tasks.length === 0\">There are no tasks here. Click the + button to create a new task</h3>\r\n\r\n                <button routerLink=\"./new-task\" class=\"circle-add-button button is-primary\">\r\n                    <img src=\"../../../assets/plus-icon.svg\" alt=\"\">\r\n                </button>\r\n            </div>\r\n\r\n            <div *ngIf=\"!tasks\">\r\n                <h3 class=\"empty-state-text\">Please select a list from the sidebar</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/task-view/task-view.component */
    "./src/app/pages/task-view/task-view.component.ts");
    /* harmony import */


    var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/new-list/new-list.component */
    "./src/app/pages/new-list/new-list.component.ts");
    /* harmony import */


    var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/new-task/new-task.component */
    "./src/app/pages/new-task/new-task.component.ts");
    /* harmony import */


    var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/login-page/login-page.component */
    "./src/app/pages/login-page/login-page.component.ts");
    /* harmony import */


    var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/signup-page/signup-page.component */
    "./src/app/pages/signup-page/signup-page.component.ts");
    /* harmony import */


    var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/edit-list/edit-list.component */
    "./src/app/pages/edit-list/edit-list.component.ts");
    /* harmony import */


    var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/edit-task/edit-task.component */
    "./src/app/pages/edit-task/edit-task.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'lists'
    }, {
      path: 'lists',
      component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"]
    }, {
      path: 'login',
      component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    }, {
      path: 'signup',
      component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]]
    }, {
      path: 'new-list',
      component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_4__["NewListComponent"]
    }, {
      path: 'edit-list/:listId',
      component: _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_8__["EditListComponent"]
    }, {
      path: 'lists/:listId',
      component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_3__["TaskViewComponent"]
    }, {
      path: 'lists/:listId/new-task',
      component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"]
    }, {
      path: 'lists/:listId/edit-task/:taskId',
      component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/task-view/task-view.component */
    "./src/app/pages/task-view/task-view.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/new-list/new-list.component */
    "./src/app/pages/new-list/new-list.component.ts");
    /* harmony import */


    var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/new-task/new-task.component */
    "./src/app/pages/new-task/new-task.component.ts");
    /* harmony import */


    var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/login-page/login-page.component */
    "./src/app/pages/login-page/login-page.component.ts");
    /* harmony import */


    var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./web-req-interceptor */
    "./src/app/web-req-interceptor.ts");
    /* harmony import */


    var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/signup-page/signup-page.component */
    "./src/app/pages/signup-page/signup-page.component.ts");
    /* harmony import */


    var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/edit-list/edit-list.component */
    "./src/app/pages/edit-list/edit-list.component.ts");
    /* harmony import */


    var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/edit-task/edit-task.component */
    "./src/app/pages/edit-task/edit-task.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"], _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__["NewListComponent"], _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"], _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_11__["SignupPageComponent"], _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_12__["EditListComponent"], _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_13__["EditTaskComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_10__["WebReqInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(router) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (localStorage.getItem('user-id') != null) {
            this.router.navigate(['lists']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _web_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web-request.service */
    "./src/app/web-request.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(webService, router, http) {
        _classCallCheck(this, AuthService);

        this.webService = webService;
        this.router = router;
        this.http = http;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var _this = this;

          return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            //the auth tokens will be in the header of this response
            _this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));

            console.log('Logged In');
          }));
        }
      }, {
        key: "signup",
        value: function signup(email, password) {
          var _this2 = this;

          return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            //the auth tokens will be in the header of this response
            _this2.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));

            console.log('Signed Up and now Logged In');
          }));
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          return localStorage.getItem('x-access-token');
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return localStorage.getItem('x-refresh-token');
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return localStorage.getItem('user-id');
        }
      }, {
        key: "setAccessToken",
        value: function setAccessToken(accessToken) {
          localStorage.setItem('x-access-token', accessToken);
        }
      }, {
        key: "setSession",
        value: function setSession(userId, accessToken, refreshToken) {
          localStorage.setItem('user-id', userId);
          localStorage.setItem('x-access-token', accessToken);
          localStorage.setItem('x-refresh-token', refreshToken);
        }
      }, {
        key: "removeSession",
        value: function removeSession() {
          localStorage.removeItem('user-id');
          localStorage.removeItem('x-access-token');
          localStorage.removeItem('x-refresh-token');
        }
      }, {
        key: "getNewAccessToken",
        value: function getNewAccessToken() {
          var _this3 = this;

          // return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
          //   headers: {
          //     'x-refresh-token': this.getRefreshToken(),
          //     '_id': this.getUserId()
          //   },
          //   observe: 'response'
          // }).pipe(
          //   tap((res: HttpResponse<any>) => {
          //     this.setAccessToken(res.headers.get('x-access-token'));
          //   })
          // )
          return this.http.get("users/me/access-token", {
            headers: {
              'x-refresh-token': this.getRefreshToken(),
              '_id': this.getUserId()
            },
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this3.setAccessToken(res.headers.get('x-access-token'));
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.removeSession();
          this.router.navigate(['/login']); // this.router.navigateByUrl('/login');
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/pages/edit-list/edit-list.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/edit-list/edit-list.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditListEditListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtbGlzdC9lZGl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/edit-list/edit-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/edit-list/edit-list.component.ts ***!
    \********************************************************/

  /*! exports provided: EditListComponent */

  /***/
  function srcAppPagesEditListEditListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditListComponent", function () {
      return EditListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");

    var EditListComponent = /*#__PURE__*/function () {
      function EditListComponent(route, taskService, router) {
        _classCallCheck(this, EditListComponent);

        this.route = route;
        this.taskService = taskService;
        this.router = router;
      }

      _createClass(EditListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.subscribe(function (params) {
            _this4.listId = params.listId;
          });
        }
      }, {
        key: "updateList",
        value: function updateList(title) {
          var _this5 = this;

          this.taskService.updateList(this.listId, title).subscribe(function () {
            _this5.router.navigate(['/lists', _this5.listId]);
          });
        }
      }]);

      return EditListComponent;
    }();

    EditListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EditListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-list/edit-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-list.component.scss */
      "./src/app/pages/edit-list/edit-list.component.scss"))["default"]]
    })], EditListComponent);
    /***/
  },

  /***/
  "./src/app/pages/edit-task/edit-task.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/edit-task/edit-task.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditTaskEditTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/edit-task/edit-task.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
    \********************************************************/

  /*! exports provided: EditTaskComponent */

  /***/
  function srcAppPagesEditTaskEditTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EditTaskComponent = /*#__PURE__*/function () {
      function EditTaskComponent(taskService, route, router) {
        _classCallCheck(this, EditTaskComponent);

        this.taskService = taskService;
        this.route = route;
        this.router = router;
      }

      _createClass(EditTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.params.subscribe(function (params) {
            _this6.taskId = params.taskId;
            _this6.listId = params.listId;
          });
        }
      }, {
        key: "updateTask",
        value: function updateTask(title) {
          var _this7 = this;

          this.taskService.updateTask(this.listId, this.taskId, title).subscribe(function () {
            _this7.router.navigate(['/lists', _this7.listId]);
          });
        }
      }]);

      return EditTaskComponent;
    }();

    EditTaskComponent.ctorParameters = function () {
      return [{
        type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EditTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-task',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-task/edit-task.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-task.component.scss */
      "./src/app/pages/edit-task/edit-task.component.scss"))["default"]]
    })], EditTaskComponent);
    /***/
  },

  /***/
  "./src/app/pages/login-page/login-page.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/login-page/login-page.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginPageLoginPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/login-page/login-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/login-page/login-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppPagesLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginPageComponent = /*#__PURE__*/function () {
      function LoginPageComponent(authService, router) {
        _classCallCheck(this, LoginPageComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoginBtnClicked",
        value: function onLoginBtnClicked(email, password) {
          var _this8 = this;

          this.authService.login(email, password).subscribe(function (res) {
            if (res.status === 200) {
              //we have logged in successfully
              _this8.router.navigate(['/lists']);
            }

            console.log(res);
          });
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ctorParameters = function () {
      return [{
        type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login-page.component.scss */
      "./src/app/pages/login-page/login-page.component.scss"))["default"]]
    })], LoginPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/new-list/new-list.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/new-list/new-list.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNewListNewListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1saXN0L25ldy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/new-list/new-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/new-list/new-list.component.ts ***!
    \******************************************************/

  /*! exports provided: NewListComponent */

  /***/
  function srcAppPagesNewListNewListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewListComponent", function () {
      return NewListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewListComponent = /*#__PURE__*/function () {
      function NewListComponent(taskService, router) {
        _classCallCheck(this, NewListComponent);

        this.taskService = taskService;
        this.router = router;
      }

      _createClass(NewListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createList",
        value: function createList(title) {
          var _this9 = this;

          this.taskService.createList(title).subscribe(function (list) {
            console.log(list); //Now we navigate to /lists/list._id

            _this9.router.navigate(['/lists', list._id]);
          });
        }
      }]);

      return NewListComponent;
    }();

    NewListComponent.ctorParameters = function () {
      return [{
        type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NewListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-list/new-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-list.component.scss */
      "./src/app/pages/new-list/new-list.component.scss"))["default"]]
    })], NewListComponent);
    /***/
  },

  /***/
  "./src/app/pages/new-task/new-task.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/new-task/new-task.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNewTaskNewTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/new-task/new-task.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/new-task/new-task.component.ts ***!
    \******************************************************/

  /*! exports provided: NewTaskComponent */

  /***/
  function srcAppPagesNewTaskNewTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function () {
      return NewTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewTaskComponent = /*#__PURE__*/function () {
      function NewTaskComponent(taskService, route, router) {
        _classCallCheck(this, NewTaskComponent);

        this.taskService = taskService;
        this.route = route;
        this.router = router;
      }

      _createClass(NewTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.params.subscribe(function (params) {
            _this10.listId = params['listId'];
          });
        }
      }, {
        key: "createTask",
        value: function createTask(title) {
          var _this11 = this;

          this.taskService.createTask(title, this.listId).subscribe(function (newTask) {
            _this11.router.navigate(['../'], {
              relativeTo: _this11.route
            });
          });
        }
      }]);

      return NewTaskComponent;
    }();

    NewTaskComponent.ctorParameters = function () {
      return [{
        type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NewTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-task',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-task/new-task.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-task.component.scss */
      "./src/app/pages/new-task/new-task.component.scss"))["default"]]
    })], NewTaskComponent);
    /***/
  },

  /***/
  "./src/app/pages/signup-page/signup-page.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupPageSignupPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/signup-page/signup-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
    \************************************************************/

  /*! exports provided: SignupPageComponent */

  /***/
  function srcAppPagesSignupPageSignupPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function () {
      return SignupPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignupPageComponent = /*#__PURE__*/function () {
      function SignupPageComponent(authService, router) {
        _classCallCheck(this, SignupPageComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(SignupPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSignupBtnClicked",
        value: function onSignupBtnClicked(email, password) {
          var _this12 = this;

          this.authService.signup(email, password).subscribe(function (res) {
            if (res.status === 200) {
              //we have signed up and logged in successfully
              _this12.router.navigate(['/lists']);
            }

            console.log(res);
          });
        }
      }]);

      return SignupPageComponent;
    }();

    SignupPageComponent.ctorParameters = function () {
      return [{
        type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignupPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-page.component.scss */
      "./src/app/pages/signup-page/signup-page.component.scss"))["default"]]
    })], SignupPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/task-view/task-view.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/task-view/task-view.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskViewTaskViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700&display=swap\");\nhtml {\n  background: linear-gradient(to right top, #44ddd0, #27d7a1);\n}\nhtml, body {\n  height: 100%;\n}\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.modal-box {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.title {\n  font-family: \"Lato\";\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.white-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px;\n}\n.task-manager-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 680px;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  padding: 42px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.task-list-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 42px;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.task-list-container .top-bar {\n  margin-bottom: 20px;\n  display: flex;\n}\n.task-list-container .top-bar .title {\n  flex-grow: 1 !important;\n  margin: 0;\n}\n.list-menu {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  flex-grow: 1;\n}\n.list-menu .list-menu-item {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  width: 100%;\n  color: #5f5f5f;\n  margin-bottom: 5px;\n}\n.list-menu .list-menu-item:hover {\n  background: #f8f8f8;\n}\n.list-menu .list-menu-item.is-active {\n  background-color: #cff8ef;\n  color: #006450;\n}\n.task {\n  display: flex;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 10px;\n  align-items: center;\n}\n.task:not(.completed) {\n  cursor: pointer;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.task:not(.completed):active {\n  transform: scale(0.95);\n}\n.task:not(.completed):hover {\n  box-shadow: 0 0 0 5px #eee;\n}\n.task:not(.completed):hover .task-buttons {\n  opacity: 1;\n  transform: scale(1);\n}\n.task.completed .task-text {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.task .task-text {\n  flex-grow: 1;\n}\n.task .task-buttons {\n  transition: opacity 0.2s, transform 0.2s;\n  opacity: 0;\n  transform: scale(0.85);\n}\n.circle-add-button {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n.empty-state-text {\n  font-size: 20px;\n  color: #777;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay12aWV3L0Y6XFxBbmd1bGFyXFxUYXNrLU1hbmFnZXJcXGZyb250ZW5kL3NyY1xcbWFpbi1zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFzay12aWV3L3Rhc2stdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFzay12aWV3L0Y6XFxBbmd1bGFyXFxUYXNrLU1hbmFnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcdGFzay12aWV3XFx0YXNrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsK0ZBQUE7QUFvQlI7RUFDSSwyREFBQTtBQ2xCSjtBRHFCQTtFQUNJLFlBQUE7QUNsQko7QURzQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbkJKO0FEc0JBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ25CSjtBRHNCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNuQko7QURzQkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQ3BCSjtBQ3JDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUR3Q0o7QUNyQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUR3Q0o7QUNyQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRHdDSjtBQ3RDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBRHdDUjtBQ3ZDUTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtBRHlDWjtBQ3BDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRHVDSjtBQ3JDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEdUNSO0FDckNRO0VBQ0ksbUJGaERKO0FDdUZSO0FDcENRO0VBQ0kseUJBQUE7RUFDQSxjRnZEQztBQzZGYjtBQ2pDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FEbUNKO0FDakNJO0VBQ0ksZUFBQTtFQUNBLHFEQUFBO0FEbUNSO0FDakNRO0VBQ0ksc0JBQUE7QURtQ1o7QUNoQ1E7RUFDSSwwQkFBQTtBRGtDWjtBQ2hDWTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBRGtDaEI7QUM3Qkk7RUFDSSw2QkFBQTtFQUNBLFlBQUE7QUQrQlI7QUM1Qkk7RUFDSSxZQUFBO0FEOEJSO0FDM0JJO0VBQ0ksd0NBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUQ2QlI7QUN6QkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDRCSjtBQ3pCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUQ0QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrLXZpZXcvdGFzay12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TnVuaXRvOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kdHVycXVvaXNlOiAjNDRkZGQwO1xyXG4kZ3JlZW46ICMyN2Q3YTE7XHJcbiRkYXJrLWdyZWVuOiByZ2IoMCwgMTAwLCA4MCk7XHJcbiRsaWdodC1ncmVlbjogIzQ1ZjY5ZTtcclxuJGxpZ2h0OiAjZjhmOGY4O1xyXG5cclxuLy9VcGRhdGUgYnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRncmVlbjtcclxuXHJcbiRsaW5rOiAkdHVycXVvaXNlO1xyXG5cclxuLy9VcGRhdGUgc29tZSBvZiBidWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLy8gU2V0IGN1c3RvbSBnbG9iYWwgc3R5bGVzICh3aWxsIGJlIGFwcGxpZWQgdG8gd2hvbGUgYXBwKVxyXG5odG1se1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJHR1cnF1b2lzZSwgJGdyZWVuKTtcclxufVxyXG5cclxuaHRtbCwgYm9keXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXJlZC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtYm94e1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLndoaXRlLWJveHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjNDRkZGQwLCAjMjdkN2ExKTtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi53aGl0ZS1ib3gge1xuICBwYWRkaW5nOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5cbi50YXNrLW1hbmFnZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1heC1oZWlnaHQ6IDY4MHB4O1xufVxuXG4uc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogNDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDQycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG59XG4udGFzay1saXN0LWNvbnRhaW5lciAudG9wLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGFzay1saXN0LWNvbnRhaW5lciAudG9wLWJhciAudGl0bGUge1xuICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNWY1ZjVmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGlzdC1tZW51IC5saXN0LW1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4ubGlzdC1tZW51IC5saXN0LW1lbnUtaXRlbS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZmOGVmO1xuICBjb2xvcjogIzAwNjQ1MDtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFzazpub3QoLmNvbXBsZXRlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuLnRhc2s6bm90KC5jb21wbGV0ZWQpOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG4udGFzazpub3QoLmNvbXBsZXRlZCk6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2VlZTtcbn1cbi50YXNrOm5vdCguY29tcGxldGVkKTpob3ZlciAudGFzay1idXR0b25zIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi50YXNrLmNvbXBsZXRlZCAudGFzay10ZXh0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi50YXNrIC50YXNrLXRleHQge1xuICBmbGV4LWdyb3c6IDE7XG59XG4udGFzayAudGFzay1idXR0b25zIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbn1cblxuLmNpcmNsZS1hZGQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lbXB0eS1zdGF0ZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL21haW4tc3R5bGVzLnNjc3MnO1xyXG5cclxuLnRhc2stbWFuYWdlci1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDY4MHB4O1xyXG59XHJcblxyXG4uc2lkZWJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogNDJweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnRhc2stbGlzdC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDQycHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAudG9wLWJhcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxpc3QtbWVudXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAubGlzdC1tZW51LWl0ZW17XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICM1ZjVmNWY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmlzLWFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjhlZjtcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhc2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmOm5vdCguY29tcGxldGVkKXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcblxyXG4gICAgICAgICY6YWN0aXZle1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNlZWU7XHJcblxyXG4gICAgICAgICAgICAudGFzay1idXR0b25ze1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5jb21wbGV0ZWQgLnRhc2stdGV4dHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICBvcGFjaXR5OiAwLjggO1xyXG4gICAgfVxyXG5cclxuICAgIC50YXNrLXRleHR7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC50YXNrLWJ1dHRvbnN7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaXJjbGUtYWRkLWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzVweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZS10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/task-view/task-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/task-view/task-view.component.ts ***!
    \********************************************************/

  /*! exports provided: TaskViewComponent */

  /***/
  function srcAppPagesTaskViewTaskViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function () {
      return TaskViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");

    var TaskViewComponent = /*#__PURE__*/function () {
      function TaskViewComponent(taskService, route, router, authService) {
        _classCallCheck(this, TaskViewComponent);

        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.authService = authService;
      }

      _createClass(TaskViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.route.params.subscribe(function (params) {
            if (params.listId) {
              _this13.selectedListId = params.listId;

              _this13.taskService.getTasks(params.listId).subscribe(function (tasks) {
                _this13.tasks = tasks;
              });
            } else {
              _this13.tasks = undefined;
            }
          });
          this.taskService.getLists().subscribe(function (lists) {
            _this13.lists = lists;
          });
        }
      }, {
        key: "onTaskClick",
        value: function onTaskClick(task) {
          //We want to set the task to completed
          this.taskService.complete(task).subscribe(function () {
            //Once the task has been set to completed successfully
            console.log('Completed Successfully');
            task.completed = !task.completed;
          });
        }
      }, {
        key: "onDeleteListClick",
        value: function onDeleteListClick() {
          var _this14 = this;

          this.taskService.deleteList(this.selectedListId).subscribe(function (res) {
            _this14.router.navigate(['/lists']);

            console.log(res);
          });
        }
      }, {
        key: "onDeleteTaskClick",
        value: function onDeleteTaskClick(id) {
          var _this15 = this;

          this.taskService.deleteTask(this.selectedListId, id).subscribe(function (res) {
            // this.router.navigate(['/lists']);
            _this15.tasks = _this15.tasks.filter(function (val) {
              return val._id !== id;
            });
            console.log(res);
          });
        }
      }, {
        key: "onLogoutBtnClick",
        value: function onLogoutBtnClick() {
          this.authService.logout();
        }
      }]);

      return TaskViewComponent;
    }();

    TaskViewComponent.ctorParameters = function () {
      return [{
        type: src_app_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    TaskViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-view/task-view.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-view.component.scss */
      "./src/app/pages/task-view/task-view.component.scss"))["default"]]
    })], TaskViewComponent);
    /***/
  },

  /***/
  "./src/app/task.service.ts":
  /*!*********************************!*\
    !*** ./src/app/task.service.ts ***!
    \*********************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web-request.service */
    "./src/app/web-request.service.ts");

    var TaskService = /*#__PURE__*/function () {
      function TaskService(webReqService) {
        _classCallCheck(this, TaskService);

        this.webReqService = webReqService;
      }

      _createClass(TaskService, [{
        key: "createList",
        value: function createList(title) {
          //we want to send a web request to create a list
          return this.webReqService.post('lists', {
            title: title
          });
        }
      }, {
        key: "updateList",
        value: function updateList(id, title) {
          //we want to send a web request to update a list
          return this.webReqService.patch("lists/".concat(id), {
            title: title
          });
        }
      }, {
        key: "updateTask",
        value: function updateTask(listId, taskId, title) {
          //we want to send a web request to update a task
          return this.webReqService.patch("lists/".concat(listId, "/tasks/").concat(taskId), {
            title: title
          });
        }
      }, {
        key: "getLists",
        value: function getLists() {
          return this.webReqService.get('lists');
        }
      }, {
        key: "createTask",
        value: function createTask(title, listId) {
          //we want to send a web request to create a task
          return this.webReqService.post("lists/".concat(listId, "/tasks"), {
            title: title
          });
        }
      }, {
        key: "deleteList",
        value: function deleteList(id) {
          return this.webReqService["delete"]("lists/".concat(id));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(listId, taskId) {
          return this.webReqService["delete"]("lists/".concat(listId, "/tasks/").concat(taskId));
        }
      }, {
        key: "getTasks",
        value: function getTasks(listId) {
          return this.webReqService.get("lists/".concat(listId, "/tasks"));
        }
      }, {
        key: "complete",
        value: function complete(task) {
          return this.webReqService.patch("lists/".concat(task._listId, "/tasks/").concat(task._id), {
            completed: !task.completed
          });
        }
      }]);

      return TaskService;
    }();

    TaskService.ctorParameters = function () {
      return [{
        type: _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]
      }];
    };

    TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TaskService);
    /***/
  },

  /***/
  "./src/app/web-req-interceptor.ts":
  /*!****************************************!*\
    !*** ./src/app/web-req-interceptor.ts ***!
    \****************************************/

  /*! exports provided: WebReqInterceptor */

  /***/
  function srcAppWebReqInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function () {
      return WebReqInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var WebReqInterceptor = /*#__PURE__*/function () {
      function WebReqInterceptor(authService) {
        _classCallCheck(this, WebReqInterceptor);

        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(WebReqInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this16 = this;

          //Handle the request
          request = this.addAuthHeader(request); //callnext() and handle the response

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            // console.log(error);
            if (error.status === 401) {
              //we are unauthorized
              //refresh the access token and if that fails, logout
              return _this16.refreshAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                request = _this16.addAuthHeader(request);
                return next.handle(request);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                console.log(err);

                _this16.authService.logout();

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
              }));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }, {
        key: "refreshAccessToken",
        value: function refreshAccessToken() {
          var _this17 = this;

          if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this17.accessTokenRefreshed.subscribe(function () {
                //this code will run when the access token has been refreshed
                observer.next();
                observer.complete();
              });
            });
          } else {
            this.refreshingAccessToken = true; //we want to call a method to the auth service to send a request to refresh the access token

            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              console.log('Access Token Refreshed');
              _this17.refreshingAccessToken = false;

              _this17.accessTokenRefreshed.next();
            }));
          }
        }
      }, {
        key: "addAuthHeader",
        value: function addAuthHeader(request) {
          //get the access token
          var token = this.authService.getAccessToken();

          if (token) {
            //append the access token to the request header
            return request.clone({
              setHeaders: {
                'x-access-token': token
              }
            });
          }

          return request;
        }
      }]);

      return WebReqInterceptor;
    }();

    WebReqInterceptor.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    WebReqInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WebReqInterceptor);
    /***/
  },

  /***/
  "./src/app/web-request.service.ts":
  /*!****************************************!*\
    !*** ./src/app/web-request.service.ts ***!
    \****************************************/

  /*! exports provided: WebRequestService */

  /***/
  function srcAppWebRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebRequestService", function () {
      return WebRequestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WebRequestService = /*#__PURE__*/function () {
      function WebRequestService(http) {
        _classCallCheck(this, WebRequestService);

        this.http = http;
        this.ROOT_URL = 'http://localhost:3000';
      }

      _createClass(WebRequestService, [{
        key: "get",
        value: function get(uri) {
          // return this.http.get(`${this.ROOT_URL}/${uri}`);
          return this.http.get("".concat(uri));
        }
      }, {
        key: "post",
        value: function post(uri, payload) {
          // return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
          return this.http.post("".concat(uri), payload);
        }
      }, {
        key: "patch",
        value: function patch(uri, payload) {
          // return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
          return this.http.patch("".concat(uri), payload);
        }
      }, {
        key: "delete",
        value: function _delete(uri) {
          // return this.http.delete(`${this.ROOT_URL}/${uri}`);
          return this.http["delete"]("".concat(uri));
        }
      }, {
        key: "login",
        value: function login(email, password) {
          // return this.http.post(`${this.ROOT_URL}/users/login`, {
          //   email,
          //   password
          // }, { observe: 'response' });
          return this.http.post("users/login", {
            email: email,
            password: password
          }, {
            observe: 'response'
          });
        }
      }, {
        key: "signup",
        value: function signup(email, password) {
          // return this.http.post(`${this.ROOT_URL}/users`, {
          //   email,
          //   password
          // }, { observe: 'response' });
          return this.http.post("users", {
            email: email,
            password: password
          }, {
            observe: 'response'
          });
        }
      }]);

      return WebRequestService;
    }();

    WebRequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    WebRequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WebRequestService);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! F:\Angular\Task-Manager\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map