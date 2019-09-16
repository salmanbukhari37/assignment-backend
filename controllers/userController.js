// Login
const login = (req, res) => {
  // login logic
  res.send("Login page");
};

// Signup
const signup = (req, res) => {
  // sign up logic
  res.send("Sign Up Page");
};

const test = (req, res) => {
  res.send("Hello Gitss");
};

module.exports = {
  login,
  signup,
  test
};
