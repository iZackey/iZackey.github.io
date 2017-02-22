/**
 * Created by zackey on 2016/5/28.
 */
define(function (require,exports,module) {

    // 注册组件，传入一个扩展的构造器
    Vue.component('myCom', Vue.extend({
        /**
         * 模板字符串
         */
        template: '<h1>我的自定义组件</h1>'+
        '    <p>'+
        '           {{$parent.$data.myComData}}  <br>' +
        '           <button v-on:click="myComBtnClick">我是自定义组件按钮</button> <br>' +
        '    </p>' + 
        '    <p>来自父组件模板传参： {{param1}}，{{param2}}</p>'
        ,replace:true
        /**
         * Vue 实例的数据对象。Vue.js 会递归地将它全部属性转为 getter/setter，从而让它能响应数据变化。
         */
        ,data:function(){
            return {
                myText:"sdfsadf"
            };
        }
        /**
         * 使用的父组件数据的属性
         */
        ,props:['param1','param2']
        /**
         * 实例方法。实例可以直接访问这些方法，也可以用在指令表达式内。方法的 this 自动绑定到实例。
         * @type {Object}
         */
        ,methods:{
            myComBtnClick:function () {
                this.$parent.$data.myComData = "改变了父组件的数据！";
            }
        }
        ,watch:{
            'myText': function (val, oldVal) {
                
            }
        }
        /**
         * 跟生命周期相关的一些方法
         */
        ,init:function(){}  //在实例开始初始化时同步调用。此时数据观测、事件和 watcher 都尚未初始化。
        ,created:function(){}  //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 DOM 编译，$el 还不存在。
        ,beforeCompile:function(){} //在编译开始前调用。
        ,compiled:function(){} //在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。
        ,ready:function(){}  //在编译结束和 $el 第一次插入文档之后调用
        ,attached:function(){}  //在 vm.$el 插入 DOM 时调用。
        ,detached:function(){}  //在 vm.$el 从 DOM 中删除时调用。
        ,beforeDestroy:function(){} //在开始销毁实例时调用。此时实例仍然有功能。
        ,destroyed:function(){}  //在实例被销毁之后调用。

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
            }
        }
        /**
         * 元素指令
         * 这与 Angular 的 “E” 指令非常相似。元素指令可以看做是一个轻量组件。可以像下面这样注册一个自定义元素指令：
         * 调用 <my-directive></my-directive>，而不是：<div v-my-directive></div>
         * @type {Object}
         */
        ,elementDirectives:{
            'my-directive':{
              // API 同普通指令
              bind: function () {
                // 操作 this.el...
              }
            }
        }
        /**
         * 过滤器
         * @type {Object}
         */
        ,filters:{
            myFilter:function(value){
                return value.split('').reverse().join('');
            }
            //....
            //....
        }
         /**
         * 组件
         * @type {Object}
         */
        ,components:{
             'my-component': {
                template: '<div>A custom component!</div>'
                //...
                //...
             }
        }
        /**
         * 过渡
         * @type {Object}
         */
        ,transitions:{}

    }));


});
