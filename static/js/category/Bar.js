/**
 * Created by zackey on 2016/5/28.
 */
// 定义组件

define(function (require,exports,module) {
    var sTpl = require("templates/Bar.html");
    require("js/modules/myCom/myCom.js");
    var tools = require("js/plugins/tools.js");

    module.exports  = Vue.extend({
        template: sTpl
        ,data:function(){
            return {
                msg:"Bar页面"
                ,myComData:"自定义组件的数据"
            }
        }
        ,attached:function () {
            var t = this;
            t.$parent.documentTitle = "Bar页面";

            $("#btn1").click(function () {
                t.msg = "dom操作的改变";
            });


            setTimeout(function () {
                tools.setData({
                    a:3,
                    b:2,
                    callback:function (result) {
                        $.ajax({
                            url:"index.html"
                            ,success:function () {
                                t.msg = "ajax请求后的改变"+result;
                            }
                        });
                    }
                });
            },2000);

        }
        ,methods:{
            click1:function(){
                this.msg = "zhang";
                layer.msg("我是Bar页面");
            }
        }

    });
});

