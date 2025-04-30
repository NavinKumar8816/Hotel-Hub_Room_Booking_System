import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './log/Home'
import Login from './log/Login';
import UpdateUser from './log/Update';
import DeleteUser from './log/Delete';
import AddRoom from './pages/addroom';
import RoomList from './pages/RoomList';
import About from './pages/about';
import Profile from './pages/profile';
import OwnerHome from './pages/OwnerHome';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Home />}></Route>
          <Route path="/update" element={<UpdateUser />} ></Route>
          <Route path="/delete-user" element={<DeleteUser />} ></Route>
          <Route path='/ownerhome' element={<OwnerHome />}></Route>
          <Route path='/AddRoom' element={<AddRoom />}></Route>
          <Route path='/RoomList' element={<RoomList />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
