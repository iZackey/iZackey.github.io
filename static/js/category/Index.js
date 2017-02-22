/**
 * Created by zackey on 2016/5/28.
 */
// 定义组件

define(function (require,exports,module) {
    require("css/index.css");
    var sTpl = require("templates/Index.html");
    var showDialog = require("js/modules/showDialog/showDialog.js");

    module.exports = Vue.extend({
        template: sTpl
        ,data:function(){
        	return {
        		myText:"我的内容"
                ,show:true
                ,ok:true
                ,ok2:true
                ,aImg:[{src:"/static/images/001.jpg"}]
        	};
        }
         /**
         * 监控数据改变
         * */
        ,watch:{
            'myText': function (val, oldVal) {
                console.log("数据改变了:",arguments);
            }
        }
        ,attached:function () {
            var t = this;
            t.$parent.documentTitle = "vue + seajs demo项目 -- 首页";

            setTimeout(function () {
                t.aImg.push({src:"/static/images/002.jpg"});
            },1000);

            console.log("gMain:",gMain);

        }
        ,methods:{
            showHello:function($event){
                this.show = !this.show;
            }
            ,imgLoad:function ($event) {
                console.log($($event.target).width());
            }
            ,showDialog:function () {
                var t = this;
                new showDialog({
                    title:"我的弹窗"
                    ,callback:function (data) {
                        alert(data);
                    }
                });
            }
        }
        /**
         * 指令
         * 在注册之后，便可以在 Vue.js 模板中这样用（记着添加前缀 v-）： <div v-my-directive="someValue"></div>
         * @type {Object}
         */
        ,directives:{
            'my-directive':{
                bind: function () {
                    // 准备工作
                    // 例如，添加事件处理器或只需要运行一次的高耗任务
                },
                update: function (newValue, oldValue) {
                    // 值更新时的工作
                    // 也会以初始值为参数调用一次

                },
                unbind: function () {
                    // 清理工作
                    // 例如，删除 bind() 添加的事件监听器
                }
            }
            /**
             * 当只需要 update 函数时，可以传入一个函数替代定义对象：
             */
            ,'my-directive2': function (value) {
                // 这个函数用作 update()
                // 值更新时的工作
                // 也会以初始值为参数调用一次
                $(this.el).css({width:"100px",height:"100px",background:"red"}).on("click",function () {
                    alert(1);
                });

                $.ajax({

                })
            }
        }
        ,transitions:{
            expand:{
                  beforeEnter: function (el) {
                    el.textContent = 'beforeEnter'
                  },
                  enter: function (el) {
                    el.textContent = 'enter'
                  },
                  afterEnter: function (el) {
                    el.textContent = 'afterEnter'
                  },
                  enterCancelled: function (el) {
                    // handle cancellation
                  },

                  beforeLeave: function (el) {
                    el.textContent = 'beforeLeave'
                  },
                  leave: function (el) {
                    el.textContent = 'leave'
                  },
                  afterLeave: function (el) {
                    el.textContent = 'afterLeave'
                  },
                  leaveCancelled: function (el) {
                    // handle cancellation
                  }
            }
            ,fade:{
                  css: false,
                  enter: function (el, done) {
                    // 元素已被插入 DOM
                    // 在动画结束后调用 done
                    $(el)
                      .css('opacity', 0)
                      .animate({ opacity: 1,marginLeft:0 ,fontSize:"15px"}, 1000, done)
                  },
                  enterCancelled: function (el) {
                    $(el).stop()
                  },
                  leave: function (el, done) {
                    // 与 enter 相同
                    $(el).animate({ opacity: 0 ,marginLeft:200,fontSize:"25px"}, 1000, done)
                  },
                  leaveCancelled: function (el) {
                    $(el).stop()
                  }
            }
        }
    });

});

