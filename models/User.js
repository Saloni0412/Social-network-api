const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought' 
      }
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User' // Reference to the User model (self-reference)
        }
      ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
