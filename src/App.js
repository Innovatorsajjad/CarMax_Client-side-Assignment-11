import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ManageItem from './Pages/ManageItem/ManageItem';
import 'react-toastify/dist/ReactToastify.css';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Help from './Pages/Help/Help';
import ContactUs from './Pages/ContactUs/ContactUs';



function App() {
  return (
    <div>  
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/manage' element={<ManageItem/>}></Route>
      <Route path='/additems' element={<AddItem></AddItem>}></Route>
      <Route path='/myitems' element={<MyItems></MyItems>}></Route>
      <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/help' element={<Help></Help>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
    </Routes>
    <ToastContainer></ToastContainer>
    
    </div>
  );
}

export default App;
