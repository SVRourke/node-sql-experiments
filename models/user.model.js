const db = require("../db/db_handler");

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static findById(id) {
    db.run(
      `SELECT * 
            FROM users
            WHERE (id=${id})`,
      (err, rows) => {
        if (err) return err.message;
        console.log(rows);
        return rows;
      }
    );
  }
}

module.exports = User;
