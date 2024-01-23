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
      {
        href: "/comments?userId=<VALUE>",
        rel: "VALUE",
        type: "GET",
      },
      {
        href: "/comments?postId=<VALUE>",
        rel: "VALUE",
        type: "GET",
      },
    ];
    if(req.query.userId){
      const userComments = comments.filter((c) => c.userId === parseInt(req.query.userId))
      res.json({ userComments, links })
    }
    if(req.query.postId){
      const postComments = comments.filter((c) => c.postId === parseInt(req.query.postId))
      res.json({ postComments, links })
    }
    else res.json({ comments, links });
  })
  .post((req, res, next) => {
    if (req.body.userId && req.body.postId && req.body.content) {
      const comment = {
        id: comments[comments.length - 1].id + 1 || 1,
        userId: req.body.userId,
        postId: req.body.postId,
        body: req.body.content,
      };
      comments.push(comment);
      res.json(comments[comments.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

  //Route with id parameter
router
  .route("/:id")
  .get((req, res, next) => {
    const comment = comments.find((c) => c.id === parseInt(req.params.id));

    const links = [
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "PATCH",
      },
      {
        href: `/${req.params.id}`,
        rel: "",
        type: "DELETE",
      },
    ];

    if (comment) res.json({ comment, links });
    else next();
  })
  .patch((req, res, next) => {
    const comment = comments.find((c, i) => {
      if (c.id == parseInt(req.params.id)) {
        for (const key in req.body) {
          comments[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (comment) res.json(comment);
    else next();
  })
  .delete((req, res, next) => {
    const comment = comments.find((c, i) => {
      if (c.id == req.params.id) {
        comments.splice(i, 1);
        return true;
      }
    });

    if (comment) res.json(comment);
    else next();
  });

module.exports = router;
