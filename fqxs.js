/**
 * 番茄小说
 */

module.exports = {
    hook: function () {
        let LogWrapper = Java.use("com.dragon.read.base.util.LogWrapper");
        LogWrapper.printLog.overload("int", "java.lang.String", "java.lang.String").implementation = function (arg1, arg2, arg3) {
            var today = new Date()
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            console.log("[*] " + time + " DEBUG (d):")
            console.log("\targ1 : " + arg1)
            console.log("\targ2 : " + arg2.toString())
            console.log("\targ3 : " + arg3.toString())
        }


    }
}