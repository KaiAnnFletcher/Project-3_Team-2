const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {type: String, required: true},
    summary: String,
    link: String,
    thumbnail: String,
    author: String
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;