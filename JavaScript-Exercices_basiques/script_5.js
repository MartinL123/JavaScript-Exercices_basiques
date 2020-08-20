const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?=============================================

let rented_books = true;
books.forEach((book) => {
  if (book.rented === 0) {
    rented_books = false;
  }
});

if (rented_books == true) {
  console.log("Tous les livres ont été au moins empruntés une fois.");
} else {
  console.log("Tous les livres n'ont pas été emprunté.");
}

//Quel est livre le plus emprunté ?==============================================================================

function max_rented_book(books) {
  let i = 0;
  let max = 0;
  let name = "";

  while (i < books.length) {
    if (books[i].rented > max) {
      max = books[i].rented;
      name = books[i].title;
    }
    i++;
  }
  console.log(
    "Le livre le plus loué à été loué",
    max,
    "fois.",
    "Le titre du livre est:",
    name
  );
}

max_rented_book(books);

//Quel est le livre le moins emprunté ?===========================================================================

function min_rented_book(books) {
  let i = 0;
  let min = books[0].rented;
  let name = books[0].title;

  while (i < books.length) {
    if (books[i].rented < min) {
      min = books[i].rented;
      name = books[i].rented;
    }
    i++;
  }
  console.log(
    "Le livre le moins loué à été loué",
    min,
    "fois.",
    "Le titre du livre est:",
    name
  );
}

min_rented_book(books);

//Trouve le livre avec l'ID: 873495================================================================================

function idCheck(book) {
  return book.id == 873495;
}
let idQuery = books.find(idCheck);
console.log(`Le livre avec l'ID 873495 est ${idQuery.title}`);

//Supprime le livre avec l'ID: 133712==============================================================================

let index = books.findIndex((book) => book.id === 133712);
books.splice(index, 1);
console.log("Le livre avec l'ID 133712 été supprimé.");
console.log(books);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)=========================

function sort_tab(books) {
  return books.sort((a, b) => a.title.localeCompare(b.title));
}
