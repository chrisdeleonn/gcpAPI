const functions = require("firebase-functions")
const express = require("express")

const app = express()

app.get("/cars", (req, res) => {
  res.send("do you even JDM?")
})

app.get("/travel", (req, res) => {
  res.send("do you even fly first class?")
})

exports.app = functions.https.onRequest(app)
