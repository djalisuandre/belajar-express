// impor jsonwebtoken
const jwt = require("jsonwebtoken");

// verifikasi jwttoken
const authMiddleware = (req, res, next) => {
  // Ambil token dari beare token yang dikirim
  const token = req.header("Authorization")?.split(" ")[1];

  // Jika token tidak ada
  if (!token) {
    return res.status(401).json({
      message: "No token, authorization denied",
    });
  }

  // Jika ada token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Token is not valid",
    });
  }
};
