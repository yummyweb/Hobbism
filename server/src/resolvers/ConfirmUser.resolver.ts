import { Resolver, Mutation, Arg } from "type-graphql";
import { redis } from "../redis";
import { User } from "../entity/User";
import { confirmationPrefix } from "../constants/redisPrefixes";

@Resolver()
export class ConfirmUser {
  @Mutation(() => Boolean)
  async confirmUser(@Arg("token") token: string): Promise<boolean> {
    const userId = await redis.get(confirmationPrefix + token);

    if (!userId) return false;

    await User.update({ id: parseInt(userId, 10) }, { confirmed: true });
    redis.del(confirmationPrefix + token);

    return true;
  }
}
