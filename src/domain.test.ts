import * as Domain from './domain';

describe('Domain', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should mock inspect method', () => {
    jest.spyOn(Domain, 'inspect').mockImplementation(
      () => 'this is a mocked inspect method'
    );
    jest.spyOn(console, 'log').mockImplementation(() => {});
    Domain.log();
    expect(console.log).toBeCalledWith('this is a mocked inspect method');
  });

  it('should have inspect method', () => {
    expect(typeof Domain.inspect).toBe('function');
  });

  it('should have log method', () => {
    expect(typeof Domain.log).toBe('function');
  });

  it('inspect should return domain description', () => {
    expect(Domain.inspect()).toBe('this is a Domain { inspect }');
  });

  it('should log domain description to the console', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    Domain.log();
    expect(console.log).toBeCalledWith('this is a Domain { inspect }');
  });

  it('should print to the console', () => {
    console.log('Hello World');
  });
});