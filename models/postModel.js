const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    caption: String,
    imageUrl: {
      type: String,
      required: [true, "post must have image"],
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: [true, "post must be post by user"],
    },
    likes: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    ],
    likesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

postSchema.pre("save", function () {
  this.likesCount = this.likes.length;
});
// postSchema.pre(/^find/, function () {
//   this.populate("user").populate("likes");
// });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
