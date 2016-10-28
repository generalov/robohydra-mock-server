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
            url: client.adminUrl('/head/sendExpectation'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveHlFeHBlY3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvZXhwZWN0YXRpb24vUHJveHlFeHBlY3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFTSDtJQUdFLDBCQUFZLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLE1BQXdCO1FBQ3RDLElBQU0sU0FBUyxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDakIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7WUFDN0MsSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixxQkFBcUIsRUFBRSxTQUFTO2dCQUNoQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7Z0JBQ3RDLHlCQUF5QixFQUFFLElBQUk7YUFDaEM7WUFDRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QkQsNENBd0JDIn0=