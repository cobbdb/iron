var _ = require('underscore');

module.exports = {
    accessor: function (obj, field) {
        return function (data) {
            if (_(data).isUndefined()) {
                return obj[field];
            }
            obj[field] = data;
            return obj;
        };
    },
    mutator: function (obj, field, mutator) {
        return function (params) {
            if (_(params).isUndefined()) {
                return obj[field];
            }
            mutator(params);
            return obj[field];
        };
    }
};
