import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import './styles.css'
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>
      <div>
        <MoviesGrid />
      </div>
        <Footer />
    </div>
  );
}

export default App;
