const AbstractManager = require("./AbstractManager");

class FilesManager extends AbstractManager {
  static table = "file";

  insert(file) {
    return this.connection.query(
      `insert into ${FilesManager.table} (id, userId, name, content, category, sendDate) values (?, ?, ?, ?, ?, ?)`,
      [
        file.id,
        file.userId,
        file.name,
        file.content,
        file.category,
        file.sendDate,
      ]
    );
  }

  findByUserId(file) {
    return this.connection
      .query(`SELECT * FROM ${FilesManager.table} WHERE userId = ?`, [
        file.userId,
      ])
      .then((res) => res[0]);
  }

  update(file) {
    return this.connection.query(
      `update ${FilesManager.table} set title = ? where id = ?`,
      [file.title, file.id]
    );
  }
}

module.exports = FilesManager;
