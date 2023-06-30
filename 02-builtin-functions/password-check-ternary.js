const password = "12345aaaaaa";
const minLength = 6;

// check if password is long enough ???

// if else is typically used
// if the INPUT from the user is CORRECT or INCORRECT
// with if else we can give user DIFFERENT FEEDBACK depending on input

console.log(
  password.length >= minLength
    ? "Dein Passwort hat genau die richtige Länge! Glückwunsch!"
    : "Loser! Was denkst du, dass hier jeder leicht reinkommt? Du nicht!"
);

// ternary is often used if we have simple YES NO decisions / feedbacks
