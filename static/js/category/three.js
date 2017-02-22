/**
 * Created by zackey on 2016/5/28.
 */

define(function (require,exports,module) {
    var sTpl = require("templates/three.html");
    require("js/modules/menu/menu.js");
    var tools = require("js/plugins/tools.js");

    module.exports = Vue.extend({
        template: sTpl
        ,data:function(){
            return {
                aList:[
                    {title:"菜单1"},
                    {title:"菜单2",children:[
                        {title:"菜单2-1",children:[
                            {title:"菜单2-1-1"},
                            {title:"菜单2-1-2"},
                            {title:"菜单2-1-3",children:[
                                {title:"菜单2-1-3-1"},
                                {title:"菜单2-1-3-2"}
                            ]}
                        ]},
                        {title:"菜单2-2"}
                    ]},
                    {title:"菜单3"}
                ]
            };
        }
        ,attached:function () {
            var t = this;
            t.$parent.documentTitle = "菜单4的标题";
        }
        ,methods:{

        }
    });

});

