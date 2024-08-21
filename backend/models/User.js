const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: {
		type: String,
		unique: true,
		required: true,
	},
	role: {
		type: String,
		default: "user",
	},
});

module.exports = mongoose.model("User", UserSchema);
