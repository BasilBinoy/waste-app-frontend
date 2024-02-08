
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Entry from './components/Entry';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/' element={<Entry/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
