import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { Group } from './Group'

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: "The user who posted the message", nullable: true })
  @Column()
  userName: string

  @Field(() => String, { description: "The content of the message", nullable: true })
  @Column()
  content: string

  @ManyToOne(() => Group, group => group.messages)
  group: Group;
}
