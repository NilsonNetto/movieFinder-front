import "./searchBar.scss";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Button";
import { Button, FlexBox, FlexBoxJustifyContent, Input } from "@ui5/webcomponents-react";
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
    <FlexBox
      className="search-bar-wrapper"
      justifyContent={FlexBoxJustifyContent.SpaceBetween}
    >
      <Input className="search-input" placeholder="Search by movie name" value={inputValue} onInput={(e) => setInputValue(e.target.value)}></Input>
      <Button className="search-button" onClick={() => getMovieTitle()}>Search</Button>
      <Button className="search-button" onClick={() => setInputValue('')}>Reset</Button>
    </FlexBox>
  );
}