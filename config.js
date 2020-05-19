 module.exports = {
    port: process.env.PORT || 5001,
    facebookClientId: process.env.facebookClientId || 0000000000,
    facebookClientSecret: process.env.facebookClientSecret || "", 
    privateTokenForJWT: "hzUU9Yt4yDFOmQVw0SoHuWmyeYnB1mJO",
    graphqlUrl: process.env.graphqlUrl || '',
    expiresIn: "1d"
};