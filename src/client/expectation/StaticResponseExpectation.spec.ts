/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */

import {expect} from 'chai';
import {StaticResponseExpectation} from './StaticResponseExpectation';

describe('StaticResponseExpectation', () => {
  it('should be defined', () => {
    // noinspection BadExpressionStatementJS
    expect(new StaticResponseExpectation()).to.be.ok;
  });

  it('should be creatable with url', () => {
    // noinspection BadExpressionStatementJS
    expect(new StaticResponseExpectation({url: 'http://localhost'})).to.be.ok;
  });

  it('should be creatable with method', () => {
    // noinspection BadExpressionStatementJS
    expect(new StaticResponseExpectation({url: 'http://localhost', method: 'GET'})).to.be.ok;
  });

  describe('method respond', () => {
    it('should be defined', () => {
      // noinspection BadExpressionStatementJS
      expect(new StaticResponseExpectation().respond).to.be.a('function');
    });
  });
});
