import { User } from "../entity/User";
import { Mutation, Resolver, Arg, Query } from "type-graphql";
import bcrypt from "bcryptjs";
import { sendMail } from "../utils";
import { createConfirmationURL } from "../utils";
import { RegisterInput } from "./inputs";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloQuery(): Promise<String> {
    return "Wassup fool";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { email, password, firstName, lastName }: RegisterInput
  ): Promise<User> {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName
    }).save();

    await sendMail(email, await createConfirmationURL(newUser.id));

    return newUser;
  }
}
