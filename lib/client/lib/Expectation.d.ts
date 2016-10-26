import { HttpResponse } from './HttpResponse';
import { HttpRequest } from './HttpRequest';
import { StaticHeadSerializer } from './StaticHeadSerializer';
export declare class Expectation {
    private response;
    private request;
    constructor(request: HttpRequest);
    serialize(serializer: StaticHeadSerializer): void;
    thenRespond(response: HttpResponse): void;
}
