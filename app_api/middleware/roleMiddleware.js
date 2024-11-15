const roleMiddleware = (requireRole) => {
  // jika pengguna memiliki role yang sesuai
  return (req, res, next) => {
    if (req.user.role === requireRole) {
      next();
    } else {
      res.status(403).json({
        message: "Akes ditolak",
      });
    }
  };
};

module.exports = roleMiddleware;
