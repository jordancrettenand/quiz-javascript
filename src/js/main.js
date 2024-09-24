// Quiz: Veuillez répondre aux questions ci-dessous. (50 min) (+15 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. VOus avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE: variable est un conteneur utilisé pour stocker des valeurs.

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Jordan";

// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 18;

// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: <input>
// - Classe(s): class="card-input"
// - Attribut(s):   type="text"
// name="password"
// placeholder="Créer votre mot de passe"

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: classe est un nom qui peut être attribué à plusieurs éléments / ID est un identifiant unique pour un élément dans une page.

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: utilisée pour sélectionner le premier élément du DOM qui correspond à un sélecteur CSS spécifique.

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
const paragraph = document.querySelector("p");

// 7.1 Créez une variable appelée "cardContent".
let cardContent;

// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
let cardContent = document.querySelector("p");

// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
let cardContent;

// 8.1 Utilisez la propriété .classList pour ajouter (.add("...")) la class ".highlight" à l'élément HTML.
let cardContent = document.querySelector("p");

cardContent.classList.add("highlight");

// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder" (.getAttribute("...")) de l'élément HTML <input> (ligne 17 du code HTML).
const inputElement = document.getElementById("myInput");

// Récupérer la valeur de l'attribut "placeholder"
const placeholderValue = inputElement.getAttribute("placeholder");

// Afficher la valeur dans la console
console.log(placeholderValue); // Affichera "Entrez votre nom"
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: une fonction qui "écoute" un événement spécifique se produire sur un élément de la page web, comme un clic de souris.

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  alert("Bouton cliqué !");
});

// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
const button = document.getElementById("card-btn");

// 11.2 : Utilisez la méthode .addEventListener("...", function() {...}) sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
const button = document.getElementById("card-btn");

button.addEventListener("click", function () {
  alert("Le bouton a été cliqué !");
});

// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class ".hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
const button = document.getElementById("card-btn");

const paragraph = document.getElementById("myParagraph");

button.addEventListener("click", function () {
  paragraph.classList.toggle("hide");
});
