const jwt = require("jsonwebtoken");
const config = require("./config");

const role = "user";

const createJwtToken = body => jwt.sign(body, config.privateTokenForJWT);

exports.createAnonymousJwtToken = () =>
  createJwtToken({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [role],
      "x-hasura-default-role": role
    }
  });

exports.createGuestJwtToken = userId =>
  createJwtToken({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [role],
      "x-hasura-default-role": role,
      "x-hasura-user-id": userId
    }
  });

exports.createAdminJwtToken = userId =>
  createJwtToken({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [role],
      "x-hasura-default-role": role,
      "x-hasura-user-id": userId
    }
  });
