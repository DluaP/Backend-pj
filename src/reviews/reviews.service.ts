import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reviews } from './entities/review.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Reviews)
    private usersRepository: Repository<Reviews>,
  ) {}

  create(createReviewDto: CreateReviewDto) {
    return this.usersRepository.save(createReviewDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  findByCourseId(course_id: string) {
    return this.usersRepository.query(
      `SELECT * FROM reviews WHERE course_id = \"${course_id}\"`,
    );
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.usersRepository.update(id, updateReviewDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findByuserId(user_id: string) {
    return this.usersRepository.query(
      `SELECT * FROM reviews WHERE user_id = \"${user_id}\"`,
    );
  }

  findByReviewId(id: string) {
    return this.usersRepository.query(
      `SELECT * FROM reviews WHERE id = \"${id}\"`,
    );
  }

  // findOnSeach(semester?: string): Promise<Reviews> {
  //   return this.usersRepository.query(
  //     `SELECT * FROM Reviews WHERE semester LIKE \"%${semester}%\"`,
  //   );
  // }

  findOnSeach2(
    semester?: number,
    course_id?: string,
    like_post?: string,
    view_post?: string,
  ): Promise<Reviews | undefined> {
    if (semester > 0 && like_post) {
      return this.usersRepository.query(
        `SELECT * FROM reviews WHERE semester = \"${semester}\" AND course_id = \"${course_id}\" ORDER BY reviews. like_post DESC`,
      );
    } else if (like_post && semester) {
      return this.usersRepository.query(
        `SELECT * FROM reviews WHERE  course_id = \"${course_id}\" ORDER BY reviews. like_post DESC`,
      );
    } else if (view_post && semester > 0) {
      return this.usersRepository.query(
        `SELECT * FROM reviews WHERE semester = \"${semester}\" AND course_id = \"${course_id}\" ORDER BY reviews. view_post DESC`,
      );
    } else if (view_post && semester) {
      return this.usersRepository.query(
        `SELECT * FROM reviews WHERE course_id = \"${course_id}\" ORDER BY reviews. view_post DESC`,
      );
    } else if (semester) {
      return this.usersRepository.query(
        `SELECT * FROM reviews WHERE semester = \"${semester}\" AND course_id = \"${course_id}\"`,
      );
    }
    return this.usersRepository.findOneBy({});
  }
}
