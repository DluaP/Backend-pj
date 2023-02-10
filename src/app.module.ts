import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { ReportModule } from './report/report.module';
import { CourseModule } from './course/course.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '203.158.3.36',
      port: 3306 ,
      username: 'prj65_29',
      password: '9947483',
      database: 'prj65_29',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,

      // type: 'mysql',
      // host: 'localhost',
      // port: 3306 ,
      // username: 'root',
      // password: '',
      // database: 'review_subject',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CommentModule,
    ReportModule,
    CourseModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
