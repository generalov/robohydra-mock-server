/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */

import {HttpRequest} from '../core/HttpRequest';
import {ProxyExpectation} from '../expectation/ProxyExpectation';


export function proxy(options: HttpRequest) {
  return new ProxyExpectation(options);
}
