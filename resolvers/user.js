const Query = {
  /**
   * Gets the currently logged in user
   */
  getAuthUser: async (root, args, { authUser, User }) => {
    if (!authUser) return null;

    // If user is authenticated, update it's isOnline field to true
    const user = await User.findOneAndUpdate(
      { email: authUser.email },
      { isOnline: true }
    ).populate({ path: "posts", options: { sort: { createdAt: "desc" } } });

    return user;
  },
};

export default { Query };
