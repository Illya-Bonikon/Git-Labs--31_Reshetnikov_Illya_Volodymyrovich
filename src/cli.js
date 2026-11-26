// Командний рядок: node src/cli.js signup|login <логін> <пароль>.
// Кольори дає бібліотека picocolors, підключена як git submodule у vendor/picocolors.
const colors = require("../vendor/picocolors");
const { signup } = require("./signup");
const { login } = require("./login");

function main([command, name, password]) {
  if (command === "signup") {
    signup(name, password);
    console.log(colors.green(`Користувача ${name} зареєстровано`));
  } else if (command === "login") {
    // Сховище живе лише в пам'яті, тому для демонстрації реєструю тестового користувача.
    signup("demo", "demo-password");
    const ok = login(name, password);
    console.log(ok ? colors.green("Вхід виконано") : colors.red("Невірний логін або пароль"));
  } else {
    console.log(colors.yellow("Команди: signup, login"));
  }
}

main(process.argv.slice(2));
