const jwt = require("jsonwebtoken");
const config = require("../config");

class AuthService {
  async login(username, password) {
    // Hardcoded credentials as per requirements
    if (username === "admin" && password === "admin") {
      const token = jwt.sign({ username }, config.jwtSecret, {
        expiresIn: config.jwtExpiration,
      });

      return {
        success: true,
        message: "Login successful",
        token,
        user: { username },
      };
    }

    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, config.jwtSecret);
    } catch (error) {
      return null;
    }
  }
}

module.exports = new AuthService();
