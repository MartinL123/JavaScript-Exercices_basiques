//définir la fonction factorielle et calculer la factorielle du nombre entré par l'utilisateur

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(number);

function factorial(number) {
  if (number == 1 || number == 0) return 1;
  else return factorial(number - 1) * number;
}

let answer = "le résultat est: " + factorial(number);
console.log(answer);
