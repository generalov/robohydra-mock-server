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
        return this;
    };
    StaticResponseExpectation.prototype.sendExpectation = function (client) {
        return client.post({
            url: client.adminUrl('/head/create'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGljUmVzcG9uc2VFeHBlY3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvZXhwZWN0YXRpb24vU3RhdGljUmVzcG9uc2VFeHBlY3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0E7SUFJRSxtQ0FBWSxPQUFxQjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLFNBQVM7WUFDOUMsR0FBRyxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLFNBQVM7U0FDekMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFFTSwyQ0FBTyxHQUFkLFVBQWUsT0FBcUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxtREFBZSxHQUF0QixVQUF1QixNQUF3QjtRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDcEMsSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSxRQUFRO2dCQUNyQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQztnQkFDaEUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO2dCQUN4QyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQ3pDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztnQkFDbkQsb0JBQW9CLEVBQUUsRUFBRTthQUN6QjtZQUNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDhDQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFTSwyQ0FBTyxHQUFkLFVBQWUsR0FBVztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQUVNLG1EQUFlLEdBQXRCLFVBQXVCLFdBQW1CO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBRU0sK0NBQVcsR0FBbEIsVUFBbUIsT0FBZTtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpERCw4REF5REMifQ==