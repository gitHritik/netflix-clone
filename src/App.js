import "./App.css";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Row from "./component/Row";
import requests from "./request";

function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Nav />

      <Banner />

      {/* Row components for movies  */}
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
