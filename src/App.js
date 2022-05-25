
import './App.css';
import BlogPage from './compornents/BlogPage';
import Header from './compornents/Header';
import HomePage from './compornents/HomePage';
import GamePage from './compornents/GamePage';
import Footer from './compornents/Footer';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import "animate.css";



function App() {
  
  return (
    <Router>
    <Header/>   
<Routes>
  
  <Route path="/" element={ <HomePage/>}/>
  <Route path="/Blog" element={ <BlogPage/>}/>
  <Route path="/Game" element={ <GamePage/>}/>
  
</Routes>
    
<Footer/>
 
  </Router>
  

  
  );
}

export default App;
