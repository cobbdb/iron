var Create = require('./Creator.js');

module.exports = function (o) {
    var data = {
        size: {},
        panels: {},
        count: {}
    };
    var unique = 0;
    o.panels.forEach(function (panel) {
        data.panels[panel.id] = Panel('ir-' + panel.id, o.grid, panel.grid);
        unique += data.panels[panel.id].count().unique;
    });
    return {
        count: function (upright) {
            data.count = {
                width: (upright) ? o.grid : unique,
                height: (upright) ? unique : o.grid
            };
            return data.count;
        },
        size: Create.mutator(data, 'size', function (o) {
            data.size = {
                width: data.count.width * o.tile,
                height: data.count.height * o.tile
            };
            var offset = {
                top: (o.window.real.height - data.size.height) / 2,
                left: (o.window.real.width - data.size.width) / 2
            };
            data.panels.forEach(function (panel) {
                var dimensions = panel.size(o);
                panel.offset({
                    top: offset.top,
                    left: offset.left
                });
                if (o.upright) {
                    offset.top += dimensions.height;
                } else {
                    offset.left += dimensions.width;
                }
            });
        })
    };
}
