/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./base.js":
/*!*****************!*\
  !*** ./base.js ***!
  \*****************/
/***/ ((module) => {

eval("var Color = {\n    RESET: \"\\x1b[39;49;00m\",\n    Black: \"0;01\",\n    Blue: \"4;01\",\n    Cyan: \"6;01\",\n    Gray: \"7;11\",\n    Green: \"2;01\",\n    Purple: \"5;01\",\n    Red: \"1;01\",\n    Yellow: \"3;01\",\n    Light: {\n        Black: \"0;11\",\n        Blue: \"4;11\",\n        Cyan: \"6;11\",\n        Gray: \"7;01\",\n        Green: \"2;11\",\n        Purple: \"5;11\",\n        Red: \"1;11\",\n        Yellow: \"3;11\"\n    }\n};\nfunction LOG(input, kwargs) {\n    kwargs = kwargs || {};\n    var logLevel = kwargs['l'] || 'log', colorPrefix = '\\x1b[3', colorSuffix = 'm';\n    if (typeof input === 'object')\n        input = JSON.stringify(input, null, kwargs['i'] ? 2 : null);\n    if (kwargs['c'])\n        input = colorPrefix + kwargs['c'] + colorSuffix + input + Color.RESET;\n    console[logLevel](input);\n};\n\nfunction printBacktrace() {\n    Java.perform(function () {\n        var android_util_Log = Java.use('android.util.Log'), java_lang_Exception = Java.use('java.lang.Exception');\n        // getting stacktrace by throwing an exception\n        LOG(android_util_Log.getStackTraceString(java_lang_Exception.$new()), { c: Color.Gray });\n    });\n};\n\n\nfunction traceClass(className, intercept, interceptCallback) {\n    Java.perform(function () {\n        let fclass = Java.use(className);\n        let jclass = fclass.class;\n        console.log(jclass)\n        jclass.getDeclaredFields().forEach(function logClassInfo(field) {\n            Java.perform(function () {\n                let Modifier = Java.use(\"java.lang.reflect.Modifier\");\n                let modifiers = field.getModifiers();\n                field.setAccessible(true);\n                if (Modifier.isStatic(modifiers)) {\n                    let value = field.get(null);\n                    console.log(field + \" = \" + value)\n                } else {\n                    console.log(field)\n                }\n            })\n        }\n        );\n        jclass.getDeclaredMethods().forEach(function (jmethod) {\n            let methodsName = jmethod.getName();\n            let overloads = fclass[methodsName].overloads;\n            console.log(\"- \" + methodsName + \" overloads =\" + overloads.length)\n            for (let i = 0; i < overloads.length; i++) {\n                overloads[i].implementation = function () {\n                    let args = \"\"\n                    for (let j = 0; j < arguments.length; j++) {\n                        args += arguments[j]\n                        if (j != arguments.length - 1) {\n                            args += \",\";\n                        }\n                    }\n                    //printBacktrace();\n                    let methodCallStr = jclass.getName() + \".\" + methodsName + \"(\" + args + \")\"\n                    let returnValue = undefined;\n                    if (intercept && interceptCallback && intercept(this[methodsName])) {\n                        returnValue = interceptCallback(this[methodsName]);\n                    } else {\n                        returnValue = this[methodsName].apply(this, arguments)\n                    }\n                    console.error(\"- \" + methodCallStr + \" -> \" + returnValue)\n                    return returnValue;\n                };\n            }\n        });\n        console.log('\\n');\n\n        jclass.getDeclaredClasses().forEach(function (innerClass) {\n            traceClass(innerClass.getName(), intercept, interceptCallback);\n        });\n    })\n}\n\n\nmodule.exports = {\n    LOG,\n    traceClass,\n    printBacktrace\n}\n\n//# sourceURL=webpack:///./base.js?");

/***/ }),

