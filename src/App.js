import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
