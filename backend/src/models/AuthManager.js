const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${AuthManager.table} (firstname, lastname, phone_number, email, password) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.phone_number,
        user.email,
        user.password,
        "role_user",
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${AuthManager.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = AuthManager;
