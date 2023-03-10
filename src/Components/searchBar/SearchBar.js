import "./searchBar.scss";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Button";
import { Button, FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, Input } from "@ui5/webcomponents-react";
import { useState } from "react";
import { getMovie } from "../../Services/api";
import { useDispatch } from 'react-redux';
import { setData } from "../../Features/movieSlice";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  function getMovieTitle() {
    getMovie(inputValue)
      .then(res => {
        dispatch(setData(res.data));
        console.log('sucesso');
      })
      .catch(res => {
        console.log(res.data);
        console.log('falha');
        alert(`Movie doesn't found :(`);
      });
  }

  return (
    <FlexBox
      className="search-bar-wrapper"
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <Input className="search-input" placeholder="Search by movie name" value={inputValue} onInput={(e) => setInputValue(e.target.value)}></Input>
      <Button className="search-button" onClick={() => getMovieTitle()}>Search</Button>
    </FlexBox>
  );
}