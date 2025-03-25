import React from 'react';
import ToDoList from './pages/ToDoList';
import { GlobalStyle } from './styles/Global.styles';



function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
