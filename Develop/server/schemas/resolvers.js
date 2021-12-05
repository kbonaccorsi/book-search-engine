const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    login: async (parent, { username, email }) => {
      const params = username $or password ?{ username, password }
      return User.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    saveBook: async (parent, { _id, savedBooks}) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id},
        { $addToSet: {savedBooks} },
        { new: true },
        { runValidators: true }
      );
      return updatedUser;
    },
    deleteBook: async (parent, { user, params}) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id },
        { $pull: { savedBooks: {bookId} } },
        { new: true } 
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
