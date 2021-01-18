import { Listing } from "../entity/Listing";
import { Mutation, Resolver, Arg, Ctx, UseMiddleware, Query } from "type-graphql";
import { ListingInput } from "./inputs";
import { Context } from "../types/Context.type";
import { User } from "../entity/User";
import { isAuth } from "../middlewares/isAuth";

@Resolver()
export class ListingResolver {
  @Query(() => [Listing], { nullable: true })
  async listings() {
    const listings = await Listing.find()
    return listings
  }

  @Mutation(() => Listing)
  @UseMiddleware(isAuth)
  async createListing(
    @Arg("data") data: ListingInput,
    @Ctx() ctx: Context
  ): Promise<Listing> {
    const user = await User.findOne(ctx.req.session.userId);
    const newListing = await Listing.create({
      ...data,
      creator: user,
    }).save();

    return newListing;
  }
}
