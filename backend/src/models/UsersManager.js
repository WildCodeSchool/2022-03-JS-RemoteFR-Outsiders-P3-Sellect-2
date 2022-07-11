const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UsersManager.table} (firstname, lastname, phoneNumber, email, password, sponsorCode, referralCode, role, signupDate) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.phoneNumber,
        user.email,
        user.password,
        user.sponsorCode,
        user.referralCode,
        user.role,
        user.signupDate,
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

  updateInfos(user) {
    return this.connection.query(
      `update ${UsersManager.table} set phoneNumber = ?, email = ? where id = ?`,
      [user.phoneNumber, user.email, user.id]
    );
  }

  updatePassword(user) {
    return this.connection.query(
      `update ${UsersManager.table} set password = ? where id = ?`,
      [user.password, user.id]
    );
  }

  findBySponsorCode(sponsorCode) {
    return this.connection
      .query(
        `SELECT firstname, lastname FROM ${UsersManager.table} WHERE referralCode = ?`,
        [sponsorCode]
      )
      .then((res) => res[0]);
  }
}

module.exports = UsersManager;
