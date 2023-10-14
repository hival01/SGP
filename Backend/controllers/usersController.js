const asyncHandler = require("express-async-handler");
const userModel = require("../models/User");

//@desc get all users
//@route GET /api/users
//@access public
const getUsers = asyncHandler(async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});

//@desc get the user
//@route GET /api/users/:id
//@access public
const getUser = asyncHandler(async (req, res) => {
  if (req.query.admin) {
    if (/\S+@\S+\.\S+/.test(req.params.id)) {
      return res.json({
        user: await userModel.findOne({ email: req.params.id, admin: true }),
      });
    }
    res.json({
      user: await userModel.findOne({ email: req.params.id, admin: true }),
    });
  } else {
    if (/\S+@\S+\.\S+/.test(req.params.id)) {
      return res.json({
        user: await userModel.findOne({ email: req.params.id }),
      });
    }
    res.json({ user: await userModel.findOne({ email: req.params.id }) });
  }
});

// @desc create new User
// @route POST /api/users
// @access public
const createUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ error: "email is required", user: null });
      return;
    }
    const data = new userModel({ email, password });
    await data.save();
    res.json({ user: data });
  } catch (e) {
    console.log(e);
  }
});

//@desc update the user
//@route PUT /api/users/:id
//@access public
const updateUser = asyncHandler(async (req, res) => {
  let user = await userModel.findOne({ email: req.params.id });
  if (!user) {
    res.json({ error: "No user found", user: null });
    return;
  }
  const { email } = req.body;
  if (!email) {
    res.json({
      message: "Please provide user data which includes email",
      user: null,
    });
    return;
  }
  user = await userModel.findOneAndUpdate({ email }, req.body, { new: true });
  res.json(user);
});

//@desc delete the user
//@route DELETE /api/users/:id
//@access public
const deleteUser = asyncHandler(async (req, res) => {
  let user = await userModel.findOne({ email: req.params.id });
  if (!user) {
    res.json({ error: "No user found", user: null });
    return;
  }
  await user.deleteOne();
  res.json(user);
});

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
