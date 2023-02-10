import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiTags } from '@nestjs/swagger';
import { log } from 'console';

@Controller('reviews')
@ApiTags('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  findAll(
    @Query(`course_id`) course_id?: string,
    @Query(`user_id`) user_id?: string,
    @Query(`id`) id?: string,
    @Query(`view_post`) view_post?: string,
    @Query(`like_post`) like_post?: string,
    @Query(`semester`) semester?: number,
  ) {
    if (semester && course_id) {
      return this.reviewsService.findOnSeach2(
        semester,
        course_id,
        like_post,
        view_post,
      );
    }
    if (course_id) {
      return this.reviewsService.findByCourseId(course_id);
    }
    if (user_id) {
      return this.reviewsService.findByuserId(user_id);
    }
    if (id) {
      return this.reviewsService.findByReviewId(id);
    }

    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
