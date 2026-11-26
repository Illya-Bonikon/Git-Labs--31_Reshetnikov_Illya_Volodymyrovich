// Реєстрація: перевіряє довжину пароля і зайнятість логіна.
const users = require("./users");

function signup(name, password) {
  if (password.length < 8) throw new Error("Пароль має містити щонайменше 8 символів");
  if (users.users.has(name)) throw new Error(`Логін ${name} уже зайнятий`);
  users.add(name, password);
}

module.exports = { signup };
