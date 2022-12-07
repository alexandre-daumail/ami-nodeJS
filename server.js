const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.search(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  
// simple route
app.get('/', (req, res) => {
    res.json({
        message:"Salut, bienvenue dans l'API Annuaire"
    })
})

require("./app/routes/user.routes.js")(app);
require("./app/routes/group.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})