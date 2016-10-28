/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */
import {IncomingMessage} from 'http';
import {MockServerClient} from './MockServerClient';


export interface Expectation {
  sendExpectation(client: MockServerClient): Promise<IncomingMessage>;
}