/***/ "./cmcc.js":
/*!*****************!*\
  !*** ./cmcc.js ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * 移动系\r\n */\r\nfunction hookCMCC() {\r\n\r\n    let base = __webpack_require__(/*! ./base.js */ \"./base.js\")\r\n    \r\n\r\n    Java.perform(function () {\r\n\r\n        // let AbstractBaseSSO = Java.use(\"com.cmcc.migusso.auth.http.AbstractBaseSSO\");\r\n        // AbstractBaseSSO[\"getDeviceInfo\"].implementation = function () {\r\n        //     console.log(`AbstractBaseSSO.getDeviceInfo is called`);\r\n        //     let result = this[\"getDeviceInfo\"]();\r\n        //     console.log(`AbstractBaseSSO.getDeviceInfo result=${result}`);\r\n        //     return result;\r\n        // };\r\n\r\n        // let BusinessThread = Java.use(\"com.cmcc.migusso.auth.core.BusinessThread\");\r\n        // BusinessThread[\"procGetOtherNetPreForCMCC\"].implementation = function (appid, isInit, bundle, callback, isAllowOtherNet, enableUmcLoginPre) {\r\n        //     console.log(`BusinessThread.procGetOtherNetPreForCMCC is called: appid=${appid}, isInit=${isInit}, bundle=${bundle}, callback=${callback}, isAllowOtherNet=${isAllowOtherNet}, enableUmcLoginPre=${enableUmcLoginPre}`);\r\n        //     this[\"procGetOtherNetPreForCMCC\"](appid, isInit, bundle, callback, true, enableUmcLoginPre);\r\n        // };\r\n        // let LogUtil = Java.use(\"com.cmcc.util.LogUtil\");\r\n        // LOG_LEVEL = LogUtil.LOG_LEVEL.value;\r\n        // LogUtil.LOG_LEVEL.value = 1;\\\r\n\r\n        // var log_level = LogUtil.class.getDeclaredField(\"LOG_LEVEL\");\r\n        // log_level.setAccessible(true);\r\n        // log_level.set(null, Java.use(\"java.lang.Integer\").$new(0));\r\n        // let PermissionUtil = Java.use(\"com.cmcc.util.PermissionUtil\");\r\n        // PermissionUtil[\"checkHasPermission\"].implementation = function (context, permission) {\r\n        //     console.log(`PermissionUtil.checkHasPermission is called: context=${context}, permission=${permission}`);\r\n        //     let result = this[\"checkHasPermission\"](context, permission);\r\n        //     console.log(`PermissionUtil.checkHasPermission result=${result}`);\r\n        //     return result;\r\n        // };\r\n        // let BusinessThread = Java.use(\"com.cmcc.migusso.auth.core.BusinessThread\");\r\n        // BusinessThread[\"procPreWap\"].implementation = function (bundle, callback) {\r\n        //     console.log(`BusinessThread.procPreWap is called: bundle=${bundle}, callback=${callback}`);\r\n        //     this[\"procPreWap\"](bundle, callback);\r\n        // };\r\n\r\n        let DeviceUtil = Java.use(\"com.cmcc.migusso.ssoutil.DeviceUtil\");\r\n        DeviceUtil[\"isCMCCDataOpen\"].overloads[0].implementation = function (context) {\r\n            console.log(`DeviceUtil.isCMCCDataOpen is called: context=${context}`);\r\n            let result = this[\"isCMCCDataOpen\"](context);\r\n            console.log(`DeviceUtil.isCMCCDataOpen result=${result}`);\r\n            return result;\r\n        };\r\n\r\n        DeviceUtil[\"checkNetworkType\"].overloads[0].implementation = function (context) {\r\n            console.log(`DeviceUtil.checkNetworkType is called: context=${context}`);\r\n            let result = this[\"checkNetworkType\"](context);\r\n            console.log(`DeviceUtil.checkNetworkType result=${result}`);\r\n            return 3;\r\n        };\r\n\r\n        const loginInfo = Java.use(\"com.cmcc.migusso.auth.common.LoginInfo\")\r\n        loginInfo.getLoginType.implementation = function (arg) {\r\n            let loginType = this.getLoginType(arg);\r\n            console.log(`getLoginType=${loginType}`);\r\n            return loginType\r\n        }\r\n\r\n        const deviceUtil = Java.use(\"com.cmcc.migusso.ssoutil.DeviceUtil\")\r\n        deviceUtil.getDefaultDataSubId.overload(\"android.content.Context\").implementation = function (arg1) {\r\n            console.log(`getDefaultDataSubId=${this.getDefaultDataSubId(arg1)}->0`);\r\n            return Java.use(\"java.lang.Integer\").$new(0);\r\n        }\r\n\r\n        const commonUtils = Java.use(\"com.cmcc.util.CommonUtils\")\r\n        commonUtils.isCanAutoLogin.overload('android.content.Context').implementation = function (arg1) {\r\n            console.log(`isCanAutoLogin=${this.isCanAutoLogin(arg1)}->true`);\r\n            return true;\r\n        }\r\n\r\n\r\n        // const SubscriptionManager = Java.use(\"android.telephony.SubscriptionManager\");\r\n        // SubscriptionManager.getDefaultDataSubscriptionId.implementation = function () {\r\n        //     console.log(`SubscriptionManager.getDefaultDataSubscriptionId:${this.getDefaultDataSubscriptionId()}->0`)\r\n        //     //printBacktrace();\r\n        //     return 0;\r\n        // }\r\n\r\n\r\n        const networkInfo = Java.use(\"android.net.NetworkInfo\");\r\n        networkInfo.getExtraInfo.implementation = function () {\r\n            console.log(`networkInfo.getExtraInfo:${this.getExtraInfo()}->cmwap`)\r\n            return \"cmwap\"\r\n        }\r\n\r\n        networkInfo.getType.implementation = function () {\r\n            console.log(`networkInfo.getType:${this.getType()}->0`)\r\n            //printBacktrace();\r\n            return 0;\r\n        }\r\n        //\r\n        // networkInfo.getTypeName.implementation = function () {\r\n        //     console.log(`networkInfo.getTypeName:${this.getTypeName()}->MOBILE`)\r\n        //     //printBacktrace();\r\n        //     return \"MOBILE\";\r\n        // }\r\n        //\r\n        // const NetworkCapabilities = Java.use(\"android.net.NetworkCapabilities\");\r\n        // NetworkCapabilities.hasTransport.implementation = function (arg1) {\r\n        //     console.log(`hasTransport=${arg1.getType()}->true`)\r\n        //     return true;\r\n        // }\r\n        // NetworkCapabilities.getTransportTypes.implementation = function (arg1) {\r\n        //     var ret = this.getTransportTypes();\r\n        //     console.log(`getTransportTypes=${ret}->${ret}`)\r\n        //     return ret;\r\n        // }\r\n        //\r\n        // const ConnectivityManager = Java.use(\"android.net.ConnectivityManager\")\r\n        // ConnectivityManager.getNetworkCapabilities.implementation = function (arg1) {\r\n        //     const caps = this.getNetworkCapabilities(arg1);\r\n        //     console.log(`getNetworkCapabilities(${arg1})=${caps}->${caps}`);\r\n        //     return caps;\r\n        // }\r\n        //\r\n        const TelephonyManager = Java.use(\"android.telephony.TelephonyManager\")\r\n\r\n        TelephonyManager.getSimState.overload().implementation = function () {\r\n            let ret = this.getSimState();\r\n            console.log(`getSimState=${ret}->${ret}`);\r\n            return ret;\r\n        }\r\n\r\n        // const methodName = \"getDataEnabled\";\r\n        // const overloads = TelephonyManager[methodName].overloads;\r\n        // for(let i = 0;i < overloads.length;++i) {\r\n        //     overloads[i].implemention = function () {\r\n        //         const log = {'#': methodName, args: []};\r\n        //         for (let j = 0; j < arguments.length; j++) {\r\n        //             let arg = arguments[j];\r\n        //             // quick&dirty fix for java.io.StringWriter char[].toString() impl because frida prints [object Object]\r\n        //             if (j === 0 && arguments[j]) {\r\n        //                 if (arguments[j].toString() === '[object Object]') {\r\n        //                     let s = [];\r\n        //                     for (let k = 0, l = arguments[j].length; k < l; k++) {\r\n        //                         s.push(arguments[j][k]);\r\n        //                     }\r\n        //                     arg = s.join('');\r\n        //                 }\r\n        //             }\r\n        //             log.args.push({i: j, o: arg, s: arg ? arg.toString() : 'null'});\r\n        //         }\r\n        //         var retval;\r\n        //         try {\r\n        //             retval = this[methodName].apply(this, arguments); // might crash (Frida bug?)\r\n        //             log.returns = {val: retval, str: retval ? retval.toString() : null};\r\n        //         } catch (e) {\r\n        //             console.error(e);\r\n        //         }\r\n        //         console.log(log);\r\n        //\r\n        //         return retval;\r\n        //     }\r\n        // }\r\n        TelephonyManager.getDataEnabled.overload(\"int\").implementation = function (arg) {\r\n            let ret = this.getDataEnabled(arg);\r\n            console.log(`getDataEnabled=${ret}->${ret}`);\r\n            return true;\r\n        }\r\n        //\r\n        // TelephonyManager.getSubscriberId.overload().implementation = function () {\r\n        //     let ret = this.getSubscriberId();\r\n        //     console.log(`getSubscriberId=${ret}->${ret}`);\r\n        //     return ret;\r\n        // }\r\n        // TelephonyManager.getNetworkType.overload().implementation = function () {\r\n        //     let ret = this.getNetworkType();\r\n        //     console.log(`getNetworkType=${ret}->${ret}`);\r\n        //     return ret;\r\n        // }\r\n        // TelephonyManager.getNetworkType.overload(\"int\").implementation = function (arg1) {\r\n        //     let ret = this.getNetworkType(arg1);\r\n        //     console.log(`getNetworkType(${arg1})=${ret}->${ret}`);\r\n        //     return ret;\r\n        // }\r\n        // TelephonyManager.getDataNetworkType.overload().implementation = function () {\r\n        //     let ret = this.getDataNetworkType();\r\n        //     console.log(`getDataNetworkType=${ret}->${ret}`);\r\n        //     return ret;\r\n        // }\r\n        // TelephonyManager.getSimOperatorNumericForPhone.overload(\"int\").implementation = function (arg1) {\r\n        //     let ret = this.getSimOperatorNumericForPhone(arg1);\r\n        //     console.log(`getSimOperatorNumericForPhone(${arg1})=${ret}->${ret}`);\r\n        //     return ret;\r\n        // }\r\n        //\r\n        // TelephonyManager.getDataNetworkType.overload(\"int\").implementation = function (arg1) {\r\n        //     let ret = this.getDataNetworkType(arg1);\r\n        //     console.log(`getDataNetworkType(${arg1})=${ret}->${ret}`);\r\n        //     return ret;\r\n        // }\r\n        //\r\n        // TelephonyManager.getNetworkOperator.overload().implementation = function () {\r\n        //     console.log(`getNetworkOperator=${this.getNetworkOperator()}->46000`)\r\n        //     return \"46000\";\r\n        // }\r\n        //\r\n        // TelephonyManager.getNetworkOperator.overload(\"int\").implementation = function (arg1) {\r\n        //     console.log(`getNetworkOperator(${arg1})=${this.getNetworkOperator(arg1)}->46000`)\r\n        //     return \"46000\";\r\n        // }\r\n        //\r\n        // TelephonyManager.getNetworkOperatorForPhone.implementation = function (arg1) {\r\n        //     console.log(`getNetworkOperatorForPhone(${arg1})=${this.getNetworkOperatorForPhone(arg1)}->46000`)\r\n        //     return \"46000\";\r\n        // }\r\n\r\n\r\n\r\n\r\n    });\r\n\r\n\r\n    Java.perform(function () { // avoid java.lang.ClassNotFoundException\r\n        [\r\n            // \"com.cmcc.migusso.auth.common.LoginInfo\",\r\n            \"com.cmcc.migusso.ssoutil.DeviceUtil\",\r\n            \"com.cmcc.util.CommonUtils\",\r\n            \"com.cmcc.migusso.sdk.auth.AuthImpl\",\r\n            // \"com.cmcc.migusso.ssoutil.HistoryInfoUtils\",\r\n            \"com.cmcc.util.SimulatorCheckUtil\",\r\n            // \"com.cmcc.migusso.auth.core.BusinessThread\",\r\n            \"com.cmcc.migusso.auth.http.AbstractBaseSSO\",\r\n\r\n            // \"android.telephony.SubscriptionManager\",\r\n            // \"android.telephony.TelephonyManager\",\r\n            // \"android.net.ConnectivityManager\",\r\n            // \"android.net.NetworkCapabilities\",\r\n            // 'android.net.NetworkInfo'\r\n        ].forEach(base.traceClass);\r\n\r\n        // Java.use('java.net.Socket').isConnected.overload().implementation = function () {\r\n        //     LOG('Socket.isConnected.overload', { c: Color.Light.Cyan });\r\n        //     printBacktrace();\r\n        //     return true;\r\n        // }\r\n    });\r\n}\r\n\r\nmodule.exports = {\r\n    hookCMCC\r\n}\n\n//# sourceURL=webpack:///./cmcc.js?");

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nlet wx = __webpack_require__(/*! ./wx.js */ \"./wx.js\")\nlet qq = __webpack_require__(/*! ./qq.js */ \"./qq.js\")\nlet cmcc = __webpack_require__(/*! ./cmcc.js */ \"./cmcc.js\")\nlet fqxs = __webpack_require__(/*! ./fqxs.js */ \"./fqxs.js\")\n\n\nwx.hookWx()\n// qq.hook()\n// cmcc.hookCMCC()\n// fqxs.hook()\n\n\n\n//# sourceURL=webpack:///./entry.js?");

/***/ }),

