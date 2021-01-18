import { IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsEmailUnique } from "./IsEmailUnique";
import { PasswordInput } from "../../shared";

@InputType()
export class RegisterInput extends PasswordInput {
  @Field()
  @IsEmail()
  @IsEmailUnique({
    message: "an account is already registered with this email",
  })
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
