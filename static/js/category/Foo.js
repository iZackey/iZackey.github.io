/**
 * Created by zackey on 2016/5/28.
 */
// 定义组件

define(function (require,exports,module) {
    var sTpl = require("templates/Foo.html");
    require("js/modules/myCom/myCom.js");

    module.exports = Vue.extend({
        template: sTpl
        ,data:function(){
            return {
                msg:"Foo页面!!!!!!!!!!"
                ,params1:""
                ,params2:""
                ,uuid:""
            }
        }
        ,compiled:function () {
            var t = this;
            t.uuid = t.$route.params.uuid;
        }
        ,attached:function () {
            var t = this;
            t.$parent.documentTitle = "Foo页面";
        }
        ,ready:function () {
            //console.log(this.$route.params);//路由参数
            // this.params1 = this.$route.params.params1;
            // this.params2 = this.$route.params.params2;
            //this.$set("params2",this.$route.params.params2);
            //this.$set("params1","sfasdf");
            //console.log("params1",this.$get("params2"));
            // console.log("this.$data",JSON.stringify(this.$data));
        }
        /**
         * 监控路由改变
         * */
        ,route: {
            data: function (transition) {
                return {
                    params1:transition.to.params.params1
                    ,params2:transition.to.params.params2
                    ,uuid:transition.to.params.uuid
                }
            }
        }
        /**
         * 监控数据改变
         * */
        ,watch:{
            'params2': function (val, oldVal) {
                console.log("thisdata:",JSON.stringify(this.$data));
            }
            ,'msg':function (val, oldVal) {
                console.log("thisdata:",JSON.stringify(this.$data));
            }
        }
        ,methods:{
            click1:function(){
                this.msg = "zhang";
                layer.msg("我是Foo页面");
            }
        }
    });
});

