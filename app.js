const Express = require("express")
let app = Express()

app.get("/", (req, res) => {
  res.json({message: "Hello from express!"})
})

app.get("/page2", (req, res) => {
  res.json({message: "I am page 2!!!"})
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
