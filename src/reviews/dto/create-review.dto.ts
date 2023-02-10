export class CreateReviewDto {
    id:number
    username:string;
    mickName:string;
    user_id:string;
    course_id:string;
    course_name:string;
    review_detail:string;
    satisfied_point:string;
    appropriate_point:string;
    teacher_point:string;
    grade:string;
    semester:string;
    term:string;
    view_post:0;
    like_post:0;
    created_at: Date;
    updated_at: Date;
}
