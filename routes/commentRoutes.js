const router = require("express").Router();

const commentController = require("../controllers/commentController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(commentController.getAllComments)
  .post(authController.protect, commentController.createComment);

router
  .route("/:id")
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

router
  .route("/like")
  .post(authController.protect, commentController.likeComment);

module.exports = router;
