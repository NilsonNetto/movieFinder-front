import { Button, FlexBox, Text, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "./MovieInfo.scss";

export default function MovieInfo() {
  return (
    <FlexBox className="movie-info-wrapper">
      <FlexBox className="movie-texts">
        <Title>
          Movie title
        </Title>
        <Text>
          todo o que o texto do filme fala
        </Text>
        <Text>
          Actor
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
        <img style={{ width: '100%' }} src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg" alt="Movie Poster" />
      </FlexBox>


    </FlexBox>
  );
}