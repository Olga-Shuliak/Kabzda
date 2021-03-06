import React from 'react';
import './App.css';

// function hello() {
//   debugger
//   alert('Hello IT-Kamasutra!')
// }
//
// hello();

function App() {
  //return возвращает 1 элемент (div)
  console.log('App rendering')
  return (
      <div className="App">
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Rating/>
      </div>
  );
}

function AppTitle() {
  console.log('AppTitle rendering')
  return (
      <>This is APP component</>
  );
}

function Rating() {
  console.log('Rating rendering')
  return (
      <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </div>
  );
}

function Star() {
  console.log('Star rendering')
  return (
      <div>
        STAR
      </div>
  );
}

function Accordion() {
  console.log('Accordion rendering')
  return (
      <div>
        <AccordionTitle/>
        <AccordionBody/>
      </div>
  );
}

function AccordionTitle() {
  console.log('AccordionTitle rendering')
  return <h3>Меню</h3>;
}

function AccordionBody() {
  console.log('AccordionBody rendering')
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  );
}

export default App;
