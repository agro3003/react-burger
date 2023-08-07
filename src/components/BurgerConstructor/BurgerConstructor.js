import React from 'react';
import './BurgerConstructor.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor({ choice }) {
  let sum = 0;
  choice.forEach(i => {
    sum += i.price;
  });


  return (
    <section className='mt-25 ml-10 burger-constructor'>


      <div className='ml-4 burger-constructor_ul'>
        {choice.map(item => item.type === 'bun' &&
          <div className='ml-6'>
            <ConstructorElement
              thumbnail={item.image}
              price={item.price}
              text={item.name}
              isLocked='true'
              type='top'
            />
          </div>
        )}
        {
          choice.map(i => i.type !== 'bun' &&
            <div className='mt-4 burger-constructor_not-bun'>
              <DragIcon />
              <ConstructorElement
                thumbnail={i.image}
                price={i.price}
                text={i.name}
              />
            </div>
          )
        }
        {choice.map(item => item.type === 'bun' &&
          < div className='mt-4 ml-6' >
            <ConstructorElement
              thumbnail={item.image}
              price={item.price}
              text={item.name}
              isLocked='true'
              type='bottom' />
          </div>
        )}
      </div>

      <div className='burger-constructor_price-block'>
        <div className='burger-constructor_price-block'>
          <p className="text text_type_digits-medium">
            {sum}
          </p>
          <CurrencyIcon className='burger-constructor_price-block-icon' type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section >
  )
}