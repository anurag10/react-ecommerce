import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Login from './login/login.js';
import ProductCatalogue from './product/product.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn)
  {
    return <Login setIsLoggedIn={setIsLoggedIn}/>
  }
  else
  {
    return (
      <ProductCatalogue />
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //       >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
