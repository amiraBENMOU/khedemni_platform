const express = require('express');
const router = express.Router();
const userController = require('../Controller/user');

router.post('/addUser',userController.createUser);
router.get('/getUser/:id',userController.getUserById);
router.get('/getAll/',userController.getUsers);
router.put('/updateUser/:id',userController.updateUser);
router.delete('/deleteUser/:id',userController.deleteUser);

module.exports = router;