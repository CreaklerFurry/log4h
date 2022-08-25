var extraScript = {
    getCaller: () => {
        let errorText, caller, jsPath, data, isChrome;
        errorText = new Error().stack;
        isChrome = errorText.substring(0, 5) == "Error";
        caller = errorText
            .split("\n")
            [isChrome ? 3 : 2].split(" ")
            [isChrome ? 5 : 0].split(":");
        for (let i = 0; i < caller.length - 2; i++) {
            jsPath += caller[i] + ":";
        }
        data = {
            javascriptPath: jsPath.slice(isChrome ? 9 : 10, -1),
            col: caller[caller.length - 1],
            pow: caller[caller.length - 2]
        };
        return data;
    },
    doXMLHttpRequest: (type, url) => {
        let xhr, retData;
        xhr = new XMLHttpRequest();
        xhr.open(type, url, false);
        xhr.onreadystatechange = () =>{
            if (xhr.readyStats == 4 && (200 <= xhr.status < 300 || xhr.status === 302))
            {
                retData = xhr.responseText
            }else
            {
                new Error ('[Error] cannot get from <'+url+'>');
            }
        }
        return retData
    },
    formatTime: (format) => {
        let timeF, date, o;
        timeF = format;
        date = new Date();
        o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(timeF)) timeF = timeF.replace(RegExp.$1, (date.getFullYear() + "").substring(4 - RegExp.$1.length))
        {
            for (var k in o)
            {
            if (new RegExp("(" + k + ")").test(timeF))
                {
                    timeF = timeF.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substring(("" + o[k]).length)));
                }
            }
        }
        return timeF;
    }
};