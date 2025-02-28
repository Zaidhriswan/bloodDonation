import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import Faq from './pages/Faq';
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/faq' element={<Faq/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
