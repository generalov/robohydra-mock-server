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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJveHlFeHBlY3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvZXhwZWN0YXRpb24vUHJveHlFeHBlY3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFTSDtJQUdFLDBCQUFZLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFTSwwQ0FBZSxHQUF0QixVQUF1QixNQUF3QjtRQUM3QyxJQUFNLFNBQVMsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQzdDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsT0FBTztnQkFDcEIscUJBQXFCLEVBQUUsU0FBUztnQkFDaEMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUN0Qyx5QkFBeUIsRUFBRSxJQUFJO2FBQ2hDO1lBQ0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJELDRDQXdCQyJ9