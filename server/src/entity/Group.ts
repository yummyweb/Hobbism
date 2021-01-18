import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";
import { Hobby } from "./Hobby";
import { Message } from "./Message";

@ObjectType()
@Entity()
export class Group extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Number)
  @Column()
  creatorId: number;

  @ManyToOne(() => User, (user) => user.groups)
  creator: User;

  @Field(() => [Number])
  hobbiesId: [Number]

  @ManyToMany(() => Hobby)
  @JoinTable()
  hobbies: Hobby[]

  @OneToMany(() => Message, message => message.group, { nullable: true })
  messages: Message[];
}
