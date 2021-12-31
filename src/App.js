import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import Trending from './components/pages/Trending/Trending'
import Movies from './components/pages/Movies/Movies';
import Search from './components/pages/Search/Search';
import Series from './components/pages/Series/Series';

function App() {
  return (

    <BrowserRouter >
    
    <Header />
    
    <div className="app">
   <Container>
    <Routes>
        <Route exact path='/' element={<Trending/>} />
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series'  element={<Series/>}/>
        <Route path='/search'  element={<Search/>}/>
        </Routes>
    </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
    
  );
}

export default App;
