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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGljUmVzcG9uc2VFeHBlY3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvZXhwZWN0YXRpb24vU3RhdGljUmVzcG9uc2VFeHBlY3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0E7SUFJRSxtQ0FBWSxPQUFxQjtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLFNBQVM7WUFDOUMsR0FBRyxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFJLFNBQVM7U0FDekMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxNQUFNLEVBQUUsR0FBRztZQUNYLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFFTSwyQ0FBTyxHQUFkLFVBQWUsT0FBcUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxtREFBZSxHQUF0QixVQUF1QixNQUF3QjtRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztZQUM3QyxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDO2dCQUNoRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ3hDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDekMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO2dCQUNuRCxvQkFBb0IsRUFBRSxFQUFFO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sOENBQVUsR0FBakIsVUFBa0IsTUFBYztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVNLDJDQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBRU0sbURBQWUsR0FBdEIsVUFBdUIsV0FBbUI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQzFDLENBQUM7SUFFTSwrQ0FBVyxHQUFsQixVQUFtQixPQUFlO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBekRELDhEQXlEQyJ9