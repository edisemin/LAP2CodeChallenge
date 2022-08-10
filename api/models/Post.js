const db = require("../database/connect");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.name = data.name;
    this.text = data.text;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query("SELECT * FROM post");
        let posts = postData.rows.map((p) => new Post(p));
        resolve(posts);
      } catch (err) {
        console.log(err);
        reject("Unable to connect to the database.");
      }
    });
  }

  static create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(
          `INSERT INTO post (title, name, text) VALUES ($1, $2, $3) RETURNING *;`,
          [data.title, data.name, data.text]
        );
        let post = new Post(postData.rows[0]);
        resolve(post);
      } catch (err) {
        console.log(err);
        reject("Unable to create post.");
      }
    });
  }
}

module.exports = Post;
