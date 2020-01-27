import Service from './service';

describe('Service', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should break the Service.inspect', () => {
    const { inspect } = Service;
    jest.spyOn(Service, 'inspect').mockImplementation(
      () => 'this is a mocked method'
    );
    expect(Service.inspect()).toBe('this is a mocked method');
    expect(Service.inspect()).toBe('this is a mocked method');
  })

  it('should have a static method inspect', () => {
    expect(typeof Service.inspect).toBe('function');
  });

  it('should return a service description', () => {
    expect(Service.inspect()).toBe('this is a Service { inspect() }')
  });
});
