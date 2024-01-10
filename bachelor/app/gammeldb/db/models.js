import { mongoose } from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    cut: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    recommended: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    show: { type: Boolean, required: true },
    inventory: [{ price: Number, stock: Number, weight: Number }],
  },
  { timestamps: true }
);

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email er nødvendigt"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Brug venligst en valid Email",
    ],
  },
  password: {
    type: String,
    required: [true, "Password er nødvendigt"],
    trim: true,
    minLength: [8, "Der noget galt med Bcrypt hvis du ser denne fejl"],
  },
});

export const models = [
  {
    name: "Product",
    schema: productSchema,
    collection: "products",
  },
  {
    name: "User",
    schema: userSchema,
    collection: "users",
  },
];
