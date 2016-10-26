"use strict";
var StaticHeadSerializer = (function () {
    function StaticHeadSerializer() {
        this._data = {
            newHeadType: 'static',
            newStaticHeadPath: '',
            newStaticHeadContent: '',
            newStaticHeadStatus: 200,
            newStaticHeadContentType: 'text/plain',
            newStaticHeadHeaders: ''
        };
    }
    StaticHeadSerializer.prototype.whenStatus = function (status) {
        this._data.newStaticHeadStatus = status;
    };
    StaticHeadSerializer.prototype.whenUrl = function (path) {
        this._data.newStaticHeadPath = path.replace(/(^http:\/\/)/, '/');
    };
    StaticHeadSerializer.prototype.whenContentType = function (contentType) {
        this._data.newStaticHeadContentType = contentType;
    };
    StaticHeadSerializer.prototype.whenContent = function (content) {
        this._data.newStaticHeadContent = content;
    };
    Object.defineProperty(StaticHeadSerializer.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return StaticHeadSerializer;
}());
exports.StaticHeadSerializer = StaticHeadSerializer;
//# sourceMappingURL=StaticHeadSerializer.js.map