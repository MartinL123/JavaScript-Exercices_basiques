const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

var first_name_and_last_name = [];

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70===================================

function seventy(boss) {
  let i = 0;
  let tab = [];

  console.log("Les entrepreneurs nés dans les annees 70 sont: ");
  while (i < boss.length) {
    Object.entries(boss[i]).forEach(function ([key, value]) {
      if (key == "year" && value <= 1979 && value >= 1970) {
        console.log(boss[i].first, " ", boss[i].last);
        tab.push(boss[i].first + " " + boss[i].last);
      }
    });
    i++;
  }

  return tab;
}

seventy(entrepreneurs);

//Sors une array qui contient le prénom et le nom des entrepreneurs============================================

function first_name_and_last_name_in_array(boss) {
  let m = 0;

  while (m < boss.lenght) {
    first_name_and_last_name.push(boss[m].first + " " + boss[i].last);
    m++;
  }
}

first_name_and_last_name_in_array(entrepreneurs);

//Quel âge aurait chaque inventeur aujourd'hui ?===============================================================

function age_of_boss_today(boss) {
  let m = 0;

  while (m < boss.length) {
    console.log(
      "Aujourd'hui",
      boss[m].first,
      boss[m].last,
      "as",
      2020 - boss[m].year,
      "ans"
    );
    m++;
  }
}

age_of_boss_today(entrepreneurs);

//Trie les entrepreneurs par ordre alphabétique du nom de famille.=============================================

function sort_tab(entrepreneurs) {
  return entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
}

console.log(first_name_and_last_name);
console.log(
  "voici la liste des entrepreneurs dans l'ordre alphabetique\n",
  sort_tab(entrepreneurs)
);
