const mongoose = require("mongoose");
const moment = require("moment");
const createdAt = moment().format();
const UserSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, default: 0 }, //  0 = user , 1 = admin
  avatar: { type: String, default: "https://res.cloudinary.com/dfrdxqinp/image/upload/v1731941970/test/xu1pdiyosvnhq5jt2fqo.jpg" },
  createdAt: { type: String, default: createdAt },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
