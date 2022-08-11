"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/foodmemories",{

/***/ "./src/components/foodmemories/Table.js":
/*!**********************************************!*\
  !*** ./src/components/foodmemories/Table.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Table(param) {\n    var currentDb = param.currentDb, idArray = param.idArray;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentPage = ref[0], setPage = ref[1];\n    var pageContents = idArray.slice((currentPage - 1) * 5, currentPage * 5);\n    var pageObjects = pageContents.map(function(dishId) {\n        return currentDb.dishes[dishId];\n    });\n    var changePage = function(e, pageNum) {\n        setPage(pageNum);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"table-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Name of Dish:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Date:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Type of Dish:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Mealtime:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Cooked:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: pageObjects.map(function(item) {\n                            var dishid = item.dishid, name = item.name, date = item.date, meal = item.meal, type = item.type, cooked = item.cooked;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"itemTable\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: name\n                                            }, void 0, false, {\n                                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: date\n                                            }, void 0, false, {\n                                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: type\n                                            }, void 0, false, {\n                                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: meal\n                                            }, void 0, false, {\n                                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: cooked\n                                            }, void 0, false, {\n                                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, dishid, true, {\n                                        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                                    children: \"Testing Collapse?\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 23\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Pagination, {\n                count: 10,\n                variant: \"outlined\",\n                page: currentPage,\n                onChange: changePage\n            }, void 0, false, {\n                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/Table.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(Table, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c = Table;\nTable.propTypes = {\n    currentDb: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),\n    idArray: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)\n};\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb29kbWVtb3JpZXMvVGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUM7QUFDSztBQUMwQjtBQUM3QjtBQUNMO0FBRWpCLFNBQVNRLEtBQUssQ0FBQyxLQUFzQixFQUFFO1FBQXRCQyxTQUFTLEdBQVgsS0FBc0IsQ0FBcEJBLFNBQVMsRUFBRUMsT0FBTyxHQUFwQixLQUFzQixDQUFUQSxPQUFPOzs7SUFDaEQsSUFBK0JSLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBbkNTLFdBQVcsR0FBYVQsR0FBVyxHQUF4QixFQUFFVSxPQUFPLEdBQUlWLEdBQVcsR0FBZjtJQUMzQixJQUFNVyxZQUFZLEdBQUdILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLENBQUNILFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUVBLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDMUUsSUFBTUksV0FBVyxHQUFHRixZQUFZLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxNQUFNLEVBQUs7UUFDL0MsT0FBT1IsU0FBUyxDQUFDUyxNQUFNLENBQUNELE1BQU0sQ0FBQyxDQUFDO0tBQ2pDLENBQUM7SUFFRixJQUFNRSxVQUFVLEdBQUcsU0FBQ0MsQ0FBQyxFQUFFQyxPQUFPLEVBQUs7UUFDakNULE9BQU8sQ0FBQ1MsT0FBTyxDQUFDLENBQUM7S0FDbEI7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzswQkFDOUIsOERBQUNDLE9BQUs7O2tDQUNKLDhEQUFDQyxPQUFLO2tDQUNKLDRFQUFDQyxJQUFFOzs4Q0FDRCw4REFBQ0MsSUFBRTs4Q0FBQyxlQUFhOzs7Ozt3Q0FBSzs4Q0FDdEIsOERBQUNBLElBQUU7OENBQUMsT0FBSzs7Ozs7d0NBQUs7OENBQ2QsOERBQUNBLElBQUU7OENBQUMsZUFBYTs7Ozs7d0NBQUs7OENBQ3RCLDhEQUFDQSxJQUFFOzhDQUFDLFdBQVM7Ozs7O3dDQUFLOzhDQUNsQiw4REFBQ0EsSUFBRTs4Q0FBQyxTQUFPOzs7Ozt3Q0FBSzs7Ozs7O2dDQUNiOzs7Ozs0QkFDQztrQ0FDUiw4REFBQ0MsT0FBSztrQ0FDSGIsV0FBVyxDQUFDQyxHQUFHLENBQUMsU0FBQ2EsSUFBSSxFQUFLOzRCQUN6QixJQUFRQyxNQUFNLEdBQXFDRCxJQUFJLENBQS9DQyxNQUFNLEVBQUVDLElBQUksR0FBK0JGLElBQUksQ0FBdkNFLElBQUksRUFBRUMsSUFBSSxHQUF5QkgsSUFBSSxDQUFqQ0csSUFBSSxFQUFFQyxJQUFJLEdBQW1CSixJQUFJLENBQTNCSSxJQUFJLEVBQUVDLElBQUksR0FBYUwsSUFBSSxDQUFyQkssSUFBSSxFQUFFQyxNQUFNLEdBQUtOLElBQUksQ0FBZk0sTUFBTTs0QkFDOUMscUJBQ0UsOERBQUNsQyx1REFBYzs7a0RBQ2IsOERBQUN5QixJQUFFO3dDQUFDSCxTQUFTLEVBQUMsV0FBVzs7MERBQ3ZCLDhEQUFDYyxJQUFFOzBEQUFFTixJQUFJOzs7OztxREFBTTswREFDZiw4REFBQ00sSUFBRTswREFBRUwsSUFBSTs7Ozs7cURBQU07MERBQ2YsOERBQUNLLElBQUU7MERBQUVILElBQUk7Ozs7O3FEQUFNOzBEQUNmLDhEQUFDRyxJQUFFOzBEQUFFSixJQUFJOzs7OztxREFBTTswREFDZiw4REFBQ0ksSUFBRTswREFBRUYsTUFBTTs7Ozs7cURBQU07O3VDQUxZTCxNQUFNOzs7OzZDQU1oQztrREFDTCw4REFBQ0osSUFBRTtrREFDRCw0RUFBQ3BCLHFEQUFRO3NEQUNQLDRFQUFDQyxxREFBRzswREFDRiw0RUFBQ0YscURBQVU7OERBQUMsbUJBQWlCOzs7Ozt5REFBYTs7Ozs7cURBQ3RDOzs7OztpREFDRzs7Ozs7NkNBQ1I7Ozs7OztxQ0FDVSxDQUNqQjt5QkFDSCxDQUFDOzs7Ozs0QkFDSTs7Ozs7O29CQUNGOzBCQUNSLDhEQUFDRixxREFBVTtnQkFDVG1DLEtBQUssRUFBRSxFQUFFO2dCQUNUQyxPQUFPLEVBQUMsVUFBVTtnQkFDbEJDLElBQUksRUFBRTdCLFdBQVc7Z0JBQ2pCOEIsUUFBUSxFQUFFdEIsVUFBVTs7Ozs7b0JBQ3BCOzs7Ozs7WUFDRSxDQUNOO0NBQ0g7R0F2RHVCWCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUF5RDdCQSxLQUFLLENBQUNrQyxTQUFTLEdBQUc7SUFDaEJqQyxTQUFTLEVBQUVULDBEQUFnQjtJQUMzQlUsT0FBTyxFQUFFVix5REFBZTtDQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Zvb2RtZW1vcmllcy9UYWJsZS5qcz9lZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZSh7IGN1cnJlbnREYiwgaWRBcnJheSB9KSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgcGFnZUNvbnRlbnRzID0gaWRBcnJheS5zbGljZSgoY3VycmVudFBhZ2UgLSAxKSAqIDUsIGN1cnJlbnRQYWdlICogNSk7XG4gIGNvbnN0IHBhZ2VPYmplY3RzID0gcGFnZUNvbnRlbnRzLm1hcCgoZGlzaElkKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnREYi5kaXNoZXNbZGlzaElkXTtcbiAgfSk7XG5cbiAgY29uc3QgY2hhbmdlUGFnZSA9IChlLCBwYWdlTnVtKSA9PiB7XG4gICAgc2V0UGFnZShwYWdlTnVtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TmFtZSBvZiBEaXNoOjwvdGg+XG4gICAgICAgICAgICA8dGg+RGF0ZTo8L3RoPlxuICAgICAgICAgICAgPHRoPlR5cGUgb2YgRGlzaDo8L3RoPlxuICAgICAgICAgICAgPHRoPk1lYWx0aW1lOjwvdGg+XG4gICAgICAgICAgICA8dGg+Q29va2VkOjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtwYWdlT2JqZWN0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGlzaGlkLCBuYW1lLCBkYXRlLCBtZWFsLCB0eXBlLCBjb29rZWQgfSA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIml0ZW1UYWJsZVwiIGtleT17ZGlzaGlkfT5cbiAgICAgICAgICAgICAgICAgIDx0ZD57bmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntkYXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3R5cGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57bWVhbH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntjb29rZWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5UZXN0aW5nIENvbGxhcHNlPzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGNvdW50PXsxMH1cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgcGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VQYWdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuVGFibGUucHJvcFR5cGVzID0ge1xuICBjdXJyZW50RGI6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlkQXJyYXk6IFByb3BUeXBlcy5hcnJheSxcbn07XG4iXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhZ2luYXRpb24iLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiQ29sbGFwc2UiLCJCb3giLCJUYWJsZSIsImN1cnJlbnREYiIsImlkQXJyYXkiLCJjdXJyZW50UGFnZSIsInNldFBhZ2UiLCJwYWdlQ29udGVudHMiLCJzbGljZSIsInBhZ2VPYmplY3RzIiwibWFwIiwiZGlzaElkIiwiZGlzaGVzIiwiY2hhbmdlUGFnZSIsImUiLCJwYWdlTnVtIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIml0ZW0iLCJkaXNoaWQiLCJuYW1lIiwiZGF0ZSIsIm1lYWwiLCJ0eXBlIiwiY29va2VkIiwiRnJhZ21lbnQiLCJ0ZCIsImNvdW50IiwidmFyaWFudCIsInBhZ2UiLCJvbkNoYW5nZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/foodmemories/Table.js\n"));

/***/ })

});