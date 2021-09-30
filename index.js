const db = require("./db/db_handler");

const User = require("./models/user.model");

// User.findById(1);

// const createTable = `
//     CREATE TABLE users (
//         first_name TEXT NOT NULL,
//         last_name TEXT NOT NULL
//     );
// `;

// db.run(createTable, (err) => {
//   if (err) return console.error(err.message);
//   console.log("Created Tables");
// });

// db.run(`INSERT INTO users VALUES(?, ?)`, ["cool", "dudeman"], (error) => {
//   if (error) console.log(error.message);
//   console.log("inserted record");
// });

// db.all("SELECT * FROM users", (error, rows) => {
//   console.log(rows.length);
// });

db.all("SELECT rowid, first_name, last_name FROM users", (error, rows) => {
  console.log(rows.length);
  rows.forEach((row) => {
    console.log(row);
  });
});

db.run(
  `SELECT first_name FROM users WHERE first_name="sam"`,
  function (error, rows) {
    if (error) console.error(error.message);
    console.log(rows);
  }
);

// db.close((err) => {
//   if (err) return console.error(err.message);
//   console.log("disconnected");
// });
