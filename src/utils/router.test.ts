import { expect } from 'chai';

export default function hello(name: string) {
  return `Hello ${name}`;
}

describe('Typescript + Babel usage suite', () => {
  it('should return string correctly', () => {
    expect(hello('mocha'), 'Hello mocha');
  });
});
