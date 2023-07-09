const { Schema, model } = require('mongoose');
// Schema to create Student model
const mongoose = require('mongoose');

const reactionSchema = new Schema(
{
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      return new Date(timestamp).toLocaleString();
    }
  }
});

module.exports = reactionSchema;
