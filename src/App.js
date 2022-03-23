import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import FossilList from './pages/FossilList/FossilList';

function App() {
  return (
    <>
      <h1>Sanity Check</h1>
      <a href='/fossils'>To the fossils!</a>
      <Routes>
        <Route path='/fossils' element={<FossilList />} />
      </Routes>
    </>
    
  );
}

export default App;
