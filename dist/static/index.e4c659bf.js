// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"47WRQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6ea89786e4c659bf";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3kePc":[function(require,module,exports) {
var _app = require("./view/app");
document.body.innerHTML = "";
document.body.appendChild((0, _app.App)());

},{"./view/app":"dmiUC"}],"dmiUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App);
var _spredDom = require("spred-dom");
var _routing = require("../model/routing");
var _hostView = require("./components/host-view/host-view");
var _mainView = require("./components/main-view/main-view");
var _playerView = require("./components/player-view/player-view");
const App = (0, _spredDom.component)(()=>{
    return (0, _spredDom.h)(()=>{
        (0, _spredDom.node)(()=>{
            switch((0, _routing.route)()){
                case "HOST":
                    return (0, _hostView.HostView)();
                case "PLAY":
                    return (0, _playerView.PlayerView)();
                default:
                    return (0, _mainView.MainView)();
            }
        });
    });
});

},{"spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components/host-view/host-view":"0A4D3","./components/main-view/main-view":"6eCn6","./components/player-view/player-view":"iTlax","../model/routing":"8aT8g"}],"dR8Fz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classes", ()=>classes);
parcelHelpers.export(exports, "component", ()=>component);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "node", ()=>node);
parcelHelpers.export(exports, "templateFn", ()=>templateFn);
parcelHelpers.export(exports, "text", ()=>text);
var _spred = require("spred");
const creatingState = {
    root: null,
    isCreating: false,
    path: "",
    setupQueue: []
};
const traversalState = {
    path: "",
    i: 0,
    node: null
};
const FIRST_CHILD = "F";
const NEXT_SIBLING = "N";
const PARENT_NODE = "P";
const BINDING = "B";
const START_CHILDREN = ">";
const END_CHILDREN = "<";
function next(fn) {
    const current = traversalState.path[traversalState.i];
    const nextValue = traversalState.path[++traversalState.i];
    const goDeeper = nextValue === START_CHILDREN;
    switch(current){
        case FIRST_CHILD:
            traversalState.node = traversalState.node.firstChild;
            break;
        case NEXT_SIBLING:
            traversalState.node = traversalState.node.nextSibling;
            break;
        case PARENT_NODE:
            traversalState.node = traversalState.node.parentNode;
            next(fn);
            break;
    }
    if (goDeeper && fn) {
        ++traversalState.i;
        fn();
    }
}
function insertBefore(child, mark, parentNode) {
    const parent = parentNode || mark.parentNode;
    parent.insertBefore(child, mark);
}
function removeNodes(start, end, parentNode) {
    const parent = parentNode || start.parentNode;
    let current = start;
    let next = null;
    while(current && current !== end){
        next = current.nextSibling;
        parent.removeChild(current);
        current = next;
    }
}
function isFragment(node) {
    return node.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function createMark() {
    return document.createTextNode("");
}
function isMark(node) {
    return node && node.nodeType === Node.TEXT_NODE && !node.textContent;
}
function setupSignalProp(node, key, signal) {
    signal.subscribe((value)=>node[key] = value);
}
function setupAttr(node, key, value) {
    if (typeof value === "function") {
        setupSignalAttr(node, key, (0, _spred.isSignal)(value) ? value : (0, _spred.memo)(value));
        return true;
    }
    if (creatingState.isCreating) setupBaseAttr(node, key, value);
}
function setupBaseAttr(node, key, value) {
    if (value === true || value === "") value = "";
    else if (!value) {
        node.removeAttribute(key);
        return;
    }
    node.setAttribute(key, value);
}
function setupSignalAttr(node, key, value) {
    value.subscribe((v)=>setupBaseAttr(node, key, v));
}
function createBinding(cb) {
    if (creatingState.isCreating) {
        const mark = createMark();
        creatingState.path += FIRST_CHILD + BINDING + PARENT_NODE;
        creatingState.root.appendChild(mark);
        cb(mark);
        return;
    }
    next();
    const mark1 = traversalState && traversalState.node;
    cb(mark1);
    next();
}
function node(binding) {
    createBinding((mark)=>{
        if (creatingState.isCreating) {
            creatingState.setupQueue.push(()=>setupNode(binding, mark));
            return;
        }
        setupNode(binding, mark);
    });
}
function setupNode(binding, mark) {
    if (!mark || !binding) return;
    if (typeof binding === "function") {
        if ((0, _spred.isSignal)(binding)) {
            setupSignalNode(binding, mark);
            return;
        }
        setupSignalNode((0, _spred.memo)(binding), mark);
        return;
    }
    insertBefore(binding, mark);
}
function setupSignalNode(binding, mark) {
    let start = mark.previousSibling;
    if (!start) {
        start = createMark();
        insertBefore(start, mark);
    }
    binding.subscribe((node)=>{
        removeNodes(start.nextSibling, mark);
        if (node) insertBefore(node, mark);
    });
}
function component(fn) {
    let template = null;
    let pathString = "";
    return function(...args) {
        if (!template) {
            const prevSetupQueue = creatingState.setupQueue;
            creatingState.setupQueue = [];
            const data = createComponentData(fn, args);
            pathString = data.pathString;
            template = data.rootNode.cloneNode(true);
            for (let fn1 of creatingState.setupQueue)fn1();
            creatingState.setupQueue = prevSetupQueue;
            return data.rootNode;
        }
        const rootNode = template.cloneNode(true);
        setupComponent(fn, args, rootNode, pathString);
        return rootNode;
    };
}
function templateFn(component) {
    return (...args)=>node(component(...args));
}
function setupComponent(fn, args, container, pathString) {
    const prevIsCreating = creatingState.isCreating;
    const prevPath = traversalState.path;
    const prevIndex = traversalState.i;
    const prevNode = traversalState.node;
    creatingState.isCreating = false;
    traversalState.path = pathString;
    traversalState.i = 0;
    traversalState.node = container;
    (0, _spred.isolate)(fn, args);
    creatingState.isCreating = prevIsCreating;
    traversalState.path = prevPath;
    traversalState.i = prevIndex;
    traversalState.node = prevNode;
}
function createComponentData(fn, args) {
    const prevPath = creatingState.path;
    creatingState.path = "";
    const prevRoot = creatingState.root;
    let rootNode = document.createDocumentFragment();
    creatingState.root = rootNode;
    const prevIsCreating = creatingState.isCreating;
    creatingState.isCreating = true;
    (0, _spred.isolate)(fn, args);
    let pathString = getPathString(creatingState.path);
    creatingState.isCreating = prevIsCreating;
    creatingState.path = prevPath;
    creatingState.root = prevRoot;
    if (rootNode.childNodes.length === 1 && !isMark(rootNode.firstChild)) {
        rootNode = rootNode.firstChild;
        if (pathString[0] === FIRST_CHILD) pathString = "_" + pathString.substring(1);
    }
    return {
        rootNode,
        pathString
    };
}
const NEXT_SIBLING_REGEX = new RegExp(PARENT_NODE + FIRST_CHILD, "g");
const EMPTY_NESTING_REGEX = new RegExp(`${START_CHILDREN}[^${BINDING}${START_CHILDREN}${END_CHILDREN}]*${END_CHILDREN}`, "g");
const END_CHILDREN_REGEX = new RegExp(END_CHILDREN, "g");
const EMPTY_TAIL = new RegExp(`[^${BINDING}]+$`, "g");
const PARENT_NODE_REGEX = new RegExp(`${NEXT_SIBLING}+${PARENT_NODE}`, "g");
function getPathString(str) {
    str = str.replace(NEXT_SIBLING_REGEX, NEXT_SIBLING);
    let prev = "";
    while(prev !== str){
        prev = str;
        str = str.replace(EMPTY_NESTING_REGEX, "");
    }
    str = str.replace(EMPTY_TAIL, "").replace(END_CHILDREN_REGEX, "").replace(PARENT_NODE_REGEX, PARENT_NODE);
    return str;
}
function classes() {
    const result = fromArray(arguments);
    if (typeof result === "function") return (0, _spred.memo)(result);
    return result;
}
function fromObject(obj) {
    let dynamic;
    let result = "";
    for(let key in obj){
        const value = obj[key];
        if (value) {
            if (typeof value === "function") {
                if (!dynamic) dynamic = [];
                dynamic.push(key);
                continue;
            }
            if (result) result += " ";
            result += key;
        }
    }
    if (dynamic) return ()=>{
        let dynamicResult = result;
        for (let key of dynamic){
            const value = obj[key]();
            if (!value) continue;
            if (dynamicResult) dynamicResult += " ";
            dynamicResult += key;
        }
        return dynamicResult;
    };
    return result || null;
}
function fromArray(arr) {
    let result = "";
    let dynamic;
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        if (!item) continue;
        if (typeof item === "object") item = Array.isArray(item) ? fromArray(item) : fromObject(item);
        if (item) {
            const itemType = typeof item;
            if (itemType === "function") {
                if (!dynamic) dynamic = [];
                dynamic.push(item);
            } else if (itemType === "string") {
                if (result) result += " ";
                result += item;
            }
        }
    }
    if (dynamic) return ()=>{
        let dynamicResult = result;
        for (let fn of dynamic){
            const add = fn();
            if (add && typeof add === "string") {
                if (dynamicResult) dynamicResult += " ";
                dynamicResult += add;
            }
        }
        return dynamicResult || null;
    };
    return result || null;
}
function spec(props, fn) {
    if (!props || creatingState.isCreating && !creatingState.root) return;
    let node;
    let hasBindings = false;
    if (creatingState.isCreating) node = creatingState.root;
    else {
        if (traversalState.path[traversalState.i] !== BINDING) return;
        node = traversalState.node;
        next(fn);
    }
    for(let key in props){
        const reserved = RESERVED[key];
        let value = props[key];
        if (reserved) {
            const result = reserved(node, value);
            if (result) hasBindings = true;
            continue;
        }
        key = ALIASES[key] || key;
        if (typeof value === "function") {
            hasBindings = true;
            if (key[0] === "o" && key[1] === "n") {
                node[key] = value;
                continue;
            }
            setupSignalProp(node, key, (0, _spred.isSignal)(value) ? value : (0, _spred.memo)(value));
            continue;
        }
        if (creatingState.isCreating) node[key] = value;
    }
    if (hasBindings && creatingState.isCreating) creatingState.path += BINDING;
}
const RESERVED = {
    attrs (node, attrs) {
        let hasBindings = false;
        for(let key in attrs)hasBindings = setupAttr(node, key, attrs[key]) || hasBindings;
        return hasBindings;
    },
    class (node, value) {
        if (typeof value === "object") value = Array.isArray(value) ? fromArray(value) : fromObject(value);
        return setupAttr(node, "class", value);
    },
    ref (node, cb) {
        cb(node);
        return true;
    }
};
const ALIASES = {
    text: "textContent"
};
const TEMPLATE_RESULT = {
    // istanbul ignore next
    get __INTERNAL__ () {
        return "Dummy property used for correct type checking only";
    }
};
function h(first, second, third) {
    let props;
    let fn;
    let tag;
    switch(arguments.length){
        case 1:
            if (typeof first === "function") fn = first;
            else tag = first;
            break;
        case 2:
            tag = first;
            if (typeof second === "function") fn = second;
            else props = second;
            break;
        case 3:
            tag = first;
            props = second;
            fn = third;
            break;
    }
    if (!tag) {
        fn();
        return TEMPLATE_RESULT;
    }
    if (creatingState.isCreating) {
        const child = document.createElement(tag);
        creatingState.root.appendChild(child);
        creatingState.root = child;
        creatingState.path += FIRST_CHILD;
        spec(props);
        if (fn) {
            creatingState.path += START_CHILDREN;
            fn();
            creatingState.path += END_CHILDREN;
        }
        creatingState.path += PARENT_NODE;
        creatingState.root = creatingState.root.parentNode;
        return TEMPLATE_RESULT;
    }
    next(fn);
    spec(props, fn);
    return TEMPLATE_RESULT;
}
function text(data) {
    let node;
    if (creatingState.isCreating) {
        node = document.createTextNode("_");
        creatingState.root.appendChild(node);
    } else {
        next();
        node = traversalState.node;
    }
    if (typeof data === "function") {
        if (creatingState.isCreating) creatingState.path += FIRST_CHILD + BINDING + PARENT_NODE;
        else next();
        setupSignalProp(node, "textContent", (0, _spred.isSignal)(data) ? data : (0, _spred.memo)(data));
        return;
    }
    if (creatingState.isCreating) {
        creatingState.path += FIRST_CHILD + PARENT_NODE;
        node.textContent = data;
    }
}
function list(binding, mapFn) {
    if (creatingState.isCreating && creatingState.root) {
        const mark = createMark();
        creatingState.path += FIRST_CHILD + BINDING + PARENT_NODE;
        creatingState.setupQueue.push(()=>setupList(binding, mapFn, mark));
        creatingState.root.appendChild(mark);
        return;
    }
    next();
    setupList(binding, mapFn, traversalState.node);
    next();
}
function setupList(binding, mapFn, mark) {
    if ((0, _spred.isSignal)(binding)) {
        let start = mark.previousSibling;
        if (!start) {
            start = createMark();
            insertBefore(start, mark);
        }
        let oldArr = [];
        let nodeMap = new Map();
        let cleanupMap = new Map();
        // the algorithm is taken from
        // https://github.com/localvoid/ivi/blob/2c81ead934b9128e092cc2a5ef2d3cabc73cb5dd/packages/ivi/src/vdom/implementation.ts#L1366
        const arrSignal = (0, _spred.computed)(()=>{
            const newArr = binding();
            const parent = mark.parentNode;
            let oldLength = oldArr.length;
            let newLength = newArr.length;
            if (!newLength && !oldLength) return;
            const minLength = Math.min(oldLength, newLength);
            let s = 0; // start index
            let a = oldLength - 1; // old array end index
            let b = newLength - 1; // new array end index
            for(let i = 0; i < minLength; ++i){
                let shouldStop = 0;
                if (oldArr[s] === newArr[s]) ++s;
                else ++shouldStop;
                if (oldArr[a] === newArr[b]) --a, --b;
                else ++shouldStop;
                if (shouldStop === 2) break;
            }
            // lists are equal
            if (a < 0 && b < 0) return;
            // add nodes
            if (s > a) {
                const index = b + 1;
                const endNode = index === newLength ? mark : nodeMap.get(newArr[index]);
                while(s <= b){
                    insertBefore(createListNode(newArr[s], mapFn, nodeMap, cleanupMap), endNode, parent);
                    ++s;
                }
                oldArr = newArr;
                return;
            }
            // remove nodes
            if (s > b) {
                const endIndex = a + 1;
                const startNode = nodeMap.get(oldArr[s]);
                const endNode1 = endIndex === oldLength ? mark : nodeMap.get(oldArr[endIndex]);
                removeNodes(startNode, endNode1, parent);
                while(s < endIndex){
                    const el = oldArr[s++];
                    cleanupMap.get(el)();
                    cleanupMap.delete(el);
                    nodeMap.delete(el);
                }
                oldArr = newArr;
                return;
            }
            // reconcile
            const positions = [];
            const elementIndexMap = new Map();
            let removedCount = 0;
            let last = 0;
            let moved = false;
            oldLength = a + 1 - s;
            newLength = b + 1 - s;
            for(let i1 = 0; i1 < newLength; ++i1){
                const index1 = s + i1;
                positions[i1] = -1;
                elementIndexMap.set(newArr[index1], index1);
            }
            for(let i2 = 0; i2 < oldLength; ++i2){
                const oldIndex = s + i2;
                const el1 = oldArr[oldIndex];
                const newIndex = elementIndexMap.get(el1);
                if (newIndex === undefined) {
                    const node = nodeMap.get(el1);
                    const end = (node.$lc || node).nextSibling;
                    removeNodes(node, end, parent);
                    cleanupMap.get(el1)();
                    cleanupMap.delete(el1);
                    nodeMap.delete(el1);
                    removedCount++;
                    continue;
                }
                positions[newIndex - s] = oldIndex;
                if (!moved) {
                    if (last > newIndex) moved = true;
                    else last = newIndex;
                }
            }
            if (moved) {
                const lis = getLIS(positions);
                for(let i3 = 0, j = lis.length - 1; i3 < newLength; ++i3){
                    const position = positions[newLength - i3 - 1];
                    const lisPosition = lis[j];
                    if (position === lisPosition) {
                        --j;
                        continue;
                    }
                    const index2 = b - i3;
                    const el2 = newArr[index2];
                    const nextEl = newArr[index2 + 1];
                    const nextNode = nextEl === undefined //
                     ? mark : nodeMap.get(nextEl);
                    if (position < 0) insertBefore(createListNode(el2, mapFn, nodeMap, cleanupMap), nextNode, parent);
                    else {
                        const node1 = nodeMap.get(el2);
                        const lastChild = node1.$lc;
                        if (lastChild && node1 !== lastChild) {
                            let current = node1;
                            let next;
                            while(true){
                                next = current.nextSibling;
                                insertBefore(current, nextNode, parent);
                                if (current === lastChild) break;
                                current = next;
                            }
                        } else insertBefore(node1, nextNode, parent);
                    }
                }
            } else if (oldLength - removedCount !== newLength) for(let i4 = 0; i4 < newLength; ++i4){
                if (positions[newLength - i4 - 1] !== -1) continue;
                const index3 = b - i4;
                const el3 = newArr[index3];
                const nextEl1 = newArr[index3 + 1];
                const nextNode1 = nextEl1 === undefined //
                 ? mark : nodeMap.get(nextEl1);
                insertBefore(createListNode(el3, mapFn, nodeMap, cleanupMap), nextNode1, parent);
            }
            oldArr = newArr;
        });
        arrSignal.subscribe(NOOP);
        (0, _spred.onDeactivate)(arrSignal, ()=>{
            cleanupMap.forEach((cleanup)=>cleanup());
            cleanupMap.clear();
            nodeMap.clear();
        });
        return;
    }
    const parent = mark.parentNode;
    for (let el of binding)insertBefore(mapFn(el), mark, parent);
}
function getLIS(arr) {
    const arrLength = arr.length;
    const endIndexes = [];
    const predecessors = [];
    let lisLength = 0;
    for(let i = 0; i < arrLength; ++i){
        const el = arr[i];
        if (el < 0) continue;
        let lo = 1;
        let hi = lisLength + 1;
        while(lo < hi){
            const mid = lo + (0 | (hi - lo) / 2);
            if (arr[endIndexes[mid]] > el) hi = mid;
            else lo = mid + 1;
        }
        predecessors[i] = endIndexes[lo - 1];
        endIndexes[lo] = i;
        if (lo > lisLength) lisLength = lo;
    }
    const lis = [];
    let i1 = lisLength;
    let k = endIndexes[lisLength];
    while(i1){
        lis[--i1] = arr[k];
        k = predecessors[k];
    }
    return lis;
}
function createListNode(el, mapFn, nodeMap, cleanupMap) {
    let node;
    const cleanup = (0, _spred.collect)(()=>{
        node = mapFn(el);
    });
    let nodeInMap = node;
    if (isFragment(node)) {
        const firstChild = node.firstChild;
        nodeInMap = createMark();
        if (firstChild) node.insertBefore(nodeInMap, firstChild);
        else node.appendChild(nodeInMap);
        nodeInMap.$lc = node.lastChild;
    }
    nodeMap.set(el, nodeInMap);
    cleanupMap.set(el, cleanup);
    return node;
}
const NOOP = ()=>{};

},{"spred":"7ewWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ewWT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "batch", ()=>batch);
parcelHelpers.export(exports, "catcher", ()=>catcher);
parcelHelpers.export(exports, "collect", ()=>collect);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "configure", ()=>configure);
parcelHelpers.export(exports, "createLogger", ()=>createLogger);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "getValue", ()=>getValue);
parcelHelpers.export(exports, "isSignal", ()=>isSignal);
parcelHelpers.export(exports, "isStore", ()=>isStore);
parcelHelpers.export(exports, "isWritableSignal", ()=>isWritableSignal);
parcelHelpers.export(exports, "isolate", ()=>isolate);
parcelHelpers.export(exports, "memo", ()=>memo);
parcelHelpers.export(exports, "named", ()=>named);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "onActivate", ()=>onActivate);
parcelHelpers.export(exports, "onDeactivate", ()=>onDeactivate);
parcelHelpers.export(exports, "onException", ()=>onException);
parcelHelpers.export(exports, "onNotifyEnd", ()=>onNotifyEnd);
parcelHelpers.export(exports, "onNotifyStart", ()=>onNotifyStart);
parcelHelpers.export(exports, "onUpdate", ()=>onUpdate);
parcelHelpers.export(exports, "sampleValue", ()=>sampleValue);
parcelHelpers.export(exports, "signal", ()=>signal);
parcelHelpers.export(exports, "store", ()=>store);
parcelHelpers.export(exports, "watch", ()=>watch);
parcelHelpers.export(exports, "writable", ()=>writable);
const NOOP_FN = ()=>{};
const FALSE_STATUS = {
    status: false
};
function createSignalState(value, compute) {
    const parent = tracking || scope;
    const state = {
        value,
        compute,
        observers: new Set(),
        dirtyCount: 0,
        queueIndex: -1,
        subsCount: 0,
        oldDepsCount: 0,
        isCached: FALSE_STATUS
    };
    if (compute) state.dependencies = new Set();
    else state.nextValue = value;
    if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(state);
    }
    return state;
}
function freeze(state) {
    delete state.compute;
    delete state.observers;
    delete state.dependencies;
    delete state.dirtyCount;
    delete state.isCached;
    delete state.queueIndex;
    delete state.oldDepsCount;
    delete state.hasException;
    delete state.subsCount;
    delete state.isComputing;
}
const DEFAULT_CONFIG = {
    logException: /* istanbul ignore next */ (e)=>console.error(e),
    _log: NOOP_FN
};
const config = Object.assign({}, DEFAULT_CONFIG);
function configure(configUpdate) {
    Object.assign(config, configUpdate || DEFAULT_CONFIG);
    if (!config.logger) config._log = NOOP_FN;
    else config._log = config.logger;
}
const ERROR_NAME = "[SPRED ERROR]";
class CircularDependencyError extends Error {
    constructor(){
        super();
        this.name = ERROR_NAME;
        this.message = "Circular dependency detected";
    }
}
class StateTypeError extends Error {
    constructor(){
        super();
        this.name = ERROR_NAME;
        this.message = "State data must be a plain object or an array or a primitive";
    }
}
let tracking = null;
let scope = null;
let batchLevel = 0;
let calcLevel = 0;
let queue = [];
let queueLength = 0;
let fullQueueLength = 0;
let depth = 0;
let cacheStatus = {
    status: true
};
function isolate(fn, args) {
    const prevCacheStatus = cacheStatus;
    const prevDepth = depth;
    const prevTracking = tracking;
    const prevScope = scope;
    let result;
    if (tracking) scope = tracking;
    tracking = null;
    depth = 0;
    if (args) result = fn(...args);
    else result = fn();
    cacheStatus = prevCacheStatus;
    depth = prevDepth;
    tracking = prevTracking;
    scope = prevScope;
    return result;
}
function collect(fn) {
    const prevCacheStatus = cacheStatus;
    const prevDepth = depth;
    const prevTracking = tracking;
    const prevScope = scope;
    const fakeState = {};
    scope = fakeState;
    tracking = null;
    depth = 0;
    fn();
    cacheStatus = prevCacheStatus;
    depth = prevDepth;
    tracking = prevTracking;
    scope = prevScope;
    return ()=>cleanupChildren(fakeState);
}
/**
 * Commits all writable signal updates inside the passed function as a single transaction.
 * @param fn The function with updates.
 */ function batch(fn) {
    batchLevel++;
    fn();
    batchLevel--;
    recalc();
}
function update$1(state, value) {
    if (arguments.length > 1) {
        if (typeof value === "function") state.nextValue = value(state.nextValue);
        else state.nextValue = value;
    } else if (state.compute) state.dirtyCount++;
    state.queueIndex = queueLength - fullQueueLength;
    queueLength = queue.push(state);
    recalc();
    return state.nextValue;
}
function addSubscriber(signal, subscriber, exec) {
    const state = signal._state;
    if (state.observers && state.observers.has(subscriber)) return;
    const value = getStateValue(state, true);
    if (!state.observers) {
        if (exec) subscriber(value, true);
        return;
    }
    activateDependencies(state);
    state.observers.add(subscriber);
    state.subsCount++;
    if (exec) isolate(()=>subscriber(value, true));
}
function removeSubscriber(signal, subscriber) {
    const state = signal._state;
    if (state.observers.delete(subscriber)) {
        state.subsCount--;
        deactivateDependencies(state);
    }
}
function resetStateQueueParams(state) {
    state.dirtyCount = 0;
    state.queueIndex = -1;
}
function emitUpdateLifecycle(state, value) {
    logHook(state, "UPDATE", value);
    if (!state.onUpdate) return;
    state.onUpdate({
        value: value,
        prevValue: state.value
    });
}
/**
 * Immediately calculates the updated values of the signals and notifies their subscribers.
 */ function recalc() {
    if (!queueLength || calcLevel || batchLevel) return;
    const notificationQueue = [];
    calcLevel++;
    for(let i = 0; i < queueLength; i++){
        const state = queue[i];
        if (state.queueIndex !== i || !state.observers) continue;
        state.hasException = false;
        for (let dependant of state.observers){
            if (typeof dependant === "function") continue;
            dependant.queueIndex = queueLength;
            dependant.dirtyCount++;
            queueLength = queue.push(dependant);
        }
    }
    fullQueueLength = queueLength;
    for(let i1 = 0; i1 < fullQueueLength; i1++){
        const state1 = queue[i1];
        if (state1.queueIndex !== i1) continue;
        if (!state1.compute) {
            const value = state1.nextValue;
            const shouldUpdate = value !== undefined;
            if (shouldUpdate) {
                emitUpdateLifecycle(state1, value);
                state1.value = value;
                notificationQueue.push(state1);
            }
            resetStateQueueParams(state1);
            continue;
        }
        if (!state1.observers.size) {
            resetStateQueueParams(state1);
            continue;
        }
        if (state1.hasException) {
            state1.dirtyCount = 0;
            logHook(state1, "EXCEPTION");
            if (state1.onException) state1.onException(state1.exception);
            if (state1.subsCount) config.logException(state1.exception);
        }
        if (!state1.dirtyCount) {
            decreaseDirtyCount(state1);
            resetStateQueueParams(state1);
            continue;
        }
        const value1 = calcComputed(state1, true);
        if (value1 !== undefined) {
            emitUpdateLifecycle(state1, value1);
            state1.value = value1;
            notificationQueue.push(state1);
        } else decreaseDirtyCount(state1);
        resetStateQueueParams(state1);
    }
    calcLevel--;
    queue = queue.slice(fullQueueLength);
    queueLength = queue.length;
    fullQueueLength = queueLength;
    notify(notificationQueue);
    recalc();
}
function notify(notificationQueue) {
    const wrapper = config._notificationWrapper;
    batchLevel++;
    isolate(()=>{
        if (wrapper) wrapper(()=>{
            for (let state of notificationQueue)runSubscribers(state);
        });
        else for (let state of notificationQueue)runSubscribers(state);
    });
    batchLevel--;
}
function decreaseDirtyCount(state) {
    for (let dependant of state.observers){
        if (typeof dependant === "function") continue;
        if (state.hasException && dependant.isCatcher) continue;
        dependant.dirtyCount--;
        if (state.hasException && !dependant.hasException) {
            dependant.hasException = true;
            dependant.exception = state.exception;
        }
    }
}
function runSubscribers(state) {
    let i = state.subsCount;
    if (!i) return;
    logHook(state, "NOTIFY_START");
    if (state.onNotifyStart) state.onNotifyStart(state.value);
    for (let subscriber of state.observers){
        if (!i) break;
        if (typeof subscriber !== "function") continue;
        subscriber(state.value);
        --i;
    }
    logHook(state, "NOTIFY_END");
    if (state.onNotifyEnd) state.onNotifyEnd(state.value);
}
function getStateValue(state, notTrackDeps) {
    if (state.isComputing || state.hasCycle) {
        state.hasCycle = true;
        config.logException(new CircularDependencyError());
        return state.value;
    }
    if (state.compute && !state.observers.size && !state.isCached.status) {
        const value = calcComputed(state, false, notTrackDeps);
        if (value !== undefined) state.value = value;
    }
    if (tracking && !notTrackDeps && state.observers) {
        if (state.hasException && !tracking.hasException && !tracking.isCatcher) {
            tracking.exception = state.exception;
            tracking.hasException = true;
        }
        const isNewDep = !tracking.dependencies.delete(state);
        tracking.dependencies.add(state);
        --tracking.oldDepsCount;
        if (isNewDep) {
            if (tracking.observers.size) {
                activateDependencies(state);
                state.observers.add(tracking);
            }
        }
    }
    if (state.compute && !state.dependencies.size) freeze(state);
    return state.value;
}
function calcComputed(state, scheduled, logException) {
    const prevTracking = tracking;
    let value;
    push(state);
    try {
        value = state.compute(state.value, scheduled);
    } catch (e) {
        state.exception = e;
        state.hasException = true;
    }
    let i = state.oldDepsCount;
    for (let dependency of state.dependencies){
        if (i <= 0) break;
        state.dependencies.delete(dependency);
        dependency.observers.delete(state);
        deactivateDependencies(dependency);
        --i;
    }
    pop(prevTracking);
    if (state.hasException) {
        logHook(state, "EXCEPTION");
        if (state.onException) state.onException(state.exception);
        if (logException || state.subsCount || !state.observers.size && !tracking) config.logException(state.exception);
    }
    return value;
}
function activateDependencies(state) {
    if (!state.observers || state.observers.size) return;
    logHook(state, "ACTIVATE");
    if (state.onActivate) state.onActivate(state.value);
    if (!state.dependencies) return;
    for (let dependency of state.dependencies){
        activateDependencies(dependency);
        dependency.observers.add(state);
    }
}
function deactivateDependencies(state) {
    if (!state.observers || state.observers.size) return;
    logHook(state, "DEACTIVATE");
    if (state.$d) state.$d(state.value);
    if (state.onDeactivate) state.onDeactivate(state.value);
    if (!state.dependencies) return;
    for (let dependency of state.dependencies){
        dependency.observers.delete(state);
        deactivateDependencies(dependency);
    }
}
function push(state) {
    cleanupChildren(state);
    if (!state.observers.size) {
        if (!depth) cacheStatus = {
            status: true
        };
        ++depth;
    }
    tracking = state;
    tracking.isComputing = true;
    tracking.isCached = FALSE_STATUS;
    tracking.oldDepsCount = state.dependencies.size;
    tracking.hasException = false;
    return tracking;
}
function pop(state) {
    tracking.isComputing = false;
    tracking.isCached = cacheStatus;
    if (depth) --depth;
    if (!depth) cacheStatus.status = false;
    tracking = state;
    return tracking;
}
function cleanupChildren(state) {
    if (state.children && state.children.length) {
        for (let child of state.children)if (typeof child === "function") child();
        else cleanupChildren(child);
        state.children = [];
    }
}
function logHook(state, hook, value) {
    if (!state.name) return;
    let payload = state.value;
    if (hook === "EXCEPTION") payload = state.exception;
    else if (hook === "UPDATE") payload = {
        prevValue: state.value,
        value
    };
    config._log(state.name, hook, payload);
}
const signalProto = {
    get () {
        return getStateValue(this._state);
    },
    subscribe (subscriber, exec = true) {
        addSubscriber(this, subscriber, exec);
        if (!this._state.observers) return NOOP_FN;
        const unsub = ()=>removeSubscriber(this, subscriber);
        const parent = tracking || scope;
        if (parent) {
            if (!parent.children) parent.children = [];
            parent.children.push(unsub);
        }
        return unsub;
    },
    sample () {
        return getStateValue(this._state, true);
    }
};
const writableSignalProto = Object.assign(Object.assign({}, signalProto), {
    set (value) {
        return update$1(this._state, value);
    },
    notify () {
        return update$1(this._state);
    }
});
function writableSelf(value) {
    if (!arguments.length) return getStateValue(this);
    return update$1(this, value);
}
function writable(value) {
    const state = createSignalState(value, undefined);
    const writable = writableSelf.bind(state);
    writable._state = state;
    writable.constructor = writable;
    writable.set = writableSignalProto.set;
    writable.get = writableSignalProto.get;
    writable.notify = writableSignalProto.notify;
    writable.subscribe = writableSignalProto.subscribe;
    writable.sample = writableSignalProto.sample;
    return writable;
}
/**
 * Sets the activate event listener. The event is emitted at the first subscription or at the first activation of a dependent signal.
 * @param signal Target signal.
 * @param listener Function that listens to the signal activation event.
 */ function onActivate(signal, listener) {
    signal._state.onActivate = listener;
}
/**
 * Sets the deactivate event listener. The event is emitted when there are no subscribers or active dependent signals left.
 * @param signal Target signal.
 * @param listener Function that listens to the signal deactivation event.
 */ function onDeactivate(signal, listener) {
    signal._state.onDeactivate = listener;
}
/**
 * Sets the update event listener. The event is emitted every time the signal value is updated.
 * @param signal Target signal.
 * @param listener Function that listens to the signal update event.
 */ function onUpdate(signal, listener) {
    signal._state.onUpdate = listener;
}
/**
 * Sets the update exception handler. The event is emitted for every unhandled exception in the calculation of the signal value.
 * @param signal Target signal.
 * @param listener Function that listens to the signal exception event.
 */ function onException(signal, listener) {
    signal._state.onException = listener;
}
/**
 * Sets the notify start event listener. The event is emitted before signal subscribers are notified.
 * @param signal Target signal.
 * @param listener Function that listens to the signal notification start event.
 */ function onNotifyStart(signal, listener) {
    signal._state.onNotifyStart = listener;
}
/**
 * Sets the notify start event listener. The event is emitted after signal subscribers are notified.
 * @param signal Target signal.
 * @param listener Function that listens to the signal notification start event.
 */ function onNotifyEnd(signal, listener) {
    signal._state.onNotifyEnd = listener;
}
function isSignal(value) {
    return value._state && value.get;
}
function isWritableSignal(value) {
    return isSignal(value) && value.set;
}
function isStore(value) {
    return isSignal(value) && value.update;
}
function getValue(value) {
    return isSignal(value) ? value() : value;
}
function sampleValue(value) {
    return isSignal(value) ? value.sample() : value;
}
function computedSelf() {
    return getStateValue(this);
}
/**
 * Creates a signal that automatically calculates its value from other signals.
 * @param compute The function that calculates the signal value and returns it.
 * @returns Computed signal.
 */ function computed(compute) {
    const getValue = isWritableSignal(compute) ? ()=>compute() : compute;
    const state = createSignalState(undefined, getValue);
    const computed = computedSelf.bind(state);
    computed._state = state;
    computed.constructor = computed;
    computed.get = signalProto.get;
    computed.subscribe = signalProto.subscribe;
    computed.sample = signalProto.sample;
    return computed;
}
/**
 * Creates a computed signal that triggers its dependants and subscribers only if its value changes.
 * @param compute The function that calculates the signal value and returns it.
 * @param equals The function that checks if the new value is equal to the previous value. Defaults to Object.is.
 * @returns Computed signal.
 */ function memo(compute, equals) {
    const check = equals || Object.is;
    const getValue = isWritableSignal(compute) ? ()=>compute() : compute;
    const comp = computed((prevValue, scheduled)=>{
        const value = getValue(prevValue, scheduled);
        if (prevValue === undefined || !check(value, prevValue)) return value;
        return undefined;
    });
    return comp;
}
const STOP = {};
let VALUES_CACHE = {};
let counter = 1;
function isPlainObject(obj) {
    const proto = Object.getPrototypeOf(obj);
    return proto && proto.constructor === Object;
}
function isArray(obj) {
    return Array.isArray(obj);
}
function copy(obj) {
    if (isArray(obj)) return obj.slice();
    if (obj && typeof obj === "object") {
        if (isPlainObject(obj)) return Object.assign({}, obj);
        throw new StateTypeError();
    }
    return obj;
}
function getClone(id, state, value) {
    const cached = VALUES_CACHE[id];
    if (cached !== undefined) return cached;
    return copy(arguments.length === 3 ? value : state.sample());
}
function clearValuesCache() {
    VALUES_CACHE = {};
}
function update(arg1, arg2) {
    let updateFn;
    if (arguments.length === 2) {
        updateChild(this, arg1, arg2);
        return;
    } else updateFn = arg1;
    const setter = this._setter;
    const id = this._id;
    const key = this._key;
    const parent = this._parent;
    let value;
    if (typeof updateFn !== "function") value = updateFn;
    else {
        const clone = getClone(id, this);
        const next = updateFn(clone);
        if (next === STOP) return;
        value = next === undefined ? clone : next;
    }
    VALUES_CACHE[id] = value;
    if (setter) {
        setter(value);
        return;
    }
    parent.update((parentValue)=>{
        if (!parentValue) return STOP;
        parentValue[key] = value;
    });
}
function updateChild(self, key, arg) {
    self.update((state)=>{
        if (!state) return STOP;
        const id = self._id + "." + key;
        let value;
        if (typeof arg !== "function") value = arg;
        else {
            const clone = getClone(id, undefined, state[key]);
            const next = arg(clone);
            value = next === undefined ? clone : next;
        }
        VALUES_CACHE[id] = value;
        state[key] = value;
    });
}
function select(key) {
    const id = this._id + "." + key;
    const store = memo(()=>{
        const parentValue = this();
        const value = parentValue && parentValue[key];
        if (value === undefined) return null;
        return value;
    });
    store._id = id;
    store._key = key;
    store._parent = this;
    store.select = select;
    store.update = update;
    return store;
}
function store(initialState) {
    const id = "store" + counter++;
    const setter = writable(initialState);
    const store = memo(setter);
    store._setter = setter;
    store._id = id;
    store.select = select;
    store.update = update;
    onUpdate(setter, clearValuesCache);
    return store;
}
/**
 * Calls the passed function immediately and every time the signals it depends on are updated.
 * @param fn A function to watch for.
 * @returns Stop watching function.
 */ function watch(fn) {
    const comp = isSignal(fn) ? fn : computed(fn);
    return comp.subscribe(NOOP_FN);
}
/**
 * Creates a tuple of signal and setter function
 * @param initialValue
 * @returns A tuple of signal and setter function
 */ function signal(initialValue) {
    const source = writable(initialValue);
    const signal = computed(source);
    function set(payload) {
        if (!arguments.length) return source({});
        return source(payload);
    }
    return [
        signal,
        set
    ];
}
/**
 * Subscribes the function to updates of the signal value.
 * @param signal Signal.
 * @param subscriber Function that listens to the signal updates.
 * @returns Unsubscribe function.
 */ function on(signal, subscriber) {
    return signal.subscribe(subscriber, false);
}
function named(signal, name) {
    signal._state.name = name;
    return signal;
}
/**
 * Creates an effect from asynchronous function.
 * @param asyncFn Asynchronous function
 * @returns Effect.
 */ function effect(asyncFn, name) {
    let counter = 0;
    let current = -1;
    const _status = writable("pristine");
    const _exception = writable();
    const _data = writable();
    const _aborted = writable();
    const _args = writable();
    const lastStatus = memo(()=>{
        const status = _status();
        return status === "pending" ? undefined : status;
    });
    lastStatus.subscribe(NOOP_FN);
    const status = memo(()=>{
        const value = _status();
        return {
            value,
            pristine: value === "pristine",
            pending: value === "pending",
            fulfilled: value === "fulfilled",
            rejected: value === "rejected",
            settled: value === "fulfilled" || value === "rejected"
        };
    }, (status, prevStatus)=>{
        return status.value === prevStatus.value;
    });
    const exception = computed(_exception);
    const done = computed(()=>{
        const data = _data();
        const exception = _exception();
        switch(_status.sample()){
            case "pristine":
            case "fulfilled":
                return data;
            case "rejected":
                return exception;
        }
    });
    const data = computed(_data);
    const aborted = computed(_aborted);
    const args = computed(_args);
    const abort = ()=>{
        if (!status.sample().pending) return;
        logEvent(name, "ABORT");
        batch(()=>{
            _status(lastStatus());
            _aborted({});
        });
        counter++;
    };
    const reset = ()=>{
        if (status.sample().pristine) return;
        logEvent(name, "RESET");
        batch(()=>{
            if (status().pending) _aborted({});
            _status("pristine");
        });
        counter++;
    };
    const exec = (id, ...args)=>{
        return asyncFn(...args).then((res)=>{
            current = id;
            return res;
        }).catch((e)=>{
            current = id;
            throw e;
        });
    };
    const call = (...args)=>{
        logEvent(name, "CALL", args);
        if (_status.sample() === "pending") _aborted({});
        _args(args);
        _status("pending");
        return exec(++counter, ...args).then((v)=>{
            if (current !== counter) return v;
            batch(()=>{
                _data(v);
                _status("fulfilled");
            });
            return v;
        }).catch((e)=>{
            if (current !== counter) throw e;
            batch(()=>{
                _exception(e);
                _status("rejected");
            });
            throw e;
        });
    };
    if (name) {
        named(data, name + ".data");
        named(exception, name + ".exception");
        named(done, name + ".done");
        named(aborted, name + ".aborted");
        named(args, name + ".args");
        named(status, name + ".status");
    }
    return {
        data,
        exception,
        done,
        aborted,
        args,
        status,
        call,
        abort,
        reset
    };
}
function logEvent(effectName, eventName, payload) {
    if (!effectName) return;
    config._log(effectName, eventName, payload);
}
/**
 * Creates a computed signal that handles exceptions that occur during computations.
 * @param compute The function that calculates the signal value and returns it.
 * @param handle The function that handles an exception and returns the new signal value.
 * @returns Computed signal.
 */ function catcher(compute, handle) {
    const getValue = isSignal(compute) ? compute : computed(compute);
    const comp = computed((prevValue)=>{
        const value = getValue();
        const state = getValue._state;
        if (state.hasException) return handle(state.exception, prevValue);
        return value;
    });
    comp._state.isCatcher = true;
    return comp;
}
function createLogger(opts) {
    const include = opts && opts.include;
    const exclude = opts && opts.exclude;
    function log(unitName, ...rest) {
        console.log(`%c[${unitName}]%c`, "font-weight: bold", "font-weight: normal", ...rest);
    }
    function createLogFn() {
        return (unitName, ...rest)=>{
            let shouldLog = true;
            if (include) shouldLog = include.includes(rest[0]);
            if (exclude) shouldLog = shouldLog && !exclude.includes(rest[0]);
            if (shouldLog) log(unitName, ...rest);
        };
    }
    return createLogFn();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"0A4D3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HostView", ()=>HostView);
