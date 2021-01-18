import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Listing = {
  __typename?: 'Listing';
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  body: Scalars['String'];
  tags: Scalars['String'];
  votes: Scalars['Float'];
  createdAt: Scalars['String'];
  creatorId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  /** The user's email ID. */
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** User's combined name. Not stored in the database. */
  name: Scalars['String'];
  age: Scalars['Float'];
  /** Whether the user's confirmed or not. */
  confirmed: Scalars['Boolean'];
};

export type Hobby = {
  __typename?: 'Hobby';
  id?: Maybe<Scalars['ID']>;
  /** The hobby's name. */
  name: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id?: Maybe<Scalars['ID']>;
  /** The user who posted the message */
  userName?: Maybe<Scalars['String']>;
  /** The content of the message */
  content?: Maybe<Scalars['String']>;
};

export type Group = {
  __typename?: 'Group';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  creatorId: Scalars['Float'];
  hobbiesId: Array<Scalars['Float']>;
};

export type PasswordInput = {
  password: Scalars['String'];
};

export type RegisterInput = {
  password: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type HobbyInput = {
  name: Scalars['String'];
};

export type ListingInput = {
  title: Scalars['String'];
  body: Scalars['String'];
  tags: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type GroupInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  hobbiesId: Array<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  groups?: Maybe<Array<Group>>;
  hobbies?: Maybe<Array<Hobby>>;
  listings?: Maybe<Array<Listing>>;
  me?: Maybe<User>;
  getMessages?: Maybe<Array<Message>>;
  helloQuery: Scalars['String'];
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmUser: Scalars['Boolean'];
  createGroup: Group;
  createHobby: Hobby;
  createListing: Listing;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  postMessage: Message;
  register: User;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationCreateGroupArgs = {
  data: GroupInput;
};


export type MutationCreateHobbyArgs = {
  data: HobbyInput;
};


export type MutationCreateListingArgs = {
  data: ListingInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationPostMessageArgs = {
  groupId: Scalars['String'];
  content: Scalars['String'];
  userName: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  listenMessages: Array<Message>;
};

export type ConfirmUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirmUser'>
);

export type CreateGroupMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  hobbiesId: Array<Scalars['Float']> | Scalars['Float'];
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup: (
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'description'>
  ) }
);

export type CreateListingMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
  tags: Scalars['String'];
}>;


export type CreateListingMutation = (
  { __typename?: 'Mutation' }
  & { createListing: (
    { __typename?: 'Listing' }
    & Pick<Listing, 'id' | 'createdAt' | 'votes' | 'creatorId'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  ) }
);

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'description'>
  )>> }
);

export type HobbiesQueryVariables = Exact<{ [key: string]: never; }>;


export type HobbiesQuery = (
  { __typename?: 'Query' }
  & { hobbies?: Maybe<Array<(
    { __typename?: 'Hobby' }
    & Pick<Hobby, 'id' | 'name'>
  )>> }
);

export type ListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingsQuery = (
  { __typename?: 'Query' }
  & { listings?: Maybe<Array<(
    { __typename?: 'Listing' }
    & Pick<Listing, 'id' | 'title' | 'body' | 'createdAt' | 'creatorId' | 'tags'>
  )>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'confirmed'>
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export type Unnamed_1_SubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Subscription = (
  { __typename?: 'Subscription' }
  & { listenMessages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'userName' | 'content'>
  )> }
);


export const ConfirmUserDocument = gql`
    mutation ConfirmUser($token: String!) {
  confirmUser(token: $token)
}
    `;

export function useConfirmUserMutation() {
  return Urql.useMutation<ConfirmUserMutation, ConfirmUserMutationVariables>(ConfirmUserDocument);
};
export const CreateGroupDocument = gql`
    mutation CreateGroup($name: String!, $description: String!, $hobbiesId: [Float!]!) {
  createGroup(
    data: {name: $name, description: $description, hobbiesId: $hobbiesId}
  ) {
    id
    name
    description
  }
}
    `;

export function useCreateGroupMutation() {
  return Urql.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument);
};
export const CreateListingDocument = gql`
    mutation CreateListing($title: String!, $body: String!, $tags: String!) {
  createListing(data: {title: $title, body: $body, tags: $tags}) {
    id
    createdAt
    votes
    creatorId
  }
}
    `;

export function useCreateListingMutation() {
  return Urql.useMutation<CreateListingMutation, CreateListingMutationVariables>(CreateListingDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    id
    name
    email
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  register(
    data: {email: $email, password: $password, firstName: $firstName, lastName: $lastName}
  ) {
    id
    name
    email
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GroupsDocument = gql`
    query Groups {
  groups {
    id
    name
    description
  }
}
    `;

export function useGroupsQuery(options: Omit<Urql.UseQueryArgs<GroupsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GroupsQuery>({ query: GroupsDocument, ...options });
};
export const HobbiesDocument = gql`
    query Hobbies {
  hobbies {
    id
    name
  }
}
    `;

export function useHobbiesQuery(options: Omit<Urql.UseQueryArgs<HobbiesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<HobbiesQuery>({ query: HobbiesDocument, ...options });
};
export const ListingsDocument = gql`
    query Listings {
  listings {
    id
    title
    body
    createdAt
    creatorId
    tags
  }
}
    `;

export function useListingsQuery(options: Omit<Urql.UseQueryArgs<ListingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListingsQuery>({ query: ListingsDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    email
    confirmed
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const UserDocument = gql`
    query User($id: Float!) {
  user(id: $id) {
    id
    name
  }
}
    `;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
};
export const Document = gql`
    subscription {
  listenMessages {
    id
    userName
    content
  }
}
    `;

export function useSubscription<TData = Subscription>(options: Omit<Urql.UseSubscriptionArgs<SubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<Subscription, TData>) {
  return Urql.useSubscription<Subscription, TData, SubscriptionVariables>({ query: Document, ...options }, handler);
};