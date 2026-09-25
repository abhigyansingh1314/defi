import User from '../models/user.js'

const userController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    }
  },

  // Get all users
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Error getting users' });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    const userId = req.params.id;
    // console.log(userId);
    try {
      const user = await User.find({roll_no:userId});
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error getting user by ID:', error);
      res.status(500).json({ error: 'Error getting user by ID' });
    }
  },

  // Update user by ID
  updateUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating user by ID:', error);
      res.status(500).json({ error: 'Error updating user by ID' });
    }
  },

  // Delete user by ID
  deleteUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user by ID:', error);
      res.status(500).json({ error: 'Error deleting user by ID' });
    }
  }
};

export default userController;
