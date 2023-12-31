const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
      try {
        const Users = await User.find();
        res.json(Users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
       

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //update a user by its id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete a user by its id
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

// add a friend
async addFriend(req, res) {
  console.log('You are adding a Friend');
  console.log(req.body);

  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: 'No user found with that ID :(' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},

// //add a friend
// addFriend(req, res) {
//   User.findOneAndUpdate(
//     { _id: req.params.userId },
//     { $addToSet: { friends: req.params.friendId } },
//     { runValidators: true, new: true }
//   )
//     .then((user) =>
//       !user
//         ? res.status(404).json({ message: "No User find with this ID!" })
//         : res.json(user)
//     )
//     .catch((err) => res.status(500).json(err));
// remove a friend
async deleteFriend(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: 'No user found with that ID :(' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
},
};
