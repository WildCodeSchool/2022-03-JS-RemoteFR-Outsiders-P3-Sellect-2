const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UsersManager.table} (firstname, lastname, phoneNumber, email, password, role) values (?, ?, ?, ?, ?, ?)`,
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
      .query(`SELECT * FROM ${UsersManager.table} WHERE email = ?`, [
        user.email,
      ])
      .then((res) => res[0]);
  }

  findById(user) {
    return this.connection
      .query(`SELECT * FROM ${UsersManager.table} WHERE id = ?`, [user.id])
      .then((res) => res[0]);
  }

  update(user) {
    return this.connection.query(
      `update ${UsersManager.table} set phoneNumber = ?, email = ?, password = ? where id = ?`,
      [user.phoneNumber, user.email, user.password, user.id]
    );
  }
}

module.exports = UsersManager;
