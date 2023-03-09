import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  ShellBar
} from '@ui5/webcomponents-react';
import './App.css';
import MovieInfo from './Components/movieInfos/MovieInfo';
import PageTitle from './Components/pageTitle/PageTitle';
import SearchBar from './Components/searchBar/SearchBar';

function App() {
  return (
    <>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <PageTitle />
        <SearchBar />
        <MovieInfo />
      </FlexBox>
    </>
  );
}

export default App;
