const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { issueJWT } = require('../utils/issueJWT');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const signUp = asyncHandler(async (req, res, next) => {
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    return res
      .status(400)
      .json({ status: 'fail', data: { username: 'Username already exists.' } });
  }

  const existingEmail = await User.findOne({ email: req.body.email });
  if (existingEmail) {
    return res
      .status(400)
      .json({ status: 'fail', data: { username: 'Email already exists.' } });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();
  const jwt = issueJWT(savedUser);
  res.status(200).json({ status: 'success', data: { user: newUser, token: jwt } });
});

const signIn = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(401).json({
      status: 'fail',
      data: { message: 'Invalid email or password.' },
    });
  }

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    return res.status(401).json({
      status: 'fail',
      data: { message: 'Invalid email or password' },
    });
  }

  const jwt = issueJWT(user);
  res.status(200).json({ status: 'success', data: { user, token: jwt } });
});

const verify = asyncHandler(async (req, res) => {
  const token = req.headers['x-access-token'].split(' ')[1];

  if (!token) {
    return res.status(401).json({ status: 'fail', data: null });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ status: 'success', data: null });
  } catch (error) {
    return res.status(401).json({ status: 'fail', data: null });
  }
});

module.exports = {
  signUp,
  signIn,
  verify,
};