var _hostViewModuleScss = require("./host-view.module.scss");
var _spredDom = require("spred-dom");
var _spred = require("spred");
var _hostController = require("../../../model/host-controller");
var _routing = require("../../../model/routing");
var _hostLobby = require("../host-lobby/host-lobby");
var _loadingScreen = require("../../ui/loading-screen/loading-screen");
var _gameStage = require("../../../../common/game-stage");
var _hostQuestion = require("../host-question/host-question");
const HostView = (0, _spredDom.component)(()=>{
    const controllerSignal = (0, _spred.computed)(()=>new (0, _hostController.HostController)((0, _routing.roomId)()));
    const state = (0, _spred.computed)(()=>controllerSignal().state());
    return (0, _spredDom.h)("div", {
        class: _hostViewModuleScss.container
    }, ()=>{
        (0, _spredDom.node)(()=>{
            const controller = controllerSignal();
            if (controller.loading()) return (0, _loadingScreen.LoadingScreen)();
            switch(controller.stage()){
                case (0, _gameStage.GameStage).Lobby:
                    return (0, _hostLobby.HostLobby)(controller);
                case (0, _gameStage.GameStage).Question:
                    return (0, _hostQuestion.HostQuestion)(controller);
            }
            return (0, _loadingScreen.LoadingScreen)();
        });
    });
});

},{"./host-view.module.scss":"hnNtr","spred-dom":"dR8Fz","spred":"7ewWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../model/host-controller":"28P4X","../../../model/routing":"8aT8g","../host-lobby/host-lobby":"3tueq","../../ui/loading-screen/loading-screen":"dzgPb","../../../../common/game-stage":"4owkS","../host-question/host-question":"aI1Fd"}],"hnNtr":[function(require,module,exports) {
module.exports["container"] = `sCXHnG_container`;

},{}],"28P4X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HostController", ()=>HostController);
var _spred = require("spred");
var _action = require("../../common/action");
var _clientType = require("../../common/client-type");
var _gameStage = require("../../common/game-stage");
var _gameController = require("./game-controller");
class HostController extends (0, _gameController.GameController) {
    gameStartBlocked = (0, _spred.memo)(()=>this.playersList().length <= 1);
    caption = (0, _spred.memo)(()=>this.state().caption);
    round = (0, _spred.memo)(()=>this.state().round);
    constructor(roomId){
        super((0, _clientType.ClientType).Host, roomId);
    }
    startGame(maxRounds = 0) {
        const state = this.state();
        if (state && state.stage === (0, _gameStage.GameStage).Lobby) this.emit((0, _action.Action).StartGame, maxRounds);
    }
}

},{"spred":"7ewWT","../../common/action":"1JFEc","../../common/client-type":"4iKJW","../../common/game-stage":"4owkS","./game-controller":"5xcef","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JFEc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action);
let Action;
(function(Action) {
    Action["RoomUpdate"] = "ROOM_UPDATE";
    Action["StartGame"] = "START_GAME";
    Action["PlayerData"] = "PLAYER_DATA";
})(Action || (Action = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iKJW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClientType", ()=>ClientType);
let ClientType;
(function(ClientType) {
    ClientType["Host"] = "HOST";
    ClientType["Player"] = "PLAYER";
})(ClientType || (ClientType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4owkS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameStage", ()=>GameStage);
let GameStage;
(function(GameStage) {
    GameStage["Lobby"] = "LOBBY";
    GameStage["Question"] = "QUESTION";
    GameStage["Vote"] = "VOTE";
    GameStage["Results"] = "RESULTS";
})(GameStage || (GameStage = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5xcef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameController", ()=>GameController);
var _spred = require("spred");
var _socketIoClient = require("socket.io-client");
var _action = require("../../common/action");
var _routing = require("./routing");
const isLocalHost = location.origin === "http://localhost:1234";
const WS_URL = isLocalHost ? "ws://localhost:3000" : "";
class GameController {
    _pending = (0, _spred.writable)(false);
    pending = (0, _spred.memo)(this._pending);
    _state = (0, _spred.store)({
        loading: true
    });
    state = (0, _spred.computed)(this._state);
    roomId = (0, _spred.memo)(()=>this.state().id);
    playLink = (0, _spred.memo)(()=>(0, _routing.getPlayLink)(this.roomId()));
    loading = (0, _spred.memo)(()=>this.state().loading || false);
    stage = (0, _spred.memo)(()=>this.state().stage);
    error = (0, _spred.memo)(()=>this.state().error);
    voteCard = (0, _spred.memo)(()=>{
        const state = this.state();
        const currentAnswer = state.answers[state.answerIndex];
        return currentAnswer ? currentAnswer.card : "";
    });
    playersList = (0, _spred.computed)(()=>{
        const players = this.state().players;
        const ids = Object.keys(players);
        return ids.map((id)=>players[id]);
    });
    sortedPlayerList = (0, _spred.computed)(()=>{
        const list = this.playersList().slice();
        list.sort((a, b)=>a.score - b.score);
        return list;
    });
    constructor(type, roomId, playerId, playerName){
        this.socket = (0, _socketIoClient.io)(WS_URL, {
            reconnectionDelayMax: 10000,
            query: {
                type,
                roomId,
                playerId,
                playerName
            }
        });
        this.playerId = playerId || "";
        this.socket.on((0, _action.Action).RoomUpdate, (state)=>{
            this._state.update(state);
            this._pending(false);
        });
    }
    emit(action, payload) {
        this._pending(true);
        this.socket.emit(action, payload);
    }
}

},{"spred":"7ewWT","../../common/action":"1JFEc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","socket.io-client":"bvVR2","./routing":"8aT8g"}],"bvVR2":[function(require,module,exports) {
/*!
 * Socket.IO v4.5.2
 * (c) 2014-2022 Guillermo Rauch
 * Released under the MIT License.
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        Object.defineProperty(subClass, "prototype", {
            writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }
    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
        else _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return _construct.apply(null, arguments);
    }
    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;
            if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }
            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };
        return _wrapNativeSuper(Class);
    }
    function _assertThisInitialized(self1) {
        if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self1;
    }
    function _possibleConstructorReturn(self1, call) {
        if (call && (typeof call === "object" || typeof call === "function")) return call;
        else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return _assertThisInitialized(self1);
    }
    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result);
        };
    }
    function _superPropBase(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = _getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }
    function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get.bind();
        else _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
            return desc.value;
        };
        return _get.apply(this, arguments);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;
                var F = function() {};
                return {
                    s: F,
                    n: function() {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return {
            s: function() {
                it = it.call(o);
            },
            n: function() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function(e) {
                didErr = true;
                err = e;
            },
            f: function() {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally{
                    if (didErr) throw err;
                }
            }
        };
    }
    var PACKET_TYPES = Object.create(null); // no Map = no polyfill
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    var PACKET_TYPES_REVERSE = Object.create(null);
    Object.keys(PACKET_TYPES).forEach(function(key) {
        PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    var ERROR_PACKET = {
        type: "error",
        data: "parser error"
    };
    var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
    var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10
    var isView$1 = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    };
    var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
        var type = _ref.type, data = _ref.data;
        if (withNativeBlob$1 && data instanceof Blob) {
            if (supportsBinary) return callback(data);
            else return encodeBlobAsBase64(data, callback);
        } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
            if (supportsBinary) return callback(data);
            else return encodeBlobAsBase64(new Blob([
                data
            ]), callback);
        } // plain string
        return callback(PACKET_TYPES[type] + (data || ""));
    };
    var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
        var fileReader = new FileReader();
        fileReader.onload = function() {
            var content = fileReader.result.split(",")[1];
            callback("b" + content);
        };
        return fileReader.readAsDataURL(data);
    };
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; // Use a lookup table to find the index.
    var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for(var i$1 = 0; i$1 < chars.length; i$1++)lookup$1[chars.charCodeAt(i$1)] = i$1;
    var decode$1 = function decode(base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") bufferLength--;
        }
        var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
        for(i = 0; i < len; i += 4){
            encoded1 = lookup$1[base64.charCodeAt(i)];
            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
    };
    var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
    var decodePacket = function decodePacket(encodedPacket, binaryType) {
        if (typeof encodedPacket !== "string") return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
        var type = encodedPacket.charAt(0);
        if (type === "b") return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
        var packetType = PACKET_TYPES_REVERSE[type];
        if (!packetType) return ERROR_PACKET;
        return encodedPacket.length > 1 ? {
            type: PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1)
        } : {
            type: PACKET_TYPES_REVERSE[type]
        };
    };
    var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
        if (withNativeArrayBuffer$1) {
            var decoded = decode$1(data);
            return mapBinary(decoded, binaryType);
        } else return {
            base64: true,
            data: data
        }; // fallback for old browsers
    };
    var mapBinary = function mapBinary(data, binaryType) {
        switch(binaryType){
            case "blob":
                return data instanceof ArrayBuffer ? new Blob([
                    data
                ]) : data;
            case "arraybuffer":
            default:
                return data;
        }
    };
    var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
    var encodePayload = function encodePayload(packets, callback) {
        // some packets may be added to the array while encoding, so the initial length must be saved
        var length = packets.length;
        var encodedPackets = new Array(length);
        var count = 0;
        packets.forEach(function(packet, i) {
            // force base64 encoding for binary packets
            encodePacket(packet, false, function(encodedPacket) {
                encodedPackets[i] = encodedPacket;
                if (++count === length) callback(encodedPackets.join(SEPARATOR));
            });
        });
    };
    var decodePayload = function decodePayload(encodedPayload, binaryType) {
        var encodedPackets = encodedPayload.split(SEPARATOR);
        var packets = [];
        for(var i = 0; i < encodedPackets.length; i++){
            var decodedPacket = decodePacket(encodedPackets[i], binaryType);
            packets.push(decodedPacket);
            if (decodedPacket.type === "error") break;
        }
        return packets;
    };
    var protocol$1 = 4;
    /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */ function Emitter(obj) {
        if (obj) return mixin(obj);
    }
    /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */ function mixin(obj) {
        for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
        return obj;
    }
    /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
        return this;
    };
    /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */ Emitter.prototype.once = function(event, fn) {
        function on() {
            this.off(event, on);
            fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
    };
    /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {}; // all
        if (0 == arguments.length) {
            this._callbacks = {};
            return this;
        } // specific event
        var callbacks = this._callbacks["$" + event];
        if (!callbacks) return this; // remove all handlers
        if (1 == arguments.length) {
            delete this._callbacks["$" + event];
            return this;
        } // remove specific handler
        var cb;
        for(var i = 0; i < callbacks.length; i++){
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1);
                break;
            }
        } // Remove event specific arrays for event types that no
        // one is subscribed for to avoid memory leak.
        if (callbacks.length === 0) delete this._callbacks["$" + event];
        return this;
    };
    /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */ Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
        for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
        }
        return this;
    }; // alias used for reserved events (protected method)
    Emitter.prototype.emitReserved = Emitter.prototype.emit;
    /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */ Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + event] || [];
    };
    /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */ Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
    };
    var globalThisShim = function() {
        if (typeof self !== "undefined") return self;
        else if (typeof window !== "undefined") return window;
        else return Function("return this")();
    }();
    function pick(obj) {
        for(var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)attr[_key - 1] = arguments[_key];
        return attr.reduce(function(acc, k) {
            if (obj.hasOwnProperty(k)) acc[k] = obj[k];
            return acc;
        }, {});
    } // Keep a reference to the real timeout functions so they can be used when overridden
    var NATIVE_SET_TIMEOUT = setTimeout;
    var NATIVE_CLEAR_TIMEOUT = clearTimeout;
    function installTimerFunctions(obj, opts) {
        if (opts.useNativeTimers) {
            obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
            obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
        } else {
            obj.setTimeoutFn = setTimeout.bind(globalThisShim);
            obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
        }
    } // base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
    var BASE64_OVERHEAD = 1.33; // we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
    function byteLength(obj) {
        if (typeof obj === "string") return utf8Length(obj);
         // arraybuffer or blob
        return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
    function utf8Length(str) {
        var c = 0, length = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 0x80) length += 1;
            else if (c < 0x800) length += 2;
            else if (c < 0xd800 || c >= 0xe000) length += 3;
            else {
                i++;
                length += 4;
            }
        }
        return length;
    }
    var TransportError = /*#__PURE__*/ function(_Error) {
        _inherits(TransportError, _Error);
        var _super = _createSuper(TransportError);
        function TransportError(reason, description, context) {
            var _this;
            _classCallCheck(this, TransportError);
            _this = _super.call(this, reason);
            _this.description = description;
            _this.context = context;
            _this.type = "TransportError";
            return _this;
        }
        return _createClass(TransportError);
    }(/*#__PURE__*/ _wrapNativeSuper(Error));
    var Transport = /*#__PURE__*/ function(_Emitter) {
        _inherits(Transport, _Emitter);
        var _super2 = _createSuper(Transport);
        /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */ function Transport(opts) {
            var _this2;
            _classCallCheck(this, Transport);
            _this2 = _super2.call(this);
            _this2.writable = false;
            installTimerFunctions(_assertThisInitialized(_this2), opts);
            _this2.opts = opts;
            _this2.query = opts.query;
            _this2.readyState = "";
            _this2.socket = opts.socket;
            return _this2;
        }
        /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @api protected
     */ _createClass(Transport, [
            {
                key: "onError",
                value: function onError(reason, description, context) {
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "error", new TransportError(reason, description, context));
                    return this;
                }
            },
            {
                key: "open",
                value: function open() {
                    if ("closed" === this.readyState || "" === this.readyState) {
                        this.readyState = "opening";
                        this.doOpen();
                    }
                    return this;
                }
            },
            {
                key: "close",
                value: function close() {
                    if ("opening" === this.readyState || "open" === this.readyState) {
                        this.doClose();
                        this.onClose();
                    }
                    return this;
                }
            },
            {
                key: "send",
                value: function send(packets) {
                    if ("open" === this.readyState) this.write(packets);
                }
            },
            {
                key: "onOpen",
                value: function onOpen() {
                    this.readyState = "open";
                    this.writable = true;
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "open");
                }
            },
            {
                key: "onData",
                value: function onData(data) {
                    var packet = decodePacket(data, this.socket.binaryType);
                    this.onPacket(packet);
                }
            },
            {
                key: "onPacket",
                value: function onPacket(packet) {
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "packet", packet);
                }
            },
            {
                key: "onClose",
                value: function onClose(details) {
                    this.readyState = "closed";
                    _get(_getPrototypeOf(Transport.prototype), "emitReserved", this).call(this, "close", details);
                }
            }
        ]);
        return Transport;
    }(Emitter);
    // imported from https://github.com/unshiftio/yeast
    var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
    var seed = 0, i = 0, prev;
    /**
   * Return a string representing the specified number.
   *
   * @param {Number} num The number to convert.
   * @returns {String} The string representation of the number.
   * @api public
   */ function encode$1(num) {
        var encoded = "";
        do {
            encoded = alphabet[num % length] + encoded;
            num = Math.floor(num / length);
        }while (num > 0);
        return encoded;
    }
    /**
   * Yeast: A tiny growing id generator.
   *
   * @returns {String} A unique id.
   * @api public
   */ function yeast() {
        var now = encode$1(+new Date());
        if (now !== prev) return seed = 0, prev = now;
        return now + "." + encode$1(seed++);
    } //
    // Map each character to its index.
    //
    for(; i < length; i++)map[alphabet[i]] = i;
    // imported from https://github.com/galkn/querystring
    /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */ function encode(obj) {
        var str = "";
        for(var i in obj)if (obj.hasOwnProperty(i)) {
            if (str.length) str += "&";
            str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
        }
        return str;
    }
    /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */ function decode(qs) {
        var qry = {};
        var pairs = qs.split("&");
        for(var i = 0, l = pairs.length; i < l; i++){
            var pair = pairs[i].split("=");
            qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
    }
    // imported from https://github.com/component/has-cors
    var value = false;
    try {
        value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
    // when trying to create
    }
    var hasCORS = value;
    // browser shim for xmlhttprequest module
    function XHR(opts) {
        var xdomain = opts.xdomain; // XMLHttpRequest can be disabled on IE
        try {
            if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) return new XMLHttpRequest();
        } catch (e) {}
        if (!xdomain) try {
            return new globalThisShim[[
                "Active"
            ].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e1) {}
    }
    function empty() {}
    var hasXHR2 = function() {
        var xhr = new XHR({
            xdomain: false
        });
        return null != xhr.responseType;
    }();
    var Polling = /*#__PURE__*/ function(_Transport) {
        _inherits(Polling, _Transport);
        var _super = _createSuper(Polling);
        /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */ function Polling(opts) {
            var _this;
            _classCallCheck(this, Polling);
            _this = _super.call(this, opts);
            _this.polling = false;
            if (typeof location !== "undefined") {
                var isSSL = "https:" === location.protocol;
                var port = location.port; // some user agents have empty `location.port`
                if (!port) port = isSSL ? "443" : "80";
                _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
                _this.xs = opts.secure !== isSSL;
            }
            /**
       * XHR supports binary
       */ var forceBase64 = opts && opts.forceBase64;
            _this.supportsBinary = hasXHR2 && !forceBase64;
            return _this;
        }
        /**
     * Transport name.
     */ _createClass(Polling, [
            {
                key: "name",
                get: function get() {
                    return "polling";
                }
            },
            {
                key: "doOpen",
                value: function doOpen() {
                    this.poll();
                }
            },
            {
                key: "pause",
                value: function pause(onPause) {
                    var _this2 = this;
                    this.readyState = "pausing";
                    var pause = function pause() {
                        _this2.readyState = "paused";
                        onPause();
                    };
                    if (this.polling || !this.writable) {
                        var total = 0;
                        if (this.polling) {
                            total++;
                            this.once("pollComplete", function() {
                                --total || pause();
                            });
                        }
                        if (!this.writable) {
                            total++;
                            this.once("drain", function() {
                                --total || pause();
                            });
                        }
                    } else pause();
                }
            },
            {
                key: "poll",
                value: function poll() {
                    this.polling = true;
                    this.doPoll();
                    this.emitReserved("poll");
                }
            },
            {
                key: "onData",
                value: function onData(data) {
                    var _this3 = this;
                    var callback = function callback(packet) {
                        // if its the first message we consider the transport open
                        if ("opening" === _this3.readyState && packet.type === "open") _this3.onOpen();
                         // if its a close packet, we close the ongoing requests
                        if ("close" === packet.type) {
                            _this3.onClose({
                                description: "transport closed by the server"
                            });
                            return false;
                        } // otherwise bypass onData and handle the message
                        _this3.onPacket(packet);
                    }; // decode payload
                    decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing
                    if ("closed" !== this.readyState) {
                        // if we got data we're not polling
                        this.polling = false;
                        this.emitReserved("pollComplete");
                        if ("open" === this.readyState) this.poll();
                    }
                }
            },
            {
                key: "doClose",
                value: function doClose() {
                    var _this4 = this;
                    var close = function close() {
                        _this4.write([
                            {
                                type: "close"
                            }
                        ]);
                    };
                    if ("open" === this.readyState) close();
                    else // in case we're trying to close while
                    // handshaking is in progress (GH-164)
                    this.once("open", close);
                }
            },
            {
                key: "write",
                value: function write(packets) {
                    var _this5 = this;
                    this.writable = false;
                    encodePayload(packets, function(data) {
                        _this5.doWrite(data, function() {
                            _this5.writable = true;
                            _this5.emitReserved("drain");
                        });
                    });
                }
            },
            {
                key: "uri",
                value: function uri() {
                    var query = this.query || {};
                    var schema = this.opts.secure ? "https" : "http";
                    var port = ""; // cache busting is forced
                    if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = yeast();
                    if (!this.supportsBinary && !query.sid) query.b64 = 1;
                     // avoid port if default for schema
                    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
                    var encodedQuery = encode(query);
                    var ipv6 = this.opts.hostname.indexOf(":") !== -1;
                    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
                }
            },
            {
                key: "request",
                value: function request() {
                    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    _extends(opts, {
                        xd: this.xd,
                        xs: this.xs
                    }, this.opts);
                    return new Request(this.uri(), opts);
                }
            },
            {
                key: "doWrite",
                value: function doWrite(data, fn) {
                    var _this6 = this;
                    var req = this.request({
                        method: "POST",
                        data: data
                    });
                    req.on("success", fn);
                    req.on("error", function(xhrStatus, context) {
                        _this6.onError("xhr post error", xhrStatus, context);
                    });
                }
            },
            {
                key: "doPoll",
                value: function doPoll() {
                    var _this7 = this;
                    var req = this.request();
                    req.on("data", this.onData.bind(this));
                    req.on("error", function(xhrStatus, context) {
                        _this7.onError("xhr poll error", xhrStatus, context);
                    });
                    this.pollXhr = req;
                }
            }
        ]);
        return Polling;
    }(Transport);
    var Request = /*#__PURE__*/ function(_Emitter) {
        _inherits(Request, _Emitter);
        var _super2 = _createSuper(Request);
        /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */ function Request(uri, opts) {
            var _this8;
            _classCallCheck(this, Request);
            _this8 = _super2.call(this);
            installTimerFunctions(_assertThisInitialized(_this8), opts);
            _this8.opts = opts;
            _this8.method = opts.method || "GET";
            _this8.uri = uri;
            _this8.async = false !== opts.async;
            _this8.data = undefined !== opts.data ? opts.data : null;
            _this8.create();
            return _this8;
        }
        /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */ _createClass(Request, [
            {
                key: "create",
                value: function create() {
                    var _this9 = this;
                    var opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    opts.xdomain = !!this.opts.xd;
                    opts.xscheme = !!this.opts.xs;
                    var xhr = this.xhr = new XHR(opts);
                    try {
                        xhr.open(this.method, this.uri, this.async);
                        try {
                            if (this.opts.extraHeaders) {
                                xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                                for(var i in this.opts.extraHeaders)if (this.opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                            }
                        } catch (e) {}
                        if ("POST" === this.method) try {
                            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                        } catch (e1) {}
                        try {
                            xhr.setRequestHeader("Accept", "*/*");
                        } catch (e2) {} // ie6 check
                        if ("withCredentials" in xhr) xhr.withCredentials = this.opts.withCredentials;
                        if (this.opts.requestTimeout) xhr.timeout = this.opts.requestTimeout;
                        xhr.onreadystatechange = function() {
                            if (4 !== xhr.readyState) return;
                            if (200 === xhr.status || 1223 === xhr.status) _this9.onLoad();
                            else // make sure the `error` event handler that's user-set
                            // does not throw in the same tick and gets caught here
                            _this9.setTimeoutFn(function() {
                                _this9.onError(typeof xhr.status === "number" ? xhr.status : 0);
                            }, 0);
                        };
                        xhr.send(this.data);
                    } catch (e3) {
                        // Need to defer since .create() is called directly from the constructor
                        // and thus the 'error' event can only be only bound *after* this exception
                        // occurs.  Therefore, also, we cannot throw here at all.
                        this.setTimeoutFn(function() {
                            _this9.onError(e3);
                        }, 0);
                        return;
                    }
                    if (typeof document !== "undefined") {
                        this.index = Request.requestsCount++;
                        Request.requests[this.index] = this;
                    }
                }
            },
            {
                key: "onError",
                value: function onError(err) {
                    this.emitReserved("error", err, this.xhr);
                    this.cleanup(true);
                }
            },
            {
                key: "cleanup",
                value: function cleanup(fromError) {
                    if ("undefined" === typeof this.xhr || null === this.xhr) return;
                    this.xhr.onreadystatechange = empty;
                    if (fromError) try {
                        this.xhr.abort();
                    } catch (e) {}
                    if (typeof document !== "undefined") delete Request.requests[this.index];
                    this.xhr = null;
                }
            },
            {
                key: "onLoad",
                value: function onLoad() {
                    var data = this.xhr.responseText;
                    if (data !== null) {
                        this.emitReserved("data", data);
                        this.emitReserved("success");
                        this.cleanup();
                    }
                }
            },
            {
                key: "abort",
                value: function abort() {
                    this.cleanup();
                }
            }
        ]);
        return Request;
    }(Emitter);
    Request.requestsCount = 0;
    Request.requests = {};
    /**
   * Aborts pending requests when unloading the window. This is needed to prevent
   * memory leaks (e.g. when using IE) and to ensure that no spurious error is
   * emitted.
   */ if (typeof document !== "undefined") {
        // @ts-ignore
        if (typeof attachEvent === "function") // @ts-ignore
        attachEvent("onunload", unloadHandler);
        else if (typeof addEventListener === "function") {
            var terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
            addEventListener(terminationEvent, unloadHandler, false);
        }
    }
    function unloadHandler() {
        for(var i in Request.requests)if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
    }
    var nextTick = function() {
        var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (isPromiseAvailable) return function(cb) {
            return Promise.resolve().then(cb);
        };
        else return function(cb, setTimeoutFn) {
            return setTimeoutFn(cb, 0);
        };
    }();
    var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
    var usingBrowserWebSocket = true;
    var defaultBinaryType = "arraybuffer";
    var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
    var WS = /*#__PURE__*/ function(_Transport) {
        _inherits(WS, _Transport);
        var _super = _createSuper(WS);
        /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */ function WS(opts) {
            var _this;
            _classCallCheck(this, WS);
            _this = _super.call(this, opts);
            _this.supportsBinary = !opts.forceBase64;
            return _this;
        }
        /**
     * Transport name.
     *
     * @api public
     */ _createClass(WS, [
            {
                key: "name",
                get: function get() {
                    return "websocket";
                }
            },
            {
                key: "doOpen",
                value: function doOpen() {
                    if (!this.check()) // let probe timeout
                    return;
                    var uri = this.uri();
                    var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed
                    var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                    if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
                    try {
                        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
                    } catch (err) {
                        return this.emitReserved("error", err);
                    }
                    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
                    this.addEventListeners();
                }
            },
            {
                key: "addEventListeners",
                value: function addEventListeners() {
                    var _this2 = this;
                    this.ws.onopen = function() {
                        if (_this2.opts.autoUnref) _this2.ws._socket.unref();
                        _this2.onOpen();
                    };
                    this.ws.onclose = function(closeEvent) {
                        return _this2.onClose({
                            description: "websocket connection closed",
                            context: closeEvent
                        });
                    };
                    this.ws.onmessage = function(ev) {
                        return _this2.onData(ev.data);
                    };
                    this.ws.onerror = function(e) {
                        return _this2.onError("websocket error", e);
                    };
                }
            },
            {
                key: "write",
                value: function write(packets) {
                    var _this3 = this;
                    this.writable = false; // encodePacket efficient as it uses WS framing
                    // no need for encodePayload
                    var _loop = function _loop(i) {
                        var packet = packets[i];
                        var lastPacket = i === packets.length - 1;
                        encodePacket(packet, _this3.supportsBinary, function(data) {
                            // always create a new object (GH-437)
                            var opts = {};
                            // have a chance of informing us about it yet, in that case send will
                            // throw an error
                            try {
                                if (usingBrowserWebSocket) // TypeError is thrown when passing the second argument on Safari
                                _this3.ws.send(data);
                            } catch (e) {}
                            if (lastPacket) // fake drain
                            // defer to next tick to allow Socket to clear writeBuffer
                            nextTick(function() {
                                _this3.writable = true;
                                _this3.emitReserved("drain");
                            }, _this3.setTimeoutFn);
                        });
                    };
                    for(var i = 0; i < packets.length; i++)_loop(i);
                }
            },
            {
                key: "doClose",
                value: function doClose() {
                    if (typeof this.ws !== "undefined") {
                        this.ws.close();
                        this.ws = null;
                    }
                }
            },
            {
                key: "uri",
                value: function uri() {
                    var query = this.query || {};
                    var schema = this.opts.secure ? "wss" : "ws";
                    var port = ""; // avoid port if default for schema
                    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
                     // append timestamp to URI
                    if (this.opts.timestampRequests) query[this.opts.timestampParam] = yeast();
                     // communicate binary support capabilities
                    if (!this.supportsBinary) query.b64 = 1;
                    var encodedQuery = encode(query);
                    var ipv6 = this.opts.hostname.indexOf(":") !== -1;
                    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
                }
            },
            {
                key: "check",
                value: function check() {
                    return !!WebSocket;
                }
            }
        ]);
        return WS;
    }(Transport);
    var transports = {
        websocket: WS,
        polling: Polling
    };
    // imported from https://github.com/galkn/parseuri
    /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api private
   */ var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var parts = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor"
    ];
    function parse(str) {
        var src = str, b = str.indexOf("["), e = str.indexOf("]");
        if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
        var m = re.exec(str || ""), uri = {}, i = 14;
        while(i--)uri[parts[i]] = m[i] || "";
        if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
            uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
            uri.ipv6uri = true;
        }
        uri.pathNames = pathNames(uri, uri["path"]);
        uri.queryKey = queryKey(uri, uri["query"]);
        return uri;
    }
    function pathNames(obj, path) {
        var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
        if (path.substr(0, 1) == "/" || path.length === 0) names.splice(0, 1);
        if (path.substr(path.length - 1, 1) == "/") names.splice(names.length - 1, 1);
        return names;
    }
    function queryKey(uri, query) {
        var data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
            if ($1) data[$1] = $2;
        });
        return data;
    }
    var Socket$1 = /*#__PURE__*/ function(_Emitter) {
        _inherits(Socket, _Emitter);
        var _super = _createSuper(Socket);
        /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */ function Socket(uri) {
            var _this;
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, Socket);
            _this = _super.call(this);
            if (uri && "object" === _typeof(uri)) {
                opts = uri;
                uri = null;
            }
            if (uri) {
                uri = parse(uri);
                opts.hostname = uri.host;
                opts.secure = uri.protocol === "https" || uri.protocol === "wss";
                opts.port = uri.port;
                if (uri.query) opts.query = uri.query;
            } else if (opts.host) opts.hostname = parse(opts.host).host;
            installTimerFunctions(_assertThisInitialized(_this), opts);
            _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
            if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
            opts.port = _this.secure ? "443" : "80";
            _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
            _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
            _this.transports = opts.transports || [
                "polling",
                "websocket"
            ];
            _this.readyState = "";
            _this.writeBuffer = [];
            _this.prevBufferLen = 0;
            _this.opts = _extends({
                path: "/engine.io",
                agent: false,
                withCredentials: false,
                upgrade: true,
                timestampParam: "t",
                rememberUpgrade: false,
                rejectUnauthorized: true,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: true
            }, opts);
            _this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";
            if (typeof _this.opts.query === "string") _this.opts.query = decode(_this.opts.query);
             // set on handshake
            _this.id = null;
            _this.upgrades = null;
            _this.pingInterval = null;
            _this.pingTimeout = null; // set on heartbeat
            _this.pingTimeoutTimer = null;
            if (typeof addEventListener === "function") {
                if (_this.opts.closeOnBeforeunload) // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                addEventListener("beforeunload", function() {
                    if (_this.transport) {
                        // silently close the transport
                        _this.transport.removeAllListeners();
                        _this.transport.close();
                    }
                }, false);
                if (_this.hostname !== "localhost") {
                    _this.offlineEventListener = function() {
                        _this.onClose("transport close", {
                            description: "network connection lost"
                        });
                    };
                    addEventListener("offline", _this.offlineEventListener, false);
                }
            }
            _this.open();
            return _this;
        }
        /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */ _createClass(Socket, [
            {
                key: "createTransport",
                value: function createTransport(name) {
                    var query = _extends({}, this.opts.query); // append engine.io protocol identifier
                    query.EIO = protocol$1; // transport name
                    query.transport = name; // session id if we already have one
                    if (this.id) query.sid = this.id;
                    var opts = _extends({}, this.opts.transportOptions[name], this.opts, {
                        query: query,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    });
                    return new transports[name](opts);
                }
            },
            {
                key: "open",
                value: function open() {
                    var _this2 = this;
                    var transport;
                    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) transport = "websocket";
                    else if (0 === this.transports.length) {
                        // Emit error on next tick so it can be listened to
                        this.setTimeoutFn(function() {
                            _this2.emitReserved("error", "No transports available");
                        }, 0);
                        return;
                    } else transport = this.transports[0];
                    this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)
                    try {
                        transport = this.createTransport(transport);
                    } catch (e) {
                        this.transports.shift();
                        this.open();
                        return;
                    }
                    transport.open();
                    this.setTransport(transport);
                }
            },
            {
                key: "setTransport",
                value: function setTransport(transport) {
                    var _this3 = this;
                    if (this.transport) this.transport.removeAllListeners();
                     // set up transport
                    this.transport = transport; // set up transport listeners
                    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function(reason) {
                        return _this3.onClose("transport close", reason);
                    });
                }
            },
            {
                key: "probe",
                value: function probe(name) {
                    var _this4 = this;
                    var transport = this.createTransport(name);
                    var failed = false;
                    Socket.priorWebsocketSuccess = false;
                    var onTransportOpen = function onTransportOpen() {
                        if (failed) return;
                        transport.send([
                            {
                                type: "ping",
                                data: "probe"
                            }
                        ]);
                        transport.once("packet", function(msg) {
                            if (failed) return;
                            if ("pong" === msg.type && "probe" === msg.data) {
                                _this4.upgrading = true;
                                _this4.emitReserved("upgrading", transport);
                                if (!transport) return;
                                Socket.priorWebsocketSuccess = "websocket" === transport.name;
                                _this4.transport.pause(function() {
                                    if (failed) return;
                                    if ("closed" === _this4.readyState) return;
                                    cleanup();
                                    _this4.setTransport(transport);
                                    transport.send([
                                        {
                                            type: "upgrade"
                                        }
                                    ]);
                                    _this4.emitReserved("upgrade", transport);
                                    transport = null;
                                    _this4.upgrading = false;
                                    _this4.flush();
                                });
                            } else {
                                var err = new Error("probe error"); // @ts-ignore
                                err.transport = transport.name;
                                _this4.emitReserved("upgradeError", err);
                            }
                        });
                    };
                    function freezeTransport() {
                        if (failed) return; // Any callback called by transport should be ignored since now
                        failed = true;
                        cleanup();
                        transport.close();
                        transport = null;
                    } // Handle any error that happens while probing
                    var onerror = function onerror(err) {
                        var error = new Error("probe error: " + err); // @ts-ignore
                        error.transport = transport.name;
                        freezeTransport();
                        _this4.emitReserved("upgradeError", error);
                    };
                    function onTransportClose() {
                        onerror("transport closed");
                    } // When the socket is closed while we're probing
                    function onclose() {
                        onerror("socket closed");
                    } // When the socket is upgraded while we're probing
                    function onupgrade(to) {
                        if (transport && to.name !== transport.name) freezeTransport();
                    } // Remove all listeners on the transport and on self
                    var cleanup = function cleanup() {
                        transport.removeListener("open", onTransportOpen);
                        transport.removeListener("error", onerror);
                        transport.removeListener("close", onTransportClose);
                        _this4.off("close", onclose);
                        _this4.off("upgrading", onupgrade);
                    };
                    transport.once("open", onTransportOpen);
                    transport.once("error", onerror);
                    transport.once("close", onTransportClose);
                    this.once("close", onclose);
                    this.once("upgrading", onupgrade);
                    transport.open();
                }
            },
            {
                key: "onOpen",
                value: function onOpen() {
                    this.readyState = "open";
                    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
                    this.emitReserved("open");
                    this.flush(); // we check for `readyState` in case an `open`
                    // listener already closed the socket
                    if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
                        var i = 0;
                        var l = this.upgrades.length;
                        for(; i < l; i++)this.probe(this.upgrades[i]);
                    }
                }
            },
            {
                key: "onPacket",
                value: function onPacket(packet) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                        this.emitReserved("packet", packet); // Socket is live - any packet counts
                        this.emitReserved("heartbeat");
                        switch(packet.type){
                            case "open":
                                this.onHandshake(JSON.parse(packet.data));
                                break;
                            case "ping":
                                this.resetPingTimeout();
                                this.sendPacket("pong");
                                this.emitReserved("ping");
                                this.emitReserved("pong");
                                break;
                            case "error":
                                var err = new Error("server error"); // @ts-ignore
                                err.code = packet.data;
                                this.onError(err);
                                break;
                            case "message":
                                this.emitReserved("data", packet.data);
                                this.emitReserved("message", packet.data);
                                break;
                        }
                    }
                }
            },
            {
                key: "onHandshake",
                value: function onHandshake(data) {
                    this.emitReserved("handshake", data);
                    this.id = data.sid;
                    this.transport.query.sid = data.sid;
                    this.upgrades = this.filterUpgrades(data.upgrades);
                    this.pingInterval = data.pingInterval;
                    this.pingTimeout = data.pingTimeout;
                    this.maxPayload = data.maxPayload;
                    this.onOpen(); // In case open handler closes socket
                    if ("closed" === this.readyState) return;
                    this.resetPingTimeout();
                }
            },
            {
                key: "resetPingTimeout",
                value: function resetPingTimeout() {
                    var _this5 = this;
                    this.clearTimeoutFn(this.pingTimeoutTimer);
                    this.pingTimeoutTimer = this.setTimeoutFn(function() {
                        _this5.onClose("ping timeout");
                    }, this.pingInterval + this.pingTimeout);
                    if (this.opts.autoUnref) this.pingTimeoutTimer.unref();
                }
            },
            {
                key: "onDrain",
                value: function onDrain() {
                    this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
                    // for example, when upgrading, upgrade packet is sent over,
                    // and a nonzero prevBufferLen could cause problems on `drain`
                    this.prevBufferLen = 0;
                    if (0 === this.writeBuffer.length) this.emitReserved("drain");
                    else this.flush();
                }
            },
            {
                key: "flush",
                value: function flush() {
                    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        var packets = this.getWritablePackets();
                        this.transport.send(packets); // keep track of current length of writeBuffer
                        // splice writeBuffer and callbackBuffer on `drain`
                        this.prevBufferLen = packets.length;
                        this.emitReserved("flush");
                    }
                }
            },
            {
                key: "getWritablePackets",
                value: function getWritablePackets() {
                    var shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
                    if (!shouldCheckPayloadSize) return this.writeBuffer;
                    var payloadSize = 1; // first packet type
                    for(var i = 0; i < this.writeBuffer.length; i++){
                        var data = this.writeBuffer[i].data;
                        if (data) payloadSize += byteLength(data);
                        if (i > 0 && payloadSize > this.maxPayload) return this.writeBuffer.slice(0, i);
                        payloadSize += 2; // separator + packet type
                    }
                    return this.writeBuffer;
                }
            },
            {
                key: "write",
                value: function write(msg, options, fn) {
                    this.sendPacket("message", msg, options, fn);
                    return this;
                }
            },
            {
                key: "send",
                value: function send(msg, options, fn) {
                    this.sendPacket("message", msg, options, fn);
                    return this;
                }
            },
            {
                key: "sendPacket",
                value: function sendPacket(type, data, options, fn) {
                    if ("function" === typeof data) {
                        fn = data;
                        data = undefined;
                    }
                    if ("function" === typeof options) {
                        fn = options;
                        options = null;
                    }
                    if ("closing" === this.readyState || "closed" === this.readyState) return;
                    options = options || {};
                    options.compress = false !== options.compress;
                    var packet = {
                        type: type,
                        data: data,
                        options: options
                    };
                    this.emitReserved("packetCreate", packet);
                    this.writeBuffer.push(packet);
                    if (fn) this.once("flush", fn);
                    this.flush();
                }
            },
            {
                key: "close",
                value: function close() {
                    var _this6 = this;
                    var close = function close() {
                        _this6.onClose("forced close");
                        _this6.transport.close();
                    };
                    var cleanupAndClose = function cleanupAndClose() {
                        _this6.off("upgrade", cleanupAndClose);
                        _this6.off("upgradeError", cleanupAndClose);
                        close();
                    };
                    var waitForUpgrade = function waitForUpgrade() {
                        // wait for upgrade to finish since we can't send packets while pausing a transport
                        _this6.once("upgrade", cleanupAndClose);
                        _this6.once("upgradeError", cleanupAndClose);
                    };
                    if ("opening" === this.readyState || "open" === this.readyState) {
                        this.readyState = "closing";
                        if (this.writeBuffer.length) this.once("drain", function() {
                            if (_this6.upgrading) waitForUpgrade();
                            else close();
                        });
                        else if (this.upgrading) waitForUpgrade();
                        else close();
                    }
                    return this;
                }
            },
            {
                key: "onError",
                value: function onError(err) {
                    Socket.priorWebsocketSuccess = false;
                    this.emitReserved("error", err);
                    this.onClose("transport error", err);
                }
            },
            {
                key: "onClose",
                value: function onClose(reason, description) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                        // clear timers
                        this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport
                        this.transport.removeAllListeners("close"); // ensure transport won't stay open
                        this.transport.close(); // ignore further transport communication
                        this.transport.removeAllListeners();
                        if (typeof removeEventListener === "function") removeEventListener("offline", this.offlineEventListener, false);
                         // set ready state
                        this.readyState = "closed"; // clear session id
                        this.id = null; // emit close event
                        this.emitReserved("close", reason, description); // clean buffers after, so users can still
                        // grab the buffers on `close` event
                        this.writeBuffer = [];
                        this.prevBufferLen = 0;
                    }
                }
            },
            {
                key: "filterUpgrades",
                value: function filterUpgrades(upgrades) {
                    var filteredUpgrades = [];
                    var i = 0;
                    var j = upgrades.length;
                    for(; i < j; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
                    return filteredUpgrades;
                }
            }
        ]);
        return Socket;
    }(Emitter);
    Socket$1.protocol = protocol$1;
    Socket$1.protocol;
    /**
   * URL parser.
   *
   * @param uri - url
   * @param path - the request path of the connection
   * @param loc - An object meant to mimic window.location.
   *        Defaults to window.location.
   * @public
   */ function url(uri) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var loc = arguments.length > 2 ? arguments[2] : undefined;
        var obj = uri; // default to window.location
        loc = loc || typeof location !== "undefined" && location;
        if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support
        if (typeof uri === "string") {
            if ("/" === uri.charAt(0)) {
                if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
                else uri = loc.host + uri;
            }
            if (!/^(https?|wss?):\/\//.test(uri)) {
                if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
                else uri = "https://" + uri;
            } // parse
            obj = parse(uri);
        } // make sure we treat `localhost:80` and `localhost` equally
        if (!obj.port) {
            if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
            else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
        }
        obj.path = obj.path || "/";
        var ipv6 = obj.host.indexOf(":") !== -1;
        var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id
        obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href
        obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
        return obj;
    }
    var withNativeArrayBuffer = typeof ArrayBuffer === "function";
    var isView = function isView(obj) {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };
    var toString = Object.prototype.toString;
    var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
    var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
    /**
   * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
   *
   * @private
   */ function isBinary(obj) {
        return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    function hasBinary(obj, toJSON) {
        if (!obj || _typeof(obj) !== "object") return false;
        if (Array.isArray(obj)) {
            for(var i = 0, l = obj.length; i < l; i++){
                if (hasBinary(obj[i])) return true;
            }
            return false;
        }
        if (isBinary(obj)) return true;
        if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
        for(var key in obj){
            if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
        }
        return false;
    }
    /**
   * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
   *
   * @param {Object} packet - socket.io event packet
   * @return {Object} with deconstructed packet and list of buffers
   * @public
   */ function deconstructPacket(packet) {
        var buffers = [];
        var packetData = packet.data;
        var pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length; // number of binary 'attachments'
        return {
            packet: pack,
            buffers: buffers
        };
    }
    function _deconstructPacket(data, buffers) {
        if (!data) return data;
        if (isBinary(data)) {
            var placeholder = {
                _placeholder: true,
                num: buffers.length
            };
            buffers.push(data);
            return placeholder;
        } else if (Array.isArray(data)) {
            var newData = new Array(data.length);
            for(var i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
            return newData;
        } else if (_typeof(data) === "object" && !(data instanceof Date)) {
            var _newData = {};
            for(var key in data)if (Object.prototype.hasOwnProperty.call(data, key)) _newData[key] = _deconstructPacket(data[key], buffers);
            return _newData;
        }
        return data;
    }
    /**
   * Reconstructs a binary packet from its placeholder packet and buffers
   *
   * @param {Object} packet - event packet with placeholders
   * @param {Array} buffers - binary buffers to put in placeholder positions
   * @return {Object} reconstructed packet
   * @public
   */ function reconstructPacket(packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        packet.attachments = undefined; // no longer useful
        return packet;
    }
    function _reconstructPacket(data, buffers) {
        if (!data) return data;
        if (data && data._placeholder) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        else if (Array.isArray(data)) for(var i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
        else if (_typeof(data) === "object") {
            for(var key in data)if (Object.prototype.hasOwnProperty.call(data, key)) data[key] = _reconstructPacket(data[key], buffers);
        }
        return data;
    }
    /**
   * Protocol version.
   *
   * @public
   */ var protocol = 5;
    var PacketType;
    (function(PacketType) {
        PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
        PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
        PacketType[PacketType["EVENT"] = 2] = "EVENT";
        PacketType[PacketType["ACK"] = 3] = "ACK";
        PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
        PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
        PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType || (PacketType = {}));
    /**
   * A socket.io Encoder instance
   */ var Encoder = /*#__PURE__*/ function() {
        /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */ function Encoder(replacer) {
            _classCallCheck(this, Encoder);
            this.replacer = replacer;
        }
        /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ _createClass(Encoder, [
            {
                key: "encode",
                value: function encode(obj) {
                    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
                        if (hasBinary(obj)) {
                            obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
                            return this.encodeAsBinary(obj);
                        }
                    }
                    return [
                        this.encodeAsString(obj)
                    ];
                }
            },
            {
                key: "encodeAsString",
                value: function encodeAsString(obj) {
                    // first is type
                    var str = "" + obj.type; // attachments if we have them
                    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
                     // if we have a namespace other than `/`
                    // we append it followed by a comma `,`
                    if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
                     // immediately followed by the id
                    if (null != obj.id) str += obj.id;
                     // json data
                    if (null != obj.data) str += JSON.stringify(obj.data, this.replacer);
                    return str;
                }
            },
            {
                key: "encodeAsBinary",
                value: function encodeAsBinary(obj) {
                    var deconstruction = deconstructPacket(obj);
                    var pack = this.encodeAsString(deconstruction.packet);
                    var buffers = deconstruction.buffers;
                    buffers.unshift(pack); // add packet info to beginning of data list
                    return buffers; // write all the buffers
                }
            }
        ]);
        return Encoder;
    }();
    /**
   * A socket.io Decoder instance
   *
   * @return {Object} decoder
   */ var Decoder = /*#__PURE__*/ function(_Emitter) {
        _inherits(Decoder, _Emitter);
        var _super = _createSuper(Decoder);
        /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */ function Decoder(reviver) {
            var _this;
            _classCallCheck(this, Decoder);
            _this = _super.call(this);
            _this.reviver = reviver;
            return _this;
        }
        /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ _createClass(Decoder, [
            {
                key: "add",
                value: function add(obj) {
                    var packet;
                    if (typeof obj === "string") {
                        packet = this.decodeString(obj);
                        if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
                            // binary packet's json
                            this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow
                            if (packet.attachments === 0) _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
                        } else // non-binary full packet
                        _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
                    } else if (isBinary(obj) || obj.base64) {
                        // raw binary data
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        else {
                            packet = this.reconstructor.takeBinaryData(obj);
                            if (packet) {
                                // received final buffer
                                this.reconstructor = null;
                                _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
                            }
                        }
                    } else throw new Error("Unknown type: " + obj);
                }
            },
            {
                key: "decodeString",
                value: function decodeString(str) {
                    var i = 0; // look up type
                    var p = {
                        type: Number(str.charAt(0))
                    };
                    if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
                     // look up attachments if type binary
                    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
                        var start = i + 1;
                        while(str.charAt(++i) !== "-" && i != str.length);
                        var buf = str.substring(start, i);
                        if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
                        p.attachments = Number(buf);
                    } // look up namespace (if any)
                    if ("/" === str.charAt(i + 1)) {
                        var _start = i + 1;
                        while(++i){
                            var c = str.charAt(i);
                            if ("," === c) break;
                            if (i === str.length) break;
                        }
                        p.nsp = str.substring(_start, i);
                    } else p.nsp = "/";
                     // look up id
                    var next = str.charAt(i + 1);
                    if ("" !== next && Number(next) == next) {
                        var _start2 = i + 1;
                        while(++i){
                            var _c = str.charAt(i);
                            if (null == _c || Number(_c) != _c) {
                                --i;
                                break;
                            }
                            if (i === str.length) break;
                        }
                        p.id = Number(str.substring(_start2, i + 1));
                    } // look up json data
                    if (str.charAt(++i)) {
                        var payload = this.tryParse(str.substr(i));
                        if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
                        else throw new Error("invalid payload");
                    }
                    return p;
                }
            },
            {
                key: "tryParse",
                value: function tryParse(str) {
                    try {
                        return JSON.parse(str, this.reviver);
                    } catch (e) {
                        return false;
                    }
                }
            },
            {
                key: "destroy",
                value: /**
       * Deallocates a parser's resources
       */ function destroy() {
                    if (this.reconstructor) this.reconstructor.finishedReconstruction();
                }
            }
        ], [
            {
                key: "isPayloadValid",
                value: function isPayloadValid(type, payload) {
                    switch(type){
                        case PacketType.CONNECT:
                            return _typeof(payload) === "object";
                        case PacketType.DISCONNECT:
                            return payload === undefined;
                        case PacketType.CONNECT_ERROR:
                            return typeof payload === "string" || _typeof(payload) === "object";
                        case PacketType.EVENT:
                        case PacketType.BINARY_EVENT:
                            return Array.isArray(payload) && payload.length > 0;
                        case PacketType.ACK:
                        case PacketType.BINARY_ACK:
                            return Array.isArray(payload);
                    }
                }
            }
        ]);
        return Decoder;
    }(Emitter);
    /**
   * A manager of a binary event's 'buffer sequence'. Should
   * be constructed whenever a packet of type BINARY_EVENT is
   * decoded.
   *
   * @param {Object} packet
   * @return {BinaryReconstructor} initialized reconstructor
   */ var BinaryReconstructor = /*#__PURE__*/ function() {
        function BinaryReconstructor(packet) {
            _classCallCheck(this, BinaryReconstructor);
            this.packet = packet;
            this.buffers = [];
            this.reconPack = packet;
        }
        /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ _createClass(BinaryReconstructor, [
            {
                key: "takeBinaryData",
                value: function takeBinaryData(binData) {
                    this.buffers.push(binData);
                    if (this.buffers.length === this.reconPack.attachments) {
                        // done with buffer list
                        var packet = reconstructPacket(this.reconPack, this.buffers);
                        this.finishedReconstruction();
                        return packet;
                    }
                    return null;
                }
            },
            {
                key: "finishedReconstruction",
                value: function finishedReconstruction() {
                    this.reconPack = null;
                    this.buffers = [];
                }
            }
        ]);
        return BinaryReconstructor;
    }();
    var parser = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        protocol: protocol,
        get PacketType () {
            return PacketType;
        },
        Encoder: Encoder,
        Decoder: Decoder
    });
    function on(obj, ev, fn) {
        obj.on(ev, fn);
        return function subDestroy() {
            obj.off(ev, fn);
        };
    }
    /**
   * Internal events.
   * These events can't be emitted by the user.
   */ var RESERVED_EVENTS = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
        newListener: 1,
        removeListener: 1
    });
    var Socket = /*#__PURE__*/ function(_Emitter) {
        _inherits(Socket, _Emitter);
        var _super = _createSuper(Socket);
        /**
     * `Socket` constructor.
     *
     * @public
     */ function Socket(io, nsp, opts) {
            var _this;
            _classCallCheck(this, Socket);
            _this = _super.call(this);
            _this.connected = false;
            _this.receiveBuffer = [];
            _this.sendBuffer = [];
            _this.ids = 0;
            _this.acks = {};
            _this.flags = {};
            _this.io = io;
            _this.nsp = nsp;
            if (opts && opts.auth) _this.auth = opts.auth;
            if (_this.io._autoConnect) _this.open();
            return _this;
        }
        /**
     * Whether the socket is currently disconnected
     */ _createClass(Socket, [
            {
                key: "disconnected",
                get: function get() {
                    return !this.connected;
                }
            },
            {
                key: "subEvents",
                value: function subEvents() {
                    if (this.subs) return;
                    var io = this.io;
                    this.subs = [
                        on(io, "open", this.onopen.bind(this)),
                        on(io, "packet", this.onpacket.bind(this)),
                        on(io, "error", this.onerror.bind(this)),
                        on(io, "close", this.onclose.bind(this))
                    ];
                }
            },
            {
                key: "active",
                get: function get() {
                    return !!this.subs;
                }
            },
            {
                key: "connect",
                value: function connect() {
                    if (this.connected) return this;
                    this.subEvents();
                    if (!this.io["_reconnecting"]) this.io.open(); // ensure open
                    if ("open" === this.io._readyState) this.onopen();
                    return this;
                }
            },
            {
                key: "open",
                value: function open() {
                    return this.connect();
                }
            },
            {
                key: "send",
                value: function send() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    args.unshift("message");
                    this.emit.apply(this, args);
                    return this;
                }
            },
            {
                key: "emit",
                value: function emit(ev) {
                    if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev.toString() + '" is a reserved event name');
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
                    args.unshift(ev);
                    var packet = {
                        type: PacketType.EVENT,
                        data: args
                    };
                    packet.options = {};
                    packet.options.compress = this.flags.compress !== false; // event ack callback
                    if ("function" === typeof args[args.length - 1]) {
                        var id = this.ids++;
                        var ack = args.pop();
                        this._registerAckCallback(id, ack);
                        packet.id = id;
                    }
                    var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                    var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);
                    if (discardPacket) ;
                    else if (this.connected) {
                        this.notifyOutgoingListeners(packet);
                        this.packet(packet);
                    } else this.sendBuffer.push(packet);
                    this.flags = {};
                    return this;
                }
            },
            {
                key: "_registerAckCallback",
                value: function _registerAckCallback(id, ack) {
                    var _this2 = this;
                    var timeout = this.flags.timeout;
                    if (timeout === undefined) {
                        this.acks[id] = ack;
                        return;
                    } // @ts-ignore
                    var timer = this.io.setTimeoutFn(function() {
                        delete _this2.acks[id];
                        for(var i = 0; i < _this2.sendBuffer.length; i++)if (_this2.sendBuffer[i].id === id) _this2.sendBuffer.splice(i, 1);
                        ack.call(_this2, new Error("operation has timed out"));
                    }, timeout);
                    this.acks[id] = function() {
                        // @ts-ignore
                        _this2.io.clearTimeoutFn(timer);
                        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
                        ack.apply(_this2, [
                            null
                        ].concat(args));
                    };
                }
            },
            {
                key: "packet",
                value: function packet(_packet) {
                    _packet.nsp = this.nsp;
                    this.io._packet(_packet);
                }
            },
            {
                key: "onopen",
                value: function onopen() {
                    var _this3 = this;
                    if (typeof this.auth == "function") this.auth(function(data) {
                        _this3.packet({
                            type: PacketType.CONNECT,
                            data: data
                        });
                    });
                    else this.packet({
                        type: PacketType.CONNECT,
                        data: this.auth
                    });
                }
            },
            {
                key: "onerror",
                value: function onerror(err) {
                    if (!this.connected) this.emitReserved("connect_error", err);
                }
            },
            {
                key: "onclose",
                value: function onclose(reason, description) {
                    this.connected = false;
                    delete this.id;
                    this.emitReserved("disconnect", reason, description);
                }
            },
            {
                key: "onpacket",
                value: function onpacket(packet) {
                    var sameNamespace = packet.nsp === this.nsp;
                    if (!sameNamespace) return;
                    switch(packet.type){
                        case PacketType.CONNECT:
                            if (packet.data && packet.data.sid) {
                                var id = packet.data.sid;
                                this.onconnect(id);
                            } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case PacketType.EVENT:
                        case PacketType.BINARY_EVENT:
                            this.onevent(packet);
                            break;
                        case PacketType.ACK:
                        case PacketType.BINARY_ACK:
                            this.onack(packet);
                            break;
                        case PacketType.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case PacketType.CONNECT_ERROR:
                            this.destroy();
                            var err = new Error(packet.data.message); // @ts-ignore
                            err.data = packet.data.data;
                            this.emitReserved("connect_error", err);
                            break;
                    }
                }
            },
            {
                key: "onevent",
                value: function onevent(packet) {
                    var args = packet.data || [];
                    if (null != packet.id) args.push(this.ack(packet.id));
                    if (this.connected) this.emitEvent(args);
                    else this.receiveBuffer.push(Object.freeze(args));
                }
            },
            {
                key: "emitEvent",
                value: function emitEvent(args) {
                    if (this._anyListeners && this._anyListeners.length) {
                        var listeners = this._anyListeners.slice();
                        var _iterator = _createForOfIteratorHelper(listeners), _step;
                        try {
                            for(_iterator.s(); !(_step = _iterator.n()).done;){
                                var listener = _step.value;
                                listener.apply(this, args);
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally{
                            _iterator.f();
                        }
                    }
                    _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
                }
            },
            {
                key: "ack",
                value: function ack(id) {
                    var self1 = this;
                    var sent = false;
                    return function() {
                        // prevent double callbacks
                        if (sent) return;
                        sent = true;
                        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)args[_key4] = arguments[_key4];
                        self1.packet({
                            type: PacketType.ACK,
                            id: id,
                            data: args
                        });
                    };
                }
            },
            {
                key: "onack",
                value: function onack(packet) {
                    var ack = this.acks[packet.id];
                    if ("function" === typeof ack) {
                        ack.apply(this, packet.data);
                        delete this.acks[packet.id];
                    }
                }
            },
            {
                key: "onconnect",
                value: function onconnect(id) {
                    this.id = id;
                    this.connected = true;
                    this.emitBuffered();
                    this.emitReserved("connect");
                }
            },
            {
                key: "emitBuffered",
                value: function emitBuffered() {
                    var _this4 = this;
                    this.receiveBuffer.forEach(function(args) {
                        return _this4.emitEvent(args);
                    });
                    this.receiveBuffer = [];
                    this.sendBuffer.forEach(function(packet) {
                        _this4.notifyOutgoingListeners(packet);
                        _this4.packet(packet);
                    });
                    this.sendBuffer = [];
                }
            },
            {
                key: "ondisconnect",
                value: function ondisconnect() {
                    this.destroy();
                    this.onclose("io server disconnect");
                }
            },
            {
                key: "destroy",
                value: function destroy() {
                    if (this.subs) {
                        // clean subscriptions to avoid reconnections
                        this.subs.forEach(function(subDestroy) {
                            return subDestroy();
                        });
                        this.subs = undefined;
                    }
                    this.io["_destroy"](this);
                }
            },
            {
                key: "disconnect",
                value: function disconnect() {
                    if (this.connected) this.packet({
                        type: PacketType.DISCONNECT
                    });
                     // remove socket from pool
                    this.destroy();
                    if (this.connected) // fire events
                    this.onclose("io client disconnect");
                    return this;
                }
            },
            {
                key: "close",
                value: function close() {
                    return this.disconnect();
                }
            },
            {
                key: "compress",
                value: function compress(_compress) {
                    this.flags.compress = _compress;
                    return this;
                }
            },
            {
                key: "volatile",
                get: function get() {
                    this.flags["volatile"] = true;
                    return this;
                }
            },
            {
                key: "timeout",
                value: function timeout(_timeout) {
                    this.flags.timeout = _timeout;
                    return this;
                }
            },
            {
                key: "onAny",
                value: function onAny(listener) {
                    this._anyListeners = this._anyListeners || [];
                    this._anyListeners.push(listener);
                    return this;
                }
            },
            {
                key: "prependAny",
                value: function prependAny(listener) {
                    this._anyListeners = this._anyListeners || [];
                    this._anyListeners.unshift(listener);
                    return this;
                }
            },
            {
                key: "offAny",
                value: function offAny(listener) {
                    if (!this._anyListeners) return this;
                    if (listener) {
                        var listeners = this._anyListeners;
                        for(var i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                            listeners.splice(i, 1);
                            return this;
                        }
                    } else this._anyListeners = [];
                    return this;
                }
            },
            {
                key: "listenersAny",
                value: function listenersAny() {
                    return this._anyListeners || [];
                }
            },
            {
                key: "onAnyOutgoing",
                value: function onAnyOutgoing(listener) {
                    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
                    this._anyOutgoingListeners.push(listener);
                    return this;
                }
            },
            {
                key: "prependAnyOutgoing",
                value: function prependAnyOutgoing(listener) {
                    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
                    this._anyOutgoingListeners.unshift(listener);
                    return this;
                }
            },
            {
                key: "offAnyOutgoing",
                value: function offAnyOutgoing(listener) {
                    if (!this._anyOutgoingListeners) return this;
                    if (listener) {
                        var listeners = this._anyOutgoingListeners;
                        for(var i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                            listeners.splice(i, 1);
                            return this;
                        }
                    } else this._anyOutgoingListeners = [];
                    return this;
                }
            },
            {
                key: "listenersAnyOutgoing",
                value: function listenersAnyOutgoing() {
                    return this._anyOutgoingListeners || [];
                }
            },
            {
                key: "notifyOutgoingListeners",
                value: function notifyOutgoingListeners(packet) {
                    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                        var listeners = this._anyOutgoingListeners.slice();
                        var _iterator2 = _createForOfIteratorHelper(listeners), _step2;
                        try {
                            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                                var listener = _step2.value;
                                listener.apply(this, packet.data);
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally{
                            _iterator2.f();
                        }
                    }
                }
            }
        ]);
        return Socket;
    }(Emitter);
    /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */ function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
    }
    /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */ Backoff.prototype.duration = function() {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var rand = Math.random();
            var deviation = Math.floor(rand * this.jitter * ms);
            ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
    };
    /**
   * Reset the number of attempts.
   *
   * @api public
   */ Backoff.prototype.reset = function() {
        this.attempts = 0;
    };
    /**
   * Set the minimum duration
   *
   * @api public
   */ Backoff.prototype.setMin = function(min) {
        this.ms = min;
    };
    /**
   * Set the maximum duration
   *
   * @api public
   */ Backoff.prototype.setMax = function(max) {
        this.max = max;
    };
    /**
   * Set the jitter
   *
   * @api public
   */ Backoff.prototype.setJitter = function(jitter) {
        this.jitter = jitter;
    };
    var Manager = /*#__PURE__*/ function(_Emitter) {
        _inherits(Manager, _Emitter);
        var _super = _createSuper(Manager);
        function Manager(uri, opts) {
            var _this;
            _classCallCheck(this, Manager);
            var _a;
            _this = _super.call(this);
            _this.nsps = {};
            _this.subs = [];
            if (uri && "object" === _typeof(uri)) {
                opts = uri;
                uri = undefined;
            }
            opts = opts || {};
            opts.path = opts.path || "/socket.io";
            _this.opts = opts;
            installTimerFunctions(_assertThisInitialized(_this), opts);
            _this.reconnection(opts.reconnection !== false);
            _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
            _this.reconnectionDelay(opts.reconnectionDelay || 1000);
            _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
            _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
            _this.backoff = new Backoff({
                min: _this.reconnectionDelay(),
                max: _this.reconnectionDelayMax(),
                jitter: _this.randomizationFactor()
            });
            _this.timeout(null == opts.timeout ? 20000 : opts.timeout);
            _this._readyState = "closed";
            _this.uri = uri;
            var _parser = opts.parser || parser;
            _this.encoder = new _parser.Encoder();
            _this.decoder = new _parser.Decoder();
            _this._autoConnect = opts.autoConnect !== false;
            if (_this._autoConnect) _this.open();
            return _this;
        }
        _createClass(Manager, [
            {
                key: "reconnection",
                value: function reconnection(v) {
                    if (!arguments.length) return this._reconnection;
                    this._reconnection = !!v;
                    return this;
                }
            },
            {
                key: "reconnectionAttempts",
                value: function reconnectionAttempts(v) {
                    if (v === undefined) return this._reconnectionAttempts;
                    this._reconnectionAttempts = v;
                    return this;
                }
            },
            {
                key: "reconnectionDelay",
                value: function reconnectionDelay(v) {
                    var _a;
                    if (v === undefined) return this._reconnectionDelay;
                    this._reconnectionDelay = v;
                    (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
                    return this;
                }
            },
            {
                key: "randomizationFactor",
                value: function randomizationFactor(v) {
                    var _a;
                    if (v === undefined) return this._randomizationFactor;
                    this._randomizationFactor = v;
                    (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
                    return this;
                }
            },
            {
                key: "reconnectionDelayMax",
                value: function reconnectionDelayMax(v) {
                    var _a;
                    if (v === undefined) return this._reconnectionDelayMax;
                    this._reconnectionDelayMax = v;
                    (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
                    return this;
                }
            },
            {
                key: "timeout",
                value: function timeout(v) {
                    if (!arguments.length) return this._timeout;
                    this._timeout = v;
                    return this;
                }
            },
            {
                key: "maybeReconnectOnOpen",
                value: function maybeReconnectOnOpen() {
                    // Only try to reconnect if it's the first time we're connecting
                    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
                    this.reconnect();
                }
            },
            {
                key: "open",
                value: function open(fn) {
                    var _this2 = this;
                    if (~this._readyState.indexOf("open")) return this;
                    this.engine = new Socket$1(this.uri, this.opts);
                    var socket = this.engine;
                    var self1 = this;
                    this._readyState = "opening";
                    this.skipReconnect = false; // emit `open`
                    var openSubDestroy = on(socket, "open", function() {
                        self1.onopen();
                        fn && fn();
                    }); // emit `error`
                    var errorSub = on(socket, "error", function(err) {
                        self1.cleanup();
                        self1._readyState = "closed";
                        _this2.emitReserved("error", err);
                        if (fn) fn(err);
                        else // Only do this if there is no fn to handle the error
                        self1.maybeReconnectOnOpen();
                    });
                    if (false !== this._timeout) {
                        var timeout = this._timeout;
                        if (timeout === 0) openSubDestroy(); // prevents a race condition with the 'open' event
                         // set timer
                        var timer = this.setTimeoutFn(function() {
                            openSubDestroy();
                            socket.close(); // @ts-ignore
                            socket.emit("error", new Error("timeout"));
                        }, timeout);
                        if (this.opts.autoUnref) timer.unref();
                        this.subs.push(function subDestroy() {
                            clearTimeout(timer);
                        });
                    }
                    this.subs.push(openSubDestroy);
                    this.subs.push(errorSub);
                    return this;
                }
            },
            {
                key: "connect",
                value: function connect(fn) {
                    return this.open(fn);
                }
            },
            {
                key: "onopen",
                value: function onopen() {
                    // clear old subs
                    this.cleanup(); // mark as open
                    this._readyState = "open";
                    this.emitReserved("open"); // add new subs
                    var socket = this.engine;
                    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
                }
            },
            {
                key: "onping",
                value: function onping() {
                    this.emitReserved("ping");
                }
            },
            {
                key: "ondata",
                value: function ondata(data) {
                    try {
                        this.decoder.add(data);
                    } catch (e) {
                        this.onclose("parse error");
                    }
                }
            },
            {
                key: "ondecoded",
                value: function ondecoded(packet) {
                    this.emitReserved("packet", packet);
                }
            },
            {
                key: "onerror",
                value: function onerror(err) {
                    this.emitReserved("error", err);
                }
            },
            {
                key: "socket",
                value: function socket(nsp, opts) {
                    var socket = this.nsps[nsp];
                    if (!socket) {
                        socket = new Socket(this, nsp, opts);
                        this.nsps[nsp] = socket;
                    }
                    return socket;
                }
            },
            {
                key: "_destroy",
                value: function _destroy(socket) {
                    var nsps = Object.keys(this.nsps);
                    for(var _i = 0, _nsps = nsps; _i < _nsps.length; _i++){
                        var nsp = _nsps[_i];
                        var _socket = this.nsps[nsp];
                        if (_socket.active) return;
                    }
                    this._close();
                }
            },
            {
                key: "_packet",
                value: function _packet(packet) {
                    var encodedPackets = this.encoder.encode(packet);
                    for(var i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
                }
            },
            {
                key: "cleanup",
                value: function cleanup() {
                    this.subs.forEach(function(subDestroy) {
                        return subDestroy();
                    });
                    this.subs.length = 0;
                    this.decoder.destroy();
                }
            },
            {
                key: "_close",
                value: function _close() {
                    this.skipReconnect = true;
                    this._reconnecting = false;
                    this.onclose("forced close");
                    if (this.engine) this.engine.close();
                }
            },
            {
                key: "disconnect",
                value: function disconnect() {
                    return this._close();
                }
            },
            {
                key: "onclose",
                value: function onclose(reason, description) {
                    this.cleanup();
                    this.backoff.reset();
                    this._readyState = "closed";
                    this.emitReserved("close", reason, description);
                    if (this._reconnection && !this.skipReconnect) this.reconnect();
                }
            },
            {
                key: "reconnect",
                value: function reconnect() {
                    var _this3 = this;
                    if (this._reconnecting || this.skipReconnect) return this;
                    var self1 = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) {
                        this.backoff.reset();
                        this.emitReserved("reconnect_failed");
                        this._reconnecting = false;
                    } else {
                        var delay = this.backoff.duration();
                        this._reconnecting = true;
                        var timer = this.setTimeoutFn(function() {
                            if (self1.skipReconnect) return;
                            _this3.emitReserved("reconnect_attempt", self1.backoff.attempts); // check again for the case socket closed in above events
                            if (self1.skipReconnect) return;
                            self1.open(function(err) {
                                if (err) {
                                    self1._reconnecting = false;
                                    self1.reconnect();
                                    _this3.emitReserved("reconnect_error", err);
                                } else self1.onreconnect();
                            });
                        }, delay);
                        if (this.opts.autoUnref) timer.unref();
                        this.subs.push(function subDestroy() {
                            clearTimeout(timer);
                        });
                    }
                }
            },
            {
                key: "onreconnect",
                value: function onreconnect() {
                    var attempt = this.backoff.attempts;
                    this._reconnecting = false;
                    this.backoff.reset();
                    this.emitReserved("reconnect", attempt);
                }
            }
        ]);
        return Manager;
    }(Emitter);
    /**
   * Managers cache.
   */ var cache = {};
    function lookup(uri, opts) {
        if (_typeof(uri) === "object") {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        var parsed = url(uri, opts.path || "/socket.io");
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id]["nsps"];
        var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
        var io;
        if (newConnection) io = new Manager(source, opts);
        else {
            if (!cache[id]) cache[id] = new Manager(source, opts);
            io = cache[id];
        }
        if (parsed.query && !opts.query) opts.query = parsed.queryKey;
        return io.socket(parsed.path, opts);
    } // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
    // namespace (e.g. `io.connect(...)`), for backward compatibility
    _extends(lookup, {
        Manager: Manager,
        Socket: Socket,
        io: lookup,
        connect: lookup
    });
    return lookup;
});

},{}],"8aT8g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "route", ()=>route);
parcelHelpers.export(exports, "roomId", ()=>roomId);
parcelHelpers.export(exports, "getPlayLink", ()=>getPlayLink);
var _spred = require("spred");
const PLAY_HASH = "#play";
const HOST_HASH = "#host";
const DELIMITER = "/";
const hash = (0, _spred.writable)(location.hash);
const tuple = (0, _spred.computed)(()=>hash().split(DELIMITER));
window.addEventListener("hashchange", ()=>{
    hash(location.hash);
});
const route = (0, _spred.memo)(()=>{
    const str = tuple()[0];
    if (str === PLAY_HASH) return "PLAY";
    else if (str === HOST_HASH) return "HOST";
    return "MAIN";
});
const roomId = (0, _spred.memo)(()=>tuple()[1]);
function getPlayLink(roomId) {
    return location.origin + "/" + PLAY_HASH + DELIMITER + roomId;
}

},{"spred":"7ewWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tueq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HostLobby", ()=>HostLobby);
var _hostLobbyModuleScss = require("./host-lobby.module.scss");
var _spredDom = require("spred-dom");
var _qrCode = require("../qr-code/qr-code");
var _playersList = require("../players-list/players-list");
var _button = require("../../ui/button/button");
const HostLobby = (0, _spredDom.component)((controller)=>{
    return (0, _spredDom.h)(()=>{
        (0, _spredDom.h)("h1", {
            text: "Ожидаем Игроков"
        });
        (0, _spredDom.h)("div", {
            class: _hostLobbyModuleScss.rowWrap
        }, ()=>{
            (0, _spredDom.h)("div", {
                class: _hostLobbyModuleScss.row
            }, ()=>{
                (0, _spredDom.h)("div", {
                    class: [
                        _hostLobbyModuleScss.qrc,
                        _hostLobbyModuleScss.col
                    ]
                }, ()=>{
                    (0, _qrCode.qrCode)({
                        text: controller.playLink
                    });
                });
                (0, _spredDom.h)("div", {
                    class: [
                        _hostLobbyModuleScss.col,
                        _hostLobbyModuleScss.infoCol
                    ]
                }, ()=>{
                    (0, _playersList.playersList)({
                        players: controller.playersList
                    });
                    (0, _spredDom.h)("div", {
                        class: _hostLobbyModuleScss.buttonWrap
                    }, ()=>{
                        (0, _button.button)({
                            text: ()=>controller.pending() ? "Начинаем..." : "Начать Игру",
                            disabled: ()=>controller.gameStartBlocked() || controller.pending(),
                            onclick: ()=>controller.startGame()
                        });
                    });
                });
            });
        });
    });
});

},{"spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./host-lobby.module.scss":"gYl14","../qr-code/qr-code":"9TIvj","../../ui/button/button":"6oMMs","../players-list/players-list":"4Lkvt"}],"gYl14":[function(require,module,exports) {
module.exports["rowWrap"] = `hD0OlW_rowWrap`;
module.exports["qrc"] = `hD0OlW_qrc`;
module.exports["buttonWrap"] = `hD0OlW_buttonWrap`;
module.exports["col"] = `hD0OlW_col`;
module.exports["infoCol"] = `hD0OlW_infoCol`;
module.exports["row"] = `hD0OlW_row`;

},{}],"9TIvj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QRCode", ()=>QRCode);
parcelHelpers.export(exports, "qrCode", ()=>qrCode);
var _qrCodeModuleScss = require("./qr-code.module.scss");
var _spredDom = require("spred-dom");
var _qrcode = require("../../../../vendor/qrcode");
var _spred = require("spred");
const QRCode = (0, _spredDom.component)(({ text  })=>{
    const container = (0, _spred.writable)();
    const textSignal = (0, _spred.computed)(text);
    const comboSignal = (0, _spred.computed)(()=>[
            container(),
            textSignal()
        ]);
    (0, _spred.on)(comboSignal, (tuple)=>{
        const qr = (0, _qrcode.QRC).encodeText(tuple[1], (0, _qrcode.QRC).Ecc.MEDIUM);
        const svg = (0, _qrcode.toSvgString)(qr, 0);
        tuple[0].innerHTML = svg;
    });
    return (0, _spredDom.h)("div", {
        class: _qrCodeModuleScss.qrCode,
        ref: container
    });
});
const qrCode = (0, _spredDom.templateFn)(QRCode);

},{"spred-dom":"dR8Fz","../../../../vendor/qrcode":"dbFVK","spred":"7ewWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./qr-code.module.scss":"4nXlg"}],"dbFVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QRC", ()=>QRC);
parcelHelpers.export(exports, "toSvgString", ()=>toSvgString);
/*
 * QR Code generator library (TypeScript)
 *
 * Copyright (c) Project Nayuki. (MIT License)
 * https://www.nayuki.io/page/qr-code-generator-library
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */ "use strict";
let qrcodegen;
(function(qrcodegen1) {
    class QrCode {
        /*-- Static factory functions (high level) --*/ // Returns a QR Code representing the given Unicode text string at the given error correction level.
        // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
        // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
        // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
        // ecl argument if it can be done without increasing the version.
        static encodeText(text, ecl) {
            const segs = qrcodegen.QrSegment.makeSegments(text);
            return QrCode.encodeSegments(segs, ecl);
        }
        // Returns a QR Code representing the given binary data at the given error correction level.
        // This function always encodes using the binary segment mode, not any text mode. The maximum number of
        // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
        // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
        static encodeBinary(data, ecl) {
            const seg = qrcodegen.QrSegment.makeBytes(data);
            return QrCode.encodeSegments([
                seg
            ], ecl);
        }
        /*-- Static factory functions (mid level) --*/ // Returns a QR Code representing the given segments with the given encoding parameters.
        // The smallest possible QR Code version within the given range is automatically
        // chosen for the output. Iff boostEcl is true, then the ECC level of the result
        // may be higher than the ecl argument if it can be done without increasing the
        // version. The mask number is either between 0 to 7 (inclusive) to force that
        // mask, or -1 to automatically choose an appropriate mask (which may be slow).
        // This function allows the user to create a custom sequence of segments that switches
        // between modes (such as alphanumeric and byte) to encode text in less space.
        // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
        static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
            if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) throw new RangeError("Invalid value");
            // Find the minimal version number to use
            let version;
            let dataUsedBits;
            for(version = minVersion;; version++){
                const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8; // Number of data bits available
                const usedBits = QrSegment.getTotalBits(segs, version);
                if (usedBits <= dataCapacityBits) {
                    dataUsedBits = usedBits;
                    break; // This version number is found to be suitable
                }
                if (version >= maxVersion) // All versions in the range could not fit the given data
                throw new RangeError("Data too long");
            }
            // Increase the error correction level while the data still fits in the current version number
            for (const newEcl of [
                QrCode.Ecc.MEDIUM,
                QrCode.Ecc.QUARTILE,
                QrCode.Ecc.HIGH, 
            ])// From low to high
            if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8) ecl = newEcl;
            // Concatenate all segments to create the data bit string
            let bb = [];
            for (const seg of segs){
                appendBits(seg.mode.modeBits, 4, bb);
                appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
                for (const b of seg.getData())bb.push(b);
            }
            assert(bb.length == dataUsedBits);
            // Add terminator and pad up to a byte if applicable
            const dataCapacityBits1 = QrCode.getNumDataCodewords(version, ecl) * 8;
            assert(bb.length <= dataCapacityBits1);
            appendBits(0, Math.min(4, dataCapacityBits1 - bb.length), bb);
            appendBits(0, (8 - bb.length % 8) % 8, bb);
            assert(bb.length % 8 == 0);
            // Pad with alternating bytes until data capacity is reached
            for(let padByte = 0xec; bb.length < dataCapacityBits1; padByte ^= 253)appendBits(padByte, 8, bb);
            // Pack bits into bytes in big endian
            let dataCodewords = [];
            while(dataCodewords.length * 8 < bb.length)dataCodewords.push(0);
            bb.forEach((b, i)=>dataCodewords[i >>> 3] |= b << 7 - (i & 7));
            // Create the QR Code object
            return new QrCode(version, ecl, dataCodewords, mask);
        }
        /*-- Constructor (low level) and fields --*/ // Creates a new QR Code with the given version number,
        // error correction level, data codeword bytes, and mask number.
        // This is a low-level API that most users should not use directly.
        // A mid-level API is the encodeSegments() function.
        constructor(version, errorCorrectionLevel, dataCodewords, msk){
            this.version = version;
            this.errorCorrectionLevel = errorCorrectionLevel;
            this.modules = [];
            this.isFunction = [];
            // Check scalar arguments
            if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION) throw new RangeError("Version value out of range");
            if (msk < -1 || msk > 7) throw new RangeError("Mask value out of range");
            this.size = version * 4 + 17;
            // Initialize both grids to be size*size arrays of Boolean false
            let row = [];
            for(let i = 0; i < this.size; i++)row.push(false);
            for(let i1 = 0; i1 < this.size; i1++){
                this.modules.push(row.slice()); // Initially all light
                this.isFunction.push(row.slice());
            }
            // Compute ECC, draw modules
            this.drawFunctionPatterns();
            const allCodewords = this.addEccAndInterleave(dataCodewords);
            this.drawCodewords(allCodewords);
            // Do masking
            if (msk == -1) {
                // Automatically choose best mask
                let minPenalty = 1000000000;
                for(let i2 = 0; i2 < 8; i2++){
                    this.applyMask(i2);
                    this.drawFormatBits(i2);
                    const penalty = this.getPenaltyScore();
                    if (penalty < minPenalty) {
                        msk = i2;
                        minPenalty = penalty;
                    }
                    this.applyMask(i2); // Undoes the mask due to XOR
                }
            }
            assert(0 <= msk && msk <= 7);
            this.mask = msk;
            this.applyMask(msk); // Apply the final choice of mask
            this.drawFormatBits(msk); // Overwrite old format bits
            this.isFunction = [];
        }
        /*-- Accessor methods --*/ // Returns the color of the module (pixel) at the given coordinates, which is false
        // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
        // If the given coordinates are out of bounds, then false (light) is returned.
        getModule(x, y) {
            return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
        }
        /*-- Private helper methods for constructor: Drawing function modules --*/ // Reads this object's version field, and draws and marks all function modules.
        drawFunctionPatterns() {
            // Draw horizontal and vertical timing patterns
            for(let i = 0; i < this.size; i++){
                this.setFunctionModule(6, i, i % 2 == 0);
                this.setFunctionModule(i, 6, i % 2 == 0);
            }
            // Draw 3 finder patterns (all corners except bottom right; overwrites some timing modules)
            this.drawFinderPattern(3, 3);
            this.drawFinderPattern(this.size - 4, 3);
            this.drawFinderPattern(3, this.size - 4);
            // Draw numerous alignment patterns
            const alignPatPos = this.getAlignmentPatternPositions();
            const numAlign = alignPatPos.length;
            for(let i1 = 0; i1 < numAlign; i1++){
                for(let j = 0; j < numAlign; j++)// Don't draw on the three finder corners
                if (!(i1 == 0 && j == 0 || i1 == 0 && j == numAlign - 1 || i1 == numAlign - 1 && j == 0)) this.drawAlignmentPattern(alignPatPos[i1], alignPatPos[j]);
            }
            // Draw configuration data
            this.drawFormatBits(0); // Dummy mask value; overwritten later in the constructor
            this.drawVersion();
        }
        // Draws two copies of the format bits (with its own error correction code)
        // based on the given mask and this object's error correction level field.
        drawFormatBits(mask) {
            // Calculate error correction code and pack bits
            const data = this.errorCorrectionLevel.formatBits << 3 | mask; // errCorrLvl is uint2, mask is uint3
            let rem = data;
            for(let i = 0; i < 10; i++)rem = rem << 1 ^ (rem >>> 9) * 0x537;
            const bits = (data << 10 | rem) ^ 0x5412; // uint15
            assert(bits >>> 15 == 0);
            // Draw first copy
            for(let i1 = 0; i1 <= 5; i1++)this.setFunctionModule(8, i1, getBit(bits, i1));
            this.setFunctionModule(8, 7, getBit(bits, 6));
            this.setFunctionModule(8, 8, getBit(bits, 7));
            this.setFunctionModule(7, 8, getBit(bits, 8));
            for(let i2 = 9; i2 < 15; i2++)this.setFunctionModule(14 - i2, 8, getBit(bits, i2));
            // Draw second copy
            for(let i3 = 0; i3 < 8; i3++)this.setFunctionModule(this.size - 1 - i3, 8, getBit(bits, i3));
            for(let i4 = 8; i4 < 15; i4++)this.setFunctionModule(8, this.size - 15 + i4, getBit(bits, i4));
            this.setFunctionModule(8, this.size - 8, true); // Always dark
        }
        // Draws two copies of the version bits (with its own error correction code),
        // based on this object's version field, iff 7 <= version <= 40.
        drawVersion() {
            if (this.version < 7) return;
            // Calculate error correction code and pack bits
            let rem = this.version; // version is uint6, in the range [7, 40]
            for(let i = 0; i < 12; i++)rem = rem << 1 ^ (rem >>> 11) * 0x1f25;
            const bits = this.version << 12 | rem; // uint18
            assert(bits >>> 18 == 0);
            // Draw two copies
            for(let i1 = 0; i1 < 18; i1++){
                const color = getBit(bits, i1);
                const a = this.size - 11 + i1 % 3;
                const b = Math.floor(i1 / 3);
                this.setFunctionModule(a, b, color);
                this.setFunctionModule(b, a, color);
            }
        }
        // Draws a 9*9 finder pattern including the border separator,
        // with the center module at (x, y). Modules can be out of bounds.
        drawFinderPattern(x, y) {
            for(let dy = -4; dy <= 4; dy++)for(let dx = -4; dx <= 4; dx++){
                const dist = Math.max(Math.abs(dx), Math.abs(dy)); // Chebyshev/infinity norm
                const xx = x + dx;
                const yy = y + dy;
                if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size) this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
            }
        }
        // Draws a 5*5 alignment pattern, with the center module
        // at (x, y). All modules must be in bounds.
        drawAlignmentPattern(x, y) {
            for(let dy = -2; dy <= 2; dy++)for(let dx = -2; dx <= 2; dx++)this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
        }
        // Sets the color of a module and marks it as a function module.
        // Only used by the constructor. Coordinates must be in bounds.
        setFunctionModule(x, y, isDark) {
            this.modules[y][x] = isDark;
            this.isFunction[y][x] = true;
        }
        /*-- Private helper methods for constructor: Codewords and masking --*/ // Returns a new byte string representing the given data with the appropriate error correction
        // codewords appended to it, based on this object's version and error correction level.
        addEccAndInterleave(data) {
            const ver = this.version;
            const ecl = this.errorCorrectionLevel;
            if (data.length != QrCode.getNumDataCodewords(ver, ecl)) throw new RangeError("Invalid argument");
            // Calculate parameter numbers
            const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
            const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
            const rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
            const numShortBlocks = numBlocks - rawCodewords % numBlocks;
            const shortBlockLen = Math.floor(rawCodewords / numBlocks);
            // Split data into blocks and append ECC to each block
            let blocks = [];
            const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
            for(let i = 0, k = 0; i < numBlocks; i++){
                let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
                k += dat.length;
                const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
                if (i < numShortBlocks) dat.push(0);
                blocks.push(dat.concat(ecc));
            }
            // Interleave (not concatenate) the bytes from every block into a single sequence
            let result = [];
            for(let i1 = 0; i1 < blocks[0].length; i1++)blocks.forEach((block, j)=>{
                // Skip the padding byte in short blocks
                if (i1 != shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i1]);
            });
            assert(result.length == rawCodewords);
            return result;
        }
        // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
        // data area of this QR Code. Function modules need to be marked off before this is called.
        drawCodewords(data) {
            if (data.length != Math.floor(QrCode.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
            let i = 0; // Bit index into the data
            // Do the funny zigzag scan
            for(let right = this.size - 1; right >= 1; right -= 2){
                // Index of right column in each column pair
                if (right == 6) right = 5;
                for(let vert = 0; vert < this.size; vert++)// Vertical counter
                for(let j = 0; j < 2; j++){
                    const x = right - j; // Actual x coordinate
                    const upward = (right + 1 & 2) == 0;
                    const y = upward ? this.size - 1 - vert : vert; // Actual y coordinate
                    if (!this.isFunction[y][x] && i < data.length * 8) {
                        this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
                        i++;
                    }
                // If this QR Code has any remainder bits (0 to 7), they were assigned as
                // 0/false/light by the constructor and are left unchanged by this method
                }
            }
            assert(i == data.length * 8);
        }
        // XORs the codeword modules in this QR Code with the given mask pattern.
        // The function modules must be marked and the codeword bits must be drawn
        // before masking. Due to the arithmetic of XOR, calling applyMask() with
        // the same mask value a second time will undo the mask. A final well-formed
        // QR Code needs exactly one (not zero, two, etc.) mask applied.
        applyMask(mask) {
            if (mask < 0 || mask > 7) throw new RangeError("Mask value out of range");
            for(let y = 0; y < this.size; y++)for(let x = 0; x < this.size; x++){
                let invert;
                switch(mask){
                    case 0:
                        invert = (x + y) % 2 == 0;
                        break;
                    case 1:
                        invert = y % 2 == 0;
                        break;
                    case 2:
                        invert = x % 3 == 0;
                        break;
                    case 3:
                        invert = (x + y) % 3 == 0;
                        break;
                    case 4:
                        invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
                        break;
                    case 5:
                        invert = x * y % 2 + x * y % 3 == 0;
                        break;
                    case 6:
                        invert = (x * y % 2 + x * y % 3) % 2 == 0;
                        break;
                    case 7:
                        invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
                        break;
                    default:
                        throw new Error("Unreachable");
                }
                if (!this.isFunction[y][x] && invert) this.modules[y][x] = !this.modules[y][x];
            }
        }
        // Calculates and returns the penalty score based on state of this QR Code's current modules.
        // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
        getPenaltyScore() {
            let result = 0;
            // Adjacent modules in row having same color, and finder-like patterns
            for(let y = 0; y < this.size; y++){
                let runColor = false;
                let runX = 0;
                let runHistory = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(let x = 0; x < this.size; x++)if (this.modules[y][x] == runColor) {
                    runX++;
                    if (runX == 5) result += QrCode.PENALTY_N1;
                    else if (runX > 5) result++;
                } else {
                    this.finderPenaltyAddHistory(runX, runHistory);
                    if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
                    runColor = this.modules[y][x];
                    runX = 1;
                }
                result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
            }
            // Adjacent modules in column having same color, and finder-like patterns
            for(let x1 = 0; x1 < this.size; x1++){
                let runColor1 = false;
                let runY = 0;
                let runHistory1 = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                for(let y1 = 0; y1 < this.size; y1++)if (this.modules[y1][x1] == runColor1) {
                    runY++;
                    if (runY == 5) result += QrCode.PENALTY_N1;
                    else if (runY > 5) result++;
                } else {
                    this.finderPenaltyAddHistory(runY, runHistory1);
                    if (!runColor1) result += this.finderPenaltyCountPatterns(runHistory1) * QrCode.PENALTY_N3;
                    runColor1 = this.modules[y1][x1];
                    runY = 1;
                }
                result += this.finderPenaltyTerminateAndCount(runColor1, runY, runHistory1) * QrCode.PENALTY_N3;
            }
            // 2*2 blocks of modules having same color
            for(let y2 = 0; y2 < this.size - 1; y2++)for(let x2 = 0; x2 < this.size - 1; x2++){
                const color = this.modules[y2][x2];
                if (color == this.modules[y2][x2 + 1] && color == this.modules[y2 + 1][x2] && color == this.modules[y2 + 1][x2 + 1]) result += QrCode.PENALTY_N2;
            }
            // Balance of dark and light modules
            let dark = 0;
            for (const row of this.modules)dark = row.reduce((sum, color)=>sum + (color ? 1 : 0), dark);
            const total = this.size * this.size; // Note that size is odd, so dark/total != 1/2
            // Compute the smallest integer k >= 0 such that (45-5k)% <= dark/total <= (55+5k)%
            const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
            assert(0 <= k && k <= 9);
            result += k * QrCode.PENALTY_N4;
            assert(0 <= result && result <= 2568888); // Non-tight upper bound based on default values of PENALTY_N1, ..., N4
            return result;
        }
        /*-- Private helper functions --*/ // Returns an ascending list of positions of alignment patterns for this version number.
        // Each position is in the range [0,177), and are used on both the x and y axes.
        // This could be implemented as lookup table of 40 variable-length lists of integers.
        getAlignmentPatternPositions() {
            if (this.version == 1) return [];
            else {
                const numAlign = Math.floor(this.version / 7) + 2;
                const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
                let result = [
                    6
                ];
                for(let pos = this.size - 7; result.length < numAlign; pos -= step)result.splice(1, 0, pos);
                return result;
            }
        }
        // Returns the number of data bits that can be stored in a QR Code of the given version number, after
        // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
        // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
        static getNumRawDataModules(ver) {
            if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION) throw new RangeError("Version number out of range");
            let result = (16 * ver + 128) * ver + 64;
            if (ver >= 2) {
                const numAlign = Math.floor(ver / 7) + 2;
                result -= (25 * numAlign - 10) * numAlign - 55;
                if (ver >= 7) result -= 36;
            }
            assert(208 <= result && result <= 29648);
            return result;
        }
        // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
        // QR Code of the given version number and error correction level, with remainder bits discarded.
        // This stateless pure function could be implemented as a (40*4)-cell lookup table.
        static getNumDataCodewords(ver, ecl) {
            return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
        }
        // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
        // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
        static reedSolomonComputeDivisor(degree) {
            if (degree < 1 || degree > 255) throw new RangeError("Degree out of range");
            // Polynomial coefficients are stored from highest to lowest power, excluding the leading term which is always 1.
            // For example the polynomial x^3 + 255x^2 + 8x + 93 is stored as the uint8 array [255, 8, 93].
            let result = [];
            for(let i = 0; i < degree - 1; i++)result.push(0);
            result.push(1); // Start off with the monomial x^0
            // Compute the product polynomial (x - r^0) * (x - r^1) * (x - r^2) * ... * (x - r^{degree-1}),
            // and drop the highest monomial term which is always 1x^degree.
            // Note that r = 0x02, which is a generator element of this field GF(2^8/0x11D).
            let root = 1;
            for(let i1 = 0; i1 < degree; i1++){
                // Multiply the current product by (x - r^i)
                for(let j = 0; j < result.length; j++){
                    result[j] = QrCode.reedSolomonMultiply(result[j], root);
                    if (j + 1 < result.length) result[j] ^= result[j + 1];
                }
                root = QrCode.reedSolomonMultiply(root, 0x02);
            }
            return result;
        }
        // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
        static reedSolomonComputeRemainder(data, divisor) {
            let result = divisor.map((_)=>0);
            for (const b of data){
                // Polynomial division
                const factor = b ^ result.shift();
                result.push(0);
                divisor.forEach((coef, i)=>result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
            }
            return result;
        }
        // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
        // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
        static reedSolomonMultiply(x, y) {
            if (x >>> 8 != 0 || y >>> 8 != 0) throw new RangeError("Byte out of range");
            // Russian peasant multiplication
            let z = 0;
            for(let i = 7; i >= 0; i--){
                z = z << 1 ^ (z >>> 7) * 0x11d;
                z ^= (y >>> i & 1) * x;
            }
            assert(z >>> 8 == 0);
            return z;
        }
        // Can only be called immediately after a light run is added, and
        // returns either 0, 1, or 2. A helper function for getPenaltyScore().
        finderPenaltyCountPatterns(runHistory) {
            const n = runHistory[1];
            assert(n <= this.size * 3);
            const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
            return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
        }
        // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
        finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
            if (currentRunColor) {
                // Terminate dark run
                this.finderPenaltyAddHistory(currentRunLength, runHistory);
                currentRunLength = 0;
            }
            currentRunLength += this.size; // Add light border to final run
            this.finderPenaltyAddHistory(currentRunLength, runHistory);
            return this.finderPenaltyCountPatterns(runHistory);
        }
        // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
        finderPenaltyAddHistory(currentRunLength, runHistory) {
            if (runHistory[0] == 0) currentRunLength += this.size; // Add light border to initial run
            runHistory.pop();
            runHistory.unshift(currentRunLength);
        }
        /*-- Constants and tables --*/ // The minimum version number supported in the QR Code Model 2 standard.
        static MIN_VERSION = 1;
        // The maximum version number supported in the QR Code Model 2 standard.
        static MAX_VERSION = 40;
        // For use in getPenaltyScore(), when evaluating which mask is best.
        static PENALTY_N1 = 3;
        static PENALTY_N2 = 3;
        static PENALTY_N3 = 40;
        static PENALTY_N4 = 10;
        static ECC_CODEWORDS_PER_BLOCK = [
            // Version: (note that index 0 is for padding, and is set to an illegal value)
            //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
            [
                -1,
                7,
                10,
                15,
                20,
                26,
                18,
                20,
                24,
                30,
                18,
                20,
                24,
                26,
                30,
                22,
                24,
                28,
                30,
                28,
                28,
                28,
                28,
                30,
                30,
                26,
                28,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30, 
            ],
            [
                -1,
                10,
                16,
                26,
                18,
                24,
                16,
                18,
                22,
                22,
                26,
                30,
                22,
                22,
                24,
                24,
                28,
                28,
                26,
                26,
                26,
                26,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28,
                28, 
            ],
            [
                -1,
                13,
                22,
                18,
                26,
                18,
                24,
                18,
                22,
                20,
                24,
                28,
                26,
                24,
                20,
                30,
                24,
                28,
                28,
                26,
                30,
                28,
                30,
                30,
                30,
                30,
                28,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30, 
            ],
            [
                -1,
                17,
                28,
                22,
                16,
                22,
                28,
                26,
                26,
                24,
                28,
                24,
                28,
                22,
                24,
                24,
                30,
                28,
                28,
                26,
                28,
                30,
                24,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30, 
            ]
        ];
        static NUM_ERROR_CORRECTION_BLOCKS = [
            // Version: (note that index 0 is for padding, and is set to an illegal value)
            //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
            [
                -1,
                1,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                2,
                4,
                4,
                4,
                4,
                4,
                6,
                6,
                6,
                6,
                7,
                8,
                8,
                9,
                9,
                10,
                12,
                12,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                19,
                20,
                21,
                22,
                24,
                25, 
            ],
            [
                -1,
                1,
                1,
                1,
                2,
                2,
                4,
                4,
                4,
                5,
                5,
                5,
                8,
                9,
                9,
                10,
                10,
                11,
                13,
                14,
                16,
                17,
                17,
                18,
                20,
                21,
                23,
                25,
                26,
                28,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                43,
                45,
                47,
                49, 
            ],
            [
                -1,
                1,
                1,
                2,
                2,
                4,
                4,
                6,
                6,
                8,
                8,
                8,
                10,
                12,
                16,
                12,
                17,
                16,
                18,
                21,
                20,
                23,
                23,
                25,
                27,
                29,
                34,
                34,
                35,
                38,
                40,
                43,
                45,
                48,
                51,
                53,
                56,
                59,
                62,
                65,
                68, 
            ],
            [
                -1,
                1,
                1,
                2,
                4,
                4,
                4,
                5,
                6,
                8,
                8,
                11,
                11,
                16,
                16,
                18,
                16,
                19,
                21,
                25,
                25,
                25,
                34,
                30,
                32,
                35,
                37,
                40,
                42,
                45,
                48,
                51,
                54,
                57,
                60,
                63,
                66,
                70,
                74,
                77,
                81, 
            ]
        ];
    }
    qrcodegen1.QrCode = QrCode;
    // Appends the given number of low-order bits of the given value
    // to the given buffer. Requires 0 <= len <= 31 and 0 <= val < 2^len.
    function appendBits(val, len, bb) {
        if (len < 0 || len > 31 || val >>> len != 0) throw new RangeError("Value out of range");
        for(let i = len - 1; i >= 0; i-- // Append bit by bit
        )bb.push(val >>> i & 1);
    }
    // Returns true iff the i'th bit of x is set to 1.
    function getBit(x, i) {
        return (x >>> i & 1) != 0;
    }
    // Throws an exception if the given condition is false.
    function assert(cond) {
        if (!cond) throw new Error("Assertion error");
    }
    class QrSegment {
        /*-- Static factory functions (mid level) --*/ // Returns a segment representing the given binary data encoded in
        // byte mode. All input byte arrays are acceptable. Any text string
        // can be converted to UTF-8 bytes and encoded as a byte mode segment.
        static makeBytes(data) {
            let bb = [];
            for (const b of data)appendBits(b, 8, bb);
            return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
        }
        // Returns a segment representing the given string of decimal digits encoded in numeric mode.
        static makeNumeric(digits) {
            if (!QrSegment.isNumeric(digits)) throw new RangeError("String contains non-numeric characters");
            let bb = [];
            for(let i = 0; i < digits.length;){
                // Consume up to 3 digits per iteration
                const n = Math.min(digits.length - i, 3);
                appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
                i += n;
            }
            return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
        }
        // Returns a segment representing the given text string encoded in alphanumeric mode.
        // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
        // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static makeAlphanumeric(text) {
            if (!QrSegment.isAlphanumeric(text)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
            let bb = [];
            let i;
            for(i = 0; i + 2 <= text.length; i += 2){
                // Process groups of 2
                let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
                temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
                appendBits(temp, 11, bb);
            }
            if (i < text.length) // 1 character remaining
            appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
            return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
        }
        // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
        // The result may use various segment modes and switch modes to optimize the length of the bit stream.
        static makeSegments(text) {
            // Select the most efficient segment encoding automatically
            if (text == "") return [];
            else if (QrSegment.isNumeric(text)) return [
                QrSegment.makeNumeric(text)
            ];
            else if (QrSegment.isAlphanumeric(text)) return [
                QrSegment.makeAlphanumeric(text)
            ];
            else return [
                QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))
            ];
        }
        // Returns a segment representing an Extended Channel Interpretation
        // (ECI) designator with the given assignment value.
        static makeEci(assignVal) {
            let bb = [];
            if (assignVal < 0) throw new RangeError("ECI assignment value out of range");
            else if (assignVal < 128) appendBits(assignVal, 8, bb);
            else if (assignVal < 16384) {
                appendBits(2, 2, bb);
                appendBits(assignVal, 14, bb);
            } else if (assignVal < 1000000) {
                appendBits(6, 3, bb);
                appendBits(assignVal, 21, bb);
            } else throw new RangeError("ECI assignment value out of range");
            return new QrSegment(QrSegment.Mode.ECI, 0, bb);
        }
        // Tests whether the given string can be encoded as a segment in numeric mode.
        // A string is encodable iff each character is in the range 0 to 9.
        static isNumeric(text) {
            return QrSegment.NUMERIC_REGEX.test(text);
        }
        // Tests whether the given string can be encoded as a segment in alphanumeric mode.
        // A string is encodable iff each character is in the following set: 0 to 9, A to Z
        // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
        static isAlphanumeric(text) {
            return QrSegment.ALPHANUMERIC_REGEX.test(text);
        }
        /*-- Constructor (low level) and fields --*/ // Creates a new QR Code segment with the given attributes and data.
        // The character count (numChars) must agree with the mode and the bit buffer length,
        // but the constraint isn't checked. The given bit buffer is cloned and stored.
        constructor(mode, numChars, bitData){
            this.mode = mode;
            this.numChars = numChars;
            this.bitData = bitData;
            if (numChars < 0) throw new RangeError("Invalid argument");
            this.bitData = bitData.slice(); // Make defensive copy
        }
        /*-- Methods --*/ // Returns a new copy of the data bits of this segment.
        getData() {
            return this.bitData.slice(); // Make defensive copy
        }
        // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
        // the given version. The result is infinity if a segment has too many characters to fit its length field.
        static getTotalBits(segs, version) {
            let result = 0;
            for (const seg of segs){
                const ccbits = seg.mode.numCharCountBits(version);
                if (seg.numChars >= 1 << ccbits) return Infinity; // The segment's length doesn't fit the field's bit width
                result += 4 + ccbits + seg.bitData.length;
            }
            return result;
        }
        // Returns a new array of bytes representing the given string encoded in UTF-8.
        static toUtf8ByteArray(str) {
            str = encodeURI(str);
            let result = [];
            for(let i = 0; i < str.length; i++)if (str.charAt(i) != "%") result.push(str.charCodeAt(i));
            else {
                result.push(parseInt(str.substring(i + 1, i + 3), 16));
                i += 2;
            }
            return result;
        }
        /*-- Constants --*/ // Describes precisely all strings that are encodable in numeric mode.
        static NUMERIC_REGEX = /^[0-9]*$/;
        // Describes precisely all strings that are encodable in alphanumeric mode.
        static ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
        // The set of all legal characters in alphanumeric mode,
        // where each character value maps to the index in the string.
        static ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    }
    qrcodegen1.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen) {
    let QrCode;
    (function(QrCode) {
        class Ecc {
            /*-- Constants --*/ static LOW = new Ecc(0, 1);
            static MEDIUM = new Ecc(1, 0);
            static QUARTILE = new Ecc(2, 3);
            static HIGH = new Ecc(3, 2);
            /*-- Constructor and fields --*/ constructor(ordinal, formatBits){
                this.ordinal = ordinal;
                this.formatBits = formatBits;
            }
        }
        QrCode.Ecc = Ecc;
    })(QrCode = qrcodegen.QrCode || (qrcodegen.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen) {
    let QrSegment;
    (function(QrSegment) {
        class Mode {
            /*-- Constants --*/ static NUMERIC = new Mode(0x1, [
                10,
                12,
                14
            ]);
            static ALPHANUMERIC = new Mode(0x2, [
                9,
                11,
                13
            ]);
            static BYTE = new Mode(0x4, [
                8,
                16,
                16
            ]);
            static KANJI = new Mode(0x8, [
                8,
                10,
                12
            ]);
            static ECI = new Mode(0x7, [
                0,
                0,
                0
            ]);
            /*-- Constructor and fields --*/ constructor(modeBits, numBitsCharCount){
                this.modeBits = modeBits;
                this.numBitsCharCount = numBitsCharCount;
            }
            /*-- Method --*/ // (Package-private) Returns the bit width of the character count field for a segment in
            // this mode in a QR Code at the given version number. The result is in the range [0, 16].
            numCharCountBits(ver) {
                return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
            }
        }
        QrSegment.Mode = Mode;
    })(QrSegment = qrcodegen.QrSegment || (qrcodegen.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
const QRC = qrcodegen.QrCode;
function toSvgString(qr, border) {
    if (border < 0) throw new RangeError("Border must be non-negative");
    let parts = [];
    for(let y = 0; y < qr.size; y++){
        for(let x = 0; x < qr.size; x++)if (qr.getModule(x, y)) parts.push(`M${x + border},${y + border}h1v1h-1z`);
    }
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${qr.size + border * 2} ${qr.size + border * 2}" stroke="none">
<path d="${parts.join(" ")}"/>
</svg>
`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nXlg":[function(require,module,exports) {
module.exports["qrCode"] = `c8l6sa_qrCode`;

},{}],"6oMMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ButtonLink", ()=>ButtonLink);
parcelHelpers.export(exports, "buttonLink", ()=>buttonLink);
parcelHelpers.export(exports, "Button", ()=>Button);
parcelHelpers.export(exports, "button", ()=>button);
var _buttonModuleScss = require("./button.module.scss");
var _spredDom = require("spred-dom");
const ButtonLink = (0, _spredDom.component)(({ href , text , disabled , onclick  })=>{
    return (0, _spredDom.h)("a", {
        onclick,
        href,
        text,
        class: {
            [_buttonModuleScss.button]: true,
            [_buttonModuleScss.disabled]: disabled
        }
    });
});
const buttonLink = (0, _spredDom.templateFn)(ButtonLink);
const Button = (0, _spredDom.component)(({ text , disabled , onclick  })=>{
    return (0, _spredDom.h)("button", {
        onclick,
        text,
        class: {
            [_buttonModuleScss.button]: true,
            [_buttonModuleScss.disabled]: disabled
        }
    });
});
const button = (0, _spredDom.templateFn)(Button);

},{"./button.module.scss":"5iHvX","spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5iHvX":[function(require,module,exports) {
module.exports["disabled"] = `rYiXjW_disabled`;
module.exports["button"] = `rYiXjW_button`;

},{}],"4Lkvt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayersList", ()=>PlayersList);
parcelHelpers.export(exports, "playersList", ()=>playersList);
var _playersListModuleScss = require("./players-list.module.scss");
var _spredDom = require("spred-dom");
var _spred = require("spred");
const PlayersList = (0, _spredDom.component)(({ players  })=>{
    const hasNoPlayers = (0, _spred.memo)(()=>!players().length);
    const text = (0, _spred.memo)(()=>{
        if (hasNoPlayers()) return "Пока что никто не\xa0подключился";
        return players().map((player)=>player.name).join(", ");
    });
    return (0, _spredDom.h)("div", {
        class: {
            [_playersListModuleScss.playersList]: true,
            [_playersListModuleScss.noPlayers]: hasNoPlayers
        },
        text
    }, ()=>{});
});
const playersList = (0, _spredDom.templateFn)(PlayersList);

},{"./players-list.module.scss":"4BjxT","spred-dom":"dR8Fz","spred":"7ewWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BjxT":[function(require,module,exports) {
module.exports["noPlayers"] = `gKNX7W_noPlayers`;
module.exports["playersList"] = `gKNX7W_playersList`;

},{}],"dzgPb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoadingScreen", ()=>LoadingScreen);
var _loadingScreenModuleScss = require("./loading-screen.module.scss");
var _spredDom = require("spred-dom");
const LoadingScreen = (0, _spredDom.component)(()=>(0, _spredDom.h)("div", {
        class: _loadingScreenModuleScss.loading
    }, ()=>{
        (0, _spredDom.h)("h1", ()=>{
            (0, _spredDom.h)("span", {
                text: "Загрузка"
            });
            (0, _spredDom.h)("span", {
                class: _loadingScreenModuleScss.dot1,
                text: "."
            });
            (0, _spredDom.h)("span", {
                class: _loadingScreenModuleScss.dot2,
                text: "."
            });
            (0, _spredDom.h)("span", {
                class: _loadingScreenModuleScss.dot3,
                text: "."
            });
        });
    }));

},{"./loading-screen.module.scss":"lYmeo","spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYmeo":[function(require,module,exports) {
module.exports["dot1"] = `bbT0CG_dot1`;
module.exports["dot1"];
module.exports["dot2"] = `bbT0CG_dot2`;
module.exports["dot2"];
module.exports["loading"] = `bbT0CG_loading`;
module.exports["dot3"] = `bbT0CG_dot3`;
module.exports["dot3"];

},{}],"aI1Fd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HostQuestion", ()=>HostQuestion);
var _hostQuestionModuleScss = require("./host-question.module.scss");
var _spredDom = require("spred-dom");
const HostQuestion = (0, _spredDom.component)((controller)=>{
    return (0, _spredDom.h)(()=>{
        (0, _spredDom.h)("h1", {
            text: ()=>"Раунд " + controller.round()
        });
        (0, _spredDom.h)("div", {
            class: _hostQuestionModuleScss.captionWrap
        }, ()=>{
            (0, _spredDom.h)("p", {
                class: _hostQuestionModuleScss.caption,
                text: controller.caption
            });
        });
        (0, _spredDom.h)("div", {
            class: _hostQuestionModuleScss.playersDone
        });
    });
});

},{"spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./host-question.module.scss":"crcuf"}],"crcuf":[function(require,module,exports) {
module.exports["playersDone"] = `ZMux3W_playersDone`;
module.exports["caption"] = `ZMux3W_caption`;
module.exports["captionWrap"] = `ZMux3W_captionWrap`;

},{}],"6eCn6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainView", ()=>MainView);
var _mainViewModuleScss = require("./main-view.module.scss");
var _spredDom = require("spred-dom");
var _logo = require("../logo/logo");
var _startLink = require("../start-link/start-link");
const MainView = (0, _spredDom.component)(()=>(0, _spredDom.h)("div", {
        class: _mainViewModuleScss.container
    }, ()=>{
        (0, _logo.logo)();
        (0, _spredDom.h)("div", {
            class: _mainViewModuleScss.menu
        }, ()=>{
            (0, _startLink.startLink)();
        });
    }));

},{"./main-view.module.scss":"89rv2","spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../logo/logo":"bYpLl","../start-link/start-link":"gqOEn"}],"89rv2":[function(require,module,exports) {
module.exports["menu"] = `_vR06G_menu`;
module.exports["container"] = `_vR06G_container`;

},{}],"bYpLl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Logo", ()=>Logo);
parcelHelpers.export(exports, "logo", ()=>logo);
var _logoModuleScss = require("./logo.module.scss");
var _spredDom = require("spred-dom");
const Logo = (0, _spredDom.component)(()=>(0, _spredDom.h)("h1", {
        class: _logoModuleScss.logo
    }, ()=>{
        (0, _spredDom.h)("span", {
            class: _logoModuleScss.top
        }, ()=>{
            (0, _spredDom.h)("span", {
                text: "С"
            });
            (0, _spredDom.h)("span", {
                text: "О"
            });
            (0, _spredDom.h)("span", {
                text: "Б"
            });
            (0, _spredDom.h)("span", {
                text: "Е"
            });
            (0, _spredDom.h)("span", {
                text: "Р"
            });
            (0, _spredDom.h)("span", {
                text: "И"
            });
        });
        (0, _spredDom.h)("span", {
            class: _logoModuleScss.bottom
        }, ()=>{
            (0, _spredDom.h)("span", {
                text: "М"
            });
            (0, _spredDom.h)("span", {
                text: "Е"
            });
            (0, _spredDom.h)("span", {
                text: "М"
            });
        });
    }));
const logo = (0, _spredDom.templateFn)(Logo);

},{"./logo.module.scss":"fnMOu","spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnMOu":[function(require,module,exports) {
module.exports["bottom"] = `UGpjbW_bottom`;
module.exports["logo"] = `UGpjbW_logo`;
module.exports["top"] = `UGpjbW_top`;

},{}],"gqOEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StartLink", ()=>StartLink);
parcelHelpers.export(exports, "startLink", ()=>startLink);
var _nanoid = require("nanoid");
var _spredDom = require("spred-dom");
var _button = require("../../ui/button/button");
const StartLink = (0, _spredDom.component)(()=>{
    const url = "#host/" + (0, _nanoid.nanoid)();
    return (0, _spredDom.h)(()=>(0, _button.buttonLink)({
            href: ()=>url,
            text: ()=>"Создать Комнату"
        }));
});
const startLink = (0, _spredDom.templateFn)(StartLink);

},{"nanoid":"2ifus","spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../ui/button/button":"6oMMs"}],"2ifus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTlax":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayerView", ()=>PlayerView);
var _nanoid = require("nanoid");
var _spred = require("spred");
var _spredDom = require("spred-dom");
var _withLocalStorage = require("../../../lib/with-local-storage");
var _playerController = require("../../../model/player-controller");
var _routing = require("../../../model/routing");
const PlayerView = (0, _spredDom.component)(()=>{
    const playerId = (0, _withLocalStorage.withLocalStorage)("PLAYER_ID", (0, _nanoid.nanoid));
    const playerName = (0, _withLocalStorage.withLocalStorage)("PLAYER_NAME", ()=>"player_" + (0, _nanoid.nanoid)().substring(0, 4));
    const controllerSignal = (0, _spred.computed)(()=>new (0, _playerController.PlayerController)((0, _routing.roomId)(), playerId(), playerName()));
    const state = (0, _spred.computed)(()=>controllerSignal().state());
    window.controller = controllerSignal();
    return (0, _spredDom.h)("div");
});

},{"spred-dom":"dR8Fz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","nanoid":"2ifus","spred":"7ewWT","../../../model/player-controller":"6YFso","../../../model/routing":"8aT8g","../../../lib/with-local-storage":"iR2ct"}],"6YFso":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayerController", ()=>PlayerController);
var _spred = require("spred");
var _action = require("../../common/action");
var _clientType = require("../../common/client-type");
var _gameStage = require("../../common/game-stage");
var _gameController = require("./game-controller");
class PlayerController extends (0, _gameController.GameController) {
    answers = this._state.select("answers");
    players = this._state.select("players");
    player = (0, _spred.memo)(()=>this.state().players[this.playerId]);
    constructor(roomId, playerId, playerName){
        super((0, _clientType.ClientType).Player, roomId, playerId, playerName);
    }
    answer(card) {
        const state = this.state();
        if (!state || state.error || state.stage !== (0, _gameStage.GameStage).Question || !this.player().cards.includes(card)) return;
        (0, _spred.batch)(()=>{
            const answerIndex = this.state().answers.findIndex((answer)=>answer.playerId === this.playerId);
            this._state.select("answers").update((answers)=>{
                const answer = {
                    playerId: this.playerId,
                    card,
                    votes: []
                };
                if (answerIndex > -1) answers[answerIndex] = answer;
                else answers.push(answer);
            });
            this.makePlayerDone();
        });
        this.emitPlayerData(card);
    }
    vote(score) {
        const state = this.state();
        if (!state || state.error || state.stage !== (0, _gameStage.GameStage).Vote) return;
        (0, _spred.batch)(()=>{
            const answerIndex = this.state().answerIndex;
            const answer = this.state().answers[answerIndex];
            if (!answer || answer.playerId === this.playerId) return;
            const voteIndex = answer.votes.findIndex((vote)=>vote.playerId === this.playerId);
            this.answers.select(answerIndex).update("votes", (votes)=>{
                const vote = {
                    playerId: this.playerId,
                    score
                };
                if (voteIndex > -1) votes[voteIndex] = vote;
                else votes.push(vote);
            });
            this.makePlayerDone();
        });
        this.emitPlayerData(score);
    }
    ready() {
        const state = this.state();
        if (!state || state.error || state.stage !== (0, _gameStage.GameStage).Results) return;
        this.makePlayerDone();
        this.emitPlayerData();
    }
    emitPlayerData(payload) {
        this.emit((0, _action.Action).PlayerData, payload);
    }
    makePlayerDone() {
        this.players.update(this.playerId, (player)=>{
            player.done = true;
        });
    }
}

},{"spred":"7ewWT","../../common/action":"1JFEc","../../common/client-type":"4iKJW","../../common/game-stage":"4owkS","./game-controller":"5xcef","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iR2ct":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withLocalStorage", ()=>withLocalStorage);
var _spred = require("spred");
function withLocalStorage(key, getInitialValue) {
    let value = "";
    try {
        value = localStorage.getItem(key) || getInitialValue();
    } catch  {
        value = getInitialValue();
    }
    const signal = (0, _spred.writable)(value);
    const derived = (0, _spred.computed)(signal);
    derived.subscribe((value)=>{
        try {
            localStorage.setItem(key, value);
        } catch  {}
    });
    return signal;
}

},{"spred":"7ewWT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["47WRQ","3kePc"], "3kePc", "parcelRequirecd33")

//# sourceMappingURL=index.e4c659bf.js.map
