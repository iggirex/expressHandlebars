const Express = require("express")
var hbs = require("hbs")
var locals = require("./locals.js")
var locals2 = require("./locals2.js")

let app = Express()

app.set("view engine", "hbs")
hbs.localsAsTemplateData(app)

locals(app)

app.get("/", (req, res) => {
  res.render("home", {
    cohortName: "g25",
    foods: [
      "chalupa",
      "ceviche",
      "candy"
    ]
  })
})

app.get("/page2", (req, res) => {
  res.render("page2")
})

app.get("/killego", (req, res) => {
  res.render("killer")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
