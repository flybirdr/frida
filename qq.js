
/**
 * QQ
 */
function hook() {
    let base = require("./base.js")

    try {
        // base.traceClass("android.location.LocationManager")
        // base.traceClass("android.location.LocationListener")
        // let C0926k3 = Java.use("c.t.m.g.k3");//日志
        // let C0946o3 = Java.use("c.t.m.g.o3");//日志
        // let C0900f2 = Java.use("c.t.m.g.f2");//gps 监听
        base.traceClass("c.t.m.g.k3")
        base.traceClass("c.t.m.g.o3")
        base.traceClass("c.t.m.g.f2")

    } catch (e) {
        console.log("class not found")
    }
}

module.exports = {
    hook: hook

}
