"use strict";
var StaticResponseExpectation = (function () {
    function StaticResponseExpectation(options) {
        this.request = {
            method: options && options.method || undefined,
            url: options && options.url || undefined
        };
        this.response = {
            status: 200,
            contentType: 'text/plain',
            body: ''
        };
    }
    StaticResponseExpectation.prototype.respond = function (options) {
        this.response.body = options.body;
        if (this.response.status) {
            this.response.status = options.status;
        }
        if (options.contentType) {
            this.response.contentType = options.contentType;
        }
    };
    StaticResponseExpectation.prototype.sendExpectation = function (client) {
        return client.post({
            url: client.adminUrl('/head/sendExpectation'),
            form: {
                newHeadType: 'static',
                newStaticHeadPath: this.request.url.replace(/(^http:\/\/)/, '/'),
                newStaticHeadContent: this.response.body,
                newStaticHeadStatus: this.response.status,
                newStaticHeadContentType: this.response.contentType,
                newStaticHeadHeaders: ''
            },
            headers: client.headers
        }).toPromise();
    };
    StaticResponseExpectation.prototype.whenStatus = function (status) {
        this.response.status = status;
    };
    StaticResponseExpectation.prototype.whenUrl = function (url) {
        this.request.url = url;
    };
    StaticResponseExpectation.prototype.whenContentType = function (contentType) {
        this.response.contentType = contentType;
    };
    StaticResponseExpectation.prototype.whenContent = function (content) {
        this.response.body = content;
    };
    return StaticResponseExpectation;
}());
exports.StaticResponseExpectation = StaticResponseExpectation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGljUmVzcG9uc2VFeHBlY3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvZXhwZWN0YXRpb24vU3RhdGljUmVzcG9uc2VFeHBlY3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0E7SUFJRSxtQ0FBWSxPQUFxQjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLFNBQVM7WUFDOUMsR0FBRyxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLFNBQVM7U0FDekMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFFTSwyQ0FBTyxHQUFkLFVBQWUsT0FBcUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxDQUFDO0lBQ0gsQ0FBQztJQUVNLG1EQUFlLEdBQXRCLFVBQXVCLE1BQXdCO1FBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQzdDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsUUFBUTtnQkFDckIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUM7Z0JBQ2hFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDeEMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUN6Qyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7Z0JBQ25ELG9CQUFvQixFQUFFLEVBQUU7YUFDekI7WUFDRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSw4Q0FBVSxHQUFqQixVQUFrQixNQUFjO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRU0sMkNBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxtREFBZSxHQUF0QixVQUF1QixXQUFtQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDMUMsQ0FBQztJQUVNLCtDQUFXLEdBQWxCLFVBQW1CLE9BQWU7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4REQsOERBd0RDIn0=