const db = require("../db_config/db");
async function allquestion(req, res) {
  try {
    const query =
      "SELECT u.username, q.title,q.questionid,q.description  AS question  FROM newuser2 u  INNER JOIN questions q ON u.userid = q.userid order by q.questionid desc";

    const [file] = await db.execute(query);
    if (file.length > 0) {
      return res.status(200).json({ questions: file });
    } else {
      return res.status(400).json({ msg: "noquestions" });
    }
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
}
async function questions(req, res) {
  try {
    const userid = req.user.user_id;
    console.log(userid);
    const question = req.body.title;
    const description = req.body.description;
    const tag = "gtdrdr";
    if (!question || !description) {
      res
        .status(400)
        .json({ msg: "insert the both the title and the question" });
    }
    const query =
      "insert into questions (userid,title,description,tag) values(?,?,?,?)";
    const { value } = db.execute(query, [userid, question, description, tag]);
    return res.status(200).json("succesfully qouestioned");
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
}
module.exports = { allquestion, questions };
