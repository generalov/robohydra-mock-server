/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */
import {Observable} from 'rxjs';

import {MockServerClient} from './MockServerClient';
import {Expectation} from './Expectation';
import {HttpResponse} from './HttpResponse';


export class ForwardChainExpectation {
    private expectation: Expectation;
    private mockServerClient: MockServerClient;

    constructor(mockServerClient: MockServerClient, expectation: Expectation) {
        this.mockServerClient = mockServerClient;
        this.expectation = expectation;
    }

    respond(httpResponse: HttpResponse): Observable<any> {
        this.expectation.thenRespond(httpResponse);
        return this.mockServerClient.sendExpectation(this.expectation);
    }

    proxy() {
        return this.mockServerClient.sendProxy(this.expectation);
    }
}
