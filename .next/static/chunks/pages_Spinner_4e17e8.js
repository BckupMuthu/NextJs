(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/pages_Spinner_4e17e8.js", {

"[project]/pages/Spinner.js [client] (ecmascript)": ((__turbopack_context__) => {
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
const Spinner = ({ onGameFinish })=>{
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spinning, setSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Spinner.useEffect": ()=>{
            setIsClient(true);
        }
    }["Spinner.useEffect"], []);
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
    const handleSpinClick = ()=>{
        setSpinning(true);
        setTimeout(()=>{
            setSpinning(false);
            const wonAmount = Math.random() * 100; // Random prize amount
            onGameFinish(wonAmount); // Callback to handle game finish
        }, 3000); // Simulate spin duration
    };
    if (!isClient) return null; // Only render on the client
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinning$2d$wheel$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                segments: segments,
                spin: spinning,
                onComplete: ()=>console.log("Spin complete!")
            }, void 0, false, {
                fileName: "[project]/pages/Spinner.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSpinClick,
                className: "mt-6 p-2 bg-blue-500 text-white rounded-lg",
                children: "Spin"
            }, void 0, false, {
                fileName: "[project]/pages/Spinner.js",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/Spinner.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(Spinner, "rlgxACUoanf58rt3cRkysAKLz0g=");
_c = Spinner;
const __TURBOPACK__default__export__ = Spinner;
var _c;
__turbopack_refresh__.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=pages_Spinner_4e17e8.js.map