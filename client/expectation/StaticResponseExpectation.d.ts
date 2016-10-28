/// <reference types="es6-promise" />
/// <reference types="node" />
/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */
import { IncomingMessage } from 'http';
import { Expectation } from '../core/Expectation';
import { HttpRequest } from '../core/HttpRequest';
import { HttpResponse } from '../core/HttpResponse';
import { MockServerClient } from '../core/MockServerClient';
export declare class StaticResponseExpectation implements Expectation {
    private request;
    private response;
    constructor(options?: HttpRequest);
    respond(options: HttpResponse): void;
    sendExpectation(client: MockServerClient): Promise<IncomingMessage>;
    whenStatus(status: number): void;
    whenUrl(url: string): void;
    whenContentType(contentType: string): void;
    whenContent(content: string): void;
}
