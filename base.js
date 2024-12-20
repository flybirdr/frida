var Color = {
    RESET: "\x1b[39;49;00m",
    Black: "0;01",
    Blue: "4;01",
    Cyan: "6;01",
    Gray: "7;11",
    Green: "2;01",
    Purple: "5;01",
    Red: "1;01",
    Yellow: "3;01",
    Light: {
        Black: "0;11",
        Blue: "4;11",
        Cyan: "6;11",
        Gray: "7;01",
        Green: "2;11",
        Purple: "5;11",
        Red: "1;11",
        Yellow: "3;11"
    }
};
function LOG(input, kwargs) {
    kwargs = kwargs || {};
    var logLevel = kwargs['l'] || 'log', colorPrefix = '\x1b[3', colorSuffix = 'm';
    if (typeof input === 'object')
        input = JSON.stringify(input, null, kwargs['i'] ? 2 : null);
    if (kwargs['c'])
        input = colorPrefix + kwargs['c'] + colorSuffix + input + Color.RESET;
    console[logLevel](input);
};

function printBacktrace() {
    Java.perform(function () {
        var android_util_Log = Java.use('android.util.Log'), java_lang_Exception = Java.use('java.lang.Exception');
        // getting stacktrace by throwing an exception
        LOG(android_util_Log.getStackTraceString(java_lang_Exception.$new()), { c: Color.Gray });
    });
};


function traceClass(className, intercept, interceptCallback) {
    Java.perform(function () {
        let fclass = Java.use(className);
        let jclass = fclass.class;
        console.log(jclass)
        jclass.getDeclaredFields().forEach(function logClassInfo(field) {
            Java.perform(function () {
                let Modifier = Java.use("java.lang.reflect.Modifier");
                let modifiers = field.getModifiers();
                field.setAccessible(true);
                if (Modifier.isStatic(modifiers)) {
                    let value = field.get(null);
                    console.log(field + " = " + value)
                } else {
                    console.log(field)
                }
            })
        }
        );
        jclass.getDeclaredMethods().forEach(function (jmethod) {
            let methodsName = jmethod.getName();
            let overloads = fclass[methodsName].overloads;
            console.log("- " + methodsName + " overloads =" + overloads.length)
            for (let i = 0; i < overloads.length; i++) {
                overloads[i].implementation = function () {
                    let args = ""
                    for (let j = 0; j < arguments.length; j++) {
                        args += arguments[j]
                        if (j != arguments.length - 1) {
                            args += ",";
                        }
                    }
                    //printBacktrace();
                    let methodCallStr = jclass.getName() + "." + methodsName + "(" + args + ")"
                    let returnValue = undefined;
                    if (intercept && interceptCallback && intercept(this[methodsName])) {
                        returnValue = interceptCallback(this[methodsName]);
                    } else {
                        returnValue = this[methodsName].apply(this, arguments)
                    }
                    console.error("- " + methodCallStr + " -> " + returnValue)
                    return returnValue;
                };
            }
        });
        console.log('\n');

        jclass.getDeclaredClasses().forEach(function (innerClass) {
            traceClass(innerClass.getName(), intercept, interceptCallback);
        });
    })
}


module.exports = {
    LOG,
    traceClass,
    printBacktrace
}