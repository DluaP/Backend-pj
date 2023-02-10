export class CreateUserDto {
    id:number;
    username:string;
    password:string;
    firstName:string;
    lastName:string;
    nickName:string;
    facebook:string;
    ig:string;
    email:string;
	bio:string;
    avatar:string;
    status:string;
    created_at: Date;
    updated_at: Date;
}
