/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var rxjs_1 = require("rxjs");
var request = require("request");
var DEFAULT_HOST = 'http://localhost:3000';
var DEFAULT_USER_AGENT = '*default*';
function xx() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
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
     * @param expectation an instance of Expectation interface
     * @return {Promise<IncomingMessage>}
     */
    MockServerClient.prototype.when = function (expectation) {
        return expectation.sendExpectation(this);
    };
    /**
     * Reset MockServerClient by clearing all expectation
     * @return {Promise<IncomingMessage>}
     */
    MockServerClient.prototype.reset = function () {
        var put = rxjs_1.Observable.bindNodeCallback(request.put);
        return put({
            url: this.adminUrl('/rest/heads/dynamic'),
            headers: this.headers
        }).toPromise();
    };
    ;
    MockServerClient.prototype.adminUrl = function (path) {
        return this.host.replace(/\/+$/, '') + '/robohydra-admin' + path;
    };
    return MockServerClient;
}());
exports.MockServerClient = MockServerClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja1NlcnZlckNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvY29yZS9Nb2NrU2VydmVyQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsNkJBQWdDO0FBQ2hDLGlDQUFvQztBQU1wQyxJQUFNLFlBQVksR0FBVyx1QkFBdUIsQ0FBQztBQUNyRCxJQUFNLGtCQUFrQixHQUFXLFdBQVcsQ0FBQztBQUUvQzs7Ozs7O0NBQ0M7QUFFRDtJQVFFLDBCQUFZLE9BQTZDO1FBSmxELFFBQUcsR0FBRyxpQkFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxTQUFJLEdBQUcsaUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsUUFBRyxHQUFHLGlCQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3BELE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDO1FBRXpDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQztJQUMzRCxDQUFDO0lBRUQsc0JBQUkscUNBQU87YUFBWDtZQUNFLE1BQU0sQ0FBQztnQkFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDN0IsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksK0JBQUksR0FBWCxVQUFZLFdBQXdCO1FBQ2xDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQ0FBSyxHQUFaO1FBQ0UsSUFBTSxHQUFHLEdBQUcsaUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO1lBQ3pDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUFBLENBQUM7SUFFSyxtQ0FBUSxHQUFmLFVBQWdCLElBQVk7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDbkUsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQXJERCw0Q0FxREMifQ==