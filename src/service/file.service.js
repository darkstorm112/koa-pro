const connection = require('../app/database')

class FileService {
  async createAvatar (filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`
    const [result] = await connection.execute(statement, [filename, mimetype, size, userId])
    return result
  }

  async createFile (filename, mimetype, size, userId, momentId) {
    const statement = `INSERT INTO file (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?, ?);`
    const [result] = await connection.execute(statement, [filename, mimetype, size, userId, momentId])
    return result
  }
}

module.exports = new FileService()