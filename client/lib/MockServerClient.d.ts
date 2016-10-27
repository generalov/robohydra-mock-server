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
    /**
     * Specify an unlimited expectation that will respond regardless of the number of matching http
     * for example:
     *
     *   mockServerClient
     *           .when(
     *                   {url: "/some_path"}
     *           )
     *           .respond(
     *                   {status: 200, body: "some_response_body"}
     *           );
     *
     * @param httpRequest the http request that must be matched for this expectation to respond
     * @return an ForwardChainExpectation object that can be used to specify the response
     */
    when(httpRequest: HttpRequest): ForwardChainExpectation;
    /**
     * Reset MockServerClient by clearing all expectations
     * @return {Promise<any>}
     */
    reset(): Promise<any>;
    /**
     * Add proxy head.
     * @param proxyOptions
     * @returns {Promise<IncomingMessage>}
     */
    proxy(proxyOptions: {
        url: string;
    }): Promise<IncomingMessage>;
    sendExpectation(expectation: Expectation): Promise<IncomingMessage>;
}
