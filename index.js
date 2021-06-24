const express = require("express");
const mongoose = require("mongoose");
const hbs = require("express-handlebars");
const path = require("path");
const cors = require("cors");

const app = express();

app.set("view engine", "hbs");
app.engine("hbs", hbs({ extname: ".hbs" }));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());
app.use(require("./routes/index"));

mongoose
  .connect(
    "mongodb+srv://shamsadov:121314qq@cluster0.8m6ff.mongodb.net/NewsHbs",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Успешное подключение к МонгоДБ");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(5000, () => {
  console.log("Успешное подключение к локальному серверу");
});
