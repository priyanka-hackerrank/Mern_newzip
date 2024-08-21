const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

async function connectDatabase() {
	const client = new MongoClient(connectionString);

	try {
		await client.connect();
		return client.db(process.env.DB_NAME || "test");
	} catch (e) {
		console.error(e);
	}
}

module.exports = connectDatabase;
