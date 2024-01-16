# ALAB 318.3.1: Expanding a RESTful API

Date: 1/13/2024
Github link: [Repository](https://github.com/HichamBenkada/ALAB3_RESTfulAPI.git)

- API Authentification Keys: [perscholas](https://perscholas.org/about-per-scholas/)

## Introduction:

This is a Node.js Express project that expands a REST API Application, [CodeSandbox](https://codesandbox.io/p/sandbox/express-building-a-restful-api-9-hg34yn), that we started during the course lesson.


## Objectives:

- Add additional features to an existing RESTful Express API
- Refactor existing code for efficiency, organization, and/or performance

## Contributions:
#### Part 1: Exploring Existing Routes:
Exploring the existing code thoroughly, gaves a clear idea about its structure and I understood its functionality.

- GET / 
    - GET /api
        - GET /api/users
        - POST /api/users
            - GET /api/users/:id
            - PATCH /api/users/:id
            - DELETE /api/users/:id

        - GET /api/posts
        - POST /api/posts
            - GET /api/posts/:id
            - PATCH /api/posts/:id
            - DELETE /api/posts/:id

#### Part 2: Adding Additional Routes

My objective is to effectively add additional routes and any necessary code effeiciently using good organizational and coding practice to maintain the overall functionality of the RESTful API application.

The routes added:

<!-- Retrieves all posts by a user with the specified id. -->
- GET /api/users/:id/posts : DONE!

 <!-- Retrieves all posts by a user with the specified postId -->
- GET /api/posts?userId=--<VALUE> : DONE!

It is common for APIs to have multiple endpoints that accomplish the same task. This route uses a "userId" query parameter to filter posts, while the one above uses a route parameter.
GET /comments
Note that we do not have any comments data yet; that is okay! Make sure that you create a place to store comments, but you do not need to populate that data.
POST /comments
When creating a new comment object, it should have the following fields:
id: a unique identifier.
userId: the id of the user that created the comment.
postId: the id of the post the comment was made on.
body: the text of the comment.
GET /comments/:id
Retrieves the comment with the specified id.
PATCH /comments/:id
Used to update a comment with the specified id with a new body.
DELETE /comments/:id
Used to delete a comment with the specified id.
GET /comments?userId=<VALUE>
Retrieves comments by the user with the specified userId.
GET /comments?postId=<VALUE>
Retrieves comments made on the post with the specified postId.
GET /posts/:id/comments
Retrieves all comments made on the post with the specified id.
GET /users/:id/comments
Retrieves comments made by the user with the specified id.
GET /posts/:id/comments?userId=<VALUE>
Retrieves all comments made on the post with the specified id by a user with the specified userId.
GET /users/:id/comments?postId=<VALUE>
Retrieves comments made by the user with the specified id on the post with the specified postId.

Upon completion of this poject I am feeling confident building future projects, and ready for any challenging assignments, and assessments.