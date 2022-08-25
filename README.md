# log4h - Log4j for Html

## 简介
    这是一个为 html 所打造的日志记录脚本。  
    此脚本目的是为了更好的简单的记录各个数据。  
    此脚本参考自 Java 的 Log4J 库。  
## 用法
    你可以通过申明全局或者局部变量来创建新类。  
    该库使用了 ES6语法，且必须在调用该库的 <script> 元素属性中添加 type="module";

```html
    <script type="module">
        import log4j from fileName;
        // var log = new log4j (bool, dom) // 全局
        {
            var log = new log4j (bool, dom); // new Class. //局部
            // bool 参数为是否要监听 error 事件 (默认 true)。 
            // dom是log日志存放数据的元素 (默认 由JS处理)。
            
            // log.getDefault () // 取默认配置
            // log.getConfig () // 取当前配置
            // log.setConfig () // 设置当前配置，千万要与 obj.getDefault () 所返回的配置相匹配!否则报错!  
            
            log.output (log.*, message, ?filename, ?line)
            // log.* 可替换为 info, debug(有保留uuid但未添加), success, error, warn;
            // 参数前缀带 '?' 为可选参数。
            // message : 必填
            
            // log.reset () 重置当前配置信息。
        }
    </script>
```
    
## 所依赖库
1. [EventUtil.js](https://www.cnblogs.com/hykun/p/EventUtil.html)
2. ExtraScript.js \-\> 由 Qianshi 制作整合。

## 欲实现
1. 提取必要的函数减少第三方库应用 []
2. 获取 历史log文本 []
3. 更加完善 Log4h []
