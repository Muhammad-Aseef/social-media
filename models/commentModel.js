const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      trim: true,
      required: [true, "comment cannot be empty"],
    },
    imageUrl: {
      type: String,
      default: "",
    },
    post: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
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

commentSchema.pre("save", function () {
  this.likesCount = this.likes.length;
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
