/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */
"use strict";
var rxjs_1 = require("rxjs");
var request = require("request");
var DEFAULT_HOST = 'http://localhost:3000';
var DEFAULT_USER_AGENT = '*default*';
var MockServerClient = (function () {
    function MockServerClient(options) {
        this.get = rxjs_1.Observable.bindNodeCallback(request.get);
        this.post = rxjs_1.Observable.bindNodeCallback(request.post);
        this.put = rxjs_1.Observable.bindNodeCallback(request.put);
        options || (options = {});
        this.host = options.host || DEFAULT_HOST;
        this.userAgent = options.userAgent || DEFAULT_USER_AGENT;
    }
    Object.defineProperty(MockServerClient.prototype, "headers", {
        get: function () {
            return {
                'User-Agent': this.userAgent
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Specify an unlimited expectation that will respond regardless of the number of matching http
     * for example:
     *
     *   mockServerClient
     *           .when(
     *               request({url: "/some_path"})
     *               .respond({status: 200, body: "some_response_body"})
     *           );
     *
     * @param expectations
     * @returns Promise
     */
    MockServerClient.prototype.when = function () {
        var _this = this;
        var expectations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expectations[_i - 0] = arguments[_i];
        }
        var promises = expectations.map(function (value) { return value.sendExpectation(_this); });
        return Promise.all(promises);
    };
    /**
     * Reset MockServerClient by clearing all expectations.
     *
     * @returns Promise
     */
    MockServerClient.prototype.reset = function () {
        return this.put({
            url: this.adminUrl('/rest/heads/dynamic'),
            headers: this.headers
        }).toPromise();
    };
    ;
    /**
     * Build URL belongs to robohydra admin.
     *
     * @param path belongs to robohydra admin site.
     * @returns full URL.
     */
    MockServerClient.prototype.adminUrl = function (path) {
        return this.host.replace(/\/+$/, '') + '/robohydra-admin' + path;
    };
    return MockServerClient;
}());
exports.MockServerClient = MockServerClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja1NlcnZlckNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvY29yZS9Nb2NrU2VydmVyQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVILDZCQUFnQztBQUNoQyxpQ0FBb0M7QUFNcEMsSUFBTSxZQUFZLEdBQVcsdUJBQXVCLENBQUM7QUFDckQsSUFBTSxrQkFBa0IsR0FBVyxXQUFXLENBQUM7QUFHL0M7SUFRRSwwQkFBWSxPQUE2QztRQUpsRCxRQUFHLEdBQUcsaUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsU0FBSSxHQUFHLGlCQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELFFBQUcsR0FBRyxpQkFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUdwRCxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUM7SUFDM0QsQ0FBQztJQUVELHNCQUFJLHFDQUFPO2FBQVg7WUFDRSxNQUFNLENBQUM7Z0JBQ0wsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzdCLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNJLCtCQUFJLEdBQVg7UUFBQSxpQkFHQztRQUhXLHNCQUFtQzthQUFuQyxVQUFtQyxFQUFuQyxxQkFBbUMsRUFBbkMsSUFBbUM7WUFBbkMscUNBQW1DOztRQUM3QyxJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUN2RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdDQUFLLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO1lBQ3pDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7T0FLRztJQUNJLG1DQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUNuRSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RELDRDQTJEQyJ9