let number = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?",
  1
);
number = Number(number);

function pyramide(number) {
  let answer = "";
  let i = 1;
  let j = 0;

  while (i <= number) {
    j = 0;
    while (j < number) {
      if (j < number - i) answer += " ";
      else answer += "#";
      j++;
    }
    answer += "\n";
    i++;
  }
  return answer;
}

let answer = pyramide(number);
console.log(answer);
