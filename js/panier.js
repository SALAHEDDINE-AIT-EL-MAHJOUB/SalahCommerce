// Fonction pour afficher les produits du panier
function afficherPanier() {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const produitsPanierDiv = document.getElementById("produitsPanier");
    let total = 0;

    // Effacer le contenu précédent
    produitsPanierDiv.innerHTML = "";

    if (panier.length === 0) {
        produitsPanierDiv.innerHTML = "<p>Votre panier est vide.</p>";
        return;
    }

    // Parcourir les produits dans le panier
    panier.forEach((produit) => {
        const produitDiv = document.createElement("div");
        produitDiv.classList.add("produit");

        // Calculer le prix total pour ce produit
        const prixTotalProduit = produit.prix * produit.quantite;
        total += prixTotalProduit;

        // Créer le HTML pour chaque produit
        produitDiv.innerHTML = `
            <img src="${produit.photoUrl}" alt="${produit.nom}" class="produit-img">
            <div class="produit-details">
                <h3>${produit.nom}</h3>
                <p>Prix unitaire : ${produit.prix} €</p>
                <p>Quantité actuelle : <span id="quantite-${produit.id}">${produit.quantite}</span></p>
                <div class="quantite-controls" id="controls-${produit.id}">
                    <button onclick="modifierQuantite('${produit.id}', -1)">-</button>
                    <button onclick="modifierQuantite('${produit.id}', 1)">+</button>
                </div>
                <button class="btn-modifier" id="modifier-${produit.id}" onclick="activerModification('${produit.id}')">Modifier</button>
                <button class="btn-terminer" id="terminer-${produit.id}" style="display: none;" onclick="confirmerModification('${produit.id}')">Terminer</button>
                <button class="btn-remove" onclick="retirerDuPanier('${produit.id}')">Retirer</button>
            </div>
        `;

        produitsPanierDiv.appendChild(produitDiv);
    });

    // Mettre à jour le total
    document.getElementById("totalPrice").textContent = total.toFixed(2);
}

// Fonction pour activer les contrôles de modification pour un produit spécifique
function activerModification(id) {
    const controls = document.getElementById(`controls-${id}`);
    const boutonModifier = document.getElementById(`modifier-${id}`);
    const boutonTerminer = document.getElementById(`terminer-${id}`);

    controls.classList.add('active'); // Activer les contrôles
    boutonModifier.style.display = 'none'; // Masquer "Modifier"
    boutonTerminer.style.display = 'inline-block'; // Afficher "Terminer"
}

// Fonction pour confirmer les modifications pour un produit spécifique
function confirmerModification(id) {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const produitIndex = panier.findIndex((produit) => produit.id === id);

    if (produitIndex !== -1) {
        const quantiteActuelle = document.getElementById(`quantite-${id}`).textContent;
        panier[produitIndex].quantite = parseInt(quantiteActuelle); // Appliquer la nouvelle quantité

        // Enregistrer le panier modifié dans localStorage
        localStorage.setItem("panier", JSON.stringify(panier));
    }

    // Désactiver les contrôles et réinitialiser les boutons
    const controls = document.getElementById(`controls-${id}`);
    const boutonModifier = document.getElementById(`modifier-${id}`);
    const boutonTerminer = document.getElementById(`terminer-${id}`);

    controls.classList.remove('active'); // Désactiver les contrôles
    boutonModifier.style.display = 'inline-block'; // Réafficher "Modifier"
    boutonTerminer.style.display = 'none'; // Masquer "Terminer"

    afficherPanier(); // Rafraîchir l'affichage
}

// Fonction pour modifier la quantité temporairement
function modifierQuantite(id, delta) {
    const quantiteElement = document.getElementById(`quantite-${id}`);
    let quantiteActuelle = parseInt(quantiteElement.textContent);

    // Calculer la nouvelle quantité
    const nouvelleQuantite = quantiteActuelle + delta;

    // Ne pas permettre de descendre en dessous de 1
    if (nouvelleQuantite < 1) return;

    // Mettre à jour la quantité affichée
    quantiteElement.textContent = nouvelleQuantite;
}

// Fonction pour retirer un produit du panier
function retirerDuPanier(id) {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    // Filtrer pour supprimer le produit avec l'ID donné
    panier = panier.filter((produit) => produit.id !== id);

    // Enregistrer le nouveau panier dans localStorage
    localStorage.setItem("panier", JSON.stringify(panier));

    // Rafraîchir l'affichage du panier
    afficherPanier();
}

// Appeler la fonction au chargement de la page
window.onload = function () {
    afficherPanier();
};