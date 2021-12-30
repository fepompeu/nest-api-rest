import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('LIV01', 'Book TDD', 29.9),
    new Product('LIV01', 'Book TDD', 29.9),
    new Product('LIV01', 'Book TDD', 29.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  update(product: Product) {
    return product;
  }

  remove(id: number) {
    this.products.pop();
  }
}
