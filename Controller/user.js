const User = require('../model/user'); // Correct model import

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, gender, city, phoneNumber, Email, password } = req.body;
        console.log(firstName, lastName, gender, city, phoneNumber, Email, password); // Check if values are received

        const newUser = new User({ firstName, lastName, gender, city, phoneNumber, Email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Error creating the user', err: err.message });
    }
};

// Update an existing user
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error updating the user', err: err.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting the user', err: err.message });
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error getting the user', err: err.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(404).json({ message: 'No users found' });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error getting the users', err: err.message });
    }
};
