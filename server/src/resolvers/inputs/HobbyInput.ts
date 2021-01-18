import { InputType, Field } from "type-graphql";

@InputType()
export class HobbyInput {
  @Field()
  name: string;
}
