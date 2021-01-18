import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../entity/User";
import { Context } from "../types/Context.type";

@Resolver()
export class MeResolver {
  // GraphQL query for getting the current logged in user
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: Context): Promise<User | undefined> {
    // If there is no userId return undefined
    if (!ctx.req.session.userId) {
      return undefined;
    }
    // Find a new user and return with findOne()
    return User.findOne(ctx.req.session.userId);
  }
}
