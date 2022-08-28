//Create Table into DB

import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    image: {
      type: String, // for Admin panel
      required: true,
    },
    image1: {
      type: String, // for Admin panel
      required: true,
    },
    image2: {
      type: String, // for Admin panel
      required: true,
    },
    image3: {
      type: String, // for Admin panel
      required: true,
    },
    image4: {
      type: String, // for Admin panel
      required: true,
    },
    image5: {
      type: String, // for Admin panel
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
    rooms: {
      type: [String],
    },
    price: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Hotel", HotelSchema);