// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState,useEffect} from 'react'
import {data} from './components/data'
import Card from './components/Card'
import { otherdata } from './components/otherdata';
import List from './components/List'
import {listdata} from './components/listdata'
import './components/style.css'



function App() {
  const colSize = 6;
  const textStyle = "text-dark text-center"

  const ProductList = data.map(item => (
    <div>
      <Card id={item.id} name={item.name} url={item.url} text={item.text}/>
    </div>
  ));

  const Product = otherdata.map(item => (
    <div>
      <Card id={item.id} name={item.name} url={item.url} text={item.text}></Card>  
    </div>
  ));

  const Listdata = listdata.map(item =>(
    <div>
      <List id={item.id}/>
    </div>
  ));

  return (
    <div>
      <h1 className={textStyle}>MY BLOG</h1>
      <p className={textStyle}>Welcome to the blog of <span className="unknown">unknown</span></p>
      <div className="container">
        <div className="row">
          <div className={`col-sm-${colSize}`}>{ProductList}</div>
          <div className={`col-sm-${colSize}`}>{Product}{Listdata}</div>
        </div>
      </div>
    </div>
  );
}


export default App;
