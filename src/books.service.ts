import { Injectable } from '@nestjs/common';
import { Book } from './books.model';

@Injectable()
export class BookService {
  books: Book[] = [
    new Book('LIV01', 'Book TDD', 29.9),
    new Book('LIV01', 'Book TDD', 29.9),
    new Book('LIV01', 'Book TDD', 29.9),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    return this.books[0];
  }

  create(book: Book) {
    this.books.push(book);
  }

  update(book: Book) {
    return book;
  }

  remove(id: number) {
    this.books.pop();
  }
}
