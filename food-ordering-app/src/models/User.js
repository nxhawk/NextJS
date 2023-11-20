const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
    },
    image: { type: String },
    public_id: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    city: { type: String },
    country: { type: String },
    postalCode: { type: String },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
