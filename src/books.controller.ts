import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './books.model';
import { BookService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BookService) {}

  @Get()
  getAll(): Book[] {
    return this.bookService.getAll();
  }

  @Get(':id')
  getOne(@Param() params: { id: number }) {
    return this.bookService.getOne(params.id);
  }

  @Post()
  create(@Body() book: Book): Book {
    book.id = 100;
    this.bookService.create(book);
    return book;
  }

  @Put(':id')
  update(@Body() book: Book): Book {
    this.bookService.update(book);
    return book;
  }

  @Delete(':id')
  delete(@Param() params: { id: number }) {
    this.bookService.remove(params.id);
  }
}
