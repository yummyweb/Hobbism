import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class Listing extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  body: string;

  @Field(() => String)
  @Column()
  tags: string;

  @Field(() => Number)
  @Column({ type: "int", default: 0 })
  votes: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Number)
  @Column()
  creatorId: number;

  @ManyToOne(() => User, (user) => user.listings)
  creator: User;
}
