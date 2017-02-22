/**
 * Created by zackey on 2016/5/28.
 */
define(function (require,exports,module) {
    require("js/modules/header/header.css");
    var sTpl = require("js/modules/header/header.html");
    require("js/plugins/layer/layer.js");
    layer.config({
        path: './static/js/plugins/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });

    var Header = function () {
        this.init.apply(this,arguments);
    };
    $.extend(Header.prototype,{
        options:{}
        ,init:function(options){
            var that = this;
            that.options = $.extend({},that.options,options);
            var indexLayer = layer.load(0, {shade: [1,'#fff']}); //启用loading遮罩
            $("body").prepend(sTpl);

            gMain.vueHeader = new Vue({
                el:"#header"
                ,data:{
                    aMenu:[]
                    ,oUser:{}
                    ,path:""
                }
                ,attached:function () {
                    var t =this;
                    //延迟模拟ajax请求
                    $.when(t.getSessionData()).done(function () {
                        that.options.callback();
                        layer.close(indexLayer);
                        $("#app").show();
                    });
                }
                ,methods:{
                    getSessionData:function () {
                        var t = this;
                        var df = $.Deferred();
                        setTimeout(function () {
                            t.aMenu = [
                                {"title":"首页","url":"#!/"},
                                {"title":"菜单2","url":"#!/bar"},
                                {"title":"菜单3","url":"#!/foo/a/b/123456789"},
                                {"title":"菜单4","url":"#!/three"}
                            ];
                            var oUser = {"userObj":{"userName":"zhangsan","userDd":"123456"}};
                            t.oUser = oUser;
                            gMain.oUser = JSON.parse(JSON.stringify(oUser));
                            df.resolve();
                        },100);
                        return df;
                    }
                }
            });
        }
    });
    module.exports = Header;
});