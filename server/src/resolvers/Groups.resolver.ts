import { Group } from "../entity/Group";
import { User } from "../entity/User";
import { Mutation, Resolver, Arg, Ctx, Query } from "type-graphql";
import { GroupInput } from "./inputs";
import { Context } from '../types/Context.type'
import { Hobby } from "../entity/Hobby";

@Resolver()
export class GroupsResolver {
  @Query(() => [Group], { nullable: true })
  async groups() {
    const groups = await Group.find()
    return groups
  }

  @Mutation(() => Group)
  async createGroup(
    @Arg("data") { name, description, hobbiesId }: GroupInput,
    @Ctx() ctx: Context
  ): Promise<Group> {
    let hobbies: Array<any | null> = []

    hobbiesId.forEach(async hobbyId => {
      const hobby = await Hobby.findOne(hobbyId)
      hobbies.push(hobby)
    })

    console.log(hobbies)

    const user = await User.findOne(ctx.req.session.userId);
    const newGroup = await Group.create({
      name,
      description,
      hobbiesId,
      hobbies,
      creator: user
    }).save();

    return newGroup;
  }
}
