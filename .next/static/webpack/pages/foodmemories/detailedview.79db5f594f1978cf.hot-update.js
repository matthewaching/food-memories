"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/foodmemories/detailedview",{

/***/ "./pages/foodmemories/detailedview/index.js":
/*!**************************************************!*\
  !*** ./pages/foodmemories/detailedview/index.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/index.esm.js\");\n/* harmony import */ var _src_firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/firebase-config */ \"./src/firebase-config.js\");\n/* harmony import */ var _src_components_foodmemories_DishDetailedView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/foodmemories/DishDetailedView */ \"./src/components/foodmemories/DishDetailedView.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DetailedView() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), pageItem = ref1[0], setItem = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(_src_firebase_config__WEBPACK_IMPORTED_MODULE_4__.db), function(querySnapShot) {\n            var data = querySnapShot.val() || {};\n            setItem(data.dishes[router.query.dish]);\n            console.log(data.dishes[router.query.dish]);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!router.isReady) return;\n        var query = router.query;\n    }, [\n        router.isReady,\n        router.query\n    ]);\n    console.log(router.query);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_foodmemories_DishDetailedView__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        pageItem: pageItem\n    }, void 0, false, {\n        fileName: \"/home/matt/repos/food-memories/pages/foodmemories/detailedview/index.js\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n};\n_s(DetailedView, \"F2tBMnThivnp6DpFHJIYVQUFMDY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DetailedView;\nvar _c;\n$RefreshReg$(_c, \"DetailedView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb29kbWVtb3JpZXMvZGV0YWlsZWR2aWV3L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDSTtBQUNLO0FBQ0M7QUFDbUM7QUFFdEUsU0FBU08sWUFBWSxHQUFHOztJQUNyQyxJQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFFMUIsSUFBNEJFLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEvQk8sUUFBUSxHQUFhUCxJQUFVLEdBQXZCLEVBQUVRLE9BQU8sR0FBSVIsSUFBVSxHQUFkO0lBRXhCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxPQUFPRSwwREFBTyxDQUFDQyxzREFBRyxDQUFDQyxvREFBRSxDQUFDLEVBQUUsU0FBQ00sYUFBYSxFQUFLO1lBQ3pDLElBQUlDLElBQUksR0FBR0QsYUFBYSxDQUFDRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1lBQ3BDSCxPQUFPLENBQUNFLElBQUksQ0FBQ0UsTUFBTSxDQUFDTixNQUFNLENBQUNPLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUksQ0FBQ0UsTUFBTSxDQUFDTixNQUFNLENBQUNPLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM3QyxDQUFDLENBQUM7S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1BmLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ08sTUFBTSxDQUFDVyxPQUFPLEVBQUUsT0FBTztRQUM1QixJQUFNSixLQUFLLEdBQUdQLE1BQU0sQ0FBQ08sS0FBSztLQUMzQixFQUFFO1FBQUNQLE1BQU0sQ0FBQ1csT0FBTztRQUFFWCxNQUFNLENBQUNPLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFbkNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixNQUFNLENBQUNPLEtBQUssQ0FBQyxDQUFDO0lBRTFCLHFCQUFPLDhEQUFDVCxxRkFBZ0I7UUFBQ0csUUFBUSxFQUFFQSxRQUFROzs7OztZQUFJLENBQUM7Q0FDakQ7R0FwQnVCRixZQUFZOztRQUNuQlAsa0RBQVM7OztBQURGTyxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvb2RtZW1vcmllcy9kZXRhaWxlZHZpZXcvaW5kZXguanM/MDMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG9uVmFsdWUsIHJlZiB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2ZpcmViYXNlLWNvbmZpZ1wiO1xuaW1wb3J0IERpc2hEZXRhaWxlZFZpZXcgZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvb2RtZW1vcmllcy9EaXNoRGV0YWlsZWRWaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGVkVmlldygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3BhZ2VJdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gb25WYWx1ZShyZWYoZGIpLCAocXVlcnlTbmFwU2hvdCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSBxdWVyeVNuYXBTaG90LnZhbCgpIHx8IHt9O1xuICAgICAgc2V0SXRlbShkYXRhLmRpc2hlc1tyb3V0ZXIucXVlcnkuZGlzaF0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YS5kaXNoZXNbcm91dGVyLnF1ZXJ5LmRpc2hdKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgfSwgW3JvdXRlci5pc1JlYWR5LCByb3V0ZXIucXVlcnldKTtcblxuICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuXG4gIHJldHVybiA8RGlzaERldGFpbGVkVmlldyBwYWdlSXRlbT17cGFnZUl0ZW19IC8+O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib25WYWx1ZSIsInJlZiIsImRiIiwiRGlzaERldGFpbGVkVmlldyIsIkRldGFpbGVkVmlldyIsInJvdXRlciIsInBhZ2VJdGVtIiwic2V0SXRlbSIsInF1ZXJ5U25hcFNob3QiLCJkYXRhIiwidmFsIiwiZGlzaGVzIiwicXVlcnkiLCJkaXNoIiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/foodmemories/detailedview/index.js\n"));

/***/ })

});