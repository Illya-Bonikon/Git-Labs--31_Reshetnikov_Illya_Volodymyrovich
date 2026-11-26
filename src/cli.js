// Командний рядок: node src/cli.js signup|login <логін> <пароль>.
// Кольори дає бібліотека kleur, підключена як git submodule у vendor/kleur.
const kleur = require("../vendor/kleur");
const { signup } = require("./signup");
const { login } = require("./login");

function main([command, name, password]) {
  if (command === "signup") {
    signup(name, password);
    console.log(kleur.green(`Користувача ${name} зареєстровано`));
  } else if (command === "login") {
    // Сховище живе лише в пам'яті, тому для демонстрації реєструю тестового користувача.
    signup("demo", "demo-password");
    const ok = login(name, password);
    console.log(ok ? kleur.green("Вхід виконано") : kleur.red("Невірний логін або пароль"));
  } else {
    console.log(kleur.yellow("Команди: signup, login"));
  }
}

main(process.argv.slice(2));
