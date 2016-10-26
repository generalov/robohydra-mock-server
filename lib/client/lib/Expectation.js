"use strict";
var Expectation = (function () {
    function Expectation(request) {
        this.request = request;
    }
    Expectation.prototype.serialize = function (serializer) {
        serializer.whenUrl(this.request.url);
        serializer.whenStatus(this.response.status || 200);
        serializer.whenContent(this.response.body || '');
        serializer.whenContentType(this.response.contentType || 'text/plain');
    };
    Expectation.prototype.thenRespond = function (response) {
        this.response = response;
    };
    return Expectation;
}());
exports.Expectation = Expectation;
//# sourceMappingURL=Expectation.js.map