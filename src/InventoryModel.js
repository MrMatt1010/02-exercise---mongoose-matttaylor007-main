const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventorySchema = new Schema({
  item: { type: String, required: true }, // String is shorthand for {type: String}
  qty: { type: Number, required: true },
  size: {
    h: { type: Number, required: true },
    w: { type: Number, required: true },
    uom: { type: String, required: true },
  },
  status: { type: String, required: true },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
