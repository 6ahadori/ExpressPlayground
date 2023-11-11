const Application = require("./app/server");
const DB_URL = "mongodb://localhost:27017/virgobit-db";
new Application(3000, DB_URL);
