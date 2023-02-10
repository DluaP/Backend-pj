import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private usersRepository: Repository<Report>,
  ) {}

  create(createReportDto: CreateReportDto) {
    return this.usersRepository.save(createReportDto);
  }

  findAll() {
    return this.usersRepository.find();  
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return this.usersRepository.update(id,updateReportDto);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findOnSeach(
    review_id:string,
  ): Promise<Report> {
    return this.usersRepository.query(
      `SELECT * FROM report WHERE review_id LIKE \"%${review_id}%\" ` ,
    );
  }
}
