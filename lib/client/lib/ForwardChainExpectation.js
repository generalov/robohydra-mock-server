"use strict";
var ForwardChainExpectation = (function () {
    function ForwardChainExpectation(mockServerClient, expectation) {
        this.mockServerClient = mockServerClient;
        this.expectation = expectation;
    }
    ForwardChainExpectation.prototype.respond = function (httpResponse) {
        this.expectation.thenRespond(httpResponse);
        return this.mockServerClient.sendExpectation(this.expectation);
    };
    ForwardChainExpectation.prototype.proxy = function () {
    };
    return ForwardChainExpectation;
}());
exports.ForwardChainExpectation = ForwardChainExpectation;
//# sourceMappingURL=ForwardChainExpectation.js.map