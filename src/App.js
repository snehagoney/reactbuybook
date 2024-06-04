import React from 'react';
import BookCard from './components/cards/card';
import Types from "./components/typhography/typhography"
import BasicButtonGroup from "./components/buttons/Buttons"
import Sreach from './components/forms/sreach';
import FormPropsTextFields from "./components/forms/inputsfrms"

function App(){
  return(
    <div>
      <BookCard />
      <Types />
      <BasicButtonGroup />
      <Sreach/>
      <FormPropsTextFields />
    </div>
  )
}


export default App;