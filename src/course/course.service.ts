import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private usersRepository: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    return this.usersRepository.save(createCourseDto);
  }

  findAll() {
    return this.usersRepository.find();  
  }

  findOnSeach(
    course_id:string,
    course_name:string,
  ): Promise<Course> {
    return this.usersRepository.query(
      `SELECT * FROM course WHERE course_id LIKE \"%${course_id}%\" 
      OR course_name LIKE \"%${course_name}%\"` ,
    );
  }
  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.usersRepository.update(id,updateCourseDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  
}
