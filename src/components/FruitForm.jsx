import { useState } from "react";

export default function FruitForm({ handleAdd }) {
    // state 
    const [nouveauFruit, setnouveauFruit] = useState("")

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const nom = nouveauFruit;
        const fruitAAjouter = { id, nom }
        // fruitsCopy.push(fruitAAjouter);
        handleAdd(fruitAAjouter);
        setnouveauFruit("");
    };
    const handleChange = (event) => {
        setnouveauFruit(event.target.value)
    };

    // affichage(render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input
                value={nouveauFruit}
                type="text"
                placeholder="Ajouter un fruit..."
                onChange={handleChange}
            />
            <button>Ajouter +</button>
        </form>
    );

}
