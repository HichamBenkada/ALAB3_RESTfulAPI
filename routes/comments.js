const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "/comments/:id",
        rel: ":id",
        type: "GET",
      },
    ];
    res.json({ links });
  })
  .post((req, res, next) => {
    if (req.body.userId && req.body.postId && req.body.content) {
      const comment = {
        id: comments[comments.length - 1].id + 1,
        userId: req.body.userId,
        postId: req.body.postId,
        body: req.body.content,
      };
      comments.push(comment);
      res.json(comments[comments.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

router.route("/:id").get((req, res, next) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (comment) res.json({ comment, links });
  else next();
});

module.exports = router;
