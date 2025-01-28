// Importation des modules Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByAyMq8GZfMUVMKYVCjb-ksZonRDZEn_E",
  authDomain: "mini-crm-6f0ab.firebaseapp.com",
  databaseURL: "https://mini-crm-6f0ab-default-rtdb.firebaseio.com",
  projectId: "mini-crm-6f0ab",
  storageBucket: "mini-crm-6f0ab.appspot.com",
  messagingSenderId: "943772829481",
  appId: "1:943772829481:web:7837ec0cd1fa9bdb235938",
  measurementId: "G-YXVWJE55K3"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Fonction pour ajouter un produit dans la base de données
function ajouterProduit(id, nom, prix) {
  const produitRef = ref(db, 'produits/' + id);
  set(produitRef, {
    nom: nom,
    prix: prix
  }).then(() => {
    alert("Produit ajouté avec succès!");
  }).catch((error) => {
    alert("Erreur: " + error.message);
  });
}

// Ajouter un écouteur d'événements pour soumettre le formulaire
document.getElementById('formProduit').addEventListener('submit', function(event) {
  event.preventDefault();

  const id = document.getElementById('id').value;
  const nom = document.getElementById('nom').value;
  const prix = document.getElementById('prix').value;

  ajouterProduit(id, nom, prix); // Appel de la fonction pour ajouter le produit
});
