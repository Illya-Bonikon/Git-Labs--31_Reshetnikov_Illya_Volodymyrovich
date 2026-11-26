// Перевірка логіна: латинські літери, цифри, крапка і підкреслення, від 3 до 20 символів.
const pattern = /^[a-z0-9._]{3,20}$/i;

function isValidLogin(name) {
  return typeof name === "string" && pattern.test(name);
}

module.exports = { isValidLogin };
