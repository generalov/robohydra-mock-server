/// <reference types="es6-promise" />
/// <reference types="node" />
import { MockServerClient } from './MockServerClient';
import { Expectation } from './Expectation';
import { HttpResponse } from './HttpResponse';
import { IncomingMessage } from 'http';
export declare class ForwardChainExpectation {
    private expectation;
    private mockServerClient;
    constructor(mockServerClient: MockServerClient, expectation: Expectation);
    respond(httpResponse: HttpResponse): Promise<IncomingMessage>;
    proxy(): void;
}
