import { InputType, Field } from "type-graphql";

@InputType()
export class ListingInput {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  tags: string;
}
