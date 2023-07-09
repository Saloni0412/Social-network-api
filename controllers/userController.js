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
    
  // Get a course
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends")
        .select('-__v')

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },}