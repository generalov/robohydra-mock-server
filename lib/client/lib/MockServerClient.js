"use strict";
var rxjs_1 = require('rxjs');
var request = require('request');
var ForwardChainExpectation_1 = require('./ForwardChainExpectation');
var Expectation_1 = require('./Expectation');
var StaticHeadSerializer_1 = require('./StaticHeadSerializer');
var MockServerClient = (function () {
    function MockServerClient(options) {
        this.url = options.host.replace(/\/+$/, '') + '/robohydra-admin';
        this.userAgent = options.userAgent || '*default*';
        this.headers = {
            'User-Agent': options.userAgent
        };
    }
    MockServerClient.prototype.when = function (httpRequest) {
        return new ForwardChainExpectation_1.ForwardChainExpectation(this, new Expectation_1.Expectation(httpRequest));
    };
    MockServerClient.prototype.reset = function () {
        var put = rxjs_1.Observable.bindNodeCallback(request.put);
        return put({
            url: this.url + '/rest/heads/dynamic',
            headers: this.headers
        }).toPromise();
    };
    ;
    MockServerClient.prototype.proxy = function (proxyOptions) {
        var post = rxjs_1.Observable.bindNodeCallback(request.post);
        var mountPath = proxyOptions.url.replace(/(^http:\/\/)/, '');
        return post({
            url: this.url + '/head/create',
            form: {
                newHeadType: 'proxy',
                newProxyHeadMountPath: mountPath,
                newProxyHeadProxyTo: proxyOptions.url,
                newProxyHeadSetHostHeader: 'on'
            },
            headers: this.headers
        }).toPromise();
    };
    MockServerClient.prototype.sendExpectation = function (expectation) {
        var serializer = new StaticHeadSerializer_1.StaticHeadSerializer();
        var post = rxjs_1.Observable.bindNodeCallback(request.post);
        expectation.serialize(serializer);
        return post({
            url: this.url + '/head/create',
            form: serializer.data,
            headers: this.headers
        }).toPromise();
    };
    return MockServerClient;
}());
exports.MockServerClient = MockServerClient;
//# sourceMappingURL=MockServerClient.js.map