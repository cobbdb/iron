var $ = require('jQuery');
var Frame = require('./Frame.js');
var Screen = require('./Screen.js');

module.exports = function (config) {
    $('body, html').attr('style', 'height:100%;min-height:100%;margin:0');
    var frame = Frame(config);
    var screen = Screen(config.max);
    var heartbeat;

    return {
        run: function () {
            heartbeat = window.setInterval(function () {
                screen.window({
                    width: $(window).width(),
                    height: $(window).height()
                });

                var frameCount = frame.count(screen.upright());
                var tall = screen.window().height / frameCount.height;
                var wide = screen.window().width / frameCount.width;
                var tile = Math.min(tall, wide);

                frame.size({
                    upright: screen.upright(),
                    window: screen.window(),
                    tile: tile,
                    count: frameCount
                });
            }, 500);
        },
        wait: function () {
            window.clearInterval(heartbeat);
        }
    };
};
