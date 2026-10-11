import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "AJOUTER":
            return state + action.montant;

        case "RETIRER":
            return state - action.montant;

        case "DOUBLE":
            return state * action.montant;

        case "RESET":
            return 0;

        default:
            return state;
    }
}

function App() {
    const [solde, dispatch] = useReducer(reducer, 100);

    return (
        <div>
            <h1>Solde : {solde} $</h1>

            <button onClick={() => dispatch({ type: "AJOUTER", montant: 20 })}>
                Ajouter 20 $
            </button>

            <button onClick={() => dispatch({ type: "RETIRER", montant: 30 })}>
                Retirer 30 $
            </button>
            <button onClick={() => dispatch({type: "DOUBLE" , montant: 2})}>DOUBLE</button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Réinitialiser
            </button>
        </div>
    );
}

export default App;