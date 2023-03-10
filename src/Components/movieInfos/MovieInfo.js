import { Button, FlexBox, Text, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "./MovieInfo.scss";
import { useSelector } from 'react-redux';
import { selectMovieData } from "../../Features/movieSlice";
import { useEffect, useState } from "react";

export default function MovieInfo() {
  const [movieData, setMovieData] = useState({});

  const receivedMovieData = useSelector(selectMovieData);

  useEffect(() => {
    setMovieData(receivedMovieData);
  }, [receivedMovieData]);

  console.log(movieData);


  return (
    !movieData.title ? (
      'tá vazio') : (
      <FlexBox className="movie-info-wrapper">
        <FlexBox className="movie-texts">
          <Title>
            {movieData.title} - ({movieData.year})
          </Title>
          <Text>
            {movieData.director}
          </Text>
          <Text>
            {movieData.plot}
          </Text>
          <Text>
            {movieData.actor}
          </Text>
          <Text>
            Review
          </Text>
          <Button className="favorite-button">
            Favorite
            <ui5-icon className="heart-icon" name="heart-2"></ui5-icon>
          </Button>
        </FlexBox>
        <FlexBox className="movie-poster">
          <img style={{ width: '100%' }} src={movieData.poster} alt="Movie Poster" />
        </FlexBox>
      </FlexBox>
    )
  );
}