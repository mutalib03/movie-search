import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchComponent from './component/search-component';

class App extends React.Component {
 
  render(){
   return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchComponent/>
    </div>
  );
  }
  
}  

export default App;
