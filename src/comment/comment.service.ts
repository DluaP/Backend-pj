import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private usersRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.usersRepository.save(createCommentDto);
  }

  findAll() {
    return this.usersRepository.find();  
    }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.usersRepository.update(id,updateCommentDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findByReviewId(review_id: string) {
    return this.usersRepository.query(
     `SELECT * FROM comment WHERE review_id = \"${review_id}\"`,
   );
 }
}
