import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Reviews {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username:string;

    @Column()
    user_id:string;

    @Column()
    nickName:string;

    @Column()
    course_id:string;

    @Column()
    course_name:string;

    @Column()
    review_detail:string;

    @Column()
    satisfied_point:string;

    @Column()
    appropriate_point:string;

    @Column()
    teacher_point:string;

    @Column()
    grade:string;

    @Column()
    semester:string;

    @Column()
    term:string;

    @Column()
    view_post:number;

    @Column()
    like_post:number;

    @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

