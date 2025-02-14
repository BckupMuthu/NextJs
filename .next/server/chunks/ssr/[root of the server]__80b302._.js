module.exports = {

"[externals]/react-spinning-wheel [external] (react-spinning-wheel, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("react-spinning-wheel", () => require("react-spinning-wheel"));

module.exports = mod;
}}),
"[project]/pages/Spinner.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_import__("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_import__("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$spinning$2d$wheel__$5b$external$5d$__$28$react$2d$spinning$2d$wheel$2c$__cjs$29$__ = __turbopack_import__("[externals]/react-spinning-wheel [external] (react-spinning-wheel, cjs)");
;
;
;
;
const Spinner = ({ onGameFinish })=>{
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [spinning, setSpinning] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$spinning$2d$wheel__$5b$external$5d$__$28$react$2d$spinning$2d$wheel$2c$__cjs$29$__["default"], {
                segments: segments,
                spin: spinning,
                onComplete: ()=>console.log("Spin complete!")
            }, void 0, false, {
                fileName: "[project]/pages/Spinner.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = Spinner;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__80b302._.js.map