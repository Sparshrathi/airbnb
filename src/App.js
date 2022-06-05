import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import {  BrowserRouter,  Routes,  Route,  Link,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
        <Routes>
          <Route path='search' element={<SearchPage/>} />
          <Route path='' element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
