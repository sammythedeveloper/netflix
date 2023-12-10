import Row from "./Row";
import "./App.css";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row
        title="NETFLIX ORGINAL"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending } />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
    </div>
  );
}

export default App;
