import './Main.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


function Main({ burgersData, choice, addIngridient, setChoice }) {
  return (
    <main className='main'>
      <BurgerIngredients
        burgersData={burgersData}
        choice={choice}
        addIngridient={addIngridient}
        setChoice={setChoice}
      />
      <BurgerConstructor
        choice={choice}
      />
    </main>
  )
}

export default Main;

