/// <reference types="es6-promise" />
/// <reference types="node" />
/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */
import { IncomingMessage } from 'http';
import { Expectation } from '../core/Expectation';
import { MockServerClient } from '../core/MockServerClient';
import { HttpRequest } from '../core/HttpRequest';
export declare class ProxyExpectation implements Expectation {
    private requeset;
    constructor(options: HttpRequest);
    sendExpectation(client: MockServerClient): Promise<IncomingMessage>;
}
