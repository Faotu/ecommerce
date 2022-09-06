const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
title: {type: String, require: true, unique: true},
desc: {type: String, require: true},
img: { type: String, require: true},
color: {type: Array},
size: {type: Array},
categories: { type: Array},
price: { type: String, require: true},
inStock: {type: Boolean, default: true},


}, {timestamps: true});


module.exports = mongoose.model("Product", ProductSchema)