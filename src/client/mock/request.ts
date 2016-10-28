/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */

import {HttpRequest} from '../core/HttpRequest';
import {StaticResponseExpectation} from '../expectation/StaticResponseExpectation';


export function request(options: HttpRequest) {
  return new StaticResponseExpectation(options);
}
