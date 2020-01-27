import Service from './service';

describe('Service', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should mock inspect method', () => {
    jest.spyOn(Service, 'inspect').mockImplementation(
      () => 'this is a mocked inspect method'
    );
    jest.spyOn(console, 'log').mockImplementation(() => {});
    Service.log();
    expect(console.log).toBeCalledWith('this is a mocked inspect method');
  });

  it('should have inspect method', () => {
    expect(typeof Service.inspect).toBe('function');
  });

  it('should have log method', () => {
    expect(typeof Service.log).toBe('function');
  });

  it('inspect should return Service description', () => {
    expect(Service.inspect()).toBe('this is a Service { inspect }');
  });

  it('should log Service description to the console', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    Service.log();
    expect(console.log).toBeCalledWith('this is a Service { inspect }');
  });
});