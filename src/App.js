import "./App.scss";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import request from "./config/request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={request.fetchTrending}
        isPoster={true}
      />
      <Row title="Tendances actuelles" fetchUrl={request.fetchTopRated} />
      <Row title="Action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comédies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horreur" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romances" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={request.fetchDocumentaries} />

      {/* rows */}
      {/* video */}
      {/* quick view */}
      <Footer />
    </div>
  );
}

export default App;
