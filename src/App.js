import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/Login/LogIn';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">  
    <Navbar/>
    <Routes>
      <Route path='/' element={<LogIn/>}>
       
      </Route>
    </Routes>
    </div>
  );
}

export default App;
