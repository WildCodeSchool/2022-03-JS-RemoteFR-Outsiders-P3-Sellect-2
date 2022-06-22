const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${AuthManager.table} (firstname, lastname, phoneNumber, email, password, role) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.phoneNumber,
        user.email,
        user.password,
        user.role,
      ]
    );
  }

  findByEmail(user) {
    return this.connection
      .query(`SELECT * FROM ${AuthManager.table} WHERE email = ?`, [user.email])
      .then((res) => res[0]);
  }

  findUserDataByEmail(user) {
    return this.connection
      .query(`SELECT * FROM ${AuthManager.table} WHERE email = ?`, [user.email])
      .then((res) => res[0]);
  }

  update(user) {
    return this.connection.query(
      `update ${AuthManager.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = AuthManager;
