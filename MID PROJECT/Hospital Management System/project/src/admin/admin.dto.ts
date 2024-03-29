import { IsDateString, IsEmail, IsEnum, IsInt, IsNotEmpty, IsPhoneNumber, IsString, Length, Matches, MinLength } from "class-validator";


    export class CreateUserDto {
      DoctorID: number;
      fullName: string;
      Qualification:string;
        Salary: number;
        Email: string;
        phoneNumber:string;
        Schedule:string;
    }
    
    export class UpdateUserDto {
      DoctorID: number;
      Schedule: string;//'Mornning' | 'Evenning'|'Night';
      Salary: number;
    }
    export class DeleteUserDto{
      DoctorID:number;
    }
    export class AdminDTO {
      @IsNotEmpty({ message: 'Name is required' })
      @IsString({ message: 'Name must be a string' })
      name: string;
    
      @IsEmail({}, { message: 'Email must be a valid email' })
      email: string;
    
      @IsString()
      @MinLength(6, { message: 'Password is too short' })
      @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password is too weak',
      })
      password: string;
    
      @IsDateString({ strict: true }, { message: 'Date of birth must be a date' })
      dob: Date;
    
      @IsPhoneNumber('BD', { message: 'Phone number must be a valid phone number' })
      phone: string;
    
      @IsString({ message: 'Address must be a string' })
      address: string;
    
      @IsString({ message: 'Image url must be a string' })
      imageUrl: string;
    }
    
    export class OTP_DTO {
      @IsNotEmpty({ message: 'OTP is required' })
      @IsString({ message: 'OTP must be a string' })
      otp: string;
    
      @IsEmail({}, { message: 'Email must be a valid email' })
      email: string;
    
      status: number;
    }
