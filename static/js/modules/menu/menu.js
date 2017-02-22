/**
 * Created by Zackey on 2016/12/14.
 */
define(function(require, exports, module) {
    var sTpl = require("js/modules/menu/menu.html");

    Vue.component('menu', Vue.extend({
        props: ['alist']
        ,template: sTpl
        ,data:function(){
            return {

            };
        }
        ,watch:{

        }
        ,attached:function () {
            var t =this;

        }
        ,methods:{

        }
    }));
});