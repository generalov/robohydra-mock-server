/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */
"use strict";
var ProxyExpectation = (function () {
    function ProxyExpectation(options) {
        this.requeset = {
            url: options.url
        };
    }
    ProxyExpectation.prototype.sendExpectation = function (client) {
        var mountPath = this.requeset.url.replace(/(^http:\/\/)/, '');
        return client.post({
            url: client.adminUrl('/head/create'),
            form: {
                newHeadType: 'proxy',
                newProxyHeadMountPath: mountPath,
                newProxyHeadProxyTo: this.requeset.url,
                newProxyHeadSetHostHeader: 'on'
            },
            headers: client.headers
        }).toPromise();
    };
    return ProxyExpectation;
}());
exports.ProxyExpectation = ProxyExpectation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveHlFeHBlY3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvZXhwZWN0YXRpb24vUHJveHlFeHBlY3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFTSDtJQUdFLDBCQUFZLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFTSwwQ0FBZSxHQUF0QixVQUF1QixNQUF3QjtRQUM3QyxJQUFNLFNBQVMsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNwQyxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLHFCQUFxQixFQUFFLFNBQVM7Z0JBQ2hDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDdEMseUJBQXlCLEVBQUUsSUFBSTthQUNoQztZQUNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCRCw0Q0F3QkMifQ==