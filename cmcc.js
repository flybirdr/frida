/**
 * 移动系
 */
function hookCMCC() {

    let base = require("./base.js")
    

    Java.perform(function () {

        // let AbstractBaseSSO = Java.use("com.cmcc.migusso.auth.http.AbstractBaseSSO");
        // AbstractBaseSSO["getDeviceInfo"].implementation = function () {
        //     console.log(`AbstractBaseSSO.getDeviceInfo is called`);
        //     let result = this["getDeviceInfo"]();
        //     console.log(`AbstractBaseSSO.getDeviceInfo result=${result}`);
        //     return result;
        // };

        // let BusinessThread = Java.use("com.cmcc.migusso.auth.core.BusinessThread");
        // BusinessThread["procGetOtherNetPreForCMCC"].implementation = function (appid, isInit, bundle, callback, isAllowOtherNet, enableUmcLoginPre) {
        //     console.log(`BusinessThread.procGetOtherNetPreForCMCC is called: appid=${appid}, isInit=${isInit}, bundle=${bundle}, callback=${callback}, isAllowOtherNet=${isAllowOtherNet}, enableUmcLoginPre=${enableUmcLoginPre}`);
        //     this["procGetOtherNetPreForCMCC"](appid, isInit, bundle, callback, true, enableUmcLoginPre);
        // };
        // let LogUtil = Java.use("com.cmcc.util.LogUtil");
        // LOG_LEVEL = LogUtil.LOG_LEVEL.value;
        // LogUtil.LOG_LEVEL.value = 1;\

        // var log_level = LogUtil.class.getDeclaredField("LOG_LEVEL");
        // log_level.setAccessible(true);
        // log_level.set(null, Java.use("java.lang.Integer").$new(0));
        // let PermissionUtil = Java.use("com.cmcc.util.PermissionUtil");
        // PermissionUtil["checkHasPermission"].implementation = function (context, permission) {
        //     console.log(`PermissionUtil.checkHasPermission is called: context=${context}, permission=${permission}`);
        //     let result = this["checkHasPermission"](context, permission);
        //     console.log(`PermissionUtil.checkHasPermission result=${result}`);
        //     return result;
        // };
        // let BusinessThread = Java.use("com.cmcc.migusso.auth.core.BusinessThread");
        // BusinessThread["procPreWap"].implementation = function (bundle, callback) {
        //     console.log(`BusinessThread.procPreWap is called: bundle=${bundle}, callback=${callback}`);
        //     this["procPreWap"](bundle, callback);
        // };

        let DeviceUtil = Java.use("com.cmcc.migusso.ssoutil.DeviceUtil");
        DeviceUtil["isCMCCDataOpen"].overloads[0].implementation = function (context) {
            console.log(`DeviceUtil.isCMCCDataOpen is called: context=${context}`);
            let result = this["isCMCCDataOpen"](context);
            console.log(`DeviceUtil.isCMCCDataOpen result=${result}`);
            return result;
        };

        DeviceUtil["checkNetworkType"].overloads[0].implementation = function (context) {
            console.log(`DeviceUtil.checkNetworkType is called: context=${context}`);
            let result = this["checkNetworkType"](context);
            console.log(`DeviceUtil.checkNetworkType result=${result}`);
            return 3;
        };

        const loginInfo = Java.use("com.cmcc.migusso.auth.common.LoginInfo")
        loginInfo.getLoginType.implementation = function (arg) {
            let loginType = this.getLoginType(arg);
            console.log(`getLoginType=${loginType}`);
            return loginType
        }

        const deviceUtil = Java.use("com.cmcc.migusso.ssoutil.DeviceUtil")
        deviceUtil.getDefaultDataSubId.overload("android.content.Context").implementation = function (arg1) {
            console.log(`getDefaultDataSubId=${this.getDefaultDataSubId(arg1)}->0`);
            return Java.use("java.lang.Integer").$new(0);
        }

        const commonUtils = Java.use("com.cmcc.util.CommonUtils")
        commonUtils.isCanAutoLogin.overload('android.content.Context').implementation = function (arg1) {
            console.log(`isCanAutoLogin=${this.isCanAutoLogin(arg1)}->true`);
            return true;
        }


        // const SubscriptionManager = Java.use("android.telephony.SubscriptionManager");
        // SubscriptionManager.getDefaultDataSubscriptionId.implementation = function () {
        //     console.log(`SubscriptionManager.getDefaultDataSubscriptionId:${this.getDefaultDataSubscriptionId()}->0`)
        //     //printBacktrace();
        //     return 0;
        // }


        const networkInfo = Java.use("android.net.NetworkInfo");
        networkInfo.getExtraInfo.implementation = function () {
            console.log(`networkInfo.getExtraInfo:${this.getExtraInfo()}->cmwap`)
            return "cmwap"
        }

        networkInfo.getType.implementation = function () {
            console.log(`networkInfo.getType:${this.getType()}->0`)
            //printBacktrace();
            return 0;
        }
        //
        // networkInfo.getTypeName.implementation = function () {
        //     console.log(`networkInfo.getTypeName:${this.getTypeName()}->MOBILE`)
        //     //printBacktrace();
        //     return "MOBILE";
        // }
        //
        // const NetworkCapabilities = Java.use("android.net.NetworkCapabilities");
        // NetworkCapabilities.hasTransport.implementation = function (arg1) {
        //     console.log(`hasTransport=${arg1.getType()}->true`)
        //     return true;
        // }
        // NetworkCapabilities.getTransportTypes.implementation = function (arg1) {
        //     var ret = this.getTransportTypes();
        //     console.log(`getTransportTypes=${ret}->${ret}`)
        //     return ret;
        // }
        //
        // const ConnectivityManager = Java.use("android.net.ConnectivityManager")
        // ConnectivityManager.getNetworkCapabilities.implementation = function (arg1) {
        //     const caps = this.getNetworkCapabilities(arg1);
        //     console.log(`getNetworkCapabilities(${arg1})=${caps}->${caps}`);
        //     return caps;
        // }
        //
        const TelephonyManager = Java.use("android.telephony.TelephonyManager")

        TelephonyManager.getSimState.overload().implementation = function () {
            let ret = this.getSimState();
            console.log(`getSimState=${ret}->${ret}`);
            return ret;
        }

        // const methodName = "getDataEnabled";
        // const overloads = TelephonyManager[methodName].overloads;
        // for(let i = 0;i < overloads.length;++i) {
        //     overloads[i].implemention = function () {
        //         const log = {'#': methodName, args: []};
        //         for (let j = 0; j < arguments.length; j++) {
        //             let arg = arguments[j];
        //             // quick&dirty fix for java.io.StringWriter char[].toString() impl because frida prints [object Object]
        //             if (j === 0 && arguments[j]) {
        //                 if (arguments[j].toString() === '[object Object]') {
        //                     let s = [];
        //                     for (let k = 0, l = arguments[j].length; k < l; k++) {
        //                         s.push(arguments[j][k]);
        //                     }
        //                     arg = s.join('');
        //                 }
        //             }
        //             log.args.push({i: j, o: arg, s: arg ? arg.toString() : 'null'});
        //         }
        //         var retval;
        //         try {
        //             retval = this[methodName].apply(this, arguments); // might crash (Frida bug?)
        //             log.returns = {val: retval, str: retval ? retval.toString() : null};
        //         } catch (e) {
        //             console.error(e);
        //         }
        //         console.log(log);
        //
        //         return retval;
        //     }
        // }
        TelephonyManager.getDataEnabled.overload("int").implementation = function (arg) {
            let ret = this.getDataEnabled(arg);
            console.log(`getDataEnabled=${ret}->${ret}`);
            return true;
        }
        //
        // TelephonyManager.getSubscriberId.overload().implementation = function () {
        //     let ret = this.getSubscriberId();
        //     console.log(`getSubscriberId=${ret}->${ret}`);
        //     return ret;
        // }
        // TelephonyManager.getNetworkType.overload().implementation = function () {
        //     let ret = this.getNetworkType();
        //     console.log(`getNetworkType=${ret}->${ret}`);
        //     return ret;
        // }
        // TelephonyManager.getNetworkType.overload("int").implementation = function (arg1) {
        //     let ret = this.getNetworkType(arg1);
        //     console.log(`getNetworkType(${arg1})=${ret}->${ret}`);
        //     return ret;
        // }
        // TelephonyManager.getDataNetworkType.overload().implementation = function () {
        //     let ret = this.getDataNetworkType();
        //     console.log(`getDataNetworkType=${ret}->${ret}`);
        //     return ret;
        // }
        // TelephonyManager.getSimOperatorNumericForPhone.overload("int").implementation = function (arg1) {
        //     let ret = this.getSimOperatorNumericForPhone(arg1);
        //     console.log(`getSimOperatorNumericForPhone(${arg1})=${ret}->${ret}`);
        //     return ret;
        // }
        //
        // TelephonyManager.getDataNetworkType.overload("int").implementation = function (arg1) {
        //     let ret = this.getDataNetworkType(arg1);
        //     console.log(`getDataNetworkType(${arg1})=${ret}->${ret}`);
        //     return ret;
        // }
        //
        // TelephonyManager.getNetworkOperator.overload().implementation = function () {
        //     console.log(`getNetworkOperator=${this.getNetworkOperator()}->46000`)
        //     return "46000";
        // }
        //
        // TelephonyManager.getNetworkOperator.overload("int").implementation = function (arg1) {
        //     console.log(`getNetworkOperator(${arg1})=${this.getNetworkOperator(arg1)}->46000`)
        //     return "46000";
        // }
        //
        // TelephonyManager.getNetworkOperatorForPhone.implementation = function (arg1) {
        //     console.log(`getNetworkOperatorForPhone(${arg1})=${this.getNetworkOperatorForPhone(arg1)}->46000`)
        //     return "46000";
        // }




    });


    Java.perform(function () { // avoid java.lang.ClassNotFoundException
        [
            // "com.cmcc.migusso.auth.common.LoginInfo",
            "com.cmcc.migusso.ssoutil.DeviceUtil",
            "com.cmcc.util.CommonUtils",
            "com.cmcc.migusso.sdk.auth.AuthImpl",
            // "com.cmcc.migusso.ssoutil.HistoryInfoUtils",
            "com.cmcc.util.SimulatorCheckUtil",
            // "com.cmcc.migusso.auth.core.BusinessThread",
            "com.cmcc.migusso.auth.http.AbstractBaseSSO",

            // "android.telephony.SubscriptionManager",
            // "android.telephony.TelephonyManager",
            // "android.net.ConnectivityManager",
            // "android.net.NetworkCapabilities",
            // 'android.net.NetworkInfo'
        ].forEach(base.traceClass);

        // Java.use('java.net.Socket').isConnected.overload().implementation = function () {
        //     LOG('Socket.isConnected.overload', { c: Color.Light.Cyan });
        //     printBacktrace();
        //     return true;
        // }
    });
}

module.exports = {
    hookCMCC
}