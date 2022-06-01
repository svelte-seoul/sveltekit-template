import {describe, expect, it} from 'vitest';
import {isValidURL, numberWithCommas, validateEmail} from './common';

describe('isValidURL', () => {
  it('should check invalid url', () => {
    const result = isValidURL('hello');

    expect(result).toBeFalsy();
  });

  it('should validate correct url', () => {
    const result = isValidURL('https://dooboolab.com');

    expect(result).toBeTruthy();
  });
});

describe('numberWithCommas', () => {
  it('should insert commas to number', () => {
    const result = numberWithCommas(1234);

    expect(result).toEqual('1,234');
  });
});

describe('validateEmail', () => {
  it('should check invalid email', () => {
    const result = validateEmail('email');

    expect(result).toBeFalsy();
  });

  it('should check valid email', () => {
    const result = validateEmail('email@email.com');

    expect(result).toBeTruthy();
  });
});