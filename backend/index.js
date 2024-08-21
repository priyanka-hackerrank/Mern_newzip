const app = require("./server");
const indexRouter = require("./routes/indexRoute");
const connectDatabase = require("./config/database");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

connectDatabase();

app.use("/", indexRouter);

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
