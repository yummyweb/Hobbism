import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID, Root } from "type-graphql";
import { Listing } from "./Listing";
import { Group } from "./Group";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: "The user's email ID." })
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field({ description: "User's combined name. Not stored in the database." })
  name(@Root() parent: User): string {
    return parent.firstName + " " + parent.lastName;
  }

  @Field(() => Number)
  @Column({ nullable: true })
  age: number;

  @Field(() => Boolean, { description: "Whether the user's confirmed or not." })
  @Column({ default: true })
  confirmed: boolean;

  @OneToMany(() => Listing, (listing) => listing.creator)
  listings: Listing[];

  @OneToMany(() => Group, (group) => group.creator)
  groups: Group[];
}
