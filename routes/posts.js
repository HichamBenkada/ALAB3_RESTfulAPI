const express = require("express");
const router = express.Router();

const posts = require("../data/posts");
const users = require("../routes/users");
const error = require("../utilities/error");

router
  .route("/")
  .get((req, res) => {
    console.log(req.query);
    const links = [
      {
        href: "posts/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    //--------------
    //if the url include a userID query: Retrieves posts by userId.
    //---------------^
    if (req.query.userId) {
      links.push({
        href: "posts?userId=:id",
        rel: ":id",
        type: "GET",
      });
      const userPosts = [];
      posts.forEach((p) => {
        if (p.userId === parseInt(req.query.userId)) {
          userPosts.push(p);
        }
      });
      res.json({ userPosts, links });
    } else res.json({ posts, links });
  })

  .post((req, res, next) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else next(error(400, "Insufficient Data"));
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);

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

    if (post) res.json({ post, links });
    else next();
  })
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  .delete((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });

module.exports = router;
