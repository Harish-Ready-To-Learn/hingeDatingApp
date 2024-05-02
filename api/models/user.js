const mongooes = require('mongoose');

const Schema = mongooes.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  homeTown: {
    type: String,
    required: true,
  },
  datingPreferences: [
    {
      type: String,
    },
  ],
  lookingFor: {
    type: String,
    required: true,
  },
  imageUrls: [
    {
      type: String,
    },
  ],
  prompts: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  likedProfiles: [
    {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  receivedLikes: [
    {
      userId: {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  matches: [
    {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
  visibility: {
    type: String,
    enum: ['public', 'hidden'],
    default: 'public',
  },
  blockedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  notificationPreferences: {
    // Define notification preferences here
  },
});

// Create the User model
const User = mongooes.model('User', userSchema);

module.exports = User;
