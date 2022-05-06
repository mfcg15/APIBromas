const Joker = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => 
{
    Joker.find()
        .then(allJokers => res.json({jokers: allJokers}))
        .catch(err => res.json({message: "Hubo un error"+err}));
};

module.exports.findOneJoker = (req, res) => 
{
    Joker.findOne({_id: req.params.id})
        .then(chiste => res.json({joker: chiste}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.findRandomJoker = (req, res) => 
{
    Joker.aggregate([{ $sample: { size: 1 } }])
        .then(chiste => res.json({joker: chiste}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.createJoker = (req,res) =>
{
    Joker.create(req.body)
        .then(chiste => res.json({joker: chiste}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.updateJoker = (req, res) => 
{
    Joker.findOneAndUpdate({_id: req.params.id}, req.body, {new: true /*, runValidators:true*/})
        .then(chiste => res.json({joker: chiste}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.deleteJoker = (req, res) => 
{
    Joker.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}