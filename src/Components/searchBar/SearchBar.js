import "./searchBar.css";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Button";
import { Button, Input } from "@ui5/webcomponents-react";
import { useState } from "react";
import { getSearch } from "../../Services/api";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  function getMovieTitle() {
    getSearch(inputValue)
      .then(res => {
        console.log(res.data);
        console.log('sucesso');
      })
      .catch(res => {
        console.log(res.data);
        console.log('falha');
      });
  }

  return (

    <div className="search-bar-wrapper" >
      <Input className="search-input" placeholder="Search by film name" value={inputValue} onInput={(e) => setInputValue(e.target.value)}></Input>
      <ui5-button className="button" onClick={() => getMovieTitle()}>Search</ui5-button>
      <Button className="button" onClick={() => setInputValue('')}>Reset</Button>
    </div >
  );
}