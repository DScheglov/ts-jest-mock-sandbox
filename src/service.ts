export default class Service {
  static inspect(): string {
    return 'this is a Service { inspect }';
  }

  static log(): void {
    console.log(Service.inspect());
  }
}