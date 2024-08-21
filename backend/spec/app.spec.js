const app = require("../server.js");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
describe("Test the root path", () => {
	test("It should response the GET method", async () => {
		chai.request(app)
			.get("/")
			.end((err, response) => {
				expect(err).toBeNull();
				expect(response.body.message).toBe("Hello World!");
			});
	});
});
