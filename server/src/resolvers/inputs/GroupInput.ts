import { InputType, Field } from "type-graphql";

@InputType()
export class GroupInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Number])
  hobbiesId: [number];
}
