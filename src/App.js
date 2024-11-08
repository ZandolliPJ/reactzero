import { useState } from 'react';
import Fruit from "./components/Fruit";
import './App.css';
import FruitForm from './components/FruitForm';


function App() {
  // state(état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);


  // comportements
  const handleDelete = (id) => {
    //1.copie du state
    const fruitsCopy = [...fruits];
    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id)
    //3. actualiser mon state avec setter 
    //setFruits est une fonction qui prends la nouvelle du state
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1.copie du state
    const fruitsCopy = [...fruits];

    //2. manipulation sur la copie du state
    fruitsCopy.push(fruitAAjouter);
    //3. modifier le state avec le setter  
    //setFruits est une fonction qui prends la nouvelle du state
    setFruits(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitNom) => {
    alert(`J'aime trop ce fruit: ${fruitNom}`);
    //template littéral javascript
  };

  // affichage(render)


  return (<div>
    <h1>Liste de fruits</h1>
    <ul>
      {fruits.map((fruit) => (
        <Fruit
          fruitInfo={fruit}
          onClick={() => afficherFruitPrefere(fruit.nom)}
          key={fruit.id}
        />
      ))}
    </ul>
    <FruitForm handleAdd={handleAdd} />
  </div>);
}
export default App;