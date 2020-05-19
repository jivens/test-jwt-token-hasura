const jwt = require("jsonwebtoken");
const config = require("./config");

const userRole = "user";
const adminRole = "admin";

const createJwtToken = (body, expiresIn) => jwt.sign(body, config.privateTokenForJWT, expiresIn);

exports.createAnonymousJwtToken = () =>
  createJwtToken({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [userRole],
      "x-hasura-default-role": userRole
    }
  }, 
    { 
      expiresIn: config.expiresIn
    }
  );

exports.createGuestJwtToken = userId =>
  createJwtToken({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [userRole],
      "x-hasura-default-role": userRole,
      "x-hasura-user-id": userId
    }
  }, 
    { 
      expiresIn: config.expiresIn
    }
  );

exports.createAdminJwtToken = userId =>
  createJwtToken({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [userRole, adminRole],
      "x-hasura-default-role": adminRole,
      "x-hasura-user-id": userId
    }
  }, 
    { 
      expiresIn: config.expiresIn
    } 
  );
