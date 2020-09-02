var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema ({
  username : String,
  password : String,
  resetLink: String,
  avatar: String,
  firstName: String,
  lastName: String,
  introduction: String,
  isAdmin: {type: Boolean, default: false},
  resetPasswordToken: String,
  resetPasswordExpires: Date
});
//user can use passport mongoose methods
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
