/**
 * Created by zackey on 2016/5/28.
 */
define(function (require,exports,module) {
    var oConfig = require("js/config2.js");
    $.extend(gMain,oConfig);
    // 路由器需要一个根组件。
    var App = Vue.extend({
        data:function () {
            return {
                documentTitle:""
            };
        }
    });

    // 创建一个路由器实例
    var router = new VueRouter();

    // 定义路由规则
    router.map({
        '/': {
            component: function (resolve) {
                require.async(['js/category/Index.js'],resolve);
            }
        },
        '/foo/:params1/:params2/:uuid': {
            component: function (resolve) {
                require.async(['js/category/Foo.js'],resolve);
            }
        },
        '/bar': {
            component:function (resolve) {
                require.async(['js/category/Bar.js'],resolve);
            }
        },
        '/three': {
            component:function (resolve) {
                require.async(['js/category/three.js'],resolve);
            }
        }
    });

    // 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
    router.start(App, 'html');

    router.afterEach(function (transition) {
        console.log('成功浏览到: ' + transition.to.path)
        gMain.vueHeader.path = transition.to.path;
    })

});