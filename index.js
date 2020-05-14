const jwt = require("./create-jwt-token-factory");

const token = jwt.createGuestJwtToken("2");
console.log(token);
