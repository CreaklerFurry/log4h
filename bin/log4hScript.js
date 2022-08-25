let struc, outputDom;
const info = "DD6A347D-50B2-A514-08F8-AD08298FB483",
    success = "61128293-2DF9-7C4E-D107-F5CE7CABDA81",
    error = "C36F9F8C-032E-7C2C-0D6C-096BFCFBA38D",
    warn = "10C2F067-B674-6680-C9F7-C336C4FE07A1",
    debug = "33A7D720-D5EE-AF0D-ADF7-F8AC0EA6FC54",
    lists = {
    "DD6A347D-50B2-A514-08F8-AD08298FB483": "Info",
    "61128293-2DF9-7C4E-D107-F5CE7CABDA81": "Success",
    "C36F9F8C-032E-7C2C-0D6C-096BFCFBA38D": "Error",
    "10C2F067-B674-6680-C9F7-C336C4FE07A1": "Warn",
    "33A7D720-D5EE-AF0D-ADF7-F8AC0EA6FC54": "Debug" //预留位
    };
// -----------

if (!window.console) {
    window.console = {
        log: function () {}
    };
}

// -----------
export default class log4h {
    constructor(isAutoAddListener, curDom = document.createElement("logs")) {
        this.log4h = log4h;
        this.info = info;
        this.success = success;
        this.error = error;
        this.warn = warn;
        this.debug = debug;

        if (isAutoAddListener) {
            window.onerror = (a, b, c) => {
                log4h.prototype.output(error, a, b, c);
                return true;
            };
        }

    struc = log4h.prototype.getDefault(isAutoAddListener);
    outputDom = curDom;
    }
    getDefault(isAutoAddListener_ = true) {
        let defaultStruc = {
            isAutoAddListener: isAutoAddListener_,
            timeFormat: "yyyy-MM-dd hh:mm:ss",
            onInfo: {
                text: "Info",
                //'font': 'YaHei',
                color: "green",
                backgroundColor: "none"
            },
            onSuccess: {
                text: "Success",
                //'font': 'YaHei',
                color: "green",
                backgroundColor: "none"
            },
            onError: {
                text: "Error",
                //'font': 'YaHei',
                color: "red",
                backgroundColor: "none"
            },
            onWarn: {
                text: "Warn",
                //'font': 'YaHei',
                color: "yellow",
                backgroundColor: "none"
            }
        };
        return defaultStruc;
    }
    setConfig(config) {
        struc = typeof config === "object" ? config : struc;
        return typeof config === "object";
    }
    getConfig() {
        return struc;
    }
    reset() {
        struc = this.log4h.prototype.getDefault();
    }
    output(type = success, message, filename, line) {
        // init some value.
        var strType, objType, callerInfo, style, curTime, isFeedBack;
    // set values data
    curTime = extraScript.formatTime(struc.timeFormat);
        strType = lists[type];
        objType = struc["on" + strType];
        style =
            "padding: " +
            "0px" +
            ";" +
            "color: " +
            objType.color +
            ";" +
            "background: " +
            objType.backgroundColor +
            ";";
        try {
            callerInfo = extraScript.getCaller();
        } catch (e) {}
        // set something
        outputDom.innerHtml +=
            "[" + strType + "] " + curTime + ", Null(" + filename ||
            callerInfo.javascriptPath + ":" + line ||
            callerInfo.pow + ":" + 0 ||
            callerInfo.col + ") " + message;
        // output
        console.log(
            `%c[${strType}]%c %s, %s(%s:%d:%d)\n${message}`, //strType
            style,
            "padding: 0px; background: none; color: none;",
            curTime,
            "Null",
            filename || callerInfo.javascriptPath,
            line || callerInfo.pow,
            line === undefined || filename === undefined ? callerInfo.col : 0
        );
    }
}


/*
let struc, outputDom;
const
info = "DD6A347D-50B2-A514-08F8-AD08298FB483",
success = "61128293-2DF9-7C4E-D107-F5CE7CABDA81",
error = "C36F9F8C-032E-7C2C-0D6C-096BFCFBA38D",
warn = "10C2F067-B674-6680-C9F7-C336C4FE07A1",
debug = "33A7D720-D5EE-AF0D-ADF7-F8AC0EA6FC54",
lists = {
    'DD6A347D-50B2-A514-08F8-AD08298FB483': 'Info',
    '61128293-2DF9-7C4E-D107-F5CE7CABDA81': 'Success',
    'C36F9F8C-032E-7C2C-0D6C-096BFCFBA38D': 'Error',
    '10C2F067-B674-6680-C9F7-C336C4FE07A1': 'Warn',
    '33A7D720-D5EE-AF0D-ADF7-F8AC0EA6FC54': 'Debug', //预留位
};
// -----------

if  (!window.console){
    window.console = {
        log : function(){
        }
    };
}

// -----------
export default class log4h {
    constructor(isAutoAddListener, curDom = document.createElement ('logs')){
        this.log4h = log4h;
        this.info = info;
        this.success = success;
        this.error = error;
        this.warn = warn;
        this.debug = debug;

        if (isAutoAddListener) {
            window.onerror = (a, b, c)=>{
                log4h.prototype.output (error, a, b, c)
                return true
            };
        }

        struc = log4h.prototype.getDefault (isAutoAddListener);
        outputDom = curDom;
    }
    getDefault (isAutoAddListener_ = true){
        let defaultStruc = {
            isAutoAddListener: isAutoAddListener_,
            timeFormat: 'yyyy-MM-dd hh:mm:ss',
            onInfo: {
                'text': 'Info',
                //'font': 'YaHei',
                'color': 'green',
                'backgroundColor': 'none'
            },
            onSuccess: {
                'text': 'Success',
                //'font': 'YaHei',
                'color': 'green',
                'backgroundColor': 'none'
            },
            onError: {
                'text': 'Error',
                //'font': 'YaHei',
                'color': 'red',
                'backgroundColor': 'none'
            },
            onWarn: {
                'text': 'Warn',
                //'font': 'YaHei',
                'color': 'yellow',
                'backgroundColor': 'none'
            }
        };
        return defaultStruc
    }
    setConfig (config){
        struc = (typeof config === 'object'? config: struc);
        return typeof config === 'object';
    }
    getConfig (){
        return struc
    }
    reset (){
        struc = this.log4h.prototype.getDefault ();
    };
    output (type = success, message, filename, line) {
        // init some value.
        var strType, objType, callerInfo, style, curTime, isFeedBack;
        // set values data
        curTime = extraScript.formatTime(struc.timeFormat);
        strType = lists[type];
        objType = struc["on" + strType];
        style =
            "padding: " +
            "0px" +
            ";" +
            "color: " +
            objType.color +
            ";" +
            "background: " +
            objType.backgroundColor +
            ";";
        try {callerInfo = extraScript.getCaller();}catch(e){}
        // set something
        outputDom.innerHtml +=
            "[" +
            strType +
            "] " +
            curTime +
            ", Null(" +
            filename ||callerInfo.javascriptPath +
            ":" +
            line ||callerInfo.pow +
            ":" +
            0 || callerInfo.col +
            ") " +
            message;
        // output
        console.log(
        `%c[${strType}]%c %s, %s(%s:%d:%d)\n${message}`, //strType
            style,
            "padding: 0px; background: none; color: none;",
            curTime,
            "Null",
            filename || callerInfo.javascriptPath,
            line || callerInfo.pow,
            (line === undefined || filename === undefined)? callerInfo.col: 0
        );
    }
};
*/