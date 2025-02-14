(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/pages_spinner_4fb4ae.js", {

"[project]/pages/spinner.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinning$2d$wheel$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-spinning-wheel/dist/index.js [client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const spinner = ({ onGameFinish })=>{
    _s();
    console.log("Spinner is rendered!"); // Check if the spinner component is rendering
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false); // State to track if we are in the client-side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "spinner.useEffect": ()=>{
            setIsClient(true);
        }
    }["spinner.useEffect"], []);
    if (!isClient) return null;
    const segments = [
        {
            option: "Prize 1",
            id: "prize1"
        },
        {
            option: "Prize 2",
            id: "prize2"
        },
        {
            option: "Prize 3",
            id: "prize3"
        },
        {
            option: "Prize 4",
            id: "prize4"
        },
        {
            option: "Prize 5",
            id: "prize5"
        }
    ];
    const [spinning, setSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSpinClick = ()=>{
        setSpinning(true);
        setTimeout(()=>{
            setSpinning(false);
            const wonAmount = Math.random() * 100;
            onGameFinish(wonAmount);
        }, 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinning$2d$wheel$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                segments: segments,
                spin: spinning,
                onComplete: ()=>console.log("Spin complete!")
            }, void 0, false, {
                fileName: "[project]/pages/spinner.js",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSpinClick,
                className: "mt-6 p-2 bg-blue-500 text-white rounded-lg",
                children: "Spin"
            }, void 0, false, {
                fileName: "[project]/pages/spinner.js",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/spinner.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_s(spinner, "knnKKhEG6Y0e7PL78TB8G5x+VP4=");
const __TURBOPACK__default__export__ = spinner;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=pages_spinner_4fb4ae.js.map