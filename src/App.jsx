import { useState , useMemo } from "react";

function App() {
  const [prix, setPrix] = useState(100);
  const [quantite, setQuantite] = useState(2);
  const [compteur, setCompteur] = useState(0);

  const total = useMemo(() => {
    console.log("Calcul du total");
    return prix * quantite;
  }, [prix, quantite]); 

  return (
    <div>
      <h2>Commande</h2>

      <p>Prix unitaire : {prix} $</p>
      <p>Quantité : {quantite}</p>
      <p>Total : {total} $</p>

      <button onClick={() => setPrix(prix + 10)}>
        Augmenter le prix
      </button>

      <button onClick={() => setQuantite(quantite + 1)}>
        Ajouter un produit
      </button>

      <button onClick={() => setCompteur(compteur + 1)}>
        Compteur : {compteur}
      </button>
    </div>
  );
}

export default App;