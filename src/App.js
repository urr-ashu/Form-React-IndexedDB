import React from 'react';
import logo from './logo.svg';
import MyForm from './components/Form';
import DetailPage from './components/DetailPage';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path ="/" component={MyForm} />
      <Route exact path = "/details/:id" component={DetailPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
