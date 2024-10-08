const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must have a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "must have a price"],
  },
});

export const TourModel = mongoose.model("Tour", tourSchema);
