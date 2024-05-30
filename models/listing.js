const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: { 
        filename : String,
        url: String,
        // {
        //     type: String,
        //     default: 
        //         "https://media.istockphoto.com/id/1366245054/photo/sunset-on-the-beach-in-winter.jpg?s=2048x2048&w=is&k=20&c=TPUrPeiK6nHVJfmu9hnexF8VhZhtoQJeYqJlKRKyadQ=",
        //     set: (v) => v === ""
        //     ? "https://media.istockphoto.com/id/1366245054/photo/sunset-on-the-beach-in-winter.jpg?s=2048x2048&w=is&k=20&c=TPUrPeiK6nHVJfmu9hnexF8VhZhtoQJeYqJlKRKyadQ="
        //     : v,
        // },
     
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // coordinates : {
    //     type: [Number],
    //     required: true
    // }
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
    //   category : {
    //     type: String,
    //     enum: ["Mountaines", "Arctic", "Farms", "Deserts"]
    //   }
});

//Mongoose Middleware to delete reviews from reviews collection
listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
    await Review.deleteMany({_id : {$in: listing.reviews}});

    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


// listingSchema.pre("save", function (next) {
//     if (!this.image || !this.image.url || this.image.url.trim() === "") {
//       this.image.url =
//         "https://t3.ftcdn.net/jpg/06/17/47/46/360_F_617474687_rqPZ5p5HxD9RZUajSDBYlffpq9PIs8oY.jpg";
//     }
//     next();
//   });