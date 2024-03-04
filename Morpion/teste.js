let games = ["", "", "", "", "", "", "", "", ""];
let winning = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
];

let tourDe = "X";
const boxes = document.querySelectorAll('.box');
const resultatText = document.getElementById('resultatText');
const recommencerBtn = document.getElementById('recommencerBtn');

boxes.forEach(function (box) {
    box.addEventListener('click', jouer);
});
// boxes.forEach(toto => toto.addEventListener('click',jouer))

function jouer(event) {
    let eTarget = event.target;
    let indice = Number(eTarget.id);

    if (games[indice] !== "") {
        console.log("Peut pas jouer, case déjà occupée");
    } else {
        console.log("Peut jouer");
        if (tourDe === "X") {
            games[indice] = "X";
            eTarget.innerHTML = "<span class='croix'>X</span>";
        } else {
            games[indice] = "O";
            eTarget.innerHTML = "<span class='rond'>O</span>";
        }

        // Vérifier si la composition a un gagnant
        if (verifierGagnant()) {
            resultatText.textContent = `${tourDe} est le gagnant!`;
            afficherBoutonRecommencer(true);
        } else {
            tourDe = (tourDe === "X") ? "O" : "X"; // Changer de tour
        }

        console.log(games);
    }
}
//  pas de moi...

function verifierGagnant() {
    for (let i = 0; i < winning.length; i++) {
        const [a, b, c] = winning[i];
        if (games[a] && games[a] === games[b] && games[a] === games[c]) {
            return true; // Il y a un gagnant
        }
    }
    return false; // Aucun gagnant pour le moment
}

function recommencer() {
    games = ["", "", "", "", "", "", "", "", ""];
    tourDe = "X";
    resultatText.textContent = "";
    boxes.forEach(box => {
        box.innerHTML = ""; // Effacer le contenu des boîtes
    });
    afficherBoutonRecommencer(false);
}

function afficherBoutonRecommencer(visible) {
    recommencerBtn.style.display = visible ? 'block' : 'none';
}
