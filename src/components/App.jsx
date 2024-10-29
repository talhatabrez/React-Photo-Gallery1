import React from "react";
import list from "../list";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Photo Gallery</h1>
      <Card 
        name ={list[0].author}
        img = {list[0].download_url}/>
      <Card 
        name ={list[1].author}
        img = {list[1].download_url}/>
      <Card 
        name ={list[2].author}
        img = {list[2].download_url}/>
      <Card 
        name ={list[3].author}
        img = {list[3].download_url}/>
      <Card 
        name ={list[4].author}
        img = {list[4].download_url}/>
      <Card 
        name ={list[5].author}
        img = {list[5].download_url}/>
      <Card 
        name ={list[6].author}
        img = {list[6].download_url}/>
    </div>
  );
}

export default App;
