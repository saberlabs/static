# Saber 静态资源托管

此处将通过 `Github Pages` 的方式托管 `Saber` 项目中需要用到的外部脚本。

## Jasmine

1.3.1

+ http://saberlabs.github.io/static/jasmine/1.3.1/jasmine.css
+ http://saberlabs.github.io/static/jasmine/1.3.1/jasmine.js
+ http://saberlabs.github.io/static/jasmine/1.3.1/jasmine-html.js

2.0.0

+ http://saberlabs.github.io/static/jasmine/2.0.0/jasmine.css
+ http://saberlabs.github.io/static/jasmine/2.0.0/jasmine.js
+ http://saberlabs.github.io/static/jasmine/2.0.0/jasmine-html.js
+ http://saberlabs.github.io/static/jasmine/2.0.0/console.js
+ http://saberlabs.github.io/static/jasmine/2.0.0/boot.js
+ http://saberlabs.github.io/static/jasmine/2.0.0/amd-boot.js
+ http://saberlabs.github.io/static/jasmine/2.0.0/console-reporter.js
+ http://saberlabs.github.io/static/jasmine/2.0.0/jasmine_favicon.png

### 关于测试Android 2.3

请使用显式声明的`AMD boot`模块（`amd-boot.js`，否则会出现不执行`spec`的情况），加载顺序需要保证在`esl`之后，如下：

```html
<!-- 注意esl与amd-boot的先后顺序 -->
<script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/1-6-10/esl.js"></script>
<script src="http://saberlabs.github.io/static/jasmine/2.0.0/amd-boot.js"></script>

<script>
    require(['boot', 'module.spec'], function (boot) {
        // 保证在所有spec都加载完成后
        // 再手动启动测试
        boot();
    });
</script>
```
