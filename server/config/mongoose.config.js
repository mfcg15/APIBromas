const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/coremongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conexion con DB"))
    .catch(err => console.log("No se puedo conectar con DB"+err));