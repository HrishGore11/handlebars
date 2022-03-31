const express = require("express");
const app = express();
const port = process.env.PORT || 9090;
const homePage = require("./routes/user");
const authRoute = require("./routes/auth");
const signRoute = require("./routes/signUp");

const { engine } = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/user", homePage);
app.use("/auth", authRoute);
app.use("/signup", signRoute);

app.listen(port, () => {
  console.log("server running at port " + port);
});
