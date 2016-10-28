/**
 * Created by Evgeniy_Generalov on 10/26/2016.
 */

import {expect} from 'chai';

import {MockServerClient} from './MockServerClient';
import {expectation} from './Expectation.stub.spec';

describe('MockServerClient', () => {
  it('should be defined', () => {
    // noinspection BadExpressionStatementJS
    expect(new MockServerClient()).to.be.ok;
  });

  it('should have default host', () => {
    expect(new MockServerClient().host).to.eq('http://localhost:3000');
  });

  it('should have default userAgent', () => {
    expect(new MockServerClient().userAgent).to.eq('*default*');
  });

  describe('method when', () => {
    it('should be defined', () => {
      expect(new MockServerClient().when).to.be.a('function');
    });
    it('should accept url option', () => {
      // noinspection BadExpressionStatementJS
      expect(new MockServerClient().when(expectation)).to.be.ok;
    });

    it('should accept method option', () => {
      // noinspection BadExpressionStatementJS
      expect(new MockServerClient().when(expectation)).to.be.ok;
    });

    it('should return an instance of Promise', () => {
      expect(new MockServerClient().when(expectation)).instanceof(Promise);
    });
  });

  describe('method adminUrl', () => {
    it('should be defined', () => {
      expect(new MockServerClient().adminUrl).to.be.a('function');
    });
    it('should accept url option', () => {
      // noinspection BadExpressionStatementJS
      expect(new MockServerClient().adminUrl('/foo')).to.eq('http://localhost:3000/robohydra-admin/foo');
    });
  });

  describe('method get', () => {
    it('should be defined', () => {
      expect(new MockServerClient().get).to.be.a('function');
    });
  });

  describe('method post', () => {
    it('should be defined', () => {
      expect(new MockServerClient().post).to.be.a('function');
    });
  });

  describe('method put', () => {
    it('should be defined', () => {
      expect(new MockServerClient().put).to.be.a('function');
    });

  });
});
