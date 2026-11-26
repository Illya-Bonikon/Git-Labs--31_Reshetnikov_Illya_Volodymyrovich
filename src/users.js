// Сховище облікових записів у пам'яті. Пароль зберігається лише як хеш.
const crypto = require("node:crypto");

const users = new Map();

function hash(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function add(login, password, role = "user") {
  users.set(login, { hash: hash(password), role });
}

module.exports = { users, hash, add };
