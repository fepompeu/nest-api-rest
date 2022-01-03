import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksController } from './books.controller';
import { Book } from './books.model';
import { BookService } from './books.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [BooksController],
  providers: [BookService],
})
export class AppModule {}