/***/ "./fqxs.js":
/*!*****************!*\
  !*** ./fqxs.js ***!
  \*****************/
/***/ ((module) => {

eval("/**\r\n * 番茄小说\r\n */\r\n\r\nmodule.exports = {\r\n    hook: function () {\r\n        let LogWrapper = Java.use(\"com.dragon.read.base.util.LogWrapper\");\r\n        LogWrapper.printLog.overload(\"int\", \"java.lang.String\", \"java.lang.String\").implementation = function (arg1, arg2, arg3) {\r\n            var today = new Date()\r\n            var time = today.getHours() + \":\" + today.getMinutes() + \":\" + today.getSeconds()\r\n            console.log(\"[*] \" + time + \" DEBUG (d):\")\r\n            console.log(\"\\targ1 : \" + arg1)\r\n            console.log(\"\\targ2 : \" + arg2.toString())\r\n            console.log(\"\\targ3 : \" + arg3.toString())\r\n        }\r\n\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./fqxs.js?");

/***/ }),

/***/ "./qq.js":
/*!***************!*\
  !*** ./qq.js ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/**\n * QQ\n */\nfunction hook() {\n    let base = __webpack_require__(/*! ./base.js */ \"./base.js\")\n\n    try {\n        // base.traceClass(\"android.location.LocationManager\")\n        // base.traceClass(\"android.location.LocationListener\")\n        // let C0926k3 = Java.use(\"c.t.m.g.k3\");//日志\n        // let C0946o3 = Java.use(\"c.t.m.g.o3\");//日志\n        // let C0900f2 = Java.use(\"c.t.m.g.f2\");//gps 监听\n        base.traceClass(\"c.t.m.g.k3\")\n        base.traceClass(\"c.t.m.g.o3\")\n        base.traceClass(\"c.t.m.g.f2\")\n\n    } catch (e) {\n        console.log(\"class not found\")\n    }\n}\n\nmodule.exports = {\n    hook: hook\n\n}\n\n\n//# sourceURL=webpack:///./qq.js?");

/***/ }),

/***/ "./wx.js":
/*!***************!*\
  !*** ./wx.js ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction hookWx() {\n    try {\n\n        let base = __webpack_require__(/*! ./base.js */ \"./base.js\")\n        // base.traceClass(\"android.location.LocationManager\")\n        // base.traceClass(\"android.location.LocationListener\")\n\n        // base.traceClass(\"xh.i\");\n        // base.traceClass(\"com.tencent.mm.sdk.platformtools.l2\");\n        // base.traceClass(\"ru4.a\");\n\n        base.traceClass(\"com.tencent.mars.xlog.Xlog\");\n\n        base.traceClass(\"com.tencent.mm.plugin.location.ui.impl.o0\")\n\n        // base.traceClass(\"jy4.l\");\n\n        // base.traceClass(\"qs3.y\");\n\n       \n    } catch (e) {\n        console.log(\"class not found\")\n        console.log(e);\n    }\n}\n\n// setImmediate(main)\nmodule.exports = {\n    hookWx: hookWx\n}\n\n//# sourceURL=webpack:///./wx.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./entry.js");
/******/ 	
/******/ })()
;