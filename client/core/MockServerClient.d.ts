/// <reference types="request" />
/// <reference types="node" />
/// <reference types="chai" />
/// <reference types="es6-promise" />
/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */
import { Observable } from 'rxjs';
import request = require('request');
import { Expectation } from './Expectation';
import { IncomingMessage } from 'http';
export declare class MockServerClient {
    host: string;
    userAgent: string;
    get: (v1: request.OptionsWithUri | request.OptionsWithUrl) => Observable<IncomingMessage>;
    post: (v1: request.OptionsWithUri | request.OptionsWithUrl) => Observable<IncomingMessage>;
    put: (v1: request.OptionsWithUri | request.OptionsWithUrl) => Observable<IncomingMessage>;
    constructor(options?: {
        host?: string;
        userAgent?: string;
    });
    readonly headers: Object;
    /**
     * Specify an unlimited expectation that will respond regardless of the number of matching http
     * for example:
     *
     *   mockServerClient
     *           .when(
     *               request({url: "/some_path"})
     *               .respond({status: 200, body: "some_response_body"})
     *           );
     *
     * @param expectations
     * @return {Promise<[IncomingMessage]>}
     */
    when(...expectations: Array<Expectation>): Promise<[IncomingMessage]>;
    /**
     * Reset MockServerClient by clearing all expectation
     * @return {Promise<IncomingMessage>}
     */
    reset(): Promise<IncomingMessage>;
    adminUrl(path: string): string;
}
