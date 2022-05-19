import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ManageInventory from "./Pages/ManageInventory/ManageInventory"



function App() {
  return (
    <div className="App">  
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/manageinventory' element={<ManageInventory/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
