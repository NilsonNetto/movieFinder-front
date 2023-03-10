import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
} from '@ui5/webcomponents-react';
import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MovieInfo from './movieInfos/MovieInfo';
import PageTitle from './pageTitle/PageTitle';
import SearchBar from './searchBar/SearchBar';

function App() {
  return (
    <FlexBox
      className='page-container'
      direction={FlexBoxDirection.Column}
    >
      <Header />
      <FlexBox
        className='main-container'
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <PageTitle />
        <SearchBar />
        <MovieInfo />
      </FlexBox>
      <Footer />
    </FlexBox>
  );
}

export default App;
