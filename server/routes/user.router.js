var express = require('express')
var userController = require('../controllers').userController;
var bodyParser = require('body-parser');
var userRouter = express.Router();

userRouter.post('/createUser', userController.createUser);
userRouter.post('/loginUser', userController.loginUser);
userRouter.put('/applySignupSettings', userController.applySignupSettings);
userRouter.put('/updateUserSettings', userController.updateUserSettings);
userRouter.put('/changedPassword', userController.changedPassword)

module.exports = userRouter;
