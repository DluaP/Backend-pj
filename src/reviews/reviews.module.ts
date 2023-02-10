import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Reviews} from './entities/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reviews])],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
