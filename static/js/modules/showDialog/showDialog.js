/**
 * Created by Zackey on 2016/12/14.
 */
define(function (require,exports,module) {
    require("js/plugins/artDialog/ui-dialog.css");
    require("js/plugins/artDialog/dialog-plus.js");

    var showDialog = function () {
        this.init.apply(this,arguments);
    };
    $.extend(showDialog.prototype,{
        options:{}
        ,init:function (options) {
            var t = this;
            $.extend(t.options,options);
            t.initDialog();
        }
        ,initDialog:function () {
            var t = this;
            t.d = dialog({
                title:t.options.title
                ,ok:function () {
                    typeof t.options.callback == "function" && t.options.callback(t.vueDialog.msg);
                }
                ,content:'<div id="demo_dialog">{{msg}}</div>'
            });
            t.d.showModal();
            t.initVue();
        }
        ,initVue:function () {
            var that = this;
            that.vueDialog = new Vue({
                el:"#demo_dialog"
                ,data:{
                    msg:"hello world!"
                }
                ,methods:{

                }
            });
        }

    });

    module.exports = showDialog;
});