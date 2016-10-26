/// <reference types="es6-promise" />
/// <reference types="node" />
import { ForwardChainExpectation } from './ForwardChainExpectation';
import { Expectation } from './Expectation';
import { HttpRequest } from './HttpRequest';
import { IncomingMessage } from 'http';
export declare class MockServerClient {
    private url;
    private userAgent;
    private headers;
    constructor(options: {
        host: string;
        userAgent?: string;
    });
    when(httpRequest: HttpRequest): ForwardChainExpectation;
    reset(): Promise<any>;
    proxy(proxyOptions: {
        url: string;
    }): Promise<IncomingMessage>;
    sendExpectation(expectation: Expectation): Promise<IncomingMessage>;
}
