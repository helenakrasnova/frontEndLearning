import React from 'react';
import './App.css';
import Autocomplete from './components/autocomplete/Autocomplete';

function App() {
  return (
    <div className="App">
      <Autocomplete />
    </div>
  );
}

export default App;


//на каждый он чендж кнопки мы из всего масива большого получаем новый массив отфильтрованный
//и отображаем через мап