const indexController = (req, res) => {
	res.status(200).json({ message: "Hello World!" });
};

module.exports = indexController;
