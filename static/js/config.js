/**
 * 公共全局配置文件
 */
var gMain = {
    verson:"_VERSON_"
    ,basePath:"./"  //基础路径
    ,jsdir:"static"
    //一些配置域名
    ,dayDaoDomains:{
        baseStaticDomain:"http://static.dev.dayhr.com/"  //静态资源服务器域名
        ,passportDomain:"https://passport.dev.daydao.com/"   //登录域名
        ,accountDomain:"https://account.dev.daydao.com/"    //注册、用户中心域名
        ,sMoneyDomain:"https://pay.dev.daydao.com/"  //支付中心域名
        ,sMobileDomain:"http://mobile.dev.daydao.com:8080/"  //支付中心域名
    }
};

/**
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++ 华丽的分割线 ++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * */

gMain.baseStaticPath = gMain.dayDaoDomains.baseStaticDomain + gMain.jsdir +"/";  //静态资源基础路径;
gMain.currentStaticPath = "./"+gMain.jsdir+"/";  //当前tomcat的静态资路径

/**
 * 获取url参数
 * url: /index.php?a=1&b=2
 * 调用方式  tools.getUrlParam("a");
 * @name url参数名称
 * */
gMain.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null){return unescape(r[2]);}else{return null;}
};
if(gMain.getUrlParam("jsdebug") == "true"){
    gMain.jsdir = "static_src";
}


/**
 * ++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++  seajs配置信息  ++++++++
 * ++++++++++++++++++++++++++++++++++++++++++++++++
 */
seajs.config({
    charset: 'utf-8'
    , map: [[/^(.*\.(?:css|js|html))(.*)$/i, '$1?v=_VERSION_'+'-'+gMain.verson]]  //加上版本号，清缓存用
    //公共路径
    , paths: {
        "commonStaticDirectory":gMain.dayDaoDomains.baseStaticDomain + gMain.jsdir +"/common"  //最后不带反斜杠
    }
});