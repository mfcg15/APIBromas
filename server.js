const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use( express.json (), express.urlencoded({extended:true}));

const misRutas = require("./server/routes/jokes.route");

misRutas(app);

app.listen(8000, () => console.log("Servidor listo !"));