const AbstractManager = require("./AbstractManager");

class FilesManager extends AbstractManager {
  static table = "file";

  insert(file) {
    return this.connection.query(
      `INSERT into ${FilesManager.table} (id, userId, name, content, category, sendDate, initialCost) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        file.id,
        file.userId,
        file.name,
        file.content,
        file.category,
        file.sendDate,
        file.initialCost,
      ]
    );
  }

  findByUserId(userId) {
    return this.connection
      .query(`SELECT * FROM ${FilesManager.table} WHERE userId = ?`, [userId])
      .then((res) => res[0]);
  }

  updateContract(file) {
    return this.connection.query(
      `UPDATE ${FilesManager.table} set name = ?, content = ?, newSendDate = ?, newCost = ?, gain = ? where id = ?`,
      [
        file.name,
        file.content,
        file.newSendDate,
        file.newCost,
        file.gain,
        file.id,
      ]
    );
  }

  findGainsByUserId(userId) {
    return this.connection
      .query(`SELECT gain FROM ${FilesManager.table} WHERE userId = ?`, [
        userId,
      ])
      .then((res) => res[0]);
  }

  deleteAll(userId) {
    return this.connection.query(
      `DELETE FROM ${FilesManager.table} WHERE userId = ?`,
      [userId]
    );
  }
}

module.exports = FilesManager;
