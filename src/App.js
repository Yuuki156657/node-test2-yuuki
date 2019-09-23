import React from 'react';
import './app.css';

import { Link, Route, BrowserRouter } from 'react-router-dom';
// import { Route, BrowserRouter } from 'react-router-dom';


import ProductList from './components/product/index';
import AddProduct from './components/product/add';
import EditProduct from './components/product/edit';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div className="app">
          {/* <h3>CRUD with Redux</h3> */}
          {/* <Link to="/index">Home</Link> | */}
          <Link to="/Add" className="plus">+</Link>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/index" exact component={ProductList}></Route>
          <Route path="/add" exact component={AddProduct}></Route>
          <Route path="/edit/:id" exact component={EditProduct}></Route>
          <br/><br/>
          



        </div>
      </BrowserRouter>
    );
  }
}

export default App;
