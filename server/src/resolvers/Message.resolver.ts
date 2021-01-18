import { Message } from "../entity/Message";
import { Arg, Mutation, Publisher, PubSub, Query, Resolver, Subscription } from "type-graphql";
import { Group } from "../entity/Group";

@Resolver()
export class MessageResolver {
  @Query(() => [Message], { nullable: true })
  async getMessages() {
    const messages = await Message.query('SELECT * FROM MESSAGE')
    return messages
  }

  @Mutation(() => Message)
  async postMessage(
    @Arg('userName') userName: string,
    @Arg('content') content: string,
    @Arg('groupId') groupId: string,
    @PubSub("UPDATE_MESSAGES") publish: Publisher<null>
  ): Promise<Message> {

    const group = await Group.findOne(groupId)

    const newMessage = await Message.create({
      userName,
      content,
      group
    }).save()

    await publish(null)

    return newMessage
  }

  @Subscription(() => [Message], {
    topics: "UPDATE_MESSAGES"
  })
  async listenMessages(): Promise<[Message]>  {
    const messages = await Message.query('SELECT * FROM MESSAGE')
    return messages
  }
}
