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
  async getAll(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params: { id: number }): Promise<Book> {
    return this.bookService.getOne(params.id);
  }

  @Post()
  async create(@Body() book: Book) {
    this.bookService.create(book);
    return book;
  }

  @Put()
  async update(@Body() book: Book): Promise<[number, Book[]]> {
    return this.bookService.update(book);
  }

  @Delete(':id')
  async delete(@Param() params: { id: number }) {
    this.bookService.remove(params.id);
  }
}
