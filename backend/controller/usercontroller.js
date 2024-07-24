const db = require("../db_config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;

  if (!username || !firstname || !lastname || !email || !password) {
    return res
      .status(400)
      .json({ msg: "You have to insert all required fields" });
  }

  try {
    const query =
      "SELECT userid,username  from newuser2 where username=? or email=?";
    const [answer] = await db.execute(query, [username, email]);
    if (answer.length > 0) {
      return res.status(400).json({ msg: answer });
    }
    if (password.length < 8) {
      return res.status(400).json({ msg: "passwordlength lessthan required" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    await db.query(
      "INSERT INTO newuser2(username, firstname, lastname, email, password) VALUES(?, ?, ?, ?, ?)",
      [username, firstname, lastname, email, hashed]
    );

    return res.status(201).json({ msg: "Registration successful" });
  } catch (error) {
    return res.status(500).json({ msg: "Server failed", error: error.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "You have to insert all required fields" });
  }

  try {
    const query =
      "SELECT username, userid, password FROM newuser2 WHERE email= ?";

    const [rows] = await db.execute(query, [email]);

    if (rows.length == 0) {
      return res.status(400).json({ msg: "unknown user" });
    }
    const newuser = await bcrypt.compare(password, rows[0].password);
    if (!newuser) {
      return res.status(400).json({ msg: "incorrect user name or password" });
    }
    const user_name = rows[0].username;
    const user_id = rows[0].userid;
    const token = jwt.sign({ user_name, user_id }, "webifay", {
      expiresIn: "2d",
    });
    return res
      .status(200)
      .json({ msg: "user login successfully", token, user_name });

    //    }
    //   else{
    //    res.status(400).json({msg:"either the password or the user name is not correct"})
    //   }
  } catch (error) {
    res.status(500).json({ inter: error.message });
  }
}

async function checked(req, res) {
  username = req.user.user_name;
  userid = req.user.user_id;

  res.send({ msg: "checked", username, userid });
}

module.exports = { register, login, checked };
