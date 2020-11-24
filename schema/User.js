import { gql } from "apollo-server-express";

/**
 * User schema
 */
const UserSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type User {
    id: ID!
    fullName: String!
    email: String!
    username: String!
    password: String!
    resetToken: String
    resetTokenExpiry: String
    image: File
    imagePublicId: String
    coverImage: File
    coverImagePublicId: String
    isOnline: Boolean
    createdAt: String
    updatedAt: String
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type UserPayload {
    id: ID!
    fullName: String
    email: String
    username: String
    password: String
    image: String
    imagePublicId: String
    coverImage: String
    coverImagePublicId: String
    isOnline: Boolean
    createdAt: String
    updatedAt: String
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    # Gets the currently logged in user
    getAuthUser: UserPayload
  }
`;

export default UserSchema;
