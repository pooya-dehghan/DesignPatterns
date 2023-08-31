//maybe we have a program in which we got diffrent types of clients now i want to make it possible that my code base is

//my superclass
abstract class Customer {
  abstract createCustomer();
}

class WesternCustomer extends Customer {
  createCustomer() {
    return new USACustomer();
  }
}

class EasternCustomer extends Customer {
  createCustomer() {
    return new IRANCustomer();
  }
}

interface CustomerOperation {
  makesRequest(address: string): string;
  buysProduct(product: string): string;
}

class USACustomer implements CustomerOperation {
  address: string = '';
  currency: string = '$';
  makesRequest(address: string): string {
    this.address = address + 'western countery';
    return this.address;
  }

  buysProduct(product: string): string {
    return (
      'cutomer bought prodcut: ' +
      product +
      'with price of' +
      '10' +
      this.currency
    );
  }
}

class IRANCustomer implements CustomerOperation {
  address: string = '';
  currency: string = 'YEN';
  makesRequest(address: string): string {
    this.address = address + 'eastern countery';
    return this.address;
  }

  buysProduct(product: string): string {
    return (
      'cutomer bought prodcut: ' +
      product +
      'with price of' +
      '10' +
      this.currency
    );
  }
}
