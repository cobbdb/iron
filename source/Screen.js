var Create = require('./Creator.js');

module.exports = function (max) {
    var data = {
        window: {},
        upright: false
    };
    return {
        window: Create.mutator(data, 'window', function (size) {
            data.window = {
                width: Math.min(max.width, size.width),
                height: Math.min(max.height, size.height),
                real: size
            };
            data.upright = (data.window.height > data.window.width);
        }),
        upright: function () {
            return data.upright;
        }
    };
};
