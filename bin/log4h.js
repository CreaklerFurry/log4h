let
status_uuid =
{
    "success": "8A4577FC00B7BD58",
    "error": "5A9A3E7F6D1FD975",
    "warn": "05EE0C6D4DE30740",
    "info": "9962BF5C22648242",
    "fail": "77001F66E37289A5"
},
uuid_status = {
    "8A4577FC00B7BD58": "success",
    "5A9A3E7F6D1FD975": "error",
    "05EE0C6D4DE30740": "warn",
    "9962BF5C22648242": "info",
    "77001F66E37289A5": "fail"
},
currentConfig;
{
    getCallerExtra = () => {
        let stack, isChrome;
        stack = (new Error).stack;
        isChrome = (stack.slice (0, 5).toLowerCase () == 'error')
        return stack.split (isChrome ? '\n    at ' : '@').slice (-1).toString (); 
    };
    getCurrentTime = (retStamp = false) => {
        let date = new Date ();
        return retStamp?  Date.parse (date.toString ()): date.toString ();
    }
}
class log4h{
    constructor (isAutoDetect = true)
    {
        this.success = status_uuid ['success'];
        this.error = status_uuid ['error'];
        this.warn = status_uuid ['warn'];
        this.info = status_uuid ['info'];
        this.fail = status_uuid ['fail'];
        
        currentConfig =
        this.defaultConfig = log4h.prototype.getDefault();

        this.getDefault = log4h.prototype.getDefault;
        this.setConfig = log4h.prototype.setConfig;
    };
    getDefault ()
    {
        let returnDefault = {
            isAutoDetect: true,
            postMessage: null,
            success: {
                text: "success",
                fontColor: "green",
                backgroundColor: "none",
            },
        }
        return returnDefault;
    };
    setConfig (config = log4h.prototype.getDefault())
    {
        return currentConfig = config;
    };
    getConfig ()
    {
        return currentConfig;
    };
    in (outputData, type = status_uuid.success)
    {
        let text = outputData, typeStr = uuid_status[type];
        switch (typeof text) {
            case 'string':
                console.log (
                    `%c[${currentConfig[typeStr].text}]%c ${getCurrentTime ()} null:(${getCallerExtra ()})\n${outputData}`,
                    `background-color: ${currentConfig[typeStr].backgroundColor}; color: ${currentConfig[typeStr].fontColor}`,
                    'background-color: none; color: none'
                );
                break;
            default:
                break;
        }
        return true
    };
};
log4h = new log4h ();
let defaultIn = 
`

`