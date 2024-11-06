var fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// Nomer 1
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i].fruitName);
}

// Nomer 2

let wadahImport = [];
let wadahLocal = [];

for (var i = 0; i < fruits.length; i++) {
  if (fruits[i].fruitType === "IMPORT") {
    wadahImport.push(fruits[i].fruitName);
  } else {
    wadahLocal.push(fruits[i].fruitName);
  }
}

// Nomer 3

var jumlahBuahImport = 0;
var jumlahBuahLocal = 0;

for (var i = 0; i < fruits.length; i++) {
  if (fruits[i].fruitType === "IMPORT") {
    jumlahBuahImport += fruits[i].stock;
  } else {
    jumlahBuahLocal += fruits[i].stock;
  }
}

console.log("Jumlah buah import: ", jumlahBuahImport);
console.log("Jumlah buah local: ", jumlahBuahLocal);

// Tidak ada komentar di nomer 4
