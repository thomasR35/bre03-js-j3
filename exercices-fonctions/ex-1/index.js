displayTab([28, 46, -7, 12]);
displayTab(["Singe", "Papillon", "Chien"]);
displayTab([28, "Singe", 46, -7, "Papillon", 12, "Chien"]);

function displayTab(tab) {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
}
