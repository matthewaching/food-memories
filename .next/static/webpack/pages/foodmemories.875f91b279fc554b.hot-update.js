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

/***/ "./src/components/foodmemories/CollapseRow.js":
/*!****************************************************!*\
  !*** ./src/components/foodmemories/CollapseRow.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CollapseRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CollapseRow(param) {\n    var item = param.item;\n    _s();\n    var dishid = item.dishid, name = item.name, date = item.date, type = item.type, meal = item.meal, cooked = item.cooked;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"itemTable\",\n                onClick: function() {\n                    return setOpen(!open);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: {\n                                pathname: \"/foodmemories/detailedview\",\n                                query: {\n                                    dish: \"\".concat(name)\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: date\n                    }, void 0, false, {\n                        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, dishid, true, {\n                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Collapse, {\n                    in: open,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            children: \"Testing Collapse?\"\n                        }, void 0, false, {\n                            fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matt/repos/food-memories/src/components/foodmemories/CollapseRow.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n};\n_s(CollapseRow, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = CollapseRow;\nvar _c;\n$RefreshReg$(_c, \"CollapseRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb29kbWVtb3JpZXMvQ29sbGFwc2VSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDN0I7QUFDVztBQUV6QixTQUFTTSxXQUFXLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7SUFDeEMsSUFBUUMsTUFBTSxHQUFxQ0QsSUFBSSxDQUEvQ0MsTUFBTSxFQUFFQyxJQUFJLEdBQStCRixJQUFJLENBQXZDRSxJQUFJLEVBQUVDLElBQUksR0FBeUJILElBQUksQ0FBakNHLElBQUksRUFBRUMsSUFBSSxHQUFtQkosSUFBSSxDQUEzQkksSUFBSSxFQUFFQyxJQUFJLEdBQWFMLElBQUksQ0FBckJLLElBQUksRUFBRUMsTUFBTSxHQUFLTixJQUFJLENBQWZNLE1BQU07SUFFOUMsSUFBd0JSLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBaENTLElBQUksR0FBYVQsR0FBZSxHQUE1QixFQUFFVSxPQUFPLEdBQUlWLEdBQWUsR0FBbkI7SUFDcEIscUJBQ0UsOERBQUNELHVEQUFjOzswQkFDYiw4REFBQ2EsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7Z0JBQWNDLE9BQU8sRUFBRTsyQkFBTUosT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQztpQkFBQTs7a0NBQ2xFLDhEQUFDTSxJQUFFO2tDQUNELDRFQUFDakIsa0RBQUk7NEJBQ0hrQixJQUFJLEVBQUU7Z0NBQ0pDLFFBQVEsRUFBRSw0QkFBNEI7Z0NBQ3RDQyxLQUFLLEVBQUU7b0NBQUVDLElBQUksRUFBRSxFQUFDLENBQU8sT0FBTGYsSUFBSSxDQUFFO2lDQUFFOzZCQUMzQjtzQ0FFRCw0RUFBQ2dCLEdBQUM7MENBQUVoQixJQUFJOzs7OztvQ0FBSzs7Ozs7Z0NBQ1I7Ozs7OzRCQUNKO2tDQUNMLDhEQUFDVyxJQUFFO2tDQUFFVixJQUFJOzs7Ozs0QkFBTTs7ZUFYY0YsTUFBTTs7OztvQkFZaEM7MEJBQ0wsOERBQUNTLElBQUU7MEJBQ0QsNEVBQUNqQixtREFBUTtvQkFBQzBCLEVBQUUsRUFBRVosSUFBSTs4QkFDaEIsNEVBQUNiLDhDQUFHO2tDQUNGLDRFQUFDQyxxREFBVTtzQ0FBQyxtQkFBaUI7Ozs7O2dDQUFhOzs7Ozs0QkFDdEM7Ozs7O3dCQUNHOzs7OztvQkFDUjs7Ozs7O1lBQ1UsQ0FDakI7Q0FDSDtHQTVCdUJJLFdBQVc7QUFBWEEsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mb29kbWVtb3JpZXMvQ29sbGFwc2VSb3cuanM/YmY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsYXBzZSwgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsYXBzZVJvdyh7IGl0ZW0gfSkge1xuICBjb25zdCB7IGRpc2hpZCwgbmFtZSwgZGF0ZSwgdHlwZSwgbWVhbCwgY29va2VkIH0gPSBpdGVtO1xuXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8dHIgY2xhc3NOYW1lPVwiaXRlbVRhYmxlXCIga2V5PXtkaXNoaWR9IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9mb29kbWVtb3JpZXMvZGV0YWlsZWR2aWV3XCIsXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGRpc2g6IGAke25hbWV9YCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YT57bmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+e2RhdGV9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlRlc3RpbmcgQ29sbGFwc2U/PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC90cj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbGxhcHNlIiwiQm94IiwiVHlwb2dyYXBoeSIsIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiQ29sbGFwc2VSb3ciLCJpdGVtIiwiZGlzaGlkIiwibmFtZSIsImRhdGUiLCJ0eXBlIiwibWVhbCIsImNvb2tlZCIsIm9wZW4iLCJzZXRPcGVuIiwiRnJhZ21lbnQiLCJ0ciIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0ZCIsImhyZWYiLCJwYXRobmFtZSIsInF1ZXJ5IiwiZGlzaCIsImEiLCJpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/foodmemories/CollapseRow.js\n"));

/***/ })

});