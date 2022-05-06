const JokerController = require("../controllers/jokes.controller");

module.exports = app => 
{
    app.get("/api/jokes", JokerController.findAllJokes);
    app.get("/api/jokes/random", JokerController.findRandomJoker);
    app.get("/api/jokes/:id", JokerController.findOneJoker);
    app.post("/api/jokes/new", JokerController.createJoker);
    app.put("/api/jokes/update/:id", JokerController.updateJoker);
    app.delete("/api/jokes/delete/:id", JokerController.deleteJoker);
}
