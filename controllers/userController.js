module.exports = {
  homePage: function (req, res) {
    res.render("user", { data: "hey there" });
  },
  SignUpPage: function (req, res) {
    res.render("signUp", { data: "hey Rossi there" });
  },
  loginPage: function (req, res) {
    res.render("login", { data: "hey Rossi there" });
  },
};
