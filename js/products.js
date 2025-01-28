import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getStorage, ref as storageRef, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Configuration Firebase
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
const storage = getStorage(app);

// Fonction pour récupérer les produits depuis la base de données
async function fetchProducts() {
  const productsRef = ref(db, 'produits');
  try {
    const snapshot = await get(productsRef);
    if (snapshot.exists()) {
      const products = snapshot.val();
      displayProducts(products);
    } else {
      console.log("Aucun produit trouvé.");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des produits : ", error);
  }
}

// Fonction pour afficher les produits sous forme de cartes
async function displayProducts(products) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = ''; // Vider le conteneur avant d'ajouter les nouveaux produits

  for (const id in products) {
    const product = products[id];
    
    // Obtenir l'URL de l'image depuis Firebase Storage
    const imageUrl = await getImageUrl(product.photoUrl);
    
    // Créer une carte pour chaque produit
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${product.nom}" class="product-image">
      <h3 class="product-title">${product.nom}</h3>
      <p class="product-description">${product.description}</p>
      <p class="product-price">${product.prix} €</p>
    `;

    productsContainer.appendChild(productCard);
  }
}

// Fonction pour obtenir l'URL de l'image depuis Firebase Storage
async function getImageUrl(imagePath) {
  const imageRef = storageRef(storage, imagePath);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'URL de l'image : ", error);
    return ""; // Retourner une URL vide en cas d'erreur
  }
}

// Appeler la fonction pour récupérer les produits
fetchProducts();
