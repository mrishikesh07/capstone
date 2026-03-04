import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
