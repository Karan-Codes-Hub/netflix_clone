import Banner from './Banner'
import './App.css';
import Row from './Row'
import requests from './requests'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      < Nav/>
      <Banner/>  
      <Row
         title="Netflix Orignals" 
         fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow
         />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}isLargeRow/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}isLargeRow/>
      <Row title="Action Movies" fetchUrl={requests.fetchActiionMovies}isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}isLargeRow/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}isLargeRow/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}isLargeRow/>
    </div>
  );
}


export default App;
