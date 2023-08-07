import React from 'react';
import './BurgerIngredients.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';

function BurgerIngredients({ burgersData, addIngridient, setChoice, choice }) {
  const [current, setCurrent] = React.useState('one');

  return (
    <section className='burger-ingredients'>
      <h1 className="mb-5 mt-10 text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: 'flex' }} className='mb-10'>
        <a className='burger-ingredients__nav-button' href='#bun'>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a className='burger-ingredients__nav-button' href='#sauce'>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a className='burger-ingredients__nav-button' href='#main'>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>
      <div className='burger-ingredients__scroll-menu'>
        <div className='burger-ingredients__scroll-menu-item' id='bun'>
          <h3 className="text text_type_main-medium">Булки</h3>
          <div className='pb-10 pt-6 pl-1 pr-1 burger-ingredients__scroll-menu-item-content'>
            {
              burgersData.map(item => (item.type === "bun") && <Ingredient key={item._id} burger={item} addIngridient={addIngridient} setChoice={setChoice} choice={choice} />)
            }
          </div>
        </div>
        <div className='burger-ingredients__scroll-menu-item' id='sauce'>
          <h3 className="text text_type_main-medium">Соусы</h3>
          <div className='burger-ingredients__scroll-menu-item-content'>
            {
              burgersData.map(item => (item.type === "sauce") && <Ingredient key={item._id} burger={item} addIngridient={addIngridient} setChoice={setChoice} choice={choice} />)
            }
          </div>
        </div>
        <div className='burger-ingredients__scroll-menu-item' id='main'>
          <h3 className="text text_type_main-medium">Начинки</h3>
          <div className='burger-ingredients__scroll-menu-item-content'>
            {
              burgersData.map(item => (item.type === "main") && <Ingredient key={item._id} burger={item} addIngridient={addIngridient} setChoice={setChoice} choice={choice} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients;