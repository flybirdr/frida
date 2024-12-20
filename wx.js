

function hookWx() {
    try {

        let base = require("./base.js")
        // base.traceClass("android.location.LocationManager")
        // base.traceClass("android.location.LocationListener")

        // base.traceClass("xh.i");
        // base.traceClass("com.tencent.mm.sdk.platformtools.l2");
        // base.traceClass("ru4.a");

        base.traceClass("com.tencent.mars.xlog.Xlog");

        base.traceClass("com.tencent.mm.plugin.location.ui.impl.o0")

        // base.traceClass("jy4.l");

        // base.traceClass("qs3.y");

       
    } catch (e) {
        console.log("class not found")
        console.log(e);
    }
}

// setImmediate(main)
module.exports = {
    hookWx: hookWx
}