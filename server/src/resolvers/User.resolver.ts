import { Arg, Query, Resolver } from "type-graphql";
import { User } from "../entity/User";

@Resolver()
export class UserResolver {
  // GraphQL query for getting a user based on ID
  @Query(() => User, { nullable: true })
  async user(@Arg("id") id: number): Promise<User | undefined> {
    // Find a user with the id
    return User.findOne(id);
  }
}
