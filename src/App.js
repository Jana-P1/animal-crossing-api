import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VillagerList/VillagerList';

function App() {
  return (
    <>
      <h1>Animal Crossing</h1>
      <div className='links'>
        <a href='/fossils'>To the fossils!</a>
        <a href='/villagers'>To the villagers!</a>
      </div>
      <Routes>
        <Route path='/fossils' element={<FossilList />} />
        <Route path='/villagers' element={<VillagerList />} />
      </Routes>
    </>
    
  );
}

export default App;
