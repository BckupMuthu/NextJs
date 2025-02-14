module.exports = {

"[project]/pages/spinner.js [ssr] (ecmascript, async loader)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__((__turbopack_import__) => {
    return Promise.all([
  "server/chunks/ssr/[root of the server]__f78f4e._.js",
  {
    "path": "server/chunks/ssr/node_modules_react-spinning-wheel_dist_style_c93acb.css",
    "included": [
      "[project]/node_modules/react-spinning-wheel/dist/style.css [ssr] (css)"
    ],
    "moduleChunks": [
      "server/chunks/ssr/node_modules_react-spinning-wheel_dist_style_f42186.css"
    ]
  }
].map((chunk) => __turbopack_load__(chunk))).then(() => {
        return __turbopack_import__("[project]/pages/spinner.js [ssr] (ecmascript)");
    });
});
}}),

};