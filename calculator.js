const express = require("express");
const bodyParser = require("body-parser");
const { builtinModules } = require("module");
const { resourceLimits } = require("worker_threads");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); // __dirname is used in case your site is accessed from another place, it gives the file path to your server no matter what
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1); //requests num1 from the html which is the first form and turns it into a number
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is: " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  resultBMI = weight / height ** 2;

  res.send("Your BMI is: " + resultBMI);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
