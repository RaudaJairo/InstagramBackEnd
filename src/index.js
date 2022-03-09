const app = require('./app');
const db = require('./database');


app.listen(5000, async () => {
	try {
		console.log("Server on port", 5000);
		await db.auth();
		console.log("Database is connected")

	} catch (err) {
		console.log("Database is NOT connected")
	}
});