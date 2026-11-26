// Вхід: порівнює хеш введеного пароля з тим, що зберігається у сховищі.
const { users, hash } = require("./users");

function login(name, password) {
  return users.get(name) === hash(password);
}

module.exports = { login };
