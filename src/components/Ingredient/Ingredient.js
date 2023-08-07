import React from 'react';
import './Ingredient.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function Ingredient({ burger, addIngridient, setChoice, choice }) {
const [count, setCount] = React.useState('');

React.useEffect(() => {
    const arr = choice.filter(item => item._id === burger._id);
    const x = arr.length
    setCount(arr.length);
    console.log(count)
    console.log(arr.length)
    console.log(x)

}, [choice])


const clickItem = () => {
  addIngridient(burger);
}

  return (
    <section className='ml-3 mr-3 ingredient'  onClick={clickItem}>
      <img className='ml-4 mr-4' src={burger.image} alt={'foto'} />
      <div className='mt-1 mb-1 ingredient__price-block'>
        <p className="pr-2 text text_type_digits-medium">{burger.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className='text text_type_main-default'>
        {burger.name}
      </p>
      <aside className={`${count && 'ingredient__count_active'} text ingredient__count text_type_digits-default`}>{count}</aside>

    </section>
  )
}