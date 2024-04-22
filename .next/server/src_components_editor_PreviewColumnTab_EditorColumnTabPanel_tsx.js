"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_editor_PreviewColumnTab_EditorColumnTabPanel_tsx";
exports.ids = ["src_components_editor_PreviewColumnTab_EditorColumnTabPanel_tsx"];
exports.modules = {

/***/ "./src/components/editor/PreviewColumnTab/EditorColumnTabPanel.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/editor/PreviewColumnTab/EditorColumnTabPanel.tsx ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EditorColumnTabPanel\": () => (/* binding */ EditorColumnTabPanel)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/editor */ \"./src/components/editor/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/store */ \"./src/store/index.ts\");\n/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dnd-kit/sortable */ \"@dnd-kit/sortable\");\n/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _components_editor__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__]);\n([jotai__WEBPACK_IMPORTED_MODULE_1__, _components_editor__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction EditorColumnTabPanel(props) {\n    const blockIds = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store__WEBPACK_IMPORTED_MODULE_4__.activeBlocksAtom);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_5__.SortableContext, {\n        items: blockIds,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.ScrollArea, {\n            sx: (theme)=>({\n                    height: '70vh',\n                    padding: theme.spacing.sm,\n                    [theme.fn.largerThan('sm')]: {\n                        height: '80vh'\n                    }\n                })\n            ,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                children: blockIds.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_editor__WEBPACK_IMPORTED_MODULE_3__.DraggableCard, {\n                        id: data,\n                        position: index\n                    }, data, false, {\n                        fileName: \"/Users/divya/Desktop/Readme_generator/src/components/editor/PreviewColumnTab/EditorColumnTabPanel.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/divya/Desktop/Readme_generator/src/components/editor/PreviewColumnTab/EditorColumnTabPanel.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/divya/Desktop/Readme_generator/src/components/editor/PreviewColumnTab/EditorColumnTabPanel.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/divya/Desktop/Readme_generator/src/components/editor/PreviewColumnTab/EditorColumnTabPanel.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lZGl0b3IvUHJldmlld0NvbHVtblRhYi9FZGl0b3JDb2x1bW5UYWJQYW5lbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNOO0FBQ3FCO0FBQ1Q7QUFFUztBQUNkO0FBQ0s7QUFJbkMsU0FBU08sb0JBQW9CLENBQUNDLEtBQWlDLEVBQUUsQ0FBQztJQUN2RSxLQUFLLENBQUNDLFFBQVEsR0FBR1QsbURBQVksQ0FBQ0csb0RBQWdCO0lBRTlDLE1BQU0sNkVBQ0hDLDhEQUFlO1FBQUNNLEtBQUssRUFBRUQsUUFBUTs4RkFDN0JILHFEQUFVO1lBQ1RLLEVBQUUsR0FBR0MsS0FBSyxJQUFNLENBQUM7b0JBQ2ZDLE1BQU0sRUFBRSxDQUFNO29CQUNkQyxPQUFPLEVBQUVGLEtBQUssQ0FBQ0csT0FBTyxDQUFDQyxFQUFFO3FCQUN4QkosS0FBSyxDQUFDSyxFQUFFLENBQUNDLFVBQVUsQ0FBQyxDQUFJLE9BQUksQ0FBQzt3QkFDNUJMLE1BQU0sRUFBRSxDQUFNO29CQUNoQixDQUFDO2dCQUNILENBQUM7O2tHQUVBUixnREFBSzswQkFDSEksUUFBUSxDQUFDVSxHQUFHLEVBQUVDLElBQUksRUFBRUMsS0FBSywrRUFDdkJuQiw2REFBYTt3QkFBWW9CLEVBQUUsRUFBRUYsSUFBSTt3QkFBRUcsUUFBUSxFQUFFRixLQUFLO3VCQUEvQkQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFkbWUvLi9zcmMvY29tcG9uZW50cy9lZGl0b3IvUHJldmlld0NvbHVtblRhYi9FZGl0b3JDb2x1bW5UYWJQYW5lbC50c3g/YzQ1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBdG9tVmFsdWUgfSBmcm9tICdqb3RhaSdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJhZ2dhYmxlQ2FyZCB9IGZyb20gJ34vY29tcG9uZW50cy9lZGl0b3InXG5pbXBvcnQgeyBhY3RpdmVCbG9ja3NBdG9tIH0gZnJvbSAnfi9zdG9yZSdcblxuaW1wb3J0IHsgU29ydGFibGVDb250ZXh0IH0gZnJvbSAnQGRuZC1raXQvc29ydGFibGUnXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BtYW50aW5lL2NvcmUnXG5pbXBvcnQgeyBTY3JvbGxBcmVhIH0gZnJvbSAnQG1hbnRpbmUvY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBJRWRpdG9yQ29sdW1uVGFiUGFuZWxQcm9wcyB7fVxuXG5leHBvcnQgZnVuY3Rpb24gRWRpdG9yQ29sdW1uVGFiUGFuZWwocHJvcHM6IElFZGl0b3JDb2x1bW5UYWJQYW5lbFByb3BzKSB7XG4gIGNvbnN0IGJsb2NrSWRzID0gdXNlQXRvbVZhbHVlKGFjdGl2ZUJsb2Nrc0F0b20pXG5cbiAgcmV0dXJuIChcbiAgICA8U29ydGFibGVDb250ZXh0IGl0ZW1zPXtibG9ja0lkc30+XG4gICAgICA8U2Nyb2xsQXJlYVxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIGhlaWdodDogJzcwdmgnLFxuICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcuc20sXG4gICAgICAgICAgW3RoZW1lLmZuLmxhcmdlclRoYW4oJ3NtJyldOiB7XG4gICAgICAgICAgICBoZWlnaHQ6ICc4MHZoJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPFN0YWNrPlxuICAgICAgICAgIHtibG9ja0lkcy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8RHJhZ2dhYmxlQ2FyZCBrZXk9e2RhdGF9IGlkPXtkYXRhfSBwb3NpdGlvbj17aW5kZXh9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1Njcm9sbEFyZWE+XG4gICAgPC9Tb3J0YWJsZUNvbnRleHQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBdG9tVmFsdWUiLCJSZWFjdCIsIkRyYWdnYWJsZUNhcmQiLCJhY3RpdmVCbG9ja3NBdG9tIiwiU29ydGFibGVDb250ZXh0IiwiU3RhY2siLCJTY3JvbGxBcmVhIiwiRWRpdG9yQ29sdW1uVGFiUGFuZWwiLCJwcm9wcyIsImJsb2NrSWRzIiwiaXRlbXMiLCJzeCIsInRoZW1lIiwiaGVpZ2h0IiwicGFkZGluZyIsInNwYWNpbmciLCJzbSIsImZuIiwibGFyZ2VyVGhhbiIsIm1hcCIsImRhdGEiLCJpbmRleCIsImlkIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/editor/PreviewColumnTab/EditorColumnTabPanel.tsx\n");

/***/ })

};
;