const db = require("../db_config/db");
async function answerall(req, res) {
  try {
    console.log("answerall called");
    console.log("params:", req.params);

    const questionid = req.params.questionid;
    console.log("questionid:", questionid);

    const query =
      "SELECT q.title, q.description, u.username FROM newuser2 u INNER JOIN questions q ON u.userid = q.userid WHERE questionid = ?";
    const [question1] = await db.execute(query, [questionid]);
    console.log("question1:", question1);

    const query2 =
      "SELECT u.username, q.answer FROM newuser2 u INNER JOIN answers q ON u.userid = q.userid where 	questionid=?";
    const [answers] = await db.execute(query2, [questionid]);
    console.log("answers:", answers);

    if (question1.length == 0) {
      return res.status(400).json({ msg: "Question not found" });
    }

    return res.status(200).json({
      question: question1[0],
      answers: answers,
    });
  } catch (error) {
    console.log("error:", error.message);
    return res.status(400).json({ msg: error.message });
  }
}

async function answer(req, res) {
  try {
    const questionid = req.params.questionid;
    const userid =req.user.user_id
    const answer = req.body.answer;
    const query =
      " insert into answers (questionid,userid,answer) values (?,?,?)";
    await db.execute(query, [questionid, userid, answer]);
    res.status(200).json({ msg: "successfully answered" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function allanswers(req, res) {
  try {
    const questionId = req.params.questionid; //
    console.log(questionId);
    const query =
      "SELECT u.username, q.answer FROM newuser2 u INNER JOIN answers q ON u.userid = q.userid where 	questionid=? ORDER BY q.answerid DESC";
    const [singleQuestionAnswers] = await db.execute(query, [questionId]);

    return res.json({
      answer: singleQuestionAnswers,
    });
  } catch (error) {
    return res.status(600).json({ msg: error.message });
  }
}
module.exports = { answerall, answer, allanswers };
