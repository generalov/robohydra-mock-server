/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */
import {IncomingMessage} from 'http';

import {Expectation} from './Expectation';
import {MockServerClient} from './MockServerClient';


export const expectation: Expectation = {
  sendExpectation: (client: MockServerClient): Promise<IncomingMessage> => Promise.resolve()
};
