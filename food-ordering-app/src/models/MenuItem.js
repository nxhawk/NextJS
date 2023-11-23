import mongoose, { Schema, model, models } from "mongoose";

const ExtraPriceSchema = new Schema({
  name: { type: String },
  price: { type: Number },
});

const MenuItemSchema = new Schema(
  {
    image: { type: String },
    public_id: { type: String },
    name: { type: String },
    description: { type: String },
    basePrice: { type: String },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientPrices: { type: [ExtraPriceSchema] },
    category: { type: mongoose.Types.ObjectId },
  },
  { timestamps: true }
);

export const MenuItem = models?.MenuItem || model("MenuItem", MenuItemSchema);
