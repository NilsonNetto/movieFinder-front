import { Button, DynamicSideContent, Text, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "./MovieInfo.scss";

export default function MovieInfo() {
  return (
    <div className="movie-info-wrapper">
      <div className="movie-texts">
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
        <Button>
          Favorite
          <ui5-icon name="heart-2"></ui5-icon>
        </Button>
      </div>
      <div className="movie-poster">
        <DynamicSideContent sideContentVisibility="AlwaysShow">
          poster do filme
        </DynamicSideContent>
      </div>

    </div>
  );
}