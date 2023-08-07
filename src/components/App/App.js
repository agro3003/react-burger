import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
/*import { burgersData } from '../../utils/data';*/
import * as api from '../../utils/api';


function App() {
  const [choice, setChoice] = React.useState([]);
  const [countChoice, setCountChoice] = React.useState([]);
  const [burgersData, setBurgersData] = React.useState([]);

  React.useEffect(() => {
    api.getIngredients()
      .then(res => {
        setBurgersData(res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, [])


  React.useEffect(() => {
    console.log(choice)
  }, [, choice])


  function addIngridient(data) {
    setChoice([data, ...choice])
  }

  function countIngridient(data) {
    choice.filter(item => item._id === data._id)
    setCountChoice(...countChoice, data._id)

  }

  return (
    <div className='app'>
      <AppHeader />
      <Main
        burgersData={burgersData}
        choice={choice}
        addIngridient={addIngridient}
      />

    </div>
  );
}

export default App;
