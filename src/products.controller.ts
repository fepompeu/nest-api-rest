import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param() params: { id: number }) {
    return this.productService.getOne(params.id);
  }

  @Post()
  create(@Body() product: Product): Product {
    product.id = 100;
    this.productService.create(product);
    return product;
  }

  @Put(':id')
  update(@Body() product: Product): Product {
    this.productService.update(product);
    return product;
  }

  @Delete(':id')
  delete(@Param() params: { id: number }) {
    this.productService.remove(params.id);
  }
}
