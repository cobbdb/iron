var $ = require('jQuery');
var Create = require('./Creator.js');

module.exports = function (id, common, unique) {
    $('<div/>', {
        id: id,
        class: 'ir-panel',
        style: 'position:absolute'
    }).appendTo('body');
    var data = {
        count: {
            common: common,
            unique: unique
        },
        size: {}
    };
    var recount = function (upright) {
        data.count.width = (upright) ? common : unique;
        data.count.height = (upright) ? unique : common;
        return data.count;
    };
    return {
        count: function (upright) {
            return recount(upright);
        },
        size: Create.mutator(data, 'size', function (o) {
            recount(o.upright);
            data.size = {
                width: data.count.width * o.tile,
                height: data.count.height * o.tile
            };
        }),
        offset: function (offset) {
            $('#' + id)
                .outerWidth(data.size.width)
                .outerHeight(data.size.height)
                .offset(offset);
        }
    };
};
