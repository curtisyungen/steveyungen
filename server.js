require("dotenv").config();

const express = require("express");
const http = require("http").Server(app);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendEmail", (req, res) => {
  const { email = "", name = "", message = "" } = req.body;

  mailer({ email, name, text: message })
    .then(() => {
      console.log("Sent message.");
      res.redirect("/home");
    })
    .catch(err => {
      console.log(`Error: ${err} Failed to send message.`);
    });
});

http.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports.app = app;
