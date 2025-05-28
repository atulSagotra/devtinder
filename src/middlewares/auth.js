const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "xyz";
  const isAdminAuthenticated = token === "xyz";
  if (!isAdminAuthenticated) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "xysaasz";
  const isAdminAuthenticated = token === "xyz";
  if (!isAdminAuthenticated) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
