
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Entry from './components/Entry';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/' element={<Entry/>}/>
      <Route path='/view' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
