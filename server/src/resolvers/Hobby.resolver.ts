import { Hobby } from "../entity/Hobby";
import { Mutation, Resolver, Arg, UseMiddleware, Query } from "type-graphql";
import { HobbyInput } from "./inputs";
import { isAuth } from "../middlewares/isAuth";

@Resolver()
export class HobbyResolver {
  @Query(() => [Hobby], { nullable: true })
  async hobbies(): Promise<Hobby[] | undefined> {
    const hobbies = await Hobby.find()
    return hobbies
  }

  @Mutation(() => Hobby)
  @UseMiddleware(isAuth)
  async createHobby(
    @Arg("data") { name }: HobbyInput
  ): Promise<Hobby> {
    const newHobby = await Hobby.create({
      name
    }).save();

    return newHobby;
  }
}
