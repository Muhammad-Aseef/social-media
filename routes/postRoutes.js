const router = require("express").Router();

const postController = require("../controllers/postController");
const authController = require("../controllers/authController");

// router.param("id", postController.checkID);

router
  .route("/")
  .get(postController.getAllPosts)
  .post(authController.protect, postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

router.route("/like").post(authController.protect, postController.likePost);

module.exports = router;
