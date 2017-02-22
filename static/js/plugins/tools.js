/**
 * Created by Zackey on 2016/7/18.
 */
define(function (require,exports,module) {
    var Tools = {
        setData:function (opts) {
            opts.callback(opts.a + opts.b);
        }
    };

    module.exports = Tools;
});