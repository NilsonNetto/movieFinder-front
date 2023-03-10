import { FlexBox, FlexBoxAlignItems, Text, Title, TitleLevel, FlexBoxJustifyContent } from "@ui5/webcomponents-react";
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
    <FlexBox
      className="movie-info-wrapper"
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      {!movieData.title ? (
        <Text
          className="empty-text"
        >
          Search a movie name!
        </Text>
      ) : (
        <FlexBox>
          <FlexBox className="movie-texts">
            <Text>
              <span className="movie-title">{movieData.title}</span> <span className="movie-year">({movieData.year})</span>
            </Text>
            <Text className="movie-plot">
              {movieData.plot}
            </Text>
            <Title
              className="infos-title"
              level={TitleLevel.H3}
            >
              Director
            </Title>
            <Text className="infos-text">
              {movieData.director}
            </Text>
            <Title
              className="infos-title"
              level={TitleLevel.H3}
            >
              Actor
            </Title>
            <Text className="infos-text">
              {movieData.actor}
            </Text>
            <Title
              className="infos-title"
              level={TitleLevel.H3}
            >
              Review - imdb
            </Title>
            <Text className="infos-text">
              {movieData.imbdRating} / 10
            </Text>
          </FlexBox>
          <FlexBox className="movie-poster">
            <img className="poster-image" src={movieData.poster} alt="Movie Poster" />
          </FlexBox>
        </FlexBox>
      )}
    </FlexBox>
  );
}