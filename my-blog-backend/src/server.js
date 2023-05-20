import express from "express";
import { db, connectToDb } from "./db.js";

// Instantiate Express App
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/api/articles/:name", async (req, res) => {
  const name = req.params.name;

  // query our database articles collection
  const article = await db.collection("articles").findOne({ name });

  // send article to the frontend client
  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404).send("Article not found");
  }
});

//! Creating blog upvote

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  // logic for updating upvotes in the data query with article name and increment($inc) the upvote property by 1
  await db.collection("articles").updateOne({ name }, { $inc: { upvote: 1 } });

  // Now actually find an article from articles collections
  const article = await db.collection("articles").findOne({ name });

  // finally send a response to the frontend
  if (article) {
    res.send(`This ${article.name} now has ${article.upvote} upvotes`);
  } else {
    res.send("This article does not exist");
  }
});

//! Commment Posting
app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  //
  await db.collection("articles").updateOne({ name }, { $push: { comments: { postedBy, text } } });

  // get this article from articles collections
  const article = await db.collection("articles").findOne({ name });

  // finally send a response to the frontend
  if (article) {
    res.send({ aricle: article.comments });
  } else {
    res.send("This article does not exist");
  }
});

connectToDb(() => {
  console.log("Successfully connected");
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
});
